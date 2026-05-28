const MANIFEST_URL = 'https://forge.tylerdev.io/forge/pr-1145/blocks/manifest.json';
const BLOCKS_BASE_URL = 'https://forge.tylerdev.io/forge/pr-1145/blocks/src/blocks';

function formatCategoryLabel(category) {
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getBlockSlug(id) {
  // Convert "blocks/category/name/name" to "category/name"
  const parts = id.split('/');
  if (parts.length >= 3) {
    return `${parts[1]}/${parts[2]}`;
  }
  return id;
}

function getCategoryFromId(id) {
  const parts = id.split('/');
  return parts.length > 1 ? parts[1] : 'other';
}

module.exports = function pluginBlocks(context, options) {
  return {
    name: 'docusaurus-plugin-blocks',

    async loadContent() {
      try {
        const response = await fetch(MANIFEST_URL);
        if (!response.ok) {
          throw new Error(`Failed to fetch manifest: ${response.status}`);
        }
        const manifest = await response.json();
        return manifest;
      } catch (error) {
        console.error('Error fetching blocks manifest:', error);
        return { blocks: [], categories: [] };
      }
    },

    async contentLoaded({ content, actions }) {
      const { createData, addRoute } = actions;
      const { blocks, categories } = content;

      if (!blocks || blocks.length === 0) {
        console.warn('No blocks found in manifest');
        return;
      }

      // Create a JSON file with all blocks data for the BlockPage component
      const blocksDataPath = await createData(
        'blocks.json',
        JSON.stringify({ blocks, categories, baseUrl: BLOCKS_BASE_URL })
      );

      // Group blocks by category
      const blocksByCategory = {};
      blocks.forEach(block => {
        const category = getCategoryFromId(block.id);
        if (!blocksByCategory[category]) {
          blocksByCategory[category] = [];
        }
        blocksByCategory[category].push(block);
      });

      // Create routes for each block
      for (const block of blocks) {
        const slug = getBlockSlug(block.id);
        const blockDataPath = await createData(
          `block-${slug.replace('/', '-')}.json`,
          JSON.stringify({
            ...block,
            baseUrl: BLOCKS_BASE_URL,
            iframeUrl: `${BLOCKS_BASE_URL}/${block.file}`
          })
        );

        addRoute({
          path: `/blocks/${slug}`,
          component: '@site/src/components/block-page/BlockPage.tsx',
          modules: {
            blockData: blockDataPath,
          },
          exact: true,
        });
      }

      // Create sidebar items data for the blocks sidebar
      const sidebarItems = categories
        .map(cat => {
          const categoryBlocks = blocksByCategory[cat.name] || [];
          if (categoryBlocks.length === 0) return null;

          return {
            type: 'category',
            label: formatCategoryLabel(cat.name),
            items: categoryBlocks.map(block => ({
              type: 'link',
              label: block.name,
              href: `/blocks/${getBlockSlug(block.id)}`,
              customProps: {
                shortDescription: block.description,
              },
            })),
          };
        })
        .filter(Boolean);

      await createData(
        'blocks-sidebar.json',
        JSON.stringify(sidebarItems)
      );
    },
  };
};

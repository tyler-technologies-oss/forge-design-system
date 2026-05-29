/**
 * Docusaurus Plugin: Blocks
 *
 * Generates pages for Forge UI blocks by fetching a manifest at build time.
 * Each block gets its own route at /blocks/{category}/{block-name} with an iframe preview.
 */

import type { LoadContext, Plugin } from '@docusaurus/types';

const MANIFEST_URL = 'https://forge.tylerdev.io/forge/pr-1145/blocks/manifest.json';
const BLOCKS_BASE_URL = 'https://forge.tylerdev.io/forge/pr-1145/blocks';

interface Block {
  id: string;
  name: string;
  description: string;
  tags: string[];
  file: string;
  category: string;
}

interface Category {
  name: string;
}

interface Manifest {
  blocks: Block[];
  categories: Category[];
}

interface BlockData extends Block {
  baseUrl: string;
  iframeUrl: string;
}

interface SidebarItem {
  type: 'category' | 'link';
  label: string;
  items?: SidebarLinkItem[];
  href?: string;
  customProps?: Record<string, unknown>;
}

interface SidebarLinkItem {
  type: 'link';
  label: string;
  href: string;
  customProps: {
    shortDescription: string;
  };
}

/** Extracts URL slug from block ID: "blocks/cards/user-profile/user-profile" → "cards/user-profile" */
function getBlockSlug(id: string): string {
  const parts = id.split('/');
  if (parts.length >= 3) {
    return `${parts[1]}/${parts[2]}`;
  }
  return id;
}

export default function pluginBlocks(_context: LoadContext): Plugin<Manifest> {
  return {
    name: 'docusaurus-plugin-blocks',

    /** Fetches the blocks manifest from the CDN at build time */
    async loadContent(): Promise<Manifest> {
      try {
        const response = await fetch(MANIFEST_URL);
        if (!response.ok) {
          throw new Error(`Failed to fetch manifest: ${response.status}`);
        }
        const manifest: Manifest = await response.json();
        return manifest;
      } catch (error) {
        console.error('Error fetching blocks manifest:', error);
        return { blocks: [], categories: [] };
      }
    },

    /** Creates a route and JSON data file for each block */
    async contentLoaded({ content, actions }): Promise<void> {
      const { createData, addRoute } = actions;
      const { blocks, categories } = content;

      if (!blocks || blocks.length === 0) {
        console.warn('No blocks found in manifest');
        return;
      }

      const blocksByCategory: Record<string, Block[]> = {};
      blocks.forEach(block => {
        if (!blocksByCategory[block.category]) {
          blocksByCategory[block.category] = [];
        }
        blocksByCategory[block.category].push(block);
      });

      for (const block of blocks) {
        const slug = getBlockSlug(block.id);
        const blockData: BlockData = {
          ...block,
          baseUrl: BLOCKS_BASE_URL,
          iframeUrl: `${BLOCKS_BASE_URL}/${block.file}`
        };
        const blockDataPath = await createData(
          `block-${slug.replace('/', '-')}.json`,
          JSON.stringify(blockData)
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

      // Sidebar data for potential future use
      const sidebarItems: SidebarItem[] = categories
        .map((cat): SidebarItem | null => {
          const categoryBlocks = blocksByCategory[cat.name] || [];
          if (categoryBlocks.length === 0) return null;

          return {
            type: 'category',
            label: cat.name,
            items: categoryBlocks.map((block): SidebarLinkItem => ({
              type: 'link',
              label: block.name,
              href: `/blocks/${getBlockSlug(block.id)}`,
              customProps: {
                shortDescription: block.description,
              },
            })),
          };
        })
        .filter((item): item is SidebarItem => item !== null);

      await createData(
        'blocks-sidebar.json',
        JSON.stringify(sidebarItems)
      );
    },
  };
}

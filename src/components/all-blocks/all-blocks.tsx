import React, { SyntheticEvent, useState, useEffect } from 'react';
import { clsx } from 'clsx';
import Link from '@docusaurus/Link';
import styles from './all-blocks.module.css';
import InputField from '../controls/text-input/text-input';

const MANIFEST_URL = 'https://forge.tylerdev.io/forge/pr-1145/blocks/manifest.json';
const BLOCKS_BASE_URL = 'https://forge.tylerdev.io/forge/pr-1145/blocks/src/blocks';
const MAX_DESC_CHAR_COUNT = 135;

interface Block {
  id: string;
  name: string;
  description: string;
  tags: string[];
  file: string;
  screenshot: string;
}

interface Category {
  name: string;
}

interface Manifest {
  blocks: Block[];
  categories: Category[];
  generatedAt: string;
}

interface GroupedBlocks {
  label: string;
  items: Block[];
}

function getBlockPath(id: string): string {
  // Convert "blocks/category/name/name" to "/blocks/category/name"
  const parts = id.split('/');
  if (parts.length >= 3) {
    return `/${parts[0]}/${parts[1]}/${parts[2]}`;
  }
  return `/${id}`;
}

function BlockCard({ block }: { block: Block }): JSX.Element {
  let description = block.description || ' ';
  if (description.length > MAX_DESC_CHAR_COUNT) {
    description = description.substring(0, MAX_DESC_CHAR_COUNT - 2) + '...';
  }

  const blockPath = getBlockPath(block.id);
  const screenshotUrl = `${BLOCKS_BASE_URL}/${block.screenshot}`;

  return (
    <Link to={blockPath} className={styles.itemAnchor}>
      <div className={clsx('card', 'card--outlined', styles.blockCard)}>
        <div className={styles.thumbnailContainer}>
          <img src={screenshotUrl} alt={`${block.name} preview`} className={styles.thumbnail} loading="lazy" />
        </div>
        <div className={styles.cardContent}>
          <div className={clsx(styles.headerText)}>{block.name}</div>
          <div className={clsx(styles.descriptionContainer)}>
            <div className={clsx(styles.descriptionContainerText)}>{description}</div>
          </div>
          {block.tags.length > 0 && (
            <div className={styles.tagsContainer}>
              {block.tags.slice(0, 3).map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

function formatCategoryLabel(category: string): string {
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getCategoryFromId(id: string): string {
  const parts = id.split('/');
  return parts.length > 1 ? parts[1] : 'other';
}

function groupBlocksByCategory(blocks: Block[], categories: Category[]): GroupedBlocks[] {
  const categoryOrder = categories.map(c => c.name);
  const grouped: Record<string, Block[]> = {};

  blocks.forEach(block => {
    const category = getCategoryFromId(block.id);
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(block);
  });

  return categoryOrder
    .filter(category => grouped[category]?.length > 0)
    .map(category => ({
      label: formatCategoryLabel(category),
      items: grouped[category]
    }));
}

function filterGroups(groups: GroupedBlocks[], filterText: string): GroupedBlocks[] {
  const lowerFilter = filterText.toLowerCase();
  return groups
    .map(group => ({
      ...group,
      items: group.items.filter(block =>
        block.name.toLowerCase().includes(lowerFilter) ||
        block.tags.some(tag => tag.toLowerCase().includes(lowerFilter))
      )
    }))
    .filter(group => group.items.length > 0);
}

export default function AllBlocks(): JSX.Element {
  const [filterText, setFilterText] = useState('');
  const [manifest, setManifest] = useState<Manifest | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(MANIFEST_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch blocks manifest');
        }
        return response.json();
      })
      .then((data: Manifest) => {
        setManifest(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  function handleInput(evt: SyntheticEvent): void {
    setFilterText((evt.nativeEvent.target as HTMLInputElement).value);
  }

  if (loading) {
    return <div className={styles.loading}>Loading blocks...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error loading blocks: {error}</div>;
  }

  if (!manifest) {
    return <div className={styles.empty}>No blocks data available.</div>;
  }

  const groups = groupBlocksByCategory(manifest.blocks, manifest.categories);
  const filteredGroups = filterText.trim().length ? filterGroups(groups, filterText) : groups;

  return (
    <>
      <InputField onInput={handleInput} placeholder="Filter by name or tag..." />
      {filteredGroups.map(({ label, items }, index) => (
        <div key={`${label}-${index}`} className={clsx(styles.group)}>
          <h2>{label}</h2>
          <div className={clsx(styles.gridContainer)}>
            {items.map(block => (
              <BlockCard key={block.id} block={block} />
            ))}
          </div>
        </div>
      ))}
      {!filteredGroups.length && <div className={styles.empty}>No blocks found.</div>}
    </>
  );
}

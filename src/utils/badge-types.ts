const BADGE_TYPES = {
  recipe: { label: 'Recipe', shortLabel: 'R', tooltip: 'This is a component recipe', className: 'badge--primary' },
  new: { label: 'New', shortLabel: 'N', tooltip: 'This is a newly added component', className: 'badge--success' },
  deprecated: { label: 'Deprecated', shortLabel: 'D', tooltip: 'This component is deprecated and will be removed in a future version', className: 'badge--warning' },
  beta: { label: 'Beta', shortLabel: 'B', tooltip: 'This feature is in beta', className: 'badge--secondary' },
  experimental: { label: 'Experimental', shortLabel: 'E', tooltip: 'This feature is experimental', className: 'badge--secondary' },
};

export default BADGE_TYPES;

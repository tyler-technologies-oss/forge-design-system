import React from 'react';

const Content = ({ heading, description, indent = false }) => {
  return (
    <>
      <div style={{display: 'inline-flex', gap: '8px', alignItems: 'center', marginTop: '4px', cursor: 'pointer'}}>
        <label style={{margin: '8px 0', display: 'block'}}>
          <input type="checkbox" onClickCapture={evt => evt.nativeEvent.stopImmediatePropagation()} style={{marginRight: '8px'}} />
          <span style={{fontWeight: 'bold'}}>{heading}</span>
        </label>
      </div>
      {description && <div style={{whiteSpace: 'normal', margin: '8px 0'}}>{description}</div>}
    </>
  );
};

const DetailsContent = ({ heading, description, children }) => {
  return (
    <details style={{padding: '0 8px', marginBottom: '16px'}}>
      <summary onClickCapture={evt => evt.nativeEvent.stopImmediatePropagation()}>
        <Content heading={heading} description={description} />
      </summary>
      {children && <div className="card card--outlined" style={{padding: '16px', marginLeft: '16px'}}>{children}</div>}
    </details>
  )
};

const CheckboxListItem = ({ heading, description, children }) => {
  return (
    <div style={{marginBottom: '8px', borderBottom: '1px solid var(--forge-theme-border)'}}>
      {children ?
        <DetailsContent heading={heading} description={description}>{children}</DetailsContent> :
        <Content heading={heading} description={description} />}
    </div>
  )
};
export default CheckboxListItem;

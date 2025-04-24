import React from 'react';
import styles from './play-help.module.css';

const PlayHelp = () => (
  <div className={styles.container}>
    <h2>Need help?</h2>
    <p>Reach out to the Forge team for help with this activity! From answering questions to running the play for you, we're here to help.</p>
    <a href="https://tylerjira.tylertech.com/servicedesk/customer/portal/21/create/609" target="_blank" rel="noopener noreferrer">
      <button type="button" className="button button--primary">Request UX Consulting</button>
    </a>
  </div>
);

export default PlayHelp;
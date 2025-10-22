import React, { useState } from 'react';

export const Tabs = ({ activeTabId }) => {
  const [tab, settab] = useState('');

  if (activeTabId === '') {
    settab(1);
  }

  return <h1>Selected tab is tab {tab}</h1>;
};

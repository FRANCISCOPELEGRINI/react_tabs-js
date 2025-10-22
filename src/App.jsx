import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabSelection = tabId => {
    setActiveTab(tabId);
  };

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTab}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            <li
              className={activeTab === 1 ? 'is-active' : ''}
              data-cy="Tab"
              onClick={() => handleTabSelection(1)}
            >
              <a href="#tab-id" data-cy="TabLink">
                Tab 1
              </a>
            </li>

            <li
              data-cy="Tab"
              className={activeTab === 2 ? 'is-active' : ''}
              onClick={() => handleTabSelection(2)}
            >
              <a href="#tab-id" data-cy="TabLink">
                Tab 2
              </a>
            </li>

            <li
              data-cy="Tab"
              className={activeTab === 3 ? 'is-active' : ''}
              onClick={() => handleTabSelection(3)}
            >
              <a href="#tab-id" data-cy="TabLink">
                Tab 3
              </a>
            </li>
          </ul>
        </div>

        <Tabs activeTabId={activeTab} tabs={tabs} />
      </div>
    </div>
  );
};

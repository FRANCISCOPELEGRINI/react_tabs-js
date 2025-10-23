import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTabContent = tabs.find(tab => tab.id === activeTabId);

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === activeTabId ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
                  onTabSelected(tab.id);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="box">
        {activeTabContent
          ? activeTabContent.content
          : 'Selecione uma aba para ver o conteúdo.'}
      </div>
    </div>
  );
};

/*
export const Tabs = ({ activeTabId }) => {
  return <h1>Selected tab is tab {activeTabId}</h1>;
};
*/

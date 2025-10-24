export const Tabs = ({ tabs, activeTabId, setActiveTab }) => {
  const handleTabSelection = tabId => {
    setActiveTab(tabId);
  };

  return (
    <ul>
      {tabs.map(tab => (
        <li className={activeTabId === tab.id ? 'is-active' : ''} data-cy="Tab">
          <a
            href="#tab-id"
            data-cy="TabLink"
            onClick={() => handleTabSelection(tab.id)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
/*
<li className={activeTabId === 1 ? 'is-active' : ''} data-cy="Tab">
        <a
          href="#tab-id"
          data-cy="TabLink"
          onClick={() => handleTabSelection(1)}
        >
          Tab 1
        </a>
      </li>

      <li data-cy="Tab" className={activeTabId === 2 ? 'is-active' : ''}>
        <a
          href="#tab-id"
          data-cy="TabLink"
          onClick={() => handleTabSelection(2)}
        >
          Tab 2
        </a>
      </li>

      <li data-cy="Tab" className={activeTabId === 3 ? 'is-active' : ''}>
        <a
          href="#tab-id"
          data-cy="TabLink"
          onClick={() => handleTabSelection(3)}
        >
          Tab 3
        </a>
      </li>
*/

import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickItem = () => {
    onClickTabItem(tabId)
  }

  const isActiveTabId = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${isActiveTabId}`}
        onClick={onClickItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

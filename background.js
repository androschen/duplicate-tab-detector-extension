function getTabList() {
    getCurrentWindowTabs().then((tabs) => {
        const tabsList = document.getElementById('tabs-list');
        const currentTabs = document.createDocumentFragment();
        return tabsList;
    })
}

function getCurrentWindowTabs() {
    return chrome.tabs.query(
        { currentWindow: true }
    );
}
chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
    document.write(`<h4>Tabs List:</h4>`);
    document.write('<ul>');
    let tabsLength = tabs.length;
    for (let i = 0; i < tabsLength; i++) {
        document.write(`<li>${tabs[i].url}</li>`);
    }
    document.write('</ul>');
});
document.addEventListener("DOMContentLoaded", function () {
    let toggleButton = document.getElementById("toggle-dark");

    if (!toggleButton) {
        console.error("toggle-dark button not found in popup.html");
        return; // Prevents error from breaking the script
    }

    toggleButton.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length === 0) return; // No active tab

            chrome.tabs.sendMessage(tabs[0].id, { toggle: true }, (response) => {
                if (chrome.runtime.lastError) {
                    console.error("Error sending message:", chrome.runtime.lastError);
                } else {
                    console.log("Dark mode toggled:", response);
                }
            });
        });
    });
});

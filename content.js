const excludedSites = ["youtube.com", "twitter.com", "github.com"];

function isExcludedSite() {
    return excludedSites.some(site => window.location.href.includes(site));
}
    
function applyDarkMode() {
    if (isExcludedSite()) return;
        let style = document.createElement("style");
        style.id = "dark-mode-style";
        style.innerHTML = `
            * {
                background-color: #121212 !important;
                color: #E4E6EB !important;
                border-color: #3A3A3A !important;
            }
            html, body {
                background-color: #121212 !important;
                color: #E4E6EB !important;
                transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
            }
            a {
                color: #BB86FC !important; /* Highlight links */
            }
            img, video {
                filter: brightness(0.8) contrast(1.1);
            }
            button, input, textarea, select {
                background-color: #1E1E1E !important;
                color: #E4E6EB !important;
                border: 1px solid #3A3A3A !important;
            }
            iframe {
                filter: invert(0.9) hue-rotate(180deg);
            }
            ::selection {
                background-color: #BB86FC;
                color: #000;
            }
        `;
        document.head.appendChild(style);
}
    
function removeDarkMode() {
    let style = document.getElementById("dark-mode-style");
    if (style) {
        style.remove();
    }
}


function applyDarkModeToNewElements() {
    const observer = new MutationObserver(() => {
        applyDarkMode();
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

chrome.storage.sync.get("enabled", ({ enabled }) => {
    if (enabled) {
        applyDarkMode();
        applyDarkModeToNewElements(); // Watch for changes
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.toggle) {
        chrome.storage.sync.get("enabled", ({ enabled }) => {
            if (enabled) {
                removeDarkMode();
                chrome.storage.sync.set({ enabled: false });
            } else {
                applyDarkMode();
                applyDarkModeToNewElements();
                chrome.storage.sync.set({ enabled: true });
            }
        });
        sendResponse({ status: "success" });
    }
});


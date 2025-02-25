function applyDarkMode() {
    const darkCSS = `
        * {
            background-color: #121212 !important;
            color: #E0E0E0 !important;
            border-color: #333 !important;
        }
        
        a {
            color: #64B5F6 !important; /* Keep links visible */
        }

        img, video {
            filter: brightness(0.8) contrast(1.1);
        }

        input, textarea, select, button {
            background-color: #222 !important;
            color: #E0E0E0 !important;
            border: 1px solid #444 !important;
        }

        body {
            background: #121212 !important;
            color: #E0E0E0 !important;
            transition: all 0.3s ease-in-out;
        }
    `;

    let styleTag = document.getElementById("dark-mode-style");
    if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = "dark-mode-style";
        document.head.appendChild(styleTag);
    }

    styleTag.innerHTML = darkCSS;
}

function removeDarkMode() {
    let styleTag = document.getElementById("dark-mode-style");
    if (styleTag) {
        styleTag.remove();
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.toggle) {
        let isDarkMode = document.body.classList.toggle("dark-mode-active");
        if (isDarkMode) {
            applyDarkMode();
        } else {
            removeDarkMode();
        }
        sendResponse({ darkMode: isDarkMode });
    }
});


// function applyDarkModeToNewElements() {
//     const observer = new MutationObserver(() => {
//         applyDarkMode();
//     });

//     observer.observe(document.body, { childList: true, subtree: true });
// }

// chrome.storage.sync.get("enabled", ({ enabled }) => {
//     if (enabled) {
//         applyDarkMode();
//         applyDarkModeToNewElements();
//     }
// });


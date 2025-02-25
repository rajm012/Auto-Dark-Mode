
---

### 📜 **README.md** – Auto Dark Mode for Any Website  


# 🌙 Auto Dark Mode for Any Website

A Chrome extension that applies a **smooth dark mode** to any website for a better browsing experience. This extension intelligently inverts colors, improves contrast, and ensures readability for all elements.

## 🚀 Features
- 🌑 **Auto Dark Mode**: Converts any website into a dark-themed version.
- 🎨 **Better Contrast & Colors**: Improves text readability and UI elements.
- 🖼️ **Image & Video Optimization**: Adjusts brightness & contrast for better visuals.
- 🎛 **One-Click Toggle**: Enable/disable dark mode easily via popup.
- ⚡ **Lightweight & Fast**: Minimal impact on performance.

## 📌 Installation
### 1️⃣ **Download the Extension**
1. **Clone or Download** this repository:
   ```bash
   git clone https://github.com/rajm012/auto-dark-mode.git
   ```
2. Navigate to the downloaded folder.

### 2️⃣ **Load in Chrome**
1. Open `chrome://extensions/` in your Chrome browser.
2. Enable **Developer Mode** (toggle in the top-right corner).
3. Click **"Load Unpacked"** and select the extension folder.
4. The extension will now be available in Chrome!

---

## 🛠️ **How to Use**
1. Click on the **extension icon** in the Chrome toolbar.
2. Click the **"Toggle Dark Mode"** button.
3. Enjoy a **seamless dark mode** on any website! 🌙

---

## 🖥️ **Project Structure**

📂 auto-dark-mode-extension
│── 📄 manifest.json          # Chrome extension configuration
│── 📄 popup.html             # Popup UI
│── 📄 popup.js               # Handles UI interactions
│── 📄 content.js             # Applies dark mode styling to websites
│── 📄 icon.png               # Extension icon
│── 📄 README.md              # Documentation


---

## 🛠️ **Customization**
You can tweak the **dark mode styles** by modifying `content.js`:

- Adjust **background color** (`#121212` → change to another dark shade).
- Improve **link colors** (`#64B5F6` → customize for better visibility).
- Modify **image brightness & contrast**.

---

## 🛠️ **Troubleshooting**
### ❌ "Error sending message: Could not establish connection"
🔹 **Fix:** Ensure that `content.js` is injected correctly. Reload the extension and try again.

### ❌ "Cannot read properties of null (reading 'addEventListener')"
🔹 **Fix:** Make sure `popup.js` is executing after `DOMContentLoaded`. Reload the extension.

### ❌ Dark mode is too aggressive?
🔹 **Fix:** Adjust colors in `content.js` for a softer look.

---

## 📜 **License**
MIT License – Free to use & modify.  

---

## 🌟 **Contribute**
- If you find issues or have ideas to improve, feel free to **open a PR** or **create an issue**.

---

🚀 **Enjoy Dark Mode Everywhere!** 🌙✨

---


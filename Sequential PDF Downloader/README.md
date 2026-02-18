# 📑 Sequential PDF Downloader
 
A lightweight, browser-based JavaScript utility to automate the downloading of sequential files (like payslips or invoices) from portals protected by SSO (Single Sign-On).
 
## 🚀 Why use this?
When logged into a secure portal (e.g., Workday, SAP, or a custom HR portal), your browser holds the necessary session cookies. Traditional tools like `wget` or `curl` often fail because they lack these cookies. This script runs **inside** your authenticated browser session, making it the simplest way to batch-download files.
 
## 🛠️ Usage
 
1. **Login:** Log into the portal where your files are hosted.
2. **Configure:** Update the `baseUrl`, `start`, and `end` variables in `BurstDownload.js` to match your target.
3. **Open Console:** Press `F12` (or `Ctrl+Shift+K` in Firefox) to open the Web Console.
4. **Paste & Run:** Copy the code from `BurstDownload.js`, paste it into the console, and hit **Enter**.
 
> [!IMPORTANT]
> **Browser Settings:** Go to your Browser Settings > Downloads and **uncheck** "Always ask where to save files" before running, otherwise you will get 42 popup windows!

## 📜 Script Options
 
This repository contains two versions of the downloader:
 
1. **`BurstDownload.js`**: Best for small batches or fast servers. Runs without a pause.
2. **`Burstownload_withDelay.js`**: **(Recommended)** Includes a 1-second delay between files. Use this if your browser (like Edge) stops after 10 files or if you encounter "Too Many Requests" errors.
 
### 🛠️ How to Adjust Speed
If the delayed script is too slow, open `Burstownload_withDelay.js` and change:
`delayMs: 1000` to `delayMs: 700` (0.7 second) or lower.
 
## ⚙️ Configuration
The script targets a specific URL pattern:
- **Base URL:** `https://sampleurl.com/v3/api/month/payslip/1234/`
- **ID Range:** `233` to `275` 
- **Suffix:** `/download`
 
## 🔒 Security & Privacy
* **Privacy:** This repository contains **no personal data**. The script is a generic template.

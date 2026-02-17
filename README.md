# 📑 Sequential PDF Downloader
 
A lightweight, browser-based JavaScript utility to automate the downloading of sequential files (like payslips or invoices) from portals protected by SSO (Single Sign-On).
 
## 🚀 Why use this?
When logged into a secure portal (e.g., Workday, SAP, or a custom HR portal), your browser holds the necessary session cookies. Traditional tools like `wget` or `curl` often fail because they lack these cookies. This script runs **inside** your authenticated browser session, making it the simplest way to batch-download files.
 
## 🛠️ Usage
 
1. **Login:** Log into the portal where your files are hosted.
2. **Configure:** Update the `baseUrl`, `start`, and `end` variables in `downloader.js` to match your target.
3. **Open Console:** Press `F12` (or `Ctrl+Shift+K` in Firefox) to open the Web Console.
4. **Paste & Run:** Copy the code from `downloader.js`, paste it into the console, and hit **Enter**.
 
> [!IMPORTANT]
> **Browser Settings:** Go to your Browser Settings > Downloads and **uncheck** "Always ask where to save files" before running, otherwise you will get 42 popup windows!
 
## ⚙️ Configuration
The script targets a specific URL pattern:
- **Base URL:** `https://abcd.com/v3/api/rol/stip/`
- **ID Range:** `233` to `275`
- **Suffix:** `/dowload`
 
## 🔒 Security & Privacy
* **Privacy:** This repository contains **no personal data**. The script is a generic template.
* **.gitignore:** A `.gitignore` file is included to ensure that any downloaded `.pdf` files are never accidentally committed to version control.
 

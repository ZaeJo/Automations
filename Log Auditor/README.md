# 🛡️Log-Audit-Tool
 
A PowerShell-based log analysis tool designed to identify and extract failure events from system and application logs.
 
## 📋 Project Overview
In a production environment, log files can contain thousands of lines of data. This tool automates the "Log Analysis" process by scanning directories for specific keywords, filtering out known "noise," and providing a clean report of unique errors.
 
## 🚀 Key Features
* **Keyword Matching**: Scans for patterns like "Failed," "Error," "Denied," and "Critical".
* **Intelligent Deduplication**: Groups identical errors together so you only see each unique issue once, including its location.
* **Case-Insensitive Search**: Ensures that "error," "Error," and "ERROR" are all captured.
* **Noise Filtering (Ignorance List)**: Allows the administrator to skip known false positives to focus on real threats.
* **Permission Handling**: Automatically skips folders or files that are restricted or locked.
 
## 🛠️ Usage
 
1. **Download**: Save `Log Auditor.ps1` to your local machine.
2. **Permissions**: Open PowerShell as an **Administrator**. You may need to enable script execution:
   `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`.
3. **Run**: Navigate to the script folder and execute:
   `.\Log Auditor.ps1`.
4. **Results**: Check your desktop for `Audit_Report.csv`.
 
## 🧠 Why This Matters (SecOps)
This project demonstrates the core logic used in enterprise security auditing. The ability to filter, deduplicate, and handle errors is directly transferable to **Red Hat (Linux)** tools like `grep` and `awk`.

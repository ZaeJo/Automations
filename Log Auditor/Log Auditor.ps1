# 1. Setup
$FolderToScan = "$HOME\Desktop\MyLogs\"
$OutputFile = "$HOME\Desktop\MyLogs\Clean_Audit_Report.csv"
$Keywords = @("Failed","failed","FAILED", "Error","ERROR","error", "Denied","DENIED","denied", "Critical","CRITICAL","critical")
 
# 2. Define the "Ignorances" (Noise to hide)
$IgnoreList = @("Error: 0","Error: 1")
 
# 3. The Filtered Search
Get-ChildItem -Path $FolderToScan |
    Select-String -Pattern $Keywords |
    # This line filters out the noise
    Where-Object { $_.Line -notmatch ($IgnoreList -join '|') } |
    Group-Object -Property Line |
    ForEach-Object { $_.Group[0] } |
    Select-Object -Property FileName, LineNumber, Line |
    Export-Csv -Path $OutputFile -NoTypeInformation
echo "Audit Complete! Open Clean_Audit_Report.csv to see the results."

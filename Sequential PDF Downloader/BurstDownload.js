{const baseUrl = "https://sampleurl.com/v3/api/month/payslip/1234/";
const suffix = "/download";
const start = 233;
const end = 275;
for (let i = start; i <= end; i++) {
    const downloadUrl = `${baseUrl}${i}${suffix}`;
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `payslip_${i}.pdf`; // Optional: suggests a filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log(`Triggered download for ID: ${i}`);
}
}

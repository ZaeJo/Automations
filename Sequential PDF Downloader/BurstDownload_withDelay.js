
{
    const config = {
        baseUrl: "https://abcd.com/v3/api/rol/stip/",
        suffix: "/dowload",
        start: 233,
        end: 275,
        delay: 1000 // Increased to 1 seconds
    };
 
    const runDownloads = async () => {
        for (let i = config.start; i <= config.end; i++) {
            console.log(`Working on ${i}...`);
            
            const link = document.createElement('a');
            link.href = `${config.baseUrl}${i}${config.suffix}`;
            link.download = `payslip_${i}.pdf`;
            document.body.appendChild(link);
            link.click();
            
            // Give the browser time to register the link click
            await new Promise(r => setTimeout(r, 100));
            document.body.removeChild(link);
            
            // Wait 1 seconds before the next file
            await new Promise(r => setTimeout(r, config.delay));
        }
        console.log("🏁 All ",config.end-config.start+1, " files triggered!");
    };
 
    runDownloads();
}

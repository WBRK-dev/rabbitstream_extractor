import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import path from "path";
import express from "express";

puppeteer.use(StealthPlugin());

const app = express();

(async () => {
    app.use(express.static(path.join(import.meta.dirname, 'raw')));

    app.listen(3000, () => console.log("Server running on http://localhost:3000"));

    const browser = await puppeteer.launch({
        headless: false,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins,site-per-process',
            '--window-size=1480,900'
        ],
        defaultViewport: null
    });
    const page = await browser.newPage();
    await page.goto(`http://localhost:3000/inject.html?sourceId=10793875`);
    // await page.screenshot({ path: "example.png" });



    // await browser.close();
})();
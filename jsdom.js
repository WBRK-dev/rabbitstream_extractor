import { JSDOM } from "jsdom";
import { readFile } from "fs/promises";

import { logger } from "./src/utils/index.js";
import { getIframe, getIframeContent } from "./src/api/index.js";

(async () => {

    const iframe = await getIframe("10793875");
    const iframeContent = await getIframeContent(iframe.link);

    logger.irrelevant(iframeContent);

    const dom = new JSDOM(iframeContent, {
        url: "https://example.org/?sourceId=10793875",
        referrer: "https://example.com/",
        contentType: "text/html",
        includeNodeLocations: true,
        storageQuota: 10000000,
        runScripts: "dangerously",
        pretendToBeVisual: true,
    });

    const jsDomLogger = (...args) => {
        console.log(args);
    }

    dom.window.console = {
        log: jsDomLogger,
        error: jsDomLogger,
        warn: jsDomLogger,
        info: jsDomLogger,
        debug: jsDomLogger,
    }

    dom.window.inject = {
        TextEncoder,
        TextDecoder,
        fetch,
        iframeUrl: new URL(iframe.link),
    }
    dom.window.TextEncoder = TextEncoder;
    dom.window.TextDecoder = TextDecoder;
    dom.window.fetch = (url, data) => {
        if (!data)
            data = {};

        // const headers = new Headers(data?.headers || {});
        // headers.set("Referer", "https://flixhq.to/");
        // headers.set("Host", dom.window.inject.iframeUrl.host);
        // data.headers = headers;

        console.log(url, data);

        return fetch(url, data);
    };
    dom.window.iframeUrl = new URL(iframe.link);

    logger.irrelevant(await readFile("./web/decrypt.js", { encoding: "utf-8" }));
    logger.log(await dom.window.eval(await readFile("./web/decrypt.js", { encoding: "utf-8" })));
    // logger.log(await dom.window.eval('console.log("Hello World")'));
    setInterval(() => {
        logger.irrelevant("Heartbeat");
    }, 1000);

})();
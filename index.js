import { logger } from "./src/utils/index.js";
import { getIframe, getIframeContent } from "./src/api/index.js";
// import extractor from "./src/extractor/index.js";

const serverId = "1599818";

(async () => {
    try {

        const iframe = await getIframe(serverId);
        logger.irrelevant(iframe);
        const iframeContent = await getIframeContent(iframe.link);
        logger.irrelevant(iframeContent);

        // await extractor(iframe);

    } catch (error) {
        logger.error(error.stack);
    }
})();

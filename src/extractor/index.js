import { logger } from '../utils/index.js';
import rabbit_temp from '../../lib/rabbit_temp.js';

export default async function(iframe) {

    const xrax = (new URL(iframe.link)).pathname.split('/').pop();

    logger.success(await rabbit_temp(xrax, iframe.link));
    
}
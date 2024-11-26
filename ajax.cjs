//https://pepepeyo.xyz/ajax/v2/embed-4/getSources?id=DVYGRVkBVXZOR2d6GgUDBwYCBg0MAAAGDQcaWEV4VlddVVl4ABpRUlcEDFFXV1BQBVYNAgZSBw0CBwRVVw1SBFUMAQYBVwFQBFcMVw01&v=65237&h=9baeb11bbf8147b8a46f979e28a2377478e96e0d&b=1878522368

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function fetchContent(url) {
    try {
        const response = await fetch(url, {
            headers: {
                Referer: url, 
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const content = await response.text();
        console.log(`\n--- Fetched Content ---\n${content}\n`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

rl.question('Enter a URL to fetch: ', (url) => {
    if (!url) {
        console.error('Error: Please provide a valid URL.');
        rl.close();
        return;
    }

    console.log('Fetching content with Referer and User-Agent headers set...\n');
    fetchContent(url).finally(() => rl.close());
});
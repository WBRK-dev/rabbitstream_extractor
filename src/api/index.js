const headers = {
    "Sec-Ch-Ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"", 
    "Accept": "*/*", 
    "X-Requested-With": "XMLHttpRequest", 
    "Sec-Ch-Ua-Mobile": "?0", 
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:132.0) Gecko/20100101 Firefox/132.0", 
    "Sec-Ch-Ua-Platform": "\"Linux\"", 
    "Content-Type": "text/html",
    "Sec-Fetch-Site": "same-origin", 
    "Sec-Fetch-Mode": "cors", 
    "Sec-Fetch-Dest": "empty", 
    "Referer": "https://flixhq.to"
}

export async function getIframe(serverId) {
    return await fetch(`https://flixhq.to/ajax/episode/sources/${serverId}`, { headers })
        .then(r => r.json());
}
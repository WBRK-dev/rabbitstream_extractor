function log(payload, type) {
    if (typeof payload === 'object') {
        payload = JSON.stringify(payload, null, 2);
    } else if (typeof payload !== 'string') {
        return error('Logger payload must be a string or an object');
    }

    let message = '';

    switch (type) {
        case "error":
            message = `\x1b[41m\n\n  ${payload}\n\x1b[0m\n`;
            break;
        case "success":
            message = `\x1b[42m\n\n  ${payload}\n\x1b[0m\n`;
            break;
        case "info":
        default:
            message = `\x1b[44m\n\n  ${payload}\n\x1b[0m\n`;
            break;
    }

    console.log(message);
}

export function info(payload) {
    log(payload, 'info');
}

export function error(payload) {
    log(payload, 'error');
}

export function success(payload) {
    log(payload, 'success');
}
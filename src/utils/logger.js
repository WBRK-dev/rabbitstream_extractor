function handle(payload, type) {
    if (typeof payload === 'object') {
        payload = JSON.stringify(payload, null, 2);
    } else if (typeof payload !== 'string') {
        return error('Logger payload must be a string or an object');
    }

    let message = payload;

    switch (type) {
        case "error":
            message = `\x1b[41m\n\n  ${payload}\n\x1b[0m\n`;
            break;
        case "warn":
            message = `\x1b[103m\n\n  ${payload}\n\x1b[0m\n`;
            break;
        case "success":
            message = `\x1b[42m\n\n  ${payload}\n\x1b[0m\n`;
            break;
        case "irrelevant":
            message = `\x1b[90m${payload}\x1b[0m`;
            break;
        case "info":
            message = `\x1b[44m\n\n  ${payload}\n\x1b[0m\n`;
            break;
    }

    console.log(message);
}

export function info(payload) {
    handle(payload, 'info');
}

export function error(payload) {
    handle(payload, 'error');
}

export function warn(payload) {
    handle(payload, 'warn');
}

export function success(payload) {
    handle(payload, 'success');
}

export function irrelevant(payload) {
    handle(payload, 'irrelevant');
}

export function log(payload) {
    handle(payload, 'log');
}
const API_KEY = 'sandbox_cbjde22ad3iarlncv1ug';
const INTERVALS = {
    '15': Date.now() - (15 * 60 * 1000),
    '60': Date.now() - (60 * 60 * 1000),
    'D': Date.now() - (24 * 60 * 60 * 1000),
    'W': Date.now() - (7 * 24 * 60 * 60 * 1000),
    'M': Date.now() - (30 * 24 * 60 * 60 * 1000),
};

export {API_KEY, INTERVALS};
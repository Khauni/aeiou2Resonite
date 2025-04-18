exports.web = {
    // Bind host (default localhost only), set to 0.0.0.0 to bind all interfaces
    host: '0.0.0.0',
    port: 8086,
    // Path where rendered WAVs will be written/served from
    filesPath: require('path').resolve(__dirname, 'files'),
    // Path where WAVs will be rendered before moving to the filesPath
    tmpPath: require('path').resolve(__dirname, 'tmpfiles'),
    // See https://www.npmjs.com/package/proxy-addr
    // You only need to adjust this if you are running behind a reverse proxy
    trustedProxies: 'loopback'
};

// Use the below config if running under wine
exports.decwavPool = {
    // Number of decwav workers to spawn.  Limited to 7 by DECwav license DRM
    maxProcs: 7,
    // Maximum size of request queue if all workers are busy
    maxQueueDepth: 50,
    exec: 'wine',
    args: ['decwav.exe']
};

// If running on native windows, remove the above config and uncomment this one
/*
exports.decwavPool = {
    maxProcs: 7,
    maxQueueDepth: 50,
    exec: 'decwav.exe',
    args: []
};
*/

// Maximum length of TTS requests to accept (including any phoneme commands
// in the input)
exports.maxTextLength = 1024;

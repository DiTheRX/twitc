const express = require('express'),
    proxy = require('http-proxy-middleware');

let target = 'https://www.kroger.com';

const onProxyReq = (proxyReq, req, res) => {
    console.log(req.headers);
    }

const onProxyRes = (proxyRes, req, res) => {
    proxyRes.headers['content-security-policy-report-only'] = undefined;
};

module.exports = (port) => {
    const app = express();
    app.use('/', proxy({ target, changeOrigin: true, onProxyRes, onProxyReq}));
    app.listen(port, () => console.log('Server is started on port ' + port));
};

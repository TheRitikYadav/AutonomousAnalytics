// ============================================================
// AutonomousAnalytics — Local Proxy Server
// Bypasses browser CORS by proxying requests to the n8n API
// Usage: node server.js
// ============================================================

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = 3456;
const N8N_BASE = 'https://n8n.ritikyadav.com.np';

// MIME types for static files
const MIME = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
    // ---- API Proxy: /api/v1/* → n8n ----
    if (req.url.startsWith('/api/v1/')) {
        const targetUrl = `${N8N_BASE}${req.url}`;

        // Forward all incoming headers except host
        const headers = { ...req.headers };
        delete headers.host;
        headers['accept'] = 'application/json';

        const proxyReq = https.request(targetUrl, {
            method: req.method,
            headers,
        }, (proxyRes) => {
            // Set CORS headers
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.writeHead(proxyRes.statusCode, proxyRes.headers);
            proxyRes.pipe(res);
        });

        proxyReq.on('error', (err) => {
            console.error('Proxy error:', err.message);
            res.writeHead(502, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Proxy failed', message: err.message }));
        });

        req.pipe(proxyReq);
        return;
    }

    // ---- Handle CORS preflight ----
    if (req.method === 'OPTIONS') {
        res.writeHead(204, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': '*',
        });
        res.end();
        return;
    }

    // ---- Static file server ----
    let filePath = req.url === '/' ? '/index.html' : req.url;
    filePath = path.join(__dirname, filePath.split('?')[0]);

    const ext = path.extname(filePath);
    const contentType = MIME[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 Internal Server Error');
            }
            return;
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`\n  ⚡ AutonomousAnalytics server running at http://localhost:${PORT}`);
    console.log(`  📡 Proxying /api/v1/* → ${N8N_BASE}`);
    console.log(`  🗂️  Serving static files from ${__dirname}\n`);
});

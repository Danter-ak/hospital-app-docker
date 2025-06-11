#!/bin/sh
# entrypoint.sh pour injecter la variable d'environnement dans env.js

echo "window.env = { apiUrl: '${API_URL}' };" > /usr/share/nginx/html/env.js
exec nginx -g 'daemon off;'

// Cloudflare Worker V2Ray configuration for Brawl Stars VPN

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  const v2rayServer = 'your-v2ray-server.com';
  const v2rayPort = 10086;
  // Modify the path according to your server
  const backendUrl = `http://${v2rayServer}:${v2rayPort}${url.pathname}`;
  const response = await fetch(backendUrl, { 
     method: request.method, 
     headers: request.headers, 
     body: request.method === 'POST' ? request.body : null 
  });
  return new Response(response.body, { 
     status: response.status, 
     statusText: response.statusText, 
     headers: response.headers 
  });
}
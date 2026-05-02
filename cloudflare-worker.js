/**
 * Islamic-Companion AI Proxy — Cloudflare Worker
 * 
 * এই Worker টি browser থেকে Anthropic API call করার জন্য proxy হিসেবে কাজ করে।
 * API key শুধু এই Worker এ থাকে, browser এ কখনো যায় না।
 * 
 * SETUP:
 * 1. https://workers.cloudflare.com এ যান
 * 2. Create Worker → এই পুরো code paste করুন
 * 3. Settings → Variables → Add: ANTHROPIC_API_KEY = (আপনার API key)
 * 4. Worker URL টা copy করুন (যেমন: https://islamic-ai.yourname.workers.dev)
 * 5. App এর app.js এ AI_PROXY_URL এ সেই URL বসান
 */

const ALLOWED_ORIGIN = '*'; // আপনার GitHub Pages URL দিন, যেমন: 'https://yourname.github.io'

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400',
        }
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const body = await request.json();
      const { messages, system } = body;

      if (!messages || !Array.isArray(messages)) {
        return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 });
      }

      // Call Anthropic API
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 800,
          system: system || 'You are an Islamic scholar assistant.',
          messages: messages.slice(-8),
        })
      });

      const data = await response.json();

      return new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
        }
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
        }
      });
    }
  }
};

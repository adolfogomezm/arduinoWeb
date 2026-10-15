import type { APIRoute } from 'astro';

export const prerender = false;

const EXTERNAL_API_URL = 'https://arduino-iot-ventilador-api.onrender.com/historial';

export const GET: APIRoute = async () => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    const res = await fetch(EXTERNAL_API_URL, {
      signal: controller.signal,
      headers: { 'Accept': 'application/json' },
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      return new Response(JSON.stringify({ error: `Código de respuesta: ${res.status}` }), {
        status: res.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message || 'Error al conectar con la API' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

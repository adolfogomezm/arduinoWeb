# Dashboard Arduino IoT Ventilador (SSR con Astro)

Dashboard moderno y responsivo desarrollado con **Astro 4**, **Tailwind CSS** y **Node.js SSR** para monitorear en tiempo real los datos del ventilador y sensores de temperatura y humedad IoT desde la API:
`https://arduino-iot-ventilador-api.onrender.com/historial`

---

## 🚀 Características

- **Server-Side Rendering (SSR)**: Cada recarga consulta directamente la API en tiempo real desde el servidor.
- **Resumen de Telemetría**:
  - Estado en directo con la lectura más reciente.
  - Indicador de velocidad del ventilador con aspas animadas según la intensidad (`alta`, `media`, `baja`).
  - Tarjetas de estadísticas de Temperatura y Humedad (promedio, mínimas y máximas).
  - Contador total de lecturas registradas.
- **Gráfico de Tendencia Visual**: Mini gráfico de barras comparativo de las lecturas registradas.
- **Historial Completo**: Tabla detallada con fechas, temperaturas, humedad y marcas temporales.
- **Auto-recarga Inteligente**: Opción de recarga automática cada 10 segundos con persistencia en `localStorage`.
- **Tolerancia a fallos**: Manejo de inicio en frío de servidores gratuitos (Render) y estados vacíos cuando no hay lecturas activas en la ventana móvil de 1 hora.

---

## 🛠️ Comandos de Ejecución

En la carpeta raíz del proyecto (`/home/adolfo/Downloads/arduinoWeb`):

### 1. Modo Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo en `http://localhost:4321`.

### 2. Compilar para Producción
```bash
npm run build
```

### 3. Ejecutar en Producción
```bash
node ./dist/server/entry.mjs
# o también:
npm run preview
```

---

## ⚙️ Estructura del Proyecto

```
arduinoWeb/
├── src/
│   ├── components/
│   │   ├── FanBadge.astro        # Insignia de velocidad con aspas animadas
│   │   ├── HistoryTable.astro    # Tabla cronológica de lecturas
│   │   ├── StatCard.astro        # Tarjetas de métricas estadísticas
│   │   └── TelemetryChart.astro  # Gráfico visual de tendencia
│   ├── layouts/
│   │   └── Layout.astro          # Layout base en modo oscuro y estilos
│   ├── pages/
│   │   └── index.astro           # Página SSR principal
│   └── types/
│       └── api.ts                # Interfaces TypeScript de la API
├── astro.config.mjs              # Configuración SSR con adapter @astrojs/node
├── tailwind.config.mjs           # Animaciones y tema de Tailwind
├── package.json
└── tsconfig.json
```

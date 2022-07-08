import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: false
      },
      manifest: {
        "name": "Seed Tracking",
        "short_name": "Seed Tracking",
        "start_url": "/",
        "display": "standalone",
        "theme_color": "#ffffff",
        "icons": [
            {
                "src": "check-list-192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "check-list-144.png",
                "sizes": "144x144",
                "type": "image/png"
            }
    
        ]
      }
    })
  ]
})

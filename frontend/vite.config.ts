import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
        host: true, // Permet d'écouter sur 0.0.0.0
        allowedHosts: ['46.224.45.217.sslip.io'],
        watch: {
            usePolling: true, // Force la vérification des fichiers (utile avec Docker/SFTP)
        },
    },
})

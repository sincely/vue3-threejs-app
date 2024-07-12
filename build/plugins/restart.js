import ViteRestart from 'vite-plugin-restart'
export default function restartPlugin() {
  return ViteRestart({
    restart: ['vite.config.[jt]s', '.env']
  })
}

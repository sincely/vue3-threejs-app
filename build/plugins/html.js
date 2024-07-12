import { createHtmlPlugin } from 'vite-plugin-html'
import dayjs from 'dayjs'
export default function htmlPlugin(env) {
  return createHtmlPlugin({
    inject: {
      data: {
        buildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        ENABLE_ERUDA: env.VITE_ENABLE_ERUDA || 'false'
      }
    }
  })
}

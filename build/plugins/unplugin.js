import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
export default function createVitePlugins() {
  return [
    Icons({ autoInstall: true, compiler: 'vue3' }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      include: [/\.[tj]sx?$/, /\.vue$/],
      dts: false,
      resolvers: [VantResolver()]
    }),
    Components({
      dirs: ['src/components'],
      resolvers: [VantResolver(), IconsResolver()],
      extensions: ['vue'],
      dts: false
    })
  ]
}

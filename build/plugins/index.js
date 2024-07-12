import vue from '@vitejs/plugin-vue'
import { templateCompilerOptions } from '@tresjs/core'
import mock from './mock' // mock
import unplugin from './unplugin' // unplugin自动导入插件
import compression from './compression' // 资源压缩
import inspect from './inspect' // vue插件检查页面
import legacy from './legacy' // 浏览器兼容
import restartPlugin from './restart' // 重启服务
import htmlPlugin from './html' // html插件
import svgIconPlugin from './svgIcon' // svg图标集成
import unoCSS from 'unocss/vite'
/**
 * @description  创建vite插件
 * @param viteEnv - 环境变量配置
 * @param isBuild - 是否编译
 */
export default function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [
    vue({
      ...templateCompilerOptions
    }),
    mock(viteEnv),
    ...unplugin(),
    svgIconPlugin(),
    unoCSS()
  ]
  if (isBuild) {
    vitePlugins.push(compression(), legacy(), htmlPlugin(viteEnv))
  } else {
    vitePlugins.push(restartPlugin(), inspect())
  }
  return vitePlugins
}

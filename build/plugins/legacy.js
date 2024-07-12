import legacy from '@vitejs/plugin-legacy'
export default function legacyPlugin() {
  return legacy({
    targets: ['chrome 72', 'Android > 39', 'iOS >= 10.3'] // 需要兼容的目标列表，可以设置多个
  })
}

import viteCompression from 'vite-plugin-compression'
export default function compressionPlugin() {
  return viteCompression({
    verbose: true, // 是否在控制台中输出压缩结果 默认true
    disable: false, // 默认false
    threshold: 10240, // 默认1025
    algorithm: 'gzip', // 默认gzip
    ext: '.gz', // 默认gz
    deleteOriginFile: false // 源文件压缩后是否删除
  })
}

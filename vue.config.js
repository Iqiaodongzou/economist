const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({

    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: "http://159.138.11.4:8081",
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 "/api": ''
    //             }
    //         }
    //     }
    // },
    transpileDependencies: true
})

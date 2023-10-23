const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({

    devServer: {
        proxy: {
            '/api': {
                target: "http://54.190.52.30:8081",
                changeOrigin: true,
                pathRewrite: {
                    "/api": ''
                }
            }
        }
    },
    transpileDependencies: true
})

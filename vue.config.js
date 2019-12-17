const path = require('path');

// 起别名的时候用
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // 服务器代理
    devServer: {
        proxy: {
            // 正在热映接口数据
            '/ry': {
                // 请求的目标路径
                target: 'http://m.maoyan.com',
                //  允许改变请求源
                changeOrigin: true,
                // 重写路径
                pathRewrite: {
                    '^/ry': ''
                }
            },
            // 即将上映接口数据
            '/cs':{
                target:'http://m.maoyan.com',
                changeOrigin:true,
                pathRewrite:{
                    '^/cs' : ''
                }
            }
        }
    },
    // 起别名
    chainWebpack: config => {
        config.resolve.alias
            .set('style', resolve('./src/style'))
            .set('pages', resolve('./src/pages'))
            .set('router', resolve('./src/router'))
            .set('components', resolve('./src/components'))
            .set('utils', resolve('./src/utils'))
            .set('api', resolve('./src/api'))
    }
}


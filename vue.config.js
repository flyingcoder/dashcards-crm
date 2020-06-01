module.exports = {
    lintOnSave: true,
    chainWebpack: config => {
        config.module
            .rule('raw')
            .test(/\.txt$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end()
    },
    devServer: {
    	https : true,
    	host : 'crm.buzzookalocal.net',
    	port : 8080
    }
}
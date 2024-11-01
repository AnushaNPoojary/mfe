const {merge}= require('webpack-merge');
const ModulefederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packagejson = require('../package.json');
const commonConfig = require('./webpack.common')
const domain = process.env.PRODUCTION_DOMAIN;


const prodConfig= {
    mode: "production",
    output:{
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins:[
        new ModulefederationPlugin({
            name:"container",
            remotes:{
                marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`
            },
            shared: packagejson.dependencies
        })
    ]

}


module.exports= merge(commonConfig, prodConfig)

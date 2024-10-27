const {merge} =require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const common=require('./webpack.common')
const packageJson = require('../package.json');


const devConfig={
    mode:"development",
    devServer:{
        port:8081,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name:"marketing",
            filename:"remoteEntry.js",
            exposes:{
                "./MarketingApp":"./src/bootstrap"
            },
            shared: packageJson.dependencies
        }),
        new htmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}

module.exports= merge(common, devConfig)


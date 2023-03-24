const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "images/[hash][ext][query]",
    },

    devServer: {
        static: {
            directory: path.join(__dirname,'./dist'),
        },
        compress: true,
        hot: true,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(scss|css)$/i,
                use: [ 
                    'style-loader', 'css-loader', 'postcss-loader', 
                    "sass-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ]
           
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ]
}
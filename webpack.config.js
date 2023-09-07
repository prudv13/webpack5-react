const path = require('path')
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

let mode = "development";
let target = "web";

if(process.env.NODE_ENV === "production"){
    mode = "production";
    target = "browserslist";
}

module.exports = {
    mode: mode,
    target: target,
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name][contenthash].js',
        assetModuleFilename: "assets/[name][ext][query]"
    },
    devtool: 'source-map',
    devServer: {
        static: "./dist",
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
}
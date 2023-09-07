const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
let mode = "development";
let target = "web";

if(process.env.NODE_ENV === "production"){
    mode = "production";
    target = "browserslist";
}

module.exports = {
    mode: mode,
    target: target,
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
        new MiniCssExtractPlugin(),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
}
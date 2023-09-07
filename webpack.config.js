const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
let mode = "development";

if(process.env.NODE_ENV === "production"){
    mode = "production";
}

module.exports = {
    mode: mode,
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
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ]
}
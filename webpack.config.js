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
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
}
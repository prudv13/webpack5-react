module.exports = {
    mode: "development",
    devtool: false,
    devServer: {
        static: "./dist",
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    }
}
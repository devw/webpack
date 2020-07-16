const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    target: "web",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /test\.js$/,
                use: "mocha-loader",
                exclude: /node_modules/,
            },
        ],
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            title: "Output Management",
            filename: "index.html",
        }),
    ],
    devServer: {
        hot: true,
        inline: true,
        host: "localhost",
        port: 8082,
        watchOptions: {
            poll: true,
        },
    },
};

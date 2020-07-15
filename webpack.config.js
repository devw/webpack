const path = require("path");

module.exports = {
    target: "web",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
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

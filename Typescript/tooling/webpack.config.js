const path = require("path")

module.exports = {
    mode: "development",
    target: ["web", "es5"],
    entry: ["core-js/stable", "./src/teste1.js"],
    output: {
        path: path.resolve(__dirname, "dist", "js"),
        filename: "index.ts"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.ts(x?)$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                            ["@babel/plugin-transform-runtime"]
                        ]
                    }
                },{
                    loader: "ts-loader"
                }]                
            },
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                            ["@babel/plugin-transform-runtime"]
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js" ]
    }
}

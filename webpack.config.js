var path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    return {
        mode: env.mode,
        entry: './src/index.js',
        output: {
            filename: env.mode === "production" ? "bundle.[fullhash].js" : "bundle.js",
            publicPath: "/",
            path: path.resolve(__dirname, 'dir'),
            clean: true
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "css/main.[fullhash].css",
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'public/index.html',
                minify: env.mode === "production" ? true : false,
                title: 'Digital Web Agency ❮/❯ Stonks Agency'
            })
        ],
        optimization: {
            minimizer: [
                `...`,
                new CssMinimizerPlugin(),
            ]
        },
        module: {
            rules: [
                {
                    test: /.css$/,
                    use: [env.mode === "production" ? MiniCssExtractPlugin.loader : "style-loader", 'css-loader']
                },
                {
                    test: /.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', "@babel/preset-react" ]
                        }
                    }
                },
                // {
                //     test: /.svg$/,
                //     use: {
                //         loader: '@svgr/webpack',
                //         options: {
                //             name (file) {
                //               return '[name]_[fullhash].[ext]'
                //             },
                //             publicPath: '/assets/img/'
                //         }
                //     }
                // },
                {       
                    test: /.(svg|png|jpeg|jpg|gif)$/,
                    use: {       
                        loader: "file-loader",
                        options: {
                            name (file) {
                              return '[name]_[fullhash].[ext]'
                            },
                            publicPath: '/assets/img/'
                        }
                    }
                }
            ]
        },
        devServer: {
            contentBase: path.resolve(__dirname, 'public'),
            hot: true,
            historyApiFallback: true
        },
        target: "web"
    }
}
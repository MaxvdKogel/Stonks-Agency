var path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js", // string (default)
        publicPath: "/assets/", // string
        path: path.resolve(__dirname, 'public'),
        
    },
    module: {
        rules: [
            {
                test: /.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
           
            },
            {
                test: /.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }
            },
            {
                test: /.svg$/,
                use: ['@svgr/webpack'],
            },
            {       
                test: /.(svg|png|jpeg|jpg|gif)$/,
                use: {       
                    loader: "file-loader" 
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
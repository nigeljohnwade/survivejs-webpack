exports.devServer = ({ host, port } = {}) => ({
    devServer: {
        historyApiFallback: true,
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT,
        overlay: {
            errors: true,
            warnings: true
        }
    }
});

exports.lintJavascript = ({ include, exclude, options }) => ({
    module: {
        rules: [{
            test: /\.js$/,
            enforce: 'pre',
            loader: 'eslint-loader',
            options: {
                emitWarning: true
            }
        }]
    }
});

exports.loadCss = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                test: /\.less$/,
                include,
                exclude,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
});

const path = require('path');

 xgridConfig = {
    entry: './src2/index.js',
    output: {
        filename: './reader/worklist.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    optimization: {
        minimize: false
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        modules: [
            '../node_modules'
        ],
        alias: {
            "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
            "react/jsx-runtime": "react/jsx-runtime.js"
        },
    },
    module: {
        rules: [
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules[/\\](?!react-data-grid[/\\]lib)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                },
            }
        ]
    }
};

ag_gridConfig = {
    entry: './src2/index.js',
    output: {
        filename: 'ag_worklist.js',
        path: path.resolve(__dirname, 'reader/static'),
    },
    mode: 'development',
    optimization: {
        minimize: false
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        modules: [
            '../node_modules'
        ],
        alias: {
            "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
            "react/jsx-runtime": "react/jsx-runtime.js"
        },
    },
    module: {
        rules:[
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules[/\\](?!react-data-grid[/\\]lib)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            },

        ]
    }
};

component_gridConfig = {
    entry: './src2/index.js',
    output: {
        filename: 'component_worklist.js',
        path: path.resolve(__dirname, 'reader/static'),
    },
    mode: 'development',
    optimization: {
        minimize: false
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        modules: [
            '../node_modules'
        ],
        alias: {
            "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
            "react/jsx-runtime": "react/jsx-runtime.js"
        },
    },
    module: {
        rules: [
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules[/\\](?!react-data-grid[/\\]lib)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            },
        ]
    }
};

module.exports = [xgridConfig, ag_gridConfig, component_gridConfig];
// module.exports = [component_gridConfig];
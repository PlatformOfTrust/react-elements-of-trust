const path = require('path');
const FlowWebpackPlugin = require('flow-webpack-plugin');

module.exports = async ({ config }) => {
    config.module.rules.push({
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
    });

    config.plugins.push(
        new FlowWebpackPlugin()
    );

    return config;
};

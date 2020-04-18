const path = require('path');
exports = module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('ts-loader'),
                options: {
                    configFile: path.join(__dirname, 'tsconfig.json'),
                },
            }
        ],
    });
    config.module.rules.unshift({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require('styled-jsx/webpack').loader,
            }
        ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};

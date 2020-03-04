const { override, fixBabelImports, addLessLoader, setWebpackPublicPath } = require('customize-cra');

const config = override(

    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),

    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
    setWebpackPublicPath('/')
);
console.log(config+'')
module.exports = config
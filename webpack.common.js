module.exports = {
    mode: 'production',
    output: {
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    resolve: {
        extensions: ['.json', '.js'],
    },
    externals:[
        {
            react:'react'
        }
    ]
};
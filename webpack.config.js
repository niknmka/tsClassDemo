module.exports =  {
    entry: './doAction',
    output: {
        filename: 'build.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    module     : {
        rules : [
            {
                test    : /\.ts$/,
                exclude : [/node_modules/, '/\.spec\.ts$/'],
                loader     : ['ts-loader']
    },  ]
    },

    watch: true
};




require.config({
    baseUrl: 'js',
    paths: {
        react: 'lib/react.min',
        JSXTransformer: 'lib/JSXTransformer',
        jsx: 'lib/jsx',
        text: 'text',
        'react-bootstrap': 'lib/react-bootstrap.min',
        Globalize: 'lib/globalize.min',
        'react-widgets': 'lib/react-widgets',
        quill: 'lib/quill.min',
        'react-quill': 'lib/react-quill.min'
    },
    shim: {
        react: {
            exports: 'React'
        },
        Globalize: {
            exports: "Globalize"
        },
        JSXTransformer: 'JSXTransformer',
        'react-widgets': {
            exports: 'ReactWidgets',
            deps: ['Globalize']
        },
        'react-quill': {
            deps: ['quill']
        }
    },
    config: {
        jsx: {
            fileExtension: '.jsx',
            transformOptions: {
                harmony: true,
                stripTypes: false,
                inlineSourceMap: true
            },
            usePragma: false
        }
    }
});

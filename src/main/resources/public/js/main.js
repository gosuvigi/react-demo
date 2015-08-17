/**
 * Created by ratoico on 8/14/15.
 */
require.config({

    paths: {
        "react": "lib/react.min",
        "JSXTransformer": "lib/JSXTransformer",
        "jsx": "lib/jsx",
        "text": "text",
        "react-bootstrap": "lib/react-bootstrap.min",
        "globalize": "lib/globalize.min",
        "react-widgets": "lib/react-widgets",
        "quill": "lib/quill.min",
        "react-quill": "lib/react-quill.min"
    },

    shim : {
        "react": {
            "exports": "React"
        },
        "JSXTransformer": "JSXTransformer",
        "react-widgets": {
            "exports": "ReactWidgets",
            "deps": ["globalize"]
        },
        "react-quill": {
            "deps": ["quill"]
        }
    },

    config: {
        jsx: {
            fileExtension: ".jsx",
            transformOptions: {
                harmony: true,
                stripTypes: false,
                inlineSourceMap: true
            },
            usePragma: false
        }
    }
});

require(['jsx!app/doodle1'], function(Doodle) {
    var doodle = new Doodle();
    doodle.init();
});


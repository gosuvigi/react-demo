/**
 * Created by ratoico on 8/14/15.
 */
require.config({

    paths: {
        "react": "lib/react-with-addons.min",
        "JSXTransformer": "lib/JSXTransformer",
        "jsx": "lib/jsx",
        "text": "text",
        "react-bootstrap": "lib/react-bootstrap.min"
    },

    shim : {
        "react": {
            "exports": "React"
        },
        "JSXTransformer": "JSXTransformer"
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

require(['jsx!app/doodle'], function(Doodle) {
    var doodle = new Doodle();
    doodle.init();
});


# NEXT + STYLED COMPONENTS


## DEPENDENCIES

    $ npm install --save styled-components

    $ npm install --save-dev babel-plugin-styled-components


## FILES CONFIGURATION

    - Create a file with the name .babelrc at the root of our project

    - Add this code

        {
            "presets": ["next/babel"],
            "plugins": [["styled-components", { "ssr": true, "displayName": true }]]
        }
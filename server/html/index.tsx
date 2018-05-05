import * as React from 'react'

interface HtmlProps {
    children: any;
}

export const Html = (props: HtmlProps) => {
    return (
        <html>
            <head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <title>Nick Gonzalez</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
                <div id='app'>
                    {props.children}
                </div>
            </body>
            <script src='/dist/bundle.js' />
        </html>
    )
}

const React = require('react');
const ReactDom = require('react-dom/server');
const express = require('express');
const { Ellipsis } = require('react-walter-spinner');

const app = express();
const port = 3000;

app.get('*', (req, res) => {
  const html = ReactDom.renderToString(React.createElement(Ellipsis));
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
      ${html}
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

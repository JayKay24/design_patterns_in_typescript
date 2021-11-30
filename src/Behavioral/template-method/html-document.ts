// A HTML document concrete class of AbstractDocument

import { Document, AbstractDocument } from './abstract-document';

export default class HTMLDocument extends AbstractDocument {
  title(document: Document): void {
    document['title'] = 'New HTML Document';
  }

  text(document: Document, text: string): void {
    // Putting multiple lines into their own p tags

    const lines = text.split('\n');

    let markup = '';

    lines.forEach((line) => {
      markup += '    <p>' + line + '</p>\n';

      document['text'] = markup.substring(0, markup.length - 1);
    });
  }

  print(document: Document): void {
    // overridding print to output with html tags

    console.log('<html>');
    console.log('  <head>');

    for (const [attribute, value] of Object.entries(document)) {
      if (['title', 'description', 'author'].indexOf(attribute) > -1) {
        console.log(`    <${attribute}>${value}</${attribute}`);
      }

      if (attribute === 'bg-col') {
        console.log('    <style>');
        console.log('      body {');
        console.log(`        background-color: ${value}`);
        console.log('      }');
        console.log('    </style>');
      }
    }

    console.log('  </head>');
    console.log('  <body>');
    console.log(`${document['text']}`);
    console.log('  </body>');
    console.log('</html>');
  }
}

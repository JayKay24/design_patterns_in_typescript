// An abstract document containing a combination of hooks and abstract methods

export interface Document {
  [id: string]: string;
}

export abstract class AbstractDocument {
  // A template class containing a template method and primitive methods

  document: Document = {};

  abstract title(document: Document): void;
  // Must implement

  description?(document: Document): void;
  // Optional

  author?(document: Document): void;
  // Optional

  backgroundColor(document: Document): void {
    // Optional with a default behavior
    document['bg-col'] = 'white';
  }

  abstract text(document: Document, text: string): void;
  // Must implement

  footer?(document: Document): void;
  // Optional

  print(document: Document): void {
    // Optional with a default behavior
    console.log('-'.repeat(20));

    for (const [attribute, value] of Object.entries(document)) {
      console.log(`${attribute}\t: ${value}`);
    }

    console.log();
  }

  createDocument(text: string): void {
    // The template method

    this.title(this.document);
    this.description && this.description(this.document);
    this.author && this.author(this.document);
    this.backgroundColor(this.document);
    this.text(this.document, text);
    this.footer && this.footer(this.document);
    this.print(this.document);
  }
}

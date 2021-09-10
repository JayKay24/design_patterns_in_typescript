import Document from './document';
import { CloneMode } from './iprototype';

const ORIGINAL_DOCUMENT = new Document('Original', [
  [1, 2, 3, 4],
  [5, 6, 7, 8]
]);

console.log(JSON.stringify(ORIGINAL_DOCUMENT));
console.log();

const DOCUMENT_COPY_1 = ORIGINAL_DOCUMENT.clone(CloneMode.Shallow);
DOCUMENT_COPY_1.name = 'Copy 1';
DOCUMENT_COPY_1.array[1][2] = 200;
console.log(JSON.stringify(DOCUMENT_COPY_1));
console.log(JSON.stringify(ORIGINAL_DOCUMENT));
console.log();

const DOCUMENT_COPY_2 = ORIGINAL_DOCUMENT.clone(CloneMode.Shallow);
DOCUMENT_COPY_2.name = 'Copy 2';
DOCUMENT_COPY_2.array[1] = [9, 10, 11, 12];
console.log(JSON.stringify(DOCUMENT_COPY_2));
console.log(JSON.stringify(ORIGINAL_DOCUMENT));
console.log();

const DOCUMENT_COPY_3 = ORIGINAL_DOCUMENT.clone(CloneMode.Deep);
DOCUMENT_COPY_3.name = 'Copy 3';
DOCUMENT_COPY_3.array[1][0] = 1234;
console.log(JSON.stringify(DOCUMENT_COPY_3));
console.log(JSON.stringify(ORIGINAL_DOCUMENT));
console.log();

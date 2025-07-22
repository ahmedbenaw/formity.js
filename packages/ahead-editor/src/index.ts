import EditorJS from '@editorjs/editorjs';
import Paragraph from '@editorjs/paragraph';
import Header from '@editorjs/header';
import Image from '@editorjs/image';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import LinkTool from '@editorjs/link';
import InlineCode from '@editorjs/inline-code';

export const Ahead = {
  Editor: EditorJS,
  tools: {
    paragraph: { class: Paragraph },
    header: { class: Header, config: { levels: [1, 2, 3], defaultLevel: 2 } },
    image: { class: Image, config: { endpoints: { byFile: '/upload' } } },
    list: { class: List },
    quote: { class: Quote },
    linkTool: { class: LinkTool },
    inlineCode: { class: InlineCode },
  },
  init: (holder = 'editorjs', customTools = {}) =>
    new EditorJS({
      holder,
      tools: { ...Ahead.tools, ...customTools },
      autofocus: true,
    }),
  save: (editor: EditorJS) => editor.save(),
}; 
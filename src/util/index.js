import mime from 'mime';
import { js_beautify as js, html, css } from 'js-beautify';

export const formatCode = (codeStr, reponseType) => {
  const ext = mime.getExtension(reponseType);
  switch (ext) {
    case 'html':
      return html(codeStr, { indent_size: 2 });
    case 'css':
      return css(codeStr, { indent_size: 2 });
    case 'json':
    case 'js':
      return js(codeStr, { indent_size: 2 });
    default:
      return codeStr;
  }
};

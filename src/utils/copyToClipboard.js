// Thank you:- https://www.30secondsofcode.org/blog/s/copy-text-to-clipboard-with-javascript
const copyToClipboard = (color) => {
  // create a textarea with value as selected color
  const el = document.createElement('textarea');
  el.value = color;

  // setting it readonly
  el.setAttribute('readonly', '');

  // selecting the color
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();

  // copying to clipboard
  document.execCommand('copy');
  // cleaning stuf
  document.body.removeChild(el);
};

export default copyToClipboard;

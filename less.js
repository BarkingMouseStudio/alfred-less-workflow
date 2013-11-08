var less = require('less');

var query = process.argv[2]
var format = '.a{color:' + query + '}';

var xml = ['', '<?xml version="1.0"?>',
  '<items>',
  '<item uid="demo" valid="yes" arg="$result">',
  '<title>$result</title>',
  '<subtitle>Copy to clipboard</subtitle>',
  '<icon>icon.png</icon>',
  '</item>',
  '</items>', ''].join('\n');

less.render(format, { compress: true }, function(err, css) {
  if (err) {
    console.error(err);
    return;
  }
  process.stdout.write(xml.replace(/\$result/gi, css.slice(9, -1)));
});

module.exports = {
  content: ['./public/**/*.html', './src/**/*.js'],
  css: ['./src/components/styles/index.css'],
  whitelist: ['body', 'html'],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-z0-9-:\/]+/g);
        }
      },
      extensions: ['html', 'js']
    }
  ]
};

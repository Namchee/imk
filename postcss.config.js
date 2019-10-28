module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-advanced-variables'),
    require('tailwindcss')('./tailwind-config.js'),
    require('postcss-preset-env')({ stage: 0 }),
    require('autoprefixer'),
    require('cssnano'),
  ],
};

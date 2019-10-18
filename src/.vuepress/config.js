module.exports =  {
  postcss: {
    plugins: [
      require('postcss-import'),
      require('postcss-advanced-variables'),
      require('postcss-calc'),
      require('tailwindcss')('./src/.vuepress/theme/tailwind-config.js'),
      require('postcss-preset-env')({ stage: 0 }),
      require('autoprefixer')
    ],
  },
  title: 'Roemah Seni Sarasvati',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Us', link: '/about' },
      { text: 'Collections', link: '/collections' },
      { text: 'Exhibitions', link: '/events' },
      { text: 'Blog', link: '/blog' },
    ]
  }
}

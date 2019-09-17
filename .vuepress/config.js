module.exports =  {
  postcss: {
    plugins: [
      require('postcss-import'),
      require('postcss-advanced-variables'),
      require('tailwindcss')('.vuepress/theme/tailwind-config.js'),
      require('postcss-preset-env')({ stage: 0 }),
      require('autoprefixer')
    ],
  },
  title: 'Test title',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'About Us', link: '/guide/' },
      { text: 'Gallery', link: 'https://google.com' },
      { text: 'Facilities', link: 'https://google.com' },
      { text: 'Events', link: 'https://google.com' },
    ]
  }
}

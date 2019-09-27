module.exports =  {
  postcss: {
    plugins: [
      require('postcss-easy-import'),
      require('postcss-advanced-variables'),
      require('tailwindcss')('./src/.vuepress/theme/tailwind-config.js'),
      require('postcss-preset-env')({ stage: 0 }),
      require('autoprefixer')
    ],
  },
  title: 'Test title',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'About Us', link: '/about/', icon: 'account-circle-outline', },
      { text: 'Gallery', link: '/gallery/', icon: 'image-filter' },
      { text: 'Facilities', link: '/facilities/', icon: 'map-outline' },
      { text: 'Events', link: '/events/', icon: 'ticket' },
    ]
  },
}

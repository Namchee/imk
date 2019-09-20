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
      { text: 'About Us', link: '/about/', icon: 'perm_identity', },
      { text: 'Gallery', link: '/gallery/', icon: 'insert_photo' },
      { text: 'Facilities', link: '/facilities/', icon: 'map' },
      { text: 'Events', link: '/events/', icon: 'local_activity' },
    ]
  },
}

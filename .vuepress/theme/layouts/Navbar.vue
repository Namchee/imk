<template>
  <nav class="w-full shadow-lg lg:shadow bg-white flex items-center justify-center fixed top-0 navbar" :class="{ 'hide-navbar': hideNav }">
    <div class="hidden sm:flex sm:items-center sm:justify-center">
      <a
        href="/"
        class="flex justify-center items-center p-3 sm:p-2 sm:px-5 lg:px-6 xl:px-7 sm:order-2 nav-item logo"
        :class="{ 'active': activeLink('/') }"
      >
        <img
          src="./../../../resources/logo.png"
          alt="Roemah Seni Sarasvati"
          title="Roemah Seni Sarasvati"
          width="40"
          height="40"
        />
      </a>
      <a
        v-for="(item, index) in $site.themeConfig.nav"
        :href="item.link"
        :key="index"
        class="hidden sm:inline-block sm:p-2 sm:px-5 p-2 lg:px-6 xl:px-7 uppercase font-serif font-semibold tracking-widest text-lg nav-item"
        :class="index >= 2 ? `sm:order-${index + 1}` : `sm:order-${index}`"
        :data-hover="item.text"
      >
        <span :class="{ 'active': activeLink(item.link) }">
          {{ item.text }}
        </span>
      </a>
    </div>
    <div class="w-full flex flex-row justify-evenly sm:hidden">
      <a href="/" class="p-2 px-4 nav-item mobile-nav-item"
        :class="{ 'active': activeLink('/') }">
        <div class="flex flex-col items-center">
          <i class="material-icons">
            home
          </i>
          <span class="text-xs">
            Home
          </span>
        </div>
      </a>
      <a
        v-for="(item, index) in $site.themeConfig.nav"
        :href="item.link"
        :key="index"
        class="p-2 px-4 nav-item mobile-nav-item"
        :class="{ 'active': activeLink(item.link) }"
      >
        <div class="flex flex-col items-center">
          <i class="material-icons">
            {{ item.icon }}
          </i>
          <span class="text-xs">
            {{ item.text }}
          </span>
        </div>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      scroll: 0,
      hideNav: false,
    };
  },

  mounted: function() {
    window.addEventListener('scroll', this.hideNavOnScroll);
  },

  methods: {
    activeLink: function(link) {
      return link === this.$router.history.current.path;
    },

    hideNavOnScroll: function() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollPosition < 0) {
        return;
      }

      this.hideNav = scrollPosition > this.scroll;
      this.scroll = scrollPosition;
    }
  }
};
</script>

<style lang="postcss" scoped>
.navbar {
  transform: translateY(0);
  transition: transform 250ms ease;
}

.hide-navbar {
  transform: translateY(-100%);
  box-shadow: none;
}

.nav-item {
  position: relative;
  overflow: hidden;
  color: #36363660;
  cursor: pointer;

  & span.active {
    color: #00A3D2;
  }

  &:not(.logo):not(.mobile-nav-item)::before {
    color: #00A3D2;
    position: absolute;
    content: attr(data-hover);
    white-space: nowrap;
    overflow: hidden;
    display: block;
    left: 1.5rem;
    top: 0.5rem;
    width: 0;
    height: 100%;
    transition: width 200ms ease;
  }

  &:not(.logo):hover::before {
    width: 100%;
  }
}

.logo-text {
  margin-top: -5px;
}

@media screen and (min-width: 768px) {
  .logo {
    filter: grayscale(1);
    transition: all 175ms linear;
  }

  .logo.active {
    filter: none;
  }

  .logo:hover {
    filter: none;
  }
}
</style>
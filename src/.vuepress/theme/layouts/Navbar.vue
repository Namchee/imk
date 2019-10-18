<template>
  <nav class="w-full shadow bg-white flex justify-between fixed top-0 lg:px-6 navbar"
    :class='{ "hide-navbar": hideMenu }'>
    <a class="flex items-center justify-center logo ml-3" href="/">
      <img
        src="./../../../resources/logo.png"
        alt="Roemah Seni Sarasvati"
        title="Roemah Seni Sarasvati"
        class="logo-image"
      />
      <span class="font-serif lg:ml-3 ml-2 text-2xl uppercase logo-text tracking-wide">
        Sarasvati
      </span>
    </a>
    <div 
      class="w-full menu-items lg:flex"
      :class='{ "active": mobileMenu }'>
      <div class="menu-links lg:flex ml-auto mr-auto">
        <a 
          v-for='(item, index) in $site.themeConfig.nav'
          :href='item.link'
          :key='index'
          class='text-3xl font-sans-alt lg:text-lg lg:px-8 xl:px-10 nav-item flex justify-center items-center whitespace-no-wrap'
          :class='{ "active": activeLink(item.link) }'
        >
          <span>
            {{ item.text }}
          </span>
        </a>
      </div>
      <div class="flex items-center uppercase text-lg text-base">
        EN / ID
      </div>
      <button class="menu-close lg:hidden"
        @click='mobileMenu = false'>
        <span class="menu-close-icon">&times;</span>
        <span class="menu-close-label">Close</span>
      </button>
    </div>
    
    <button
      @click='mobileMenu = true'
      class="lg:hidden burger flex flex-col border-gray-300 active:shadow-outline focus:outline-none p-2 px-3 ml-4">
      <div class="h-full burger-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <span class="burger-label uppercase text-gray-600 tracking-widest">
        Menu
      </span> 
    </button>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      mobileMenu: false,
      hideMenu: false,
      tick: false,
      lastScroll: 0,
      currentScroll: 0,
    };
  },

  mounted: function() {
    window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    activeLink: function(link) {
      return link === this.$router.history.current.path;
    },

    handleScroll: function() {
      this.currentScroll = window.pageYOffset;
      this.requestTick();
    },

    requestTick: function() {
      if (!this.tick) {
        requestAnimationFrame(this.updateNav);
      }

      this.tick = true;
    },

    updateNav: function() {
      this.hideMenu = this.lastScroll < this.currentScroll;
      this.lastScroll = this.currentScroll;

      this.tick = false;
    },
  }
};
</script>

<style lang="postcss" scoped>
.navbar {
  transform: translateY(0);
  transition: transform 250ms ease-in-out;
}

.hide-navbar {
  transform: translateY(-105%);
}

.logo-image {
  width: 40px;
  height: 40px;
}

@media screen and (min-width: 1024px) {
  .logo-image {
    width: 55px;
    height: 55px;
  }
}

@media screen and (max-width: 1023px) {
  .menu-items {
    padding: 1rem;
    background: hsla(0, 0%, 99%, 0.985);
    z-index: 100;
    height: 100vh;
    width: 100vw;
    position: fixed;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-evenly;
    opacity: 0;
    display: flex;
    pointer-events: none;
    transition: all 250ms ease;

    @for $i from 1 through 6 {
      & .menu-links a:nth-child(#{$i}) {
        transform: translateY(-10px);
        opacity: 0;
        transition: all 100ms ease;
        transition-delay: calc(35ms * $i); 
      }
    }

    &.active {
      opacity: 1;
      pointer-events: auto;

      @for $i from 1 through 6 {
        & .menu-links a:nth-child(#{$i}) {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }

    & .menu-close {
      top: 0;
      right: 10px;
      position: fixed;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;

      & .menu-close-label {
        text-transform: uppercase;
        color: gray;
        font-size: .75rem;
      }

      & .menu-close-icon {
        font-size: 2rem;
      }
    }

    & .menu-links {
      margin-top: 1rem;
    }
  }
}

.burger {
  border-left-width: 1px;
}

.burger-icon {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;

  & span {
    content: '';
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    background-color: #2D3748;
    border-radius: 20%;
    height: 2px;
  }
}

.burger-label {
  font-size: .625rem;
}

.logo {
  margin-top: 0.875rem;
  margin-bottom: 0.875rem;
}

.logo-text {
  font-weight: 335;
}

.nav-item {
  & span {
    position: relative;
  }

  & span::before {
    content: '';
    bottom: 13.5%;
    z-index: -1;
    position: absolute;
    width: 0;
    height: 6px;
    transition: width 200ms ease;
  }

  &:nth-child(2n + 1) span::before {
    left: -5%;
    background-color: rgb(255, 227, 202);
  }

  &:nth-child(2n) span::before {
    right: -5%;
    background-color: rgb(208, 240, 255);
  }

  &:nth-child(2n + 1):hover,
  &:nth-child(2n + 1):focus,
  &:nth-child(2n + 1).active,
  &:nth-child(2n):hover,
  &:nth-child(2n):focus,
  &:nth-child(2n).active {
    & span::before {
      width: 110%;
    }
  }
}
</style>
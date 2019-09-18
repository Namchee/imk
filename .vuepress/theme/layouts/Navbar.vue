<template>
  <nav class="w-full shadow-lg lg:shadow bg-white flex items-center justify-center fixed top-0">
    <button class="lg:hidden block absolute left-0 nav-burger" :class='{ "active" : drawer }' @click='drawer = !drawer'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
    <a href="/" class="flex justify-center items-center p-3 lg:p-2 px-5 lg:order-2 nav-item logo relative">
      <img
        src="./../../../resources/logo.png"
        alt="Roemah Seni Sarasvati"
        title="Roemah Seni Sarasvati"
        width="40"
        height="40"
      />
      <span class="lg:hidden ml-2 text-dark2 text-3xl logo-text">Sarasvati</span>
    </a>
    <a
      v-for="(item, index) in $site.themeConfig.nav"
      :href="item.link"
      :key="index"
      class="hidden lg:inline-block p-3 px-5 uppercase font-serif font-semibold tracking-widest text-lg nav-item"
      :class="index >= 2 ? `lg:order-${index + 1}` : `lg:order-${index}`"
      :data-hover="item.text"
    >{{ item.text }}</a>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      drawer: false,
    };
  },
};
</script>

<style lang="postcss" scoped>
.nav-item {
  position: relative;
  overflow: hidden;
  color: #36363650;

  &:not(.logo)::before {
    color: #2e4052AF;
    position: absolute;
    content: attr(data-hover);
    white-space: nowrap;
    overflow: hidden;
    display: block;
    left: 1.25rem;
    top: 0.75rem;
    width: 0;
    height: 100%;
    transition: width 200ms ease;
  }

  &:not(.logo):hover::before {
    width: 100%;
  }
}

.nav-burger {
  height: 2rem;
  width: 2rem;
  outline: none;
  margin-left: 1rem;
  cursor: pointer;

  & span {
    display: block;
    width: 100%;
    height: 4px;
    background: #424242;
    border: 1px solid #424242;
    border-radius: 32.5%;
    transition: transform 200ms ease, opacity 150ms linear;
    transform-origin: center center;
  }

  & span:nth-child(2) {
    position: absolute;
  }

  & span:not(:last-child) {
    margin-bottom: 5px;
  }

  &.active span:first-child {
    opacity: 0;
  }

  &.active span:nth-child(2) {
    transform: rotateZ(45deg);
  }

  &.active span:nth-child(3) {
    transform: rotateZ(-45deg);
  }

  &.active span:last-child {
    opacity: 0;
  }
}

.logo-text {
  margin-top: -5px;
}

@media screen and (min-width: 1024px) {
  .logo {
    filter: grayscale(1);
    transition: all 150ms linear;
  }

  .logo:hover {
    filter: grayscale(0);
  }
}
</style>
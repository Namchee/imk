<template>
  <div>
    <Navbar class="nav"></Navbar>
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view class="pt-16 lg:pt-20"></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import FontFaceObserver from 'fontfaceobserver';
import Navbar from './Navbar';
import Footer from './Footer';

export default {
  components: {
    Navbar,
    Footer
  },

  mounted: function() {
    const inter = new FontFaceObserver('Inter');

    Promise.all([inter.load()]).then(() => {
      document.documentElement.className += "font-loaded";
    });
  },
};
</script>

<style lang="postcss" scoped>
.nav {
  z-index: 999;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 350ms;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

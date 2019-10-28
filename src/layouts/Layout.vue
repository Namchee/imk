<template>
    <div>
      <Navbar class="nav"></Navbar>
      <router-view class="pt-16 lg:pt-20"></router-view>
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
    Footer,
  },

  mounted: function() {
    const lexend = new FontFaceObserver('Lexend');
    const jost = new FontFaceObserver('Jost');

    Promise.all([
      lexend.load(),
      jost.load(),
    ]).then(() => {
      document.documentElement.className += 'font-loaded';
    });
  },
};
</script>

<style lang="postcss" scoped>
.nav {
  z-index: 999;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

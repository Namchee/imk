<template>
  <div>
    <Navbar />
    <Content class="p-4 lg:pt-24 pt-20" />
    <Footer />
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
</style>

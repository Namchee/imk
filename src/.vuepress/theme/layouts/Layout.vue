<template>
  <div>
    <Navbar class="nav" />
    <Content class="p-4 content lg:pt-24 pt-20" />
    <Footer class="foot" />
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
  z-index: 3;
}

.content {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  background-color: white;
  margin-bottom: calc(450px + 5rem);
}

@media screen and (max-width: 1023px) {
  .content {
    margin-bottom: 0;
  }
}

@media screen and (min-width: 1024px) {
  .foot {
    position: fixed;
    bottom: 0;
  }
}

</style>

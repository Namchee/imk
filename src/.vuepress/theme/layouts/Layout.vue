<template>
  <div class="font-sans subpixel-antialiased">
    <Navbar />
    <Content class="content p-4 lg:pt-24 pt-20" />
    <Footer class="footer" />
  </div>
</template>

<script>
import Navbar from './Navbar';
import Footer from './Footer';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="postcss" scoped>
</style>

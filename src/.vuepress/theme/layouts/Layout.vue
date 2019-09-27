<template>
  <div class="font-sans">
    <Navbar />
    <Content class="content p-4 pt-20 sm:pt-16" />
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

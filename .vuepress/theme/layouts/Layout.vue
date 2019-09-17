<template>
  <div class="font-sans">
    <Navbar />
    <Content />
  </div>
</template>

<script>
import Navbar from './Navbar';

export default {
  components: {
    Navbar,
  },
};
</script>


<style lang="postcss">
/* DO NOT SCOPE THIS!!! */
@import './../styles/theme.css';

</style>

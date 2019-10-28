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
import FontFaceObserver from "fontfaceobserver";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default {
  components: {
    Navbar,
    Footer
  },

  mounted: function() {
    const lexend = new FontFaceObserver("Lexend");
    const jost = new FontFaceObserver("Jost");

    Promise.all([lexend.load(), jost.load()]).then(() => {
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
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

<template>
  <div class="flex flex-col justify-center items-center h-screen font-mono p-4">
    <h1 class="wd:text-6xl lg:text-5xl text-4xl mb-8">404</h1>
    <p class="text-xl mb-8 text-center">{{ $t('requestPageError') }}</p>
    <p class="text-center mb-16">
      <span class="text-xl">Maybe you:</span>
      <ul>
        <li class="text-xl">Mistyped the URL</li>
        <li class="text-xl">The page simply does not exist</li>
        <li class="text-xs">We produced a bug! (yes, please report it)</li>
      </ul>
    </p>
    <button
      @click='redirect'
      class="inline-flex justify-center items-center text-lg tracking-wide border-2 border-black px-12 py-4 rounded-full dir"
    >
      <span>Save Me!</span>
      <span class="arrow">
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
        </svg>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    redirect: function() {
      if (window.history.length === 2) {
        this.$router.replace('/');
      } else {
        this.$router.go(-1);
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.dir {
  position: relative;

  & span:first-child {
    transition: all 200ms;
  }

  & .arrow {
    position: absolute;
    opacity: 0;
    left: 50%;
    transition: all 200ms;
  }

  &:hover,
  &:active {
    & span:first-child {
      transform: translateX(20px);
    }

    & .arrow {
      left: 15%;
      opacity: 1;
    }
  }
}
</style>
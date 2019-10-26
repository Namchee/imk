<template>
  <div class="hero">
    <div class="card p-8 md:p-12 wd:p-16 wd:py-24">
      <h1
        class="text-4xl lg:text-6xl wd:text-7xl font-serif md:text-left text-center tracking-wide md:mb-0 mb-2"
      >Roemah Seni Sarasvati</h1>
      <q
        class="md:text-xl wd:text-2xl text-center md:text-left font-serif italic mb-12 block"
      >Your finest art source in Bandung since 2010</q>
      <div class="text-center lg:text-left text-sm md:text-xl font-sans-alt mb-12">
        <p>Sudirman Street 137</p>
        <p class="mb-5">Bandung, West Java, Indonesia</p>
        <p class="md:text-lg font-sans-alt">Open Daily 10 AM &ndash; 9 PM</p>
      </div>
      <a
        href="https://goo.gl/maps/GAJDpWHvs8Jk7u5X6"
        target="_blank"
        class="inline-flex dir border border-black p-3 px-10 uppercase"
      >
        <span class="font-sans-alt">Show me the way</span>
        <span class="arrow">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            class="fill-current"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
            />
          </svg>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.hero {
  background-image: url("./../resources/banner_alt.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
}

@media screen and (min-width: 640px) and (max-width: 1023px) {
  .hero {
    height: 65vh;
  }
}

.card {
  position: relative;
  width: 65%;
  z-index: 1;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    content: "";
    background-color: rgba(255, 255, 255, 0.65);
    opacity: 1;
    filter: blur(2px);
    backdrop-filter: blur(5px);
  }
}

@media screen and (max-width: 768px) {
  .card {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero {
    justify-content: center;
  }
}

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
      transform: translateX(-15px);
    }

    & .arrow {
      left: 80%;
      opacity: 1;
    }
  }
}
</style>

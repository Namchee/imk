<template>
  <div>
    <div class="hero flex justify-center items-center">
      <div class="hero-bg"></div>
      <div class="hero-blur-bg"></div>
      <div class="hero-content text-white flex flex-col justify-center items-center">
        <p class="uppercase sm:text-xs md:text-base font-thin tracking-widest mb-4 md:mb-0">
          <span>Roemah</span>
          <span>Seni</span>
        </p>
        <h1 class="text-5xl font-serif tracking-wide hero-banner mb-6">Sarasvati</h1>
        <a
          href="#start"
          class="background-transparent border border-white uppercase tracking-widest py-3 px-6 start-button"
        >Begin The Adventure</a>
        <div class="fade"></div>
      </div>
    </div>

    <div class="flex lg:flex-row flex-col p-12 lg:p-24 lg:pt-12" id="start">
      <div class="w-full lg:w-2/3 text-center lg:text-left mb-8 lg:mb-0">
        <h1 class="lg:text-4xl text-3xl mb-4 font-semibold">Welcome To Roemah Seni Sarasvati!</h1>
        <p class="mb-4">Roemah Seni Sarasvati is your number one source of art in Bandung</p>
        <div class="text-center lg:text-left mb-12">
          <p class="text-xl mb-2">Address:</p>
          <p>Sudirman Street 137</p>
          <p class="mb-5">Bandung, West Java, Indonesia</p>
          <p class>Open Daily 10 AM &ndash; 9 PM</p>
        </div>
        <a
          href="https://goo.gl/maps/GAJDpWHvs8Jk7u5X6"
          target="_blank"
          class="inline-flex dir border border-black p-3 px-10 uppercase"
        >
          <span>Show me the way</span>
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
      <div class="w-full lg:w-1/3">
        <div class="iframe-rwd flex items-center">
          <iframe
            src="https://maps.google.com/maps?q=roemah%20seni%20sarasvati&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            align="middle"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.hero {
  background-image: url("./../resources/home/banner.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 75%;
}

.fade {
  position: absolute;
  bottom: 0px;

  display: block;

  width: 100%;
  height: 50px;

  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1) 25%
  );
}

.hero-content {
  margin-top: -1rem;
}

@media screen and (min-width: 1023px) {
  .hero-banner {
    font-size: 128px !important;
  }
}

@media screen and (max-width: 639px) {
  .hero {
    min-height: 55vh;
    max-height: 65vh;
  }
}

@media screen and (min-width: 640px) and (max-width: 1023px) {
  .hero {
    min-height: 60vh;
    max-height: 70vh;
  }

  .hero-banner {
    font-size: 6rem;
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

.iframe-rwd {
  position: relative;
  padding-bottom: 65.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.iframe-rwd iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.start-button {
  transition: all 350ms ease-in-out;
  outline: none;

  &:hover {
    background-color: rgb(250, 250, 250);
    color: #212121;
    outline: 1px solid white;
  }
}
</style>

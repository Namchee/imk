<template>
  <div>
    <div class="hero flex justify-center items-center">
      <div class="hero-blur-bg"></div>
      <div class="hero-content text-white flex flex-col justify-center items-center">
        <p class="uppercase sm:text-xs md:text-base font-thin tracking-widest mb-4 md:mb-0">
          <span>Roemah</span>
          <span>Seni</span>
        </p>
        <h1 class="text-5xl font-serif tracking-wide hero-banner mb-6">Sarasvati</h1>
        <a
          href="https://goo.gl/maps/GAJDpWHvs8Jk7u5X6"
          target="_blank"
          class="inline-flex dir border-2 border-white p-3 px-10 uppercase"
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
        <div class="fade"></div>
      </div>
    </div>

    <div class="flex lg:flex-row flex-col p-8 pt-0 md:pt-4 lg:p-20 slide-y-anim anim-slow">
      <div class="w-full lg:w-7/12 mb-8 lg:mb-0 lg:px-16 lg:py-4 lg:mr-32">
        <h1
          class="lg:text-5xl text-3xl mb-4 font-medium font-serif"
        >Welcome To Roemah Seni Sarasvati!</h1>
        <p
          class="mb-12"
        >Founded in 2010, Sarasvati Art Communication &amp; Publication is dedicated towards promoting the development of Indonesian art and culture. Started as a print and online media, Sarasvati now has branched out into facilitating consultancy services, promotion, education, as well as event planning within the fields of art and culture.</p>
        <router-link
          to="/about_us"
          class="inline-flex border border-black p-3 px-10 uppercase cta"
        >About us</router-link>
      </div>
      <div class="w-full lg:w-5/12">
        <div class="iframe-rwd flex items-center p-12">
          <iframe
            src="https://maps.google.com/maps?q=roemah%20seni%20sarasvati&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            align="bottom"
          ></iframe>
        </div>
      </div>
    </div>

    <div class="grid text-white">
      <div class="content bg-dark2 p-16 px-64">
        <h1 class="font-serif lg:text-5xl text-3xl mb-4">
          Our Collections
        </h1>
        <p>
          Discover our latest collections and find what you truly love
        </p>
      </div>
      <div class="carousel mt-2">
        <hooper :itemsToShow="3">
          <slide class="flex justify-center items-center">
            slide 1
          </slide>
          <slide class="flex justify-center items-center text-black">slide 2</slide>
          <slide>...</slide>
        </hooper>
      </div>
    </div>

    <div class="lg:p-20 p-4">
      <h1 class="text-3xl lg:text-6xl font-serif text-center">Come and Join The Fray</h1>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
// import images from "./../resources/collections/*.*";
import 'hooper/dist/hooper.css';

export default {
  components: {
    Hooper,
    Slide,
  },

  mounted: function() {
    const gridItems = document.querySelectorAll(".slide-x-anim, .slide-y-anim");
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    });
    gridItems.forEach(item => {
      observer.observe(item);
    });
  }
};
</script>

<style lang="postcss" scoped>
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

@media screen and (max-width: 1023px) {
  .hero {
    min-height: 60vh;
    max-height: 65vh;
  }
}

@media screen and (min-width: 640px) and (max-width: 1023px) {
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
      transform: translateX(-20px);
    }

    & .arrow {
      left: 80%;
      opacity: 1;
    }
  }
}

.iframe-rwd {
  position: relative;
  padding-bottom: 100%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.iframe-rwd iframe {
  max-height: 400px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.cta {
  transition: all 250ms ease-out;
  font-weight: 450;

  &:hover,
  &:active {
    color: white;
    background: #212121;
  }
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 6fr 3fr 3fr;

  & .content {
    grid-row: 1 / 3;
    grid-column: 1;
  }

  & .carousel {
    grid-column: 1;
    grid-row: 2 / 4;
  }
}

.hooper-track {
  & li {
    position: relative;
    margin-left: 3rem;
    margin-right: 3rem;
  }
  
  & li:nth-child(2n + 1) {
    top: -3rem;
  }

  & li:nth-child(2n) {
    top: 3rem;
  }
}
</style>

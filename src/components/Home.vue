<template>
  <div>
    <div class="hero flex justify-center items-center">
      <div class="hero-blur-bg"></div>
      <div class="hero-content text-white flex flex-col justify-center items-center">
        <p class="uppercase sm:text-xs md:text-base font-thin tracking-widest mb-4 md:mb-0 slide-y-anim">
          <span>Roemah</span>
          <span>Seni</span>
        </p>
        <h1 class="text-5xl font-serif tracking-wide hero-banner mb-6 slide-y-anim">Sarasvati</h1>
        <a
          href="https://goo.gl/maps/GAJDpWHvs8Jk7u5X6"
          target="_blank"
          class="inline-flex dir border-2 border-white p-3 px-10 uppercase slide-y-anim"
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

    <div class="flex lg:flex-row flex-col p-8 pt-0 md:pt-4 lg:p-20 lg:p-16 slide-y-anim anim-slow">
      <div class="w-full lg:w-7/12 mb-8 lg:mb-0 lg:px-16 lg:py-4">
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
      <div class="w-full lg:w-5/12 flex items-center lg:justify-center p-4">
        <img src="./../resources/logo_full.png" alt="Roemah Seni Sarasvati" title="Roemah Seni Sarasvati" />
      </div>
    </div>

    <div class="grid text-white">
      <div class="content bg-dark2 pt-12">
        <div class="slide-y-anim flex flex-col items-center">
          <h1 class="font-serif lg:text-6xl text-3xl mb-4 line-x-anim-left line-x-anim-right line-x-white line-x-half-width">Our Collections</h1>
          <router-link
            to="/collections"
            class="inline-flex border border-white p-3 px-10 uppercase cta cta-inverse"
          >
            Show me more
          </router-link>
        </div>
        
      </div>
      <div class="carousel">
        <hooper
          :settings='collectionsSettings'
        >
          <slide v-for="item in imageList" :key="item.id" class="flex justify-center items-center">
            <div class="image-box">
              <router-link :to='"/collections#" + item.id'>
                <img :src="item.src" :title="item.title" :alt="item.title" class="px-2 lg:px-4 wd:px-5" />
              </router-link>
            </div>
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
      </div>
    </div>

    <div class="lg:p-10 lg:pt-16 md:p-8 pt-20 lg:mb-0 mb-16 wd:p-24">
      <h1 class="text-center lg:mb-12 mb-8 font-serif lg:text-6xl text-3xl line-x-anim-left line-x-anim-right slide-y-anim line-x-half-width">
        Exhibitions
      </h1>
      <hooper class="lg:p-8 exhibitionsSlider" :settings='exhibitionsSettings'>
        <slide v-for='item in exhibitionsData' :key='item.id' class="flex lg:flex-row flex-col">
          <div class="w-full lg:w-5/12 lg:mb-0 mb-4">
            <div class="image-box">
              <img :src='buildPath(item.folder)' :alt='item.title' :title='item.title'>
            </div>
          </div>
          <div class="w-full lg:w-7/12 lg:p-8 flex flex-col items-center justify-center text-center">
            <h1 class="lg:text-4xl wd:text-5xl text-2xl md:text-3xl mb-2">
              {{ item.title }}
            </h1>
            <p class="lg:text-lg font-medium mb-4">
              {{ item.curator }}
            </p>
            <p class="uppercase lg:text-lg mb-4">
              {{ getFormattedDate(item.startDate) }} &mdash; {{ getFormattedDate(item.endDate) }}
            </p>
            <p class="uppercase lg:text-lg mb-8">
              {{ item.place }}
            </p>
            <router-link :to='"/exhibitions#" + item.id' class="py-3 px-5 border text-lg border-black tracking-widest uppercase exhibition-button">
              More Info
            </router-link>
          </div>
        </slide>
        <hooper-navigation slot="hooper-addons" class="special"></hooper-navigation>
      </hooper>
    </div>

<!--
    <div class="lg:p-12 p-4 slide-y-anim flex flex-col items-center">
      <h1 class="text-3xl lg:text-6xl font-serif text-center mb-8">
        Come and Join The Fray
      </h1>
      <div class="flex flex-col items-center w-full lg:w-5/12 bg-dark2 text-white p-8">
        <h1 class="lg:text-3xl text-2xl mb-4">
          General Sudirman Street 137
        </h1>
        <p class="lg:text-2xl text-xl mb-4">
          Karanganyar, Astanaanyar
        </p>
        <p class="lg:text-2xl text-xl mb-4">
          Bandung, West Java, Indonesia
        </p>
      </div>
    </div>
    -->
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import images from "./../resources/collections/*.*";
import source from './../resources/exhibitions/data.json';
import { format } from 'date-fns';
import "hooper/dist/hooper.css";

const buildPath = './exhibitions/';

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },

  data: function() {
    return {
      imageList: [
        {
          src: images.alone.jpg,
          id: "alone",
          title: "Alone"
        },
        {
          src: images.ballerina.jpg,
          id: "ballerina",
          title: "Ballerina (1953)"
        },
        {
          src: images.erotika.jpeg,
          id: "erotika",
          title: "Erotika"
        },
        {
          src: images["greed-and-greed"].jpeg,
          id: "greed-and-greed",
          title: "Greed and Greed"
        },
        {
          src: images["lembah-kali-urang"].jpg,
          id: "lembah-kali-urang",
          title: "Lembah Kali Urang"
        },
        {
          src: images.heterotopia.jpg,
          id: "heterotopia",
          title: "Heterotopia"
        },
        {
          src: images["locus-utopia"].jpg,
          id: "locus-utopia",
          title: "Locus Utopia"
        },
        {
          src: images.melamun.jpg,
          id: "melamun",
          title: "Melamun"
        },
        {
          src: images["revolusi-prancis"].jpg,
          id: "revolusi-prancis",
          title: "Revolusi Prancis"
        },
        {
          src: images.spektral.jpg,
          id: "spektral",
          title: "Spektral"
        }
      ],

      collectionsSettings: {
        itemsToShow: 1.5,
        infiniteScroll: true,
        trimToWhiteSpace: true,
        autoPlay: true,
        wheelControl: false,
        centerMode: true,
        playSpeed: 5000,
        breakpoints: {
          1024: {
            itemsToShow: 3,
          },
          1824: {
            itemsToShow: 4,
          },
        }
      },

      exhibitionsData: source.data,
      exhibitionsSettings: {
        itemsToShow: 1,
        infiniteScroll: true,
        wheelControl: false,
        trimToWhiteSpace: true,
        autoPlay: true,
        centerMode: true,
        playSpeed: 7500,
      },
    };
  },

  mounted: function() {
    const gridItems = document.querySelectorAll(
      ".slide-x-anim, .slide-y-anim, .line-x-anim-left, .line-x-anim-right"
    );

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
  },

  methods: {
    buildPath: function(path) {
      return buildPath + path + '/banner.jpg'
    },

    getFormattedDate: function(dateString) {
      return format(new Date(dateString), "d LLLL y");
    },
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

.cta {
  transition: all 250ms ease-out;
  font-weight: 450;

  &:hover,
  &:active {
    color: white;
    background: #212121;
  }
}

.cta-inverse {
  &:hover,
  &:active {
    color: #212121;
    background-color: whitesmoke;
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
    overflow-x: hidden;
    grid-column: 1;
    grid-row: 2 / 4;
  }
}

@media screen and (max-width: 1023px) {
  .grid {
    grid-template-rows: 4.5fr 3fr 3fr;
  }
}

.hooper {
  height: 250px;
}

.exhibitionsSlider {
  height: unset;
}

.image-box {
  overflow: hidden;

  & img {
    transition: transform 350ms ease-out;
  }

  &:hover img {
    transform: scale(1.05);
  }
}

.exhibition-button {
  position: relative;
  transition: all 250ms ease;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    background-color: #212121;
    width: 100%;
    height: 100%;
    transition: all 350ms ease-out;
    transform: scaleX(0);
    transform-origin: 50% 50%;
    z-index: -1;
  }

  &:hover, &:active, &:focus {
    color: white;

    &::before {
      transform: scaleX(1);
    }
  }
}
</style>

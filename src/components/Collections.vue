<template>
  <div>
    <div class="hero">
      <div class="card p-8 md:p-12 wd:p-16 wd:py-24">
        <h1
          class="text-4xl lg:text-6xl wd:text-7xl font-serif md:text-left text-center tracking-wide mb-2"
        >Collections</h1>
        <p
          class="md:text-xl wd:text-2xl text-center md:text-left font-serif italic slide-y-anim"
        >Discover our collections and find what you love</p>
      </div>
    </div>
    <h1 class="p-12 pb-0 font-sans-alt text-center text-2xl md:text-4xl">&mdash; Our Collections &mdash;</h1>
    <div class="grid p-4 md:p-8">
      <a
        v-for="(item, index) in imageList"
        :href='"#" + item.id'
        :key="index"
        class="cursor-pointer grid-item m-6"
        @click="getItemDetail(index)"
      >
        <img :src='item.src' class="mb-2" :title="item.title" :alt="item.title" />
        <p class="title font-sans-alt text-xl md:text-3xl">{{ item.title }}</p>
        <p class="subtitle italic font-sans-alt">by - {{ item.author }}</p>
      </a>
    </div>

    <div class="details" :class="detailItem">
      <button class="menu-close" @click="killFocus()">
        <span class="menu-close-icon">&times;</span>
        <span class="menu-close-label">Close</span>
      </button>

      <div class="flex lg:flex-row flex-col items-center h-full w-full">
        <img
          :src='detailFocus ? (detailFocus.src) : ""'
          class="fade-anim lg:w-5/12"
          :class='{ "active": detailFocus !== null }'
          :alt='detailFocus ? detailFocus.title : ""'
          :title='detailFocus ? detailFocus.title : ""'
        />
        <div class="detail-text p-8 md:p-12 wd:p-20">
          <h1 class="text-3xl md:text-4xl font-sans-alt">{{ detailFocus ? detailFocus.title : "" }}</h1>
          <p
            class="subtitle italic font-sans-alt mb-5"
          >by - {{ detailFocus ? detailFocus.author : "" }}</p>
          <p
            class="md:text-lg mb-5"
          >Ini adalah karya seni yang dibuat oleh pelukis ketika ia sedang melamun memikirkan tugasnya yang menumpuk. Bukannya mengerjakan tugas, ia malah melukis. Ia pun merubah haluan dari kuli coding menjadi seniman.</p>
          <div class="flex links">
            <a
              class="cursor-pointer focus:outline-none lg:p-3 lg:rounded-full p-1 mr-2"
              @click='copyToClipboard'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path
                  d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              class="focus:outline-none lg:p-3 lg:rounded-full p-1 mx-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                />
              </svg>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              class="focus:outline-none lg:p-3 lg:rounded-full p-1 mx-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              class="focus:outline-none lg:p-3 lg:rounded-full p-1 ml-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import images from "./../resources/collections/*.*";

export default {
  data: function() {
    return {
      detailFocus: null,
      imageList: [
        {
          src: images.alone.jpg,
          id: "alone",
          title: "Alone",
          author: "Kevin Draven",
          content: "h3h3",
        },
        {
          src: images.ballerina.jpg,
          id: "ballerina",
          title: "Ballerina (1953)",
          author: "Kevin Draven",
          content: "h3h3",
        },
        {
          src: images.erotika.jpeg,
          id: "erotika",
          title: "Erotika",
          author: "Kevin Draven",
          content: "h3h3",
        },
        {
          src: images["greed-and-greed"].jpeg,
          id: "greed-and-greed",
          title: "Greed and Greed",
          author: "Kevin Draven",
          content: "h3h3",
        },
        {
          src: images["lembah-kali-urang"].jpg,
          id: "lembah-kali-urang",
          title: "Lembah Kali Urang",
          author: "Kevin Draven",
          content: "h3h3",
        },
        {
          src: images.heterotopia.jpg,
          id: "heterotopia",
          title: "Heterotopia",
          author: "Kevin Draven",
          content: "h3h3",
        },
        {
          src: images["locus-utopia"].jpg,
          id: "locus-utopia",
          title: "Locus Utopia",
          author: "Kevin Draven",
          content: "h3h3",
        },
        {
          src: images.melamun.jpg,
          id: "melamun",
          title: "Melamun",
          author: "Kevin Draven",
          content: "h3h3",
        },
        {
          src: images["revolusi-prancis"].jpg,
          id: "revolusi-prancis",
          title: "Revolusi Prancis",
          author: "Kevin Draven",
          content: "h3h3",
        },
        {
          src: images.spektral.jpg,
          id: "spektral",
          title: "Spektral",
          author: "Kevin Draven",
          content: "h3h3",
        },
      ]
    };
  },

  mounted: function() {
    const gridItems = document.querySelectorAll('.grid-item, .slide-x-anim, .slide-y-anim');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    });

    gridItems.forEach(item => {
      observer.observe(item);
    });
  },

  computed: {
    detailItem: function() {
      return {
        active: this.detailFocus !== null,
      };
    }
  },

  watch: {
    detailFocus: function() {
      if (this.detailFocus) {
        document.body.style.height = "100vh";
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.height = "unset";
        document.body.style.overflowY = "auto";
      }
    }
  },

  created: function() {
    const hash = this.$route.hash;

    if (hash) {
      const id = hash.substring(1);

      for (const image of this.imageList) {
        if (id === image.id) {
          this.detailFocus = image;
          break;
        }
      }
    }
  },

  methods: {
    getItemDetail: function(index) {
      this.detailFocus = this.imageList[index];
    },

    killFocus: function() {
      this.detailFocus = null;
      this.$router.replace(this.$route.path);
    },

    copyToClipboard: function() {
      const self = this;
      navigator.clipboard.writeText(window.location.href)
        .then(function() {
          self.$toasted.show('Copied link to clipboard', {
            position: 'bottom-center',
            duration: 2000,
          });
        });
    },
  }
};
</script>

<style lang="postcss" scoped>
.hero {
  background-image: url("./../resources/collections/banner.jpg");
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

.grid {
  column-count: 3;
  column-gap: 2rem;
  overflow-x: hidden;
}

.grid-item {
  display: inline-block;
  transition: all 300ms ease-out;
  opacity: 0;
  transform: translateY(65px);

  &:hover {
    transform: scale(1.025);
  }

  &.in-view {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 768px) {
  .grid {
    column-gap: 1rem;
    column-count: 2;
  }
}

@media screen and (max-width: 639px) {
  .grid {
    column-count: 1;
  }
}

@media screen and (min-width: 1920px) {
  .grid {
    column-count: 4;
  }
}

.details {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  opacity: 0;
  position: fixed;
  transition: all 200ms ease-in;
  pointer-events: none;

  & .detail-text {
    @for $i from 1 through 4 {
      & > *:nth-child(#{$i}) {
        transform: translateY(-50px);
        opacity: 0;
        transition: all 150ms ease-out calc(50ms + (66ms * $i));
      }
    }
  }

  &.active {
    opacity: 1;
    pointer-events: all;

    & .detail-text > * {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.menu-close {
  top: 1rem;
  right: 2rem;
  padding: 1rem;
  position: fixed;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  & .menu-close-label {
    text-transform: uppercase;
    color: gray;
    font-size: 0.75rem;
  }

  & .menu-close-icon {
    font-size: 2rem;
  }
}

@media screen and (max-width: 1023px) {
  .menu-close {
    padding: 0.5rem;
    right: 1rem;
    font-size: 1rem;
    background-color: white;

    & .menu-close-label {
      display: none;
    }

    & .menu-close-icon {
      font-size: 1.5rem;
    }
  }
}

.fade-anim {
  opacity: 0;
  transition: opacity 350ms ease-in-out;

  &.active {
    opacity: 1;
  }
}

.links > * {
  background: rgba(0, 0, 0, 0);
  transition: background 200ms;

  &:hover,
  &:focus {
    background: rgba(0, 0, 0, 0.08);
  }
}
</style>
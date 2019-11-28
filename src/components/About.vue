<template>
  <div>
    <div class="hero">
      <div class="banner p-8 md:p-12 wd:p-16 wd:py-24">
        <h1
          class="text-4xl lg:text-6xl wd:text-7xl font-serif md:text-right text-center tracking-wide mb-2"
        >{{$t('aboutUs')}}</h1>
        <p
          class="md:text-xl wd:text-2xl text-center md:text-right font-serif italic slide-y-anim"
        >{{$t('discover')}}</p>
      </div>
      <div class="fade"></div>
    </div>

    <div class="article p-4 lg:p-12">
      <div class="p-6 lg:p-12 wd:p-16">
        <h1 class="text-3xl lg:text-5xl font-sans-alt mb-3 lg:mb-8">Sarasvati?</h1>
        <p
          class="mb-6 slide-y-anim"
        >{{$t('rssIs')}}</p>
        <p class="slide-y-anim">{{$t('oneWorkProgram')}}</p>
      </div>
      <div class="p-6 lg:p-12 wd:p-16">
        <h1 class="font-sans-alt text-3xl lg:text-5xl mb-3 lg:mb-8">{{$t('vissionMission')}}</h1>
        <ol class="px-4 list-decimal text-justify">
          <li class="slide-y-anim">{{$t('vM1')}}</li>
          <li class="slide-y-anim">{{$t('vM2')}}</li>
          <li class="slide-y-anim">{{$t('vM3')}}</li>
        </ol>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row bg-dark2 text-white">
      <img
        src="./../resources/about/pic_1.jpg"
        alt="Bandung Tempoe Doeloe"
        title="Bandung Tempoe Doeloe"
        class="w-full lg:w-5/12 bg-contain slide-x-anim"
      />
      <div class="p-8 md:p-12 flex flex-col justify-center w-full lg:w-7/12">
        <h1
          class="font-sans-alt text-3xl lg:text-5xl mb-4 lg:mb-5 lg:text-left text-center"
        >{{$t('ourHistory')}}</h1>
        <p
          class="mb-8 slide-y-anim"
        >{{$t('history1')}}</p>
        <p
          class="mb-8 slide-y-anim"
        >{{$t('history2')}}</p>
        <p class="slide-y-anim">{{$t('history3')}}</p>
      </div>
    </div>

    <div class="my-12">
      <h1 class="text-center text-3xl lg:text-5xl font-sans-alt lg:mb-8 line-x-anim-left line-x-anim-right line-x-half-width">{{$t('ourFacilities')}}</h1>
      <div
        class="w-full card-anim flex lg:flex-row flex-col p-4 md:px-20 lg:px-6 justify-around lg:items-stretch items-center"
      >
        <div class="card lg:max-w-lg lg:mx-8 lg:my-0 my-4 rounded-lg overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="./../resources/about/pic_2.jpg"
            alt="Archive and Art Gallery"
            title="Archive and Art Gallery"
          />
          <div class="px-6 py-4">
            <div class="font-semibold text-2xl mb-6">{{$t('archive')}} &amp; {{$t('artGallery')}}</div>
            <p
              class="mb-4"
            >{{$t('archiveAndGallery1')}}</p>
            <p
              class="mb-4"
            >{{$t('archiveAndGallery2')}}</p>
            <p
            >{{$t('archiveAndGallery3')}}</p>
          </div>
        </div>
        <div class="card lg:max-w-lg lg:mx-8 lg:my-0 my-4 rounded-lg overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="./../resources/about/pic_3.jpg"
            alt="Exhibition and Discussion Room"
            title="Exhibition and Discussion Room"
          />
          <div class="px-6 py-4">
            <div class="font-semibold text-2xl mb-6">{{$t('exhibition')}} &amp; {{$t('discussionRoom')}}</div>
            <p>{{$t('exhibitAndDiscussion')}}</p>
          </div>
        </div>
        <div class="card lg:max-w-lg lg:mx-8 lg:my-0 my-4 rounded-lg overflow-hidden shadow-lg">
          <img class="w-full" src="./../resources/about/pic_4.jpg" alt="Art Cafe" title="Art Cafe" />
          <div class="px-6 py-4">
            <div class="font-semibold text-2xl mb-6">{{$t('artCafe')}}</div>
            <p
              class="mb-4"
            >{{$t('artCafe1')}}</p>
            <p>{{$t('artCafe2')}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    });

    const elems = document.querySelectorAll(".slide-y-anim, .slide-x-anim, .card-anim, .line-x-anim-left, .line-x-anim-right");

    elems.forEach(elem => {
      observer.observe(elem);
    });
  }
};
</script>

<style lang="postcss" scoped>
.hero {
  background-image: url("./../resources/about/banner.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
}

@media screen and (max-width: 1023px) {
  .hero {
    min-height: 60vh;
    max-height: 65vh;
  }
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

.banner {
  position: absolute;
  right: 0;
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

.article {
  column-count: 2;
  column-gap: 1rem;
  column-rule: solid 2px #313131;
}

@media screen and (max-width: 1023px) {
  .article {
    column-count: 1;
  }
}

@media screen and (max-width: 768px) {
  .banner {
    width: 85%;
    right: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero {
    justify-content: center;
  }
}

li {
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.card-anim {
  @for $i from 1 through 3 {
    & > *:nth-child(#{$i}) {
      transform: translateY(50px);
      opacity: 0;
      transition: all 200ms ease-out calc(50ms + (75ms * $i));
    }
  }

  &.in-view > * {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
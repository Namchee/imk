<template>
  <div>
    <div class="hero">
      <div class="banner p-8 md:p-12 wd:p-16 wd:py-24">
        <h1
          class="text-4xl lg:text-6xl wd:text-7xl font-serif md:text-right text-center tracking-wide mb-2"
        >About Us</h1>
        <p
          class="md:text-xl wd:text-2xl text-center md:text-right font-serif italic slide-y-anim"
        >Discover our adventurous story</p>
      </div>
    </div>

    <div class="article p-4 lg:p-12">
      <div class="p-6 lg:p-12 wd:p-16">
        <h1 class="text-3xl lg:text-5xl font-sans-alt mb-3 lg:mb-8">Sarasvati?</h1>
        <p
          class="mb-6 slide-y-anim"
        >Roemah Seni Sarasvati (RSS) is a gallery located on Jl. Jendral Sudirman 137, Bandung. RSS is the main project of Sarasvati Arts Management which was built with the aim of introducing a variety of cultural arts and diversity. RSS is also a place for exchanging ideas and concerns to create a unique identity for the city of Bandung and nurture creativity and knowledge.</p>
        <p class="slide-y-anim">One work program that is being designed is the Grote Postweg Art Project.</p>
      </div>
      <div class="p-6 lg:p-12 wd:p-16">
        <h1 class="font-sans-alt text-3xl lg:text-5xl mb-3 lg:mb-8">Vision and Mission</h1>
        <ol class="px-4 list-decimal text-justify">
          <li class="slide-y-anim">To introduce a variety of cultural arts through various quality works of art.</li>
          <li class="slide-y-anim">As a place to exchange ideas and concerns to create a unique identity for the city of Bandung.</li>
          <li class="slide-y-anim">Caring for and encouraging the development of knowledge and creativity in the city of Bandung through discussions and workshops.</li>
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
        >Our History</h1>
        <p
          class="mb-8 slide-y-anim"
        >Officially, Roemah Seni Sarasvati is open to the public since February 21, 2013. Before it was formalized as Roemah Seni Sarasvati, this building actually has been around since the 1920s and has an interesting journey as one of the historical heritages.</p>
        <p
          class="mb-8 slide-y-anim"
        >Around the 1920s, the land and building which is now Roemah Seni Sarasvati, is a bed and furniture shop registered under the name 'Moelia & Co' and a company trademark called 'Weston'. The Weston store was once listed at the Groote Postweg 91 address.</p>
        <p class="slide-y-anim">The first owner of this house was a Dutch descendant from Sukabumi. This house was later bought by Mr. The Tja Tjay to conduct textile factory production activities. And the trade name 'Weston' is still used by Mr. The Tja Tjay as the name of a textile factory run by his extended family.</p>
      </div>
    </div>

    <div class="my-12">
      <h1 class="text-center text-3xl lg:text-5xl font-sans-alt lg:mb-8">Our Facilities</h1>
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
            <div class="font-bold font-sans-alt text-2xl mb-6">Archive &amp; Art Gallery</div>
            <p
              class="mb-4"
            >Roemah Seni Sarasvati provides knowledge to the public, especially the younger generation, about the History of the City of Bandung.</p>
            <p
              class="mb-4"
            >By knowing and understanding how the City of Bandung was born, it is expected to encourage the formation of national building characters for the younger generation.</p>
            <p>The various art collections at Roemah Seni Sarasvati are intended so that the general public can get to know Indonesian artists and their important works.</p>
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
            <div class="font-bold font-sans-alt text-2xl mb-6">Exhibition &amp; Discussion Room</div>
            <p>The room at Roemah Seni Sarasvati can be used by the community to process ideas and ideas, such as meetings, discussions, workshops and seminars.</p>
          </div>
        </div>
        <div class="card lg:max-w-lg lg:mx-8 lg:my-0 my-4 rounded-lg overflow-hidden shadow-lg">
          <img class="w-full" src="./../resources/about/pic_4.jpg" alt="Art Cafe" title="Art Cafe" />
          <div class="px-6 py-4">
            <div class="font-bold font-sans-alt text-2xl mb-6">Art Cafe</div>
            <p
              class="mb-4"
            >The cafe at Roemah Seni Sarasvati offers tranquility amidst the noise of the city. The community can enjoy delicious West Javanese traditional dishes, such as bamboo rice, roasted rice, carp soup and other interesting menus.</p>
            <p>For coffee connoisseurs, Art Cafe also offers several choices such as Tjia Lie Hong coffee, Aromatic Black, Cappuccino, Espresso and others.</p>
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

    const elems = document.querySelectorAll(".slide-y-anim, .slide-x-anim, .card-anim");

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

@media screen and (min-width: 640px) and (max-width: 1023px) {
  .hero {
    height: 65vh;
  }
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
      transition: all 250ms ease-out calc(50ms + (100ms * $i));
    }
  }

  &.in-view > * {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
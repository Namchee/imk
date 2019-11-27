<template>
  <div>
    <div class="hero">
      <div class="card p-8 md:p-12 wd:p-16 wd:py-24">
        <h1
          class="text-4xl lg:text-6xl wd:text-7xl font-serif md:text-right text-center tracking-wide mb-2"
        >Exhibitions</h1>
        <p
          class="md:text-xl wd:text-2xl text-center md:text-right font-serif italic slide-y-anim"
        >Set you art journery anew</p>
      </div>
      <div class="fade"></div>
    </div>
    <div class="pt-4 lg:px-24 px-4">
      <div class="p-4 lg:p-8">
        <p class="uppercase font-semibold tracking-widest line-x-anim-right mb-4">Current</p>
        <div
          :id='item.id'
          v-for="item in currents"
          :key="item.title"
          class="flex lg:flex-row flex-col slide-y-anim anim-slow my-8 exhibitions"
        >
          <figure>
            <img :src="buildPath(item.folder)" :alt="item.title" :title="item.title" />
          </figure>
          <div class="lg:w-2/3 md:px-4 lg:px-8 py-4">
            <p class="uppercase tracking-widest text-xs line-x-anim-right mb-2">Exhibition</p>
            <a
              @click="copyToClipboard(item.id)"
              class="text-2xl md:text-4xl title cursor-pointer anchor"
            >{{ item.title }}</a>
            <p
              class="text-sm uppercase mb-2"
            >{{ getFormattedDate(item.startDate) }} &ndash; {{ getFormattedDate(item.endDate) }}</p>
            <p class="text-sm uppercase mb-8">{{ item.place }}</p>
            <p class="mb-12">{{ getFirstParagraph(item.desc) }}</p>
            <div class="flex links">
              <button
                class="cursor-pointer focus:outline-none lg:p-3 lg:rounded-full p-1 mr-2"
                @click="copyToClipboard(item.id)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"
                  />
                </svg>
              </button>
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
      <div class="p-4 lg:p-8">
        <p class="uppercase font-semibold tracking-widest line-x-anim-right mb-4">Upcoming</p>
        <div
          :id='item.id'
          v-for="item in upcomings"
          :key="item.title"
          class="flex lg:flex-row flex-col slide-y-anim anim-slow my-8 exhibitions"
        >
          <figure>
            <img :src="buildPath(item.folder)" :alt="item.title" :title="item.title" />
          </figure>
          <div class="lg:w-2/3 md:px-4 lg:px-8 py-4">
            <p class="uppercase tracking-widest text-xs line-x-anim-right mb-2">Exhibition</p>
            <a @click="copyToClipboard(item.id)" class="text-2xl md:text-4xl title anchor cursor-pointer">{{ item.title }}</a>
            <p
              class="text-sm uppercase mb-2"
            >{{ getFormattedDate(item.startDate) }} &ndash; {{ getFormattedDate(item.endDate) }}</p>
            <p class="text-sm uppercase mb-8">{{ item.place }}</p>
            <p class="mb-12">{{ getFirstParagraph(item.desc) }}</p>
            <div class="flex links">
              <button
                class="cursor-pointer focus:outline-none lg:p-3 lg:rounded-full p-1 mr-2"
                @click="copyToClipboard(item.id)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"
                  />
                </svg>
              </button>
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
      <div class="p-4 lg:p-8">
        <p class="uppercase font-semibold tracking-widest line-x-anim-right mb-4">Past Events</p>
        <div
          :id='item.id'
          v-for="item in pasts"
          :key="item.title"
          class="flex lg:flex-row flex-col slide-y-anim anim-slow my-16 exhibitions"
        >
          <figure>
            <img :src="buildPath(item.folder)" :alt="item.title" :title="item.title" />
          </figure>
          <div class="lg:w-2/3 md:px-4 lg:px-8 py-4">
            <p class="uppercase tracking-widest text-xs line-x-anim-right mb-2">Exhibition</p>
            <a class="text-2xl md:text-4xl title anchor cursor-pointer" @click="copyToClipboard(item.id)">{{ item.title }}</a>
            <p
              class="text-sm uppercase mb-2"
            >{{ getFormattedDate(item.startDate) }} &ndash; {{ getFormattedDate(item.endDate) }}</p>
            <p class="text-sm uppercase mb-8">{{ item.place }}</p>
            <p class="mb-12">{{ getFirstParagraph(item.desc) }}</p>
            <div class="flex links">
              <button
                class="cursor-pointer focus:outline-none lg:p-3 lg:rounded-full p-1 mr-2"
                @click="copyToClipboard(item.id)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"
                  />
                </svg>
              </button>
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
    <back-to-top></back-to-top>
  </div>
</template>

<script>
import { format } from "date-fns";
import source from "./../resources/exhibitions/data.json";
import BackToTop from './../components/BackToTop';

const defaultPath = "./../exhibitions/";

export default {
  components: {
    BackToTop,
  },

  data: function() {
    return {
      loading: false
    };
  },

  mounted: function() {
    const animatedItems = document.querySelectorAll(
      ".line-x-anim-left, .line-x-anim-right, .slide-y-anim"
    );

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    });

    animatedItems.forEach(item => {
      observer.observe(item);
    });

    const divs = document.getElementsByClassName('exhibitions');

    for (const div of divs) {
      if (div.id === this.$route.hash.substring(1)) {
        div.scrollIntoView();
        break;
      }
    }
  },

  computed: {
    currents: function() {
      return source.data.filter(exhibition => {
        const startDate = new Date(exhibition.startDate);
        const endDate = new Date(exhibition.endDate);

        return (
          Date.now() >= startDate.getTime() && Date.now() <= endDate.getTime()
        );
      });
    },

    upcomings: function() {
      return source.data.filter(exhibition => {
        const startDate = new Date(exhibition.startDate);
        const endDate = new Date(exhibition.endDate);

        return (
          startDate.getTime() > Date.now() && endDate.getTime() > Date.now()
        );
      });
    },

    pasts: function() {
      return source.data.filter(exhibition => {
        const startDate = new Date(exhibition.startDate);
        const endDate = new Date(exhibition.endDate);

        return (
          startDate.getTime() < Date.now() && endDate.getTime() < Date.now()
        );
      });
    }
  },

  methods: {
    changeIdx: function(idx) {
      this.currentIdx = idx;
    },

    getFirstParagraph: function(text) {
      const split = text.split("\n");

      return split[0];
    },

    getFormattedDate: function(dateString) {
      return format(new Date(dateString), "d LLLL y");
    },

    buildPath: function(path) {
      return defaultPath + path + "/thumb.jpg";
    },

    copyToClipboard: function(path) {
      const realPath = window.location.href.split('#')[0];
      const self = this;

      navigator.clipboard
        .writeText(realPath + "#" + path)
        .then(function() {
          self.$toasted.show("Copied link to clipboard", {
            position: "bottom-center",
            duration: 2000
          });
        });
    }
  }
};
</script>

<style lang="postcss" scoped>
.hero {
  background-image: url("./../resources/exhibitions/banner.jpg");
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

@media screen and (min-width: 1024px) {
  figure {
    width: 450px;
    height: auto;
  }
}

@media screen and (min-width: 1824px) {
  figure {
    width: 650px;
    height: auto;
  }
}

.title {
  font-weight: 550;
}

.card {
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

@media screen and (max-width: 768px) {
  .card {
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

.links > * {
  background: rgba(0, 0, 0, 0);
  transition: background 200ms;

  &:hover,
  &:focus {
    background: rgba(0, 0, 0, 0.08);
  }
}

.anchor {
  position: relative;

  &::after {
    position: absolute;
    margin-left: 1rem;
    transition: opacity 150ms ease;
    content: '#';
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
  }
}
</style>
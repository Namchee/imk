<template>
  <footer class="flex flex-col justify-center items-center mt-3 sm:p-20 sm:pb-8 p-12 pb-2 bg-snow">
    <h1 class="font-serif sm:text-3xl text-2xl text-center sm:mb-10 mb-8 font-medium tracking-wider">
      Sign Up for Our Newsletter
    </h1>
    <div class="flex mb-10">
      <input type="email" class="appearance-none border-gray-200 border-2 border-r-0 focus:outline-none shadow p-2 sm:w-64 rounded rounded-r-none" placeholder="@E-mail" />
      <button class="flex justify-center items-center p-2 px-4 bg-dark1 text-white uppercase focus:outline-none rounded rounded-l-none">
        Submit
      </button>
    </div>
    <div class="flex mb-8">
      <a href="http://www.facebook.com" class="cursor-pointer media-icon p-2 text-gray-500 hover:text-blue-700">
        <i class="mdi mdi-facebook text-2xl"></i>
      </a>
      <a href="http://www.twitter.com" class="cursor-pointer media-icon p-2 text-gray-500 hover:text-blue-400">
        <i class="mdi mdi-twitter text-2xl"></i>
      </a>
      <a href="http://www.instagram.com" class="cursor-pointer media-icon p-2 text-gray-500 hover:text-pink-500">
        <i class="mdi mdi-instagram text-2xl"></i>
      </a>
      <a href="http://www.youtube.com" class="cursor-pointer media-icon p-2 text-gray-500 hover:text-red-700">
        <i class="mdi mdi-youtube text-2xl"></i>
      </a>
    </div>
    <div class="hidden sm:flex sm:flex-col sm:items-center text-gray-500 text-sm">
      <span>&copy; 2019 &ndash; Roemah Seni Sarasvati</span>
      <span>All rights reserved</span>
    </div>
  </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="postcss" scoped>
.media-icon {
  transition: color 100ms ease;
}
</style>
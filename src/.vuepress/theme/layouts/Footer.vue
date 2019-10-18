<template>
  <footer class="text-center bg-dark2 text-white p-8 pb-4 pt-12 lg:p-16 lg:pt-24">
    <div>
      <h1 class="text-4xl uppercase lg:mb-1 font-thin tracking-widest">Stay In Touch</h1>
      <h3
        class="font-sans-alt hidden lg:block"
      >Get the latest information about us directly to your inbox</h3>
    </div>

    <div class="w-full flex flex-col lg:flex-row items-center justify-center my-8 lg:my-12">
      <input type="email" class="w-full lg:w-64 p-3 px-5 bg-transparent border-2 border-white" />
      <button
        class="uppercase tracking-widest px-5 border-2 p-3 lg:border-l-0 lg:border-t-2 border-t-0 w-full lg:w-auto border-white"
      >Submit</button>
    </div>

    <hr />

    <div
      class="w-full flex flex-col lg:flex-row items-center justify-between pt-5 lg:pt-12 lg:px-10"
    >
      <img
        class="hidden lg:block"
        src="./../../../resources/logo-full.png"
        alt="Roemah Seni Sarasvati logo"
        title="Roemah Seni Sarasvati"
        width="210"
        height="105"
      />
      <div class="w-full lg:w-auto text-left lg:my-0 my-2">
        <h2 class="text-xl font-sans-alt tracking-wider mb-2">Gallery</h2>
        <p class="text-sm">Sudirman Street 137</p>
        <p class="text-sm">Astanaanyar, Bandung, Indonesia</p>
        <p class="text-sm">40241</p>
      </div>
      <div class="w-full lg:w-auto text-left lg:my-0 my-2">
        <h2 class="text-xl font-sans-alt tracking-wider mb-2">Office</h2>
        <p class="text-sm">Jembatan Batu Street 50</p>
        <p class="text-sm">Tamansari, Jakarta, Indonesia</p>
        <p class="text-sm">40241</p>
      </div>
      <div class="text-left lg:my-0 my-2">
        <h2 class="text-xl font-sans-alt tracking-wider mb-2">Contact</h2>
        <p class="text-sm">
          <svg
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"
            />
          </svg>
        </p>
        <p class="text-sm">Jakarta Barat, DKI Jakarta, Indonesia</p>
        <p class="text-sm">40241</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
</style>
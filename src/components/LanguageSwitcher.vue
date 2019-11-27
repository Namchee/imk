<template>
  <div class="flex items-center text-lg uppercase">
    <span :class='activeLocale("en")' @click='changeLanguage("en")'>
      EN 
    </span>
    <span class="mx-1">
      /
    </span>
    <span :class='activeLocale("id")' @click='changeLanguage("id")'>
      ID
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    changeLanguage: function(lang) {
      this.$router.replace({ 
        name: this.$route.name,
        params: {
          lang,
        },
      });
    },

    activeLocale: function(lang) {
      return {
        'font-thin': this.$root.$i18n.locale !== lang,
        'font-semibold': this.$root.$i18n.locale === lang,
        'cursor-pointer': this.$root.$i18n.locale !== lang,
      };
    }
  },
}
</script>

<style lang="postcss" scoped>

</style>
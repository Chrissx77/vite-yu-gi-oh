<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  components: {
    Header,
    Main,
  }
}
</script>

<template>
  <Header/>
  <Main/>
  
</template>

<style lang="scss">
@use 'style/general.scss' as *;
@use 'style/partials/variables' as *;
@use 'style/partials/mixins' as *;
</style>

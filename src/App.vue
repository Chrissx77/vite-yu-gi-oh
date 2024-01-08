<script>
// importo axios
import axios from 'axios';

// importo i componenti
import Header from './components/Header.vue';
import Main from './components/Main.vue';

// importo lo store
import { store } from './store';

export default {
  components: {
    Header,
    Main,
  },

  data() {
    return {
      store,
    }
  },

  methods: {
    getCards() {
      axios
        .get(store.apiURL)
        .then(res =>{
          console.log(res.data);
          store.arrayCards = res.data.data;
        })
        .catch((error) =>{
          console.log(error);
        })
    }
  },

  created() {
    this.getCards();
  },
}
</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss">
@use 'style/general.scss' as *;
@use 'style/partials/variables' as *;
@use 'style/partials/mixins' as *;
</style>

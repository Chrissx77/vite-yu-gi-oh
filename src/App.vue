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
      if(store.searchArche){
        store.apiURL += `&archetype=${store.searchArche}`
      }
      axios
        .get(store.apiURL)
        .then(res =>{
          console.log(res.data.data);
          store.arrayCards = res.data.data;
        })
        .catch((error) =>{
          console.log(error);
        })
    },

    getArche(){
      axios
        .get(store.apiArche)
        .then(res =>{
          console.log(res.data);
          store.arrayArche = res.data;
        })
        .catch(error =>{
          console.log(error);
        })
    }
  },

  created() {
    this.getArche();
  },
}
</script>

<template>
  <Header />
  <Main @filter="getCards"/>
</template>

<style lang="scss">
@use 'style/general.scss' as *;
@use 'style/partials/variables' as *;
@use 'style/partials/mixins' as *;
</style>

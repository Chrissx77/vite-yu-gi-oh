<script>
import SingleCard from './SingleCard.vue';

import { store } from '../store';
export default {
    name: "ListCards",
    components: {
        SingleCard,
    },

    data() {
        return {
            store,
        }
    },

    computed:{
        getFound(){
            return store.arrayCards.length;
        }
    },
}

</script>

<template>
    <div class="cardsFound">

        <h2>
            Cards Found: {{ getFound }}
        </h2>
    </div>
    <div class="containerCards">
        <SingleCard v-for="card in store.arrayCards" :key="card.id" :info="card" />
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

.cardsFound {
    @include contain;
    color: white;
    padding: 10px;
    min-height: 50px;
    background-color: #353535;
}

.containerCards {
    @include contain;
    padding: 20px;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
</style>
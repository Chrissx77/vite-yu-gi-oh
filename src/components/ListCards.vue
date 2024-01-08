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
    }
}

</script>

<template>
    <div class="cardsFound">
        <h2>Found Card: 20

        </h2>
    </div>
    <div class="containerCards">
        <div v-for="card in store.arrayCards" class="card">
            <SingleCard :info="card" />
        </div>
        <!-- <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/> -->

    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

.cardsFound{
    @include contain;
    color: white;
    padding: 10px;
    min-height: 50px;
    background-color: #353535;
}

.containerCards {
    padding: 20px;
    @include contain;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    .card {
        width: calc(100% / 5 - 10px);

    }
}
</style>
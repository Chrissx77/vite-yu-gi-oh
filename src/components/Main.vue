<script>
import { store } from '../store';
import ListCards from './ListCards.vue';
export default {
    name: "Main",
    components: {
        ListCards,

    },

    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <main>
        <select class="form-select" aria-label="Default select example" v-model="store.searchArche" @change="$emit('filter')" >
            <option v-for="arche in store.arrayArche" :value="arche.archetype_name" @change="$emit('filter')" >
                {{ arche.archetype_name }}
            </option>
        </select>
        <ListCards />
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

main {
    padding: 50px;
    background-color: orange;
}
</style>

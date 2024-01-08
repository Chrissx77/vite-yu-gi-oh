<script>
import ListCards from './ListCards.vue';
export default {
    name: "Main",
    components:{
        ListCards,
    }
}

</script>

<template>
    <main>
        <ListCards/>
    </main>
    
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

main{
    padding: 50px;
    background-color: orange;
}
</style>

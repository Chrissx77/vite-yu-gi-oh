<script>
export default {
    name: "ListCards",
    components:{
        SingleCard,
    }
}

</script>

<template>
    <div class="container">
        <SingleCard />
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

</style>
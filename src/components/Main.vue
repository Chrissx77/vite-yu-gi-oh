<script>
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
    background-color: orange;
    min-height: 1000px;
}
</style>

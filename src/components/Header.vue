<script>
export default{
    name: "Header",
}

</script>

<template>
    <header>
        <img src="../assets/ygoprodeck_header_logo.png" alt="" srcset="">
        <h1>YU-Gi-Oh API</h1>
    </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

header{
    @include flexCenter;
    padding: 30px;
    img{
        padding-right: 20px;
    }
    background-color: aliceblue;
}


</style>

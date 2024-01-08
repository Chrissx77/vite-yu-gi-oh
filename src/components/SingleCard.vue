<script>
export default {
    name: "SingleCard",
    props:{
        info: Object,
    }
}

</script>

<template>
    <div class="card">
        <img :src= info.card_images[0].image_url alt="">
        <div class="info">
            <h5>
                {{ info.name }}
            </h5>
            <span>
                {{ info.type }}
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

.card {
    width: calc(100% / 5 - 10px);
}


img{
    width: 100%;
}

.info{
    font-size: 1.5rem;
    width: 250px;
    text-align: center;
}
</style>
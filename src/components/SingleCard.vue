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


img{
    width: 250px;
}

.info{
    width: 250px;
    text-align: center;
}
</style>
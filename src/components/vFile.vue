<template>
    <div class="file">
        <div class="file__name">{{ file.name }}</div>
        <div class="file__action">
            <v-button :isSmall="true" v-if="isRemoveable == false">DOWNLOAD</v-button>
            <v-button :isSmall="false" :isRed="true" v-if="isRemoveable" @click.native="$emit('remove')">REMOVE</v-button>
        </div>
    </div>
</template>

<script>
    import vButton from './vButton.vue';

    export default {
        name: "vFile",
        components: { vButton },
        props: {
            file: {
                type: [Object, File],
                default: () => {}
            },
            isRemoveable: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
    .file {
        display: flex; 
        align-items: center;
        justify-content: space-between;

        padding: 1.2rem 1.6rem;

        border-bottom: 1px solid #E7E7E7;

        &__name {
            font-size: 1.6rem;
            font-weight: 700;
        }
    }
</style>
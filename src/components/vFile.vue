<template>
    <div class="file">
        <div class="file__name">{{ file.name }}</div>
        <div class="file__action">
            <v-button :isSmall="true">DOWNLOAD</v-button>
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
                type: Object,
                default: () => {}
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

        &__name {
            font-size: 1.6rem;
            font-weight: 700;
        }
    }
</style>
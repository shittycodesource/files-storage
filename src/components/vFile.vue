<template>
    <div class="file">
        <div class="file__name">{{ file.name }}</div>
        <div class="file__action">
            <a 
                class="file__link"
                :href="file.url"
                target="_blank" 
                :download="file.name" 
            ><v-button :isSmall="true" v-if="isRemoveable == false">{{ 'Files_Download' | localize }}</v-button>
            </a>
            <v-button :isSmall="false" :isRed="true" v-if="isRemoveable" @click.native="$emit('remove')">{{ 'Files_Remove' | localize }}</v-button>
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
        background: #fff;

        &__name {
            font-size: 1.6rem;
            font-weight: 700;
        }

        &__link {
            text-decoration: none;
        }
    }
</style>
<template>
    <button class="help" type="button">
        <v-icon name="question circle" width="1.9rem" height="1.9rem"></v-icon>
        <span>HELP</span>
    </button>
</template>

<script>
    import vIcon from './vIcon.vue';

    export default {
        name: "TheHelp",
        components: {
            vIcon
        }
    }
</script>

<style lang="scss">
    .help {
        display: flex;
        align-items: center;
        gap: .8rem;

        width: 100%;

        padding: 1rem 2rem;

        font-weight: 400;
        font-size: 1.6rem;
        color: #5B93FF;
        text-decoration: none;
        text-transform: uppercase;

        cursor: pointer;
        border: none;
        border-top: 1px solid rgba(91, 147, 255, .5);
        border-bottom: 1px solid rgba(91, 147, 255, .5);
        background: rgba(91, 147, 255, .2);

        svg {
            fill: #5B93FF;
        }

    }
</style>
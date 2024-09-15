<template>
    <button class="btn" :class="[{ 'btn--red': isRed }, { 'btn--small': isSmall }]" type="button">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "vButton",
        props: {
            isRed: { type: Boolean, default: false },
            isSmall: { type: Boolean, default: false },
        }
    }
</script>

<style lang="scss">
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;

        padding: 1rem 2.4rem;

        background: #5B93FF;
        border: 1px solid #88B0FF;
        border-radius: .5rem;
        cursor: pointer;

        text-align: center;

        font-family: inherit;
        font-size: 1.6rem;
        font-weight: 700;
        color: #fff;
        text-transform: uppercase;

        svg {
            fill: #fff;
        }

        &--red {
            border-color: #CA3774;
            background: #EC4E87;
            color: #AA0048;
        }

        &--small {
            font-size: 1.2rem;
        }
    }
</style>
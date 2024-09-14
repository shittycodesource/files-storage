<template>
    <div class="drop-overlay">
        DROP IT HERE
    </div>
</template>

<script>
    export default {
        name: "vBaseOverlay",
        props: {
            isDragActive: { type: Boolean, default: false }
        }
    }
</script>

<style lang="scss">
    .drop-overlay {
        position: fixed;
        top: 0;
        left: 0 ;
        right: 0;
        bottom: 0;
        z-index: 1000;

        width: 100%;
        height: 100%;

        background: rgba(0, 0, 0, .45);

        font-size: 5rem;
        font-weight: 700;
        color: #fff;
        text-align: center;

        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
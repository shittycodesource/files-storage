<template>
    <div class="storage-space">
        <header class="storage-space__header">
            <div class="storage-space__used">
                17 MB
            </div>
            <div class="storage-space__text">
                used from 5GB
            </div>
        </header>
        <div class="storage-space__bar">
            <div class="storage-space__filled" :style="{ 'width': getWidth }"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vStorageSpace",
        computed: {
            getWidth() {
                return '40%';
            }
        }
    }
</script>

<style lang="scss">
    .storage-space {
        display: flex;
        flex-direction: column;  
        gap: 1.6rem;

        max-width: 49rem;
        margin: 3.2rem auto 2rem;

        &__header {
            display: flex;
            align-items: flex-end;
            gap: .5rem;
        }

        &__used {
            font-size: 2.5rem;
            font-weight: 800;


            line-height: .5;
        }
        
        &__text {
            font-size: 2rem;
            color: #767676;
            
            line-height: .5;
        }

        &__bar {
            border-radius: .6rem;
            background: #ECECEC;

            width: 100%;
            height: .8rem;

            position: relative;
            overflow: hidden;
        }

        &__filled {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;

            height: 100%;

            background: #5B93FF;
        }
    }
</style>
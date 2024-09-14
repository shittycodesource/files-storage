<template>
    <div class="files-container">

        <div 
            class="files-container__item"
            v-for="(data, index) in getFiles"
            :key="index"
        >
            <div class="file">
                <div class="file__main">
                    <div class="file__container">
                        X
                    </div>
                </div>
                <div class="file__name">{{ data.name }}</div>
            </div>

            <button class="files-container__button" type="button" @click="$emit('removeFile', data)">
                <v-icon name="remove" width="30px" height="30px"></v-icon>
            </button>
        </div>


    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "vFilesContainer",
            ...mapGetters(['getFiles'])
        },
        methods: {
            removeFile() {

            }
        }
    }
</script>

<style lang="scss">
    .files-container {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 1.5rem;

        padding: 1.5rem;
        
        background: #fff;
        border: .1rem solid #FF5E54;
        border-radius: 1.5rem;
        box-shadow: 0 0 2.5rem 0 rgba(0, 0, 0, .15);

        min-height: 8rem;
        margin: 0 auto;
        width: 100%;

        z-index: 1000;  

        .file__container {
            width: 100%;
            height: 10rem;
        }

        &__item {
            background: #f1f1f1;
            border: .1rem solid #f1f1f1; 

            padding: 1.5rem;

            border-radius: 1.5rem;

            position: relative;

            min-width: 18rem;
        }

        &__button {
            display: flex;
            align-items: center;
            justify-content: center;

            background: #F5FAFF;
            border: .1rem solid #D6E9FF;
            cursor: pointer;
            width: 4rem;
            height: 4rem;
            border-radius: 50rem;
            box-shadow: 0 0 1.5rem 0 rgba(0, 0, 0, .25);

            position: absolute;
            top: .5rem;
            right: .5rem;
        }
    }
</style>
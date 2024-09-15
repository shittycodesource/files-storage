<template>
    <div class="files-wrapper">
        <div class="files-wrapper__warning" v-if="data.isAnonymous && header">
            NOT VERIFIED USER
        </div>

        <header class="files-wrapper__header" v-if="header">

            <div class="files-wrapper__left">
                <div class="files-wrapper__name">
                    <template v-if="data.isAnonymous">
                        Anonymous User
                    </template>
                    <template v-else>
                        {{ data.userData.name }}
                    </template>
                </div>
                <div class="files-wrapper__text">uploaded {{ data.files.length }} files</div>
            </div>        

            <div class="files-wrapper__right">
                {{ data.createdAt.toDate() | date(false, true) }}
            </div>
        </header>
        <div class="files-wrapper__list">
            <v-file 
                v-for="(file, index) in data.files"
                :file="file"
                :isRemoveable="isRemoveable"
                :key="index"

                @remove="$emit('remove', file)"
            ></v-file>
        </div>
    </div>
</template>

<script>
    import vFile from './vFile.vue';

    export default {
        name: "vFilesWrapper",
        components: { vFile },
        props: {
            header: {
                type: Boolean,
                default: true,
            },
            isRemoveable: {
                type: Boolean,
                default: false,
            },
            data: {
                type: Object,
                default() {
                    return {
                        isAnonymous: true, 
                        userId: 0,
                        createdAt: 0,
                        files: [ { name: "Name1", url: 'fileurl...' } ]
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    .files-wrapper {
        max-width: 78rem;
        width: 100%;
        margin: 3rem auto;
        
        display: flex;
        flex-direction: column;

        border-radius: .4rem;
        border: .1rem solid #E7E7E7;


        position: relative;

        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            width: 100%;

            padding: 1.5rem;

            background: #F7F9FB;
            border-bottom: .1rem solid #E7E7E7;
        }

        &__left {
            display: flex;
            align-items: center;
            gap: .5rem;
        }

        &__name {
            font-size: 1.6rem;
            font-weight: 700;
        }

        &__text {
            color: #555555;
        }

        &__warning {
            font-size: 1.6rem;
            font-weight: 700;
            color: #AA0048;
            
            border: 1px solid #CA3774;
            background: #EC4E87;
            border-radius: .2rem;
            
            padding: .4rem 1.2rem;

            position: absolute;
            top: -2rem;
            left: -1rem;

        }

        &__list {
            width: 100%;
        }
    }
</style>
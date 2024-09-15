<template>
    <div class="home">
        <div class="container">

            <v-storage-space></v-storage-space>

            
            <transition-group tag="div" name="list" class="list" v-if="isLoaded" appear>
                <template v-for="(data, index) in files">
                    <template 
                        v-if="index == 0 || 
                            new Date(data.createdAt.toDate()).getDay() != new Date(files[index - 1].createdAt.toDate()).getDay() || 
                            new Date(data.createdAt.toDate()).getMonth() != new Date(files[index - 1].createdAt.toDate()).getMonth()
                        ">
                        <v-separator :style="`transition-delay: ${(index + .5) / 6}s`" :time="data.createdAt.toDate()" :key="data.id"></v-separator>
                    </template>

                    <v-files-wrapper 
                        :style="`transition-delay: ${index / 6}s`"
                        :data="data"
                        :key="index"
                    ></v-files-wrapper>
                </template>
            </transition-group>

        </div>
    </div>
</template>

<script>
import vStorageSpace from '../components/vStorageSpace.vue';
import vFilesWrapper from '../components/vFilesWrapper.vue';

import vSeparator from '../components/vSeparator.vue';
import { mapActions } from 'vuex';

export default {
    name: 'Home',
    components: { vStorageSpace, vFilesWrapper, vSeparator },
    data() {
        return {
            files: [],
            isLoaded: false
        }
    },
    methods: {
        ...mapActions(['fetchFiles'])
    },
    async created() {
        try {
            this.isLoaded = false;
            const files = await this.fetchFiles();

            this.files = files;

            this.isLoaded = true;
        } catch (error) {
            throw error;
        }
    }
}
</script>

<style lang="scss">
    .list { 
        &-enter {
            opacity: 0;
            transform: translateY(15px);
        }

        &-enter-to {
            opacity: 1;
            transform: translateX(0px);
        }

        &-enter-active {
            transition: all 0.5s ease;
        }

        &-leave {
            opacity: 1;
            transform: translateX(0px);
        }

        &-leave-to {
            opacity: 0;
        }

        &-leave-active {
            transition-delay: 0s !important;
        }
    }

// .file__name {
//     font-weight: 700;
//     font-size: 45px;
//     margin-bottom: 25px;
// }

// .file__button {
//     padding: 15px 25px;

//     font-family: inherit;

//     border: none;

//     background: black;
//     color: #fff;
//     font-size: 25px;
//     font-weight: 700;
//     border-radius: 15px;
//     cursor: pointer;

//     &:hover {
//         background: #1f1f1f;
//     }
// }


// span {
//     font-size: 25px;
//     opacity: .6;
//     font-weight: 700;
// }

// ul li {
//     margin-bottom: 15px;
// }
</style>

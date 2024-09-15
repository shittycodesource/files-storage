<template>
    <div class="home">
        <div class="container">

            <v-storage-space></v-storage-space>

            
            <template v-for="(data, index) in files">
                <template 
                    v-if="index == 0 || 
                        new Date(data.createdAt.toDate()).getDay() != new Date(files[index - 1].createdAt.toDate()).getDay() || 
                        new Date(data.createdAt.toDate()).getMonth() != new Date(files[index - 1].createdAt.toDate()).getMonth()
                    ">
                    <v-separator :time="data.createdAt.toDate()" :key="data.id"></v-separator>
                </template>

                <v-files-wrapper 
                    :data="data"
                    :key="index"
                ></v-files-wrapper>

            </template>

            <!-- <div class="file">
                <div class="file__name">
                    Documents

                    <ul>
                        <li v-for="file in files">
                            {{ file.name }}
                            <a :href="file.url" :download="file.name"><button class="file__button">Download</button>
                            </a>
                        </li>
                    </ul>
                </div>

                <span v-if="files.length == 0 && isLoaded">Reload the page if you don't see files</span>


            </div> -->

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

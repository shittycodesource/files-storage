<template>
    <div class="upload">
        <div class="container">
            <div class="upload__inner">

                <div class="upload__title">DROP FILES HERE</div>

                <v-drop-place @setFiles="value => files = value" :files="files"></v-drop-place>

                <v-files-wrapper v-if="files.length"
                    :header="false" 
                    :isRemoveable="true"

                    :data="{ files: files }"

                    @remove="file => files.splice(files.indexOf(file), 1)"
                ></v-files-wrapper>

                <v-loading-overlay :isVisible="isRequestActive"></v-loading-overlay>

                <v-button v-if="files.length" @click.native="send">
                    <v-icon name="send" width="2rem" height="2rem"></v-icon>
                    UPLOAD
                </v-button>
            </div>
        </div>
    </div>
</template>

<script>
import vDropPlace from '../components/vDropPlace.vue';
import vFilesWrapper from '../components/vFilesWrapper.vue';
import vButton from '../components/vButton.vue';
import vIcon from '../components/vIcon.vue';
import vLoadingOverlay from '../components/vLoadingOverlay.vue';

import { mapActions } from 'vuex';

export default {
    name: "Upload",
    components: { vDropPlace, vFilesWrapper, vButton, vIcon, vLoadingOverlay },
    data() {
        return {
            files: [],
            isRequestActive: false,
        }
    },
    methods: {
        ...mapActions(['sendFiles']),
        async send() {
            try {
                this.isRequestActive = true;
                
                await this.sendFiles(this.files);

                this.files = [];

                this.isRequestActive = false;
            } catch (error) {
                throw error;
            }
        }
    }
}
</script>

<style lang="scss">
    .upload {
        &__inner {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        &__title {
            margin: 3.2rem auto;

            font-weight: 800;
            font-size: 3.5rem;
            color: #5B93FF;
        }
    }
</style>
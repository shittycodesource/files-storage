<template>
    <div 
        class="drop-place"
        :class="{ 'drop-place--drag-active': isDragActive }"
        
        @click="openReader"

        @drop.prevent="drop" 
        @dragstart.prevent
        @dragenter.prevent="isDragActive = true"
        @dragover.prevent
        @dragleave.prevent.self="isDragActive = false"
        @dragend.prevent
    >
        
        <div class="drop-place__hero">
            <v-icon name="load" width="5.5rem" height="5.3rem"></v-icon>
        </div>

        <v-file-reader ref="input" @emitFiles="setFiles" :filesArray="files"></v-file-reader>
    </div>
</template>

<script>
    import vIcon from './vIcon.vue';
    import vFileReader from './vFileReader.vue';

    export default {
        name: "vDropPlace",
        components: { vIcon, vFileReader },
        data() {
            return {
                isDragActive: false,
            }
        },
        props: {
            files: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            dragEnter() { this.isDragActive = true },
            dragLeave() { this.isDragActive = false },
            drop(event) {
                this.$refs.input.onChange(event);
                this.isDragActive = false;
            },

            openReader() {
                this.$refs.input.$el.click();
            },

            setFiles(value) {
                this.$emit('setFiles', value);
            },
        }
    }
</script>

<style lang="scss">
    .drop-place {
        width: 50rem;
        height: 25rem;
        
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        background: #F4F4F4;
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='25' ry='25' stroke='%23CBCBCBFF' stroke-width='2' stroke-dasharray='10%2c18' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
        border-radius: 2.5rem;
        cursor: pointer;

        position: relative;

        transition: background .2s ease;

        &::before {
            content: "";

            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;

            width: 100%;
            height: 100%;

            background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='25' ry='25' stroke='%235B93FFFF' stroke-width='4' stroke-dasharray='10%2c18' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
            border-radius: 25px;

            opacity: 0;

            transition: opacity .2s ease;
        }

        &:hover {
            background: #e5e5e5;
        }

        svg {
            fill: #BBBBBB;
            transition: fill .2s ease;
        }

        &--drag-active {
            &::before {
                opacity: 1;
            }

            svg {
                fill: #5B93FF;
            }

            background: #e5e5e5;
        }
    }
</style>
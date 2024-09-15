<template>
    <nav class="nav">
        <router-link  
            v-for="(link, index) in links"
            :key="index"
            :to="link.path" 
            :exact="link.exact"

            class="nav__link"
            active-class="active"
        >
            <v-icon :name="link.icon.name" :width="link.icon.width" :height="link.icon.height"></v-icon>
            <span>{{ link.name }}</span>
        </router-link>
    </nav>
</template>

<script>
    import vIcon from './vIcon';

    export default {
        name: "vNav",
        components: {
            vIcon,
        },
        props: {
            links: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="scss">
    .nav {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        width: 100%;

        &__link {
            display: flex;
            align-items: center;
            gap: .8rem;

            width: 100%;

            padding: 1rem 2rem;

            font-weight: 400;
            font-size: 1.6rem;
            color: #737373;
            text-decoration: none;
            text-transform: uppercase;

            border-top: 1px solid #E8E8E8;
            border-bottom: 1px solid #E8E8E8;
            // background: #F1F1F1;

            border-color: transparent;
            background: transparent;

            svg {
                fill: #737373;
            }

            &:hover {
                border-color: #E8E8E8;
                background: #F1F1F1;
            }

            &.active {
                border-color: #E8E8E8;
                background: #F1F1F1;
                color: #5B93FF;
                
                svg {
                    fill: #5B93FF;
                }
            }
        }
    }
</style>  
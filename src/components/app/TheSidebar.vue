<template>
    <aside class="sidebar">
        <header class="sidebar__header">
            <img :src="require('@/assets/logo.png')">
            <div class="sidebar__title">
                FILES
            </div>
        </header>
        <main class="sidebar__main">
            <v-nav :links="upperLinks"></v-nav>
        </main>
        <footer class="sidebar__footer">
            <v-nav :links="lowerLinks"></v-nav>
            <!-- <the-help></the-help> -->
        </footer>
    </aside>
</template>

<script>
    import vNav from '../vNav.vue';
    import TheHelp from './TheHelp.vue';

    export default {
        name: "TheSidebar",
        components: {
            vNav,
            TheHelp
        },
        data() {
            return {
                upperLinks: [
                    { name: "Nav_Files", path: "/", exact: true, icon: { name: "folder", width: "2.1rem", height: "1.9rem" } },
                    { name: "Nav_Upload", path: "/upload", exact: false, icon: { name: "upload", width: "2.3rem", height: "1.9rem" } },
                    { name: "Nav_MyFiles", path: "/my", exact: false, icon: { name: "archive", width: "2.2rem", height: "1.9rem" } },
                    { name: "Nav_Login", path: "/login", exact: false, icon: { name: "login", width: "2rem", height: "2rem" } },
                ],
                lowerLinks: [
                    { name: "Nav_Settings", path: "/settings", exact: false, icon: { name: "settings", width: "2.4rem", height: "2rem" } },
                ], 
            }
        }
    }
</script>

<style lang="scss">
    .sidebar {
        display: flex;
        flex-direction: column;
        align-items: center;
        // justify-content: space

        width: 23rem;
        height: 100%;

        position: fixed;
        top: 0;
        left: 0;
        bottom: 0; 

        background: #F7F9FB;
        border: 1px solid #DBDBDB;
         
        &__header {
            height: 6rem;
            width: 100%;

            display: flex;
            align-items: center;
            gap: 5px;

            padding: 1.5rem;
            margin-bottom: 2rem;

            img {
                width: 4rem;
                height: 4rem;
            }
        }

        &__title {
            font-size: 3.5rem;
            color: #5B93FF;
            font-weight: 800;
        }

        &__main {
            display: flex;
            flex-direction: column;
            gap: 1.6rem;
            flex-grow: 1;

            width: 100%;
            padding-top: 2rem;


            position: relative;

            &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);

                width: calc(100% - 3rem);
                height: .1rem;

                background: #DFDFDF;
            }
        }

        &__footer {
            width: 100%;
            flex-grow: 0;
            padding-bottom: 2rem;
        }
    }
</style>
<template>
    <transition name="baseOverlayTransition" v-if="isVisible">
        <div class="loading-overlay" >
    
            <div class="requests-loader">
                <div class="requests-loader__letter" style="--time: 0.15s">L</div>
                <div class="requests-loader__letter" style="--time: 0.20s">o</div>
                <div class="requests-loader__letter" style="--time: 0.25s">a</div>
                <div class="requests-loader__letter" style="--time: 0.30s">d</div>
                <div class="requests-loader__letter" style="--time: 0.35s">i</div>
                <div class="requests-loader__letter" style="--time: 0.40s">n</div>
                <div class="requests-loader__letter" style="--time: 0.45s">g</div>
    
                <div class="requests-loader__dots">
                    <div class="requests-loader__dot" style="--time: 0.50s">.</div>
                    <div class="requests-loader__dot" style="--time: 0.55s">.</div>
                    <div class="requests-loader__dot" style="--time: 0.60s">.</div>
                </div>
            </div>
    
        </div>
    </transition>
</template>

<script>
    export default {
        name: "vLoadingOverlay",
        props: {
            isVisible: { type: Boolean, default: false },
        },
        watch: {
            'isVisible': {
                handler() {
                    if (this.isVisible == true) {
                        document.body.classList.add('overlayOpen');
                    } else {
                        document.body.classList.remove('overlayOpen');
                    }
                }
            }
        },
        beforeDestroy() {
            document.body.classList.remove('overlayOpen');
        },
    }
</script>

<style lang="scss">
    .loading-overlay {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .6);
        z-index: 10000;
    }

    @keyframes baseOverlayAnimaton {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .baseOverlayTransition {
        &-leave-active {
            animation: baseOverlayAnimaton .3s ease-in-out reverse;
        }

        
        &-enter-active {
            animation: baseOverlayAnimaton .3s ease-in-out;
        }
    }


    @keyframes requestsLoaderLettersAnimation {
        0% {
            transform: translateY(25px);
            opacity: 0;
        }

        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    @keyframes requestsLoaderDotsAnimation {
        0% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(-5px);
        }

        100% {
            transform: translateY(0px);
        }
    }

    .requests-loader {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .2rem;
        width: 100%;
        text-align: center;

        &__letter,
        &__dot {
            color: #fff;
            font-size: 2.5rem;
            font-weight: 800;
        }

        &__letter {
            animation: requestsLoaderLettersAnimation calc(var(--time) * 1.2) linear;
        }

        &__dot {
            animation-delay: 0ms, var(--time);
            animation-duration: var(--time), calc(var(--time));
            animation-iteration-count: 1, infinite;
            animation-name: requestsLoaderLettersAnimation, requestsLoaderDotsAnimation;
            animation-timing-function: linear, linear;
        }

        &__dots {
            display: flex;
            align-items: center;
            gap: .3rem;
        }
    }
</style>
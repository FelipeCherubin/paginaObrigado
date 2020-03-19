<template>
    <div class="slides" id="product-ref">
        <slick
            ref="slick"
            :options="slickOptions">
            <div class="item">
                <h1 class="title">Agrupamento de clientes</h1>
                <img class="photo" src="../assets/slide/Agrupamento.png" alt="">
            </div>
            <div class="item">
                <h1 class="title">Atividades</h1>
                <img class="photo" src="../assets/slide/Atividades.png" alt="">
            </div>
            <div class="item">
                <h1 class="title">Chat de colaboradores</h1>
                <img class="photo" src="../assets/slide/Chat.png" alt="">
            </div>
            <div class="item">
                <h1 class="title">Gráfico de Gestão - Custo por Colaborador</h1>
                <img class="photo" src="../assets/slide/GraficoGestao.png" alt="">
            </div>
            <div class="item">
                <h1 class="title">Gráfico de Gestão - Custo por Empresa</h1>
                <img class="photo" src="../assets/slide/GraficoGestao2.png" alt="">
            </div>
            <div class="item">
                <h1 class="title">Dashboard</h1>
                <img class="photo" src="../assets/slide/Inicio.png" alt="">
            </div>
            <div class="item">
                <h1 class="title">Ranking de colaboradores</h1>
                <img class="photo" src="../assets/slide/Ranking.png" alt="">
            </div>
            <div class="item">
                <h1 class="title">Painéis Scrum</h1>
                <img class="photo" src="../assets/slide/Scrum.png" alt="">
            </div>
        </slick>
    </div>
</template>

<script>
import Slick from 'vue-slick'
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

export default {
    components: { Slick },
    data () {
        return {
            slickOptions: {
                centerMode: true,
                centerPadding: '200px',
                lazyLoad: 'progressive',
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 300,
                pauseOnHover: true,
                useCSS: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            centerMode: true,
                            centerPadding: '40px',
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                        },
                    {
                        breakpoint: 480,
                        settings: {
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            }
        }
    },
    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },

        // Events listeners
        // handleAfterChange(event, slick, currentSlide) {
        //     console.log('handleAfterChange', event, slick, currentSlide);
        // },
        // handleBeforeChange(event, slick, currentSlide, nextSlide) {
        //     console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
        // },
        // handleBreakpoint(event, slick, breakpoint) {
        //     console.log('handleBreakpoint', event, slick, breakpoint);
        // },
        // handleDestroy(event, slick) {
        //     console.log('handleDestroy', event, slick);
        // },
        // handleEdge(event, slick, direction) {
        //     console.log('handleEdge', event, slick, direction);
        // },
        // handleInit(event, slick) {
        //     console.log('handleInit', event, slick);
        // },
        // handleReInit(event, slick) {
        //     console.log('handleReInit', event, slick);
        // },
        // handleSetPosition(event, slick) {
        //     console.log('handleSetPosition', event, slick);
        // },
        // handleSwipe(event, slick, direction) {
        //     console.log('handleSwipe', event, slick, direction);
        // },
        // handleLazyLoaded(event, slick, image, imageSource) {
        //     console.log('handleLazyLoaded', event, slick, image, imageSource);
        // },
        // handleLazeLoadError(event, slick, image, imageSource) {
        //     console.log('handleLazeLoadError', event, slick, image, imageSource);
        // },
    }
}
</script>

<style lang="scss" scoped>
.item {
    padding: 40px;
    box-sizing: border-box;
    cursor: grab;
    >.title {
        text-align: center;
        font-size: 1.75em;
        margin-bottom: 50px;
        color: #42a5f5;
        font-weight: bold;
    }
    >.photo {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

@media screen and (max-width: 550px) {
    .slides {
        display: none;
    }
}
</style>

<template>
    <el-row class="header" :class="{'shrink': scroll}">
        <el-col :span="10" class="first">
            <div class="kronome">
                <router-link to="/" class="logo" tag="img" src="https://imagens.kronomeapi.com.br/LogoKronome.png"></router-link>
                <h1 class="name">Kronome</h1>
            </div>
        </el-col>

        <el-col :span="8">
        </el-col>

        <el-col :span="10" class="second">
            
        </el-col>
    </el-row>
</template>
<script>
export default {
    data() {
        return {
            scroll: false
        }
    },
    methods: {
        addClass() {
            const shrinkHeader = 1
            const scroll = window.pageYOffset
            if (scroll >= shrinkHeader) this.scroll = true
            else this.scroll = false
        }
    },
    mounted () {
        window.addEventListener('scroll', this.addClass)
    }
}
</script>
<style lang="scss" scoped>
@import "../scss/generic/reset.scss";
@font-face {
    font-family: 'Exo-Regular';
    font-weight: normal;
    src: url(../scss/tools/fonts/Exo-Regular.ttf);
}
.header{
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65px;
    position: fixed;
    padding-top: 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: white;
    -webkit-transition: height .2s;
    -moz-transition: height .2s;
    transition: height .2s;
    transition: padding .2s;
    .first{
        .kronome{
            // background: chocolate;
            display: flex;
            justify-content: center;
            align-items: center;
            >.logo{
                height: 45px;
                object-fit: cover;
                padding: 0 10px;
            }
            >.name{
                font-size: 1.5em;
            }
        }
    }
    .second{
        .access{
            display: flex;
            justify-content: center;
            align-items: center;
            >.login{
                padding: 8px 24px;
                border-radius: 24px;
                border: 1px solid;
                background: transparent;
                font-weight: 300;
                color: #333;
                font-size: 1em;
                &:hover{
                    border-color: #42a5f5;
                    >.link { color: #42a5f5; }
                }
                >.link {
                    text-decoration: none;
                }
            }
        }
    }
    
}
.shrink { //Header Scroll Effect
    height: 65px;
    border-bottom: 1px solid #ccc;
    padding: 8px 0;
}
</style>
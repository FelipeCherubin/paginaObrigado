<template>
    <div class="header">
        <div class="text-content">
            <h1 class="title" id="contact-top-ref">Obrigado!</h1>
            
            <h2 class="subtitle">Você será redirecionado para a página de
                 Cadastro do Kronome. <br>Estamos muito felizes por sua opção, o que pudermos fazer 
                 para lhe ajudar nessa etapa de sucesso, tenha certeza estaremos com 
                 você!</h2>
        </div>
        <div class="signup-wrap">
            <em class="subtitle">Você será redirecionado em 3...2...1...</em>
        </div>
    </div>
</template>

<script>
import inputDefault from './inputDefault.vue'
import buttonDefault from './buttonDefault.vue'

export default {
    components: {
        inputDefault,
        buttonDefault
    },
    mounted () {
        this.toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        })
    }
}
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'Exo-Regular';
    font-weight: normal;
    src: url(../scss/tools/fonts/Exo-Regular.ttf);
}

.header {
    margin: 129px 0 64px;
    color: #333;
    >.text-content {
        text-align: center;
        >.title {
            font-weight: 700;
            font-size: 3.16em;
            >.highlight {
                color: #42a5f5;
            }
        }
        >.subtitle {
            margin: 24px 0 46px;
            font-size: 1.25em;
            line-height: 1.3;
            font-weight: 300;
        }
    }
    >.signup-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        >.subtitle {
            margin-bottom: 10px;
            font-style: italic;
            font-size: 1em;
        }
        >.signup-form-with-decorations-component {
            display: flex;
            align-items: center;
            position: relative;
            >.sign-up-form-wrapper {
                display: flex;
                align-items: center;
                margin: 0 48px;
                >.button-wrap {
                    width: 100%;
                    margin-left: 16px;
                }
                >.input-wrap {
                    width: 100%;
                }
            }
            >.left-decoration {
                left: 0px;
            }
            >.right-decoration {
                right: 5px;
            }
            >.left-decoration, .right-decoration {
                position: absolute;
                top: 50%;
                width: 40px;
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
            }
        }
    }
}

@media screen and (max-width: 550px) {
    .header {
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }
    .title {
        font-size: 2em !important;
    }
    .sign-up-form-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 48px;
        >.button-wrap, >.button-wrap>.button {
            width: 100%;
        }
    }
    .left-decoration, .right-decoration {
        display: none;
    }
}
</style>

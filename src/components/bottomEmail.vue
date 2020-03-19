<template>
    <div class="header" id="contact-ref">
        <div class="text-content">
            <h1 class="title">Prático, Rápido e Intuitivo <span class="highlight">Experimente grátis</span></h1>
        </div>
        <div class="signup-wrap">
            <em class="subtitle">Experimente grátis por 14 dias</em>
            <div class="signup-form-with-decorations-component">
                <div class="left-decoration">
                    <svg width="50" height="65" viewBox="0 0 61 77" xmlns="http://www.w3.org/2000/svg">
                        <title>signup decoration - left</title>
                        <g fill="#333" fill-rule="evenodd">
                            <rect transform="rotate(-55 34.731 17.932)" x="31.731" y="6.932" width="6" height="22" rx="3" />
                            <rect transform="rotate(-88 22.098 38.547)" x="19.098" y="27.547" width="6" height="22" rx="3" />
                            <rect transform="rotate(-122 34.766 60.068)" x="31.766" y="48.068" width="6" height="24" rx="3" />
                        </g>
                    </svg>
                </div>
                <div class="sign-up-form-wrapper">
                    <div class="input-wrap">
                        <input-default @blur.native="Signup(email)" v-model="email" placeholder="Insira seu e-mail" />
                    </div>
                    <div class="button-wrap">
                        <button-default @click.native="GoToRegister(email)" class="button" text="Experimente já" />
                    </div>
                </div>
                <div class="right-decoration">
                    <svg width="50" height="65" viewBox="0 0 61 77" xmlns="http://www.w3.org/2000/svg">
                        <title>signup decoration - right</title>
                        <g transform="matrix(-1 0 0 1 47 9)" fill="#333" fill-rule="evenodd">
                            <rect transform="rotate(-55 23.731 8.932)" x="20.731" y="-2.068" width="6" height="22" rx="3" />
                            <rect transform="rotate(-88 11.098 29.547)" x="8.098" y="18.547" width="6" height="22" rx="3" />
                            <rect transform="rotate(-122 23.766 51.068)" x="20.766" y="39.068" width="6" height="24" rx="3" />
                        </g>
                    </svg>
                </div>
            </div>
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
    data () {
        return {
            email: '',
            toast: null,
            emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }
    },
    methods: {
        GoToRegister (email) {
            if(this.emailRegex.exec(email)) {
                this.$node.post(`landing/signup/email`, { email })
                .then(({ data }) => location.replace("https://pay.hotmart.com/P13491653F?off=r0ecoam8&checkoutMode=6"))
                .catch(err => console.log(err))
            } else {
                this.toast.fire({ type: 'error', title: 'E-mail inválido.' })
            }
        },
        Signup (email) {
            if(this.emailRegex.exec(email)) {
                this.$node.post(`landing/signup/email`, { email })
                .then(({ data }) => this.toast.fire({ type: 'success', title: 'E-mail cadastrado!' }))
                .catch(err => console.log(err))
            } else {
                this.toast.fire({ type: 'error', title: 'E-mail inválido.' })
            }
        }
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
    margin-bottom: 64px;
    color: #333;
    >.text-content {
        text-align: center;
        >.title {
            font-weight: 700;
            font-size: 2.5em;
            >.highlight {
                color: #42a5f5;
            }
        }
    }
    >.signup-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 24px;
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
    .title {
        font-size: 1.5em !important;
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

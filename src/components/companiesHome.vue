<template>
    <div class="base-layout-segment-component">
        <div class="segment-content-container">
            <div class="companies-with-logos-component">
                <div class="paragraph-with-logos-wrapper">
                    <div class="paragraph-wrapper">
                        Junte-se a dezenas de equipes que gerenciam melhor o trabalho em equipe
                    </div>
                    <div class="image-gallery-wrapper">
                        <div class="images-gallery-row">
                            <div class="image-gallery">
                                <img class="image" src="../assets/companies-logo-gallery/band-logo.png" alt="">
                            </div>
                            <div class="image-gallery">
                                <img class="image" src="../assets/companies-logo-gallery/logo_engeseg.png" alt="">
                            </div>
                            <div class="image-gallery">
                                <img class="image" src="../assets/companies-logo-gallery/logo_inefro.png" alt="">
                            </div>
                            <div class="image-gallery">
                                <img class="image" src="../assets/companies-logo-gallery/logo_multionic.png" alt="">
                            </div>
                            <div class="image-gallery">
                                <img class="image" src="../assets/companies-logo-gallery/logo_subway.png" alt="">
                            </div>
                            <!-- <div class="image-gallery">
                                <img class="image" src="../assets/companies-logo-gallery/logo_unimed.png" alt="">
                            </div> -->
                            <div class="image-gallery">
                                <img class="image" src="../assets/companies-logo-gallery/logo_veibras.png" alt="">
                            </div>
                            <!-- <div class="image-gallery">
                                <img class="image" src="../assets/companies-logo-gallery/pinese-logo.png" alt="">
                            </div> -->
                            <div class="image-gallery">
                                <img class="image" src="../assets/companies-logo-gallery/thyssen-logo.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="signup-wrapper">
                    <em class="subtitle">Experimente grátis por 14 dias</em>
                    <div class="signup-input">
                        <div class="input-wrapper">
                            <input-default @blur.native="Signup(email)" v-model="email" placeholder="Insira seu e-mail" />
                        </div>
                        <div class="button-wrapper">
                            <button-default @click.native="GoToRegister(email)" class="button" text="Experimente já" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import buttonDefault from './buttonDefault'
import inputDefault from './inputDefault'

export default {
    components: {
        buttonDefault,
        inputDefault,
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
.base-layout-segment-component {
    background-color: rgb(249, 249, 249);
    padding: 96px 96px 50px;
    >.segment-content-container {
        max-width: 1050px;
        margin: auto;
        >.companies-with-logos-component {
            position: relative;
            >.paragraph-with-logos-wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                >.paragraph-wrapper {
                    text-align: center;
                    max-width: 650px;
                    line-height: 1.3;
                    font-size: 2.5em;
                    font-weight: 700;
                    margin-bottom: 24px;
                }
                >.image-gallery-wrapper {
                    >.images-gallery-row {
                        display: flex;
                        -webkit-box-pack: center;
                        justify-content: center;
                        flex-wrap: wrap;
                        >.image-gallery {
                            padding: 24px;
                            >.image {
                                width: 148px;
                                height: 63px;
                                object-fit: cover;
                            }
                        }
                    }
                }
            }
            >.signup-wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                >.signup-input {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    >.button-wrapper {
                        margin-left: 16px;
                    }
                }
                >.subtitle {
                    margin-top: 48px;
                    margin-bottom: 10px;
                    font-style: italic;
                    font-size: 1em;
                }
            }
        }
    }
}

@media screen and (max-width: 550px) {
    .base-layout-segment-component {
        padding: 40px 20px;
    }
    .paragraph-wrapper {
        font-size: 1.5em !important;
    }
    .image {
        width: 120px !important;
        height: 50px !important;
    }
    .signup-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 48px;
        >.input-wrapper {
            >.signup-input {
                width: 80%;
            }
        }
        >.button-wrapper, >.button-wrapper>.button {
            width: 100%;
        }
    }
}
</style>

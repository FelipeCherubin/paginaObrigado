<template>
    <div class="responsive-table">
        <slick
            ref="slick"
            :options="slickOptions">
            <div class="basic-column">
                <div class="header">
                    <div class="header-basic-plan"><h2 class="title-plan">5 Usuários</h2></div>
                    <div class="price-plan-wrapper">
                        <div class="price-plan">R$ 13.99</div>
                        <div class="month">por usuário</div>
                        <div class="button-start-wrapper">
                            <button-price-table text="Comece já" />
                        </div>
                    </div>
                </div>
                <div class="features">
                    <div class="feature-wrapper">
                        <div class="item --title">Painéis</div>
                        <div class="item basic"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Suporte</div>
                        <div class="item basic"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Treinamento personalizado</div>
                        <div class="item basic"><font-awesome-icon :icon="['fas', 'minus-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Scrum</div>
                        <div class="item basic"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Cadastro de departamentos</div>
                        <div class="item basic"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Cadastro de atividades</div>
                        <div class="item basic"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Ranking de colaboradores</div>
                        <div class="item basic"><font-awesome-icon :icon="['fas', 'minus-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Dashboards</div>
                        <div class="item basic"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Cadastro de clientes</div>
                        <div class="item basic"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Workflow</div>
                        <div class="item basic"><font-awesome-icon :icon="['fas', 'minus-circle']" size="md"/></div>
                    </div>
                </div>
            </div>
            <div class="ondemand-column">
                <div class="header">
                    <div class="header-ondemand-plan"><h2 class="title-plan">Sob Demanda</h2></div>
                    <div class="input-employees-plan-wrapper">
                        <div v-if="amount > 0" class="price-wrapper">
                            <div class="price-plan">
                                {{priceOnDemand}}
                            </div>
                            <div class="month">por usuário</div>
                        </div>
                        <div class="input-button-wrapper" :class="{'price-enabled': amount > 0}">
                            <div class="input-employees" :class="{'price-enabled': amount > 0}">
                                <input-default v-model="amount" type="number" placeholder="Quantide de usuários" />
                            </div>
                            <div class="button-start-wrapper --ondemand">
                                <button-price-table text="Comece já" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="features">
                    <div class="feature-wrapper">
                        <div class="item --title">Painéis</div>
                        <div class="item ondemand"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Suporte</div>
                        <div class="item ondemand"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Treinamento personalizado</div>
                        <div class="item ondemand"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Scrum</div>
                        <div class="item ondemand"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Cadastro de departamentos</div>
                        <div class="item ondemand"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Cadastro de atividades</div>
                        <div class="item ondemand"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Ranking de colaboradores</div>
                        <div class="item ondemand"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Dashboards</div>
                        <div class="item ondemand"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Cadastro de clientes</div>
                        <div class="item ondemand"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Workflow</div>
                        <div class="item ondemand"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                </div>
            </div>
        </slick>
    </div>
</template>

<script>
import Slick from 'vue-slick'
import inputDefault from './inputDefault.vue'
import buttonPriceTable from './buttonPriceTable.vue'
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

export default {
    components: { Slick, buttonPriceTable, inputDefault },
    data () {
        return {
            slickOptions: {
                lazyLoad: 'progressive',
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: false,
                useCSS: true
            },
            amount: '',
            priceOnDemand: null,
            toast: null
        }
    },
    mounted () {
        this.toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        })
    },
    watch: {
        amount () {
            if(this.amount >= 1 && this.amount <= 5) return this.priceOnDemand = 'R$ 13.99'
            else if(this.amount >= 6 && this.amount <= 10) return this.priceOnDemand = 'R$ 13.50'
            else if(this.amount >= 11 && this.amount <= 15) return this.priceOnDemand = 'R$ 12.65'
            else if(this.amount >= 16 && this.amount <= 25) return this.priceOnDemand = 'R$ 11.20'
            else if(this.amount >= 26 && this.amount <= 50) return this.priceOnDemand = 'R$ 10.20'
            else if(this.amount >= 50) return this.priceOnDemand = 'R$ 9.00'
            else if(this.amount < 0) return this.toast.fire({ type: 'error', title: 'Valor inválido.' })
        }
    }
}
</script>


<style lang="scss" scoped>
.responsive-table {
    padding: 0 50px;
    margin-bottom: 50px;
}

.basic-column, .ondemand-column {
    display: grid !important;
    grid-template-columns: 100%;
    grid-template-rows: 40% 60%;
    height: 500px;
    >.header {
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 25% 75%;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        >.header-basic-plan {
            background-color: #FB275D;
        }
        >.header-ondemand-plan {
            background-color: #A358DF;
        }
        >.header-basic-plan, >.header-ondemand-plan {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            >.title-plan {
                font-size: 1.75em;
                font-weight: bold;
                color: #fff;
            }
        }
        >.price-plan-wrapper, >.input-employees-plan-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            >.price-wrapper {
                >.price-plan {
                    font-size: 2.18em;
                    line-height: 38px;
                    font-weight: 400;
                    margin-bottom: 2px;
                    color: #A358DF;
                }
                >.month {
                    text-align: center;
                    color: #A358DF;
                    font-size: 0.875em;
                    font-weight: 400;
                }
            }
            >.price-plan {
                font-size: 2.18em;
                line-height: 38px;
                font-weight: 400;
                margin-bottom: 2px;
                color: #FB275D;
            }
            >.month {
                color: #FB275D;
                font-size: 0.875em;
                font-weight: 400;
            }
            >.input-button-wrapper {
                text-align: center;
                >.input-employees {
                    width: 100%;
                    >.signup-input {
                        width: 80%;
                    }
                }
                >.--ondemand {
                    margin-top: 5px;
                }
            }
            >.price-enabled {
                display: flex;
                align-items: center;
                justify-content: center;
                >.input-employees {
                    width: 50%;
                    >.signup-input {
                        width: 50%;
                    }
                }
                >.--ondemand {
                    margin-left: 5px;
                }
            }
            >.button-start-wrapper {
                margin-top: 20px;
            }
            >.--ondemand {
                margin-top: 5px;
            }
        }
    }
    >.features {
        overflow-y: scroll;
        height: 100%;
        >.feature-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            line-height: 60px;
            >.basic {
                color: #FB275D;
            }
            >.ondemand {
                color: #A358DF;
            }
            >.--title {
                justify-content: flex-start;
                font-weight: 500;
                font-size: 1em;
                text-transform: capitalize;
                margin-left: 16px;
            }
        }
    }
}

@media screen and (min-width: 550px) {
    .responsive-table {
        display: none;
    }
}
</style>

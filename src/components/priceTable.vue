<template>
    <div class="table-wrapper" id="prices-ref">
        <div class="table-component">
            <div class="table">
                <div class="header">
                    <div class="search-plan">
                        <h1 class="title">Escolha seu plano</h1>
                    </div>
                    <div class="basic-plan-wrapper">
                        <div class="header-basic-plan"><h2 class="title-plan">5 Usuários</h2></div>
                        <div class="price-plan-wrapper">
                            <div class="price-plan">
                                R$ 13.99
                            </div>
                            <div class="month">por usuário</div>
                            <div class="button-start-wrapper">
                                <button-price-table :link="'https://pay.hotmart.com/P13491653F?off=r0ecoam8&checkoutMode=6'" text="Comece já" />
                            </div>
                        </div>
                    </div>
                    <div class="ondemand-plan-wrapper">
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
                                    <button-price-table :link="priceLink" text="Comece já" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="features-rows-wrapper">
                    <div class="feature-wrapper">
                        <div class="item --title">Painéis</div>
                        <div class="item basic"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                        <div class="item ondemand"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Suporte</div>
                        <div class="item basic"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                        <div class="item ondemand"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Treinamento personalizado</div>
                        <div class="item basic"><font-awesome-icon :icon="['fas', 'minus-circle']" size="md"/></div>
                        <div class="item ondemand"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Scrum</div>
                        <div class="item basic"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                        <div class="item ondemand"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Cadastro de departamentos</div>
                        <div class="item basic"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                        <div class="item ondemand"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Cadastro de atividades</div>
                        <div class="item basic"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                        <div class="item ondemand"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Ranking de colaboradores</div>
                        <div class="item basic"><font-awesome-icon :icon="['fas', 'minus-circle']" size="md"/></div>
                        <div class="item ondemand"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Dashboards</div>
                        <div class="item basic"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                        <div class="item ondemand"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Cadastro de clientes</div>
                        <div class="item basic"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                        <div class="item ondemand"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="item --title">Workflow</div>
                        <div class="item basic"><font-awesome-icon :icon="['fas', 'minus-circle']" size="md"/></div>
                        <div class="item ondemand"><font-awesome-icon :icon="['fas', 'check-circle']" size="md"/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import inputDefault from './inputDefault.vue'
import buttonPriceTable from './buttonPriceTable.vue'

export default {
    components: {
        buttonPriceTable,
        inputDefault
    },
    data () {
        return {
            amount: '',
            priceOnDemand: null,
            toast: null,
            priceArray: ['https://pay.hotmart.com/P13491653F?off=r0ecoam8&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=a9rei53r&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=064hmt8q&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=x1j9qsur&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=dz0g3edv&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=shk8ajwe&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=c1cdq4gg&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=uraf7sqd&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=e2i8xzld&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=o270da1m&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=0af7e0ld&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=o2px92v1&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=lbeq6lv6&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=5l9fo31f&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=4h59wyae&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=tsdnbzrr&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=gkr52tgm&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=baaa6qqw&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=cnwoyzhp&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=rctoxpbl&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=tecqcegq&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=xpu5fqt6&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=1f2ytgsw&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=8azprg4z&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=d6vbi5vk&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=j0s8zjmv&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=opgb15wk&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=2493xhx2&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=mrqkskkx&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=fng8wyt3&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=zm4glmpf&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=ezia79gc&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=ezia79gc&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=4h8x3apg&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=mxihs08e&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=qn2wlsfb&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=64pj8zmd&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=64pj8zmd&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=4tr6il6c&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=6pzpu8jk&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=79cq3dfq&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=5yv5ossr&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=999l7rfe&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=por0djks&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=por0djks&checkoutMode=6','https://pay.hotmart.com/P13491653F?off=xak9y1li&checkoutMode=6'],
            priceLink: '#contact-ref'
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
            if(this.amount >= 1 && this.amount <= 5) this.priceOnDemand = 'R$ 13.99'
            else if(this.amount >= 6 && this.amount <= 10) this.priceOnDemand = 'R$ 13.50'
            else if(this.amount >= 11 && this.amount <= 15) this.priceOnDemand = 'R$ 12.65'
            else if(this.amount >= 16 && this.amount <= 25) this.priceOnDemand = 'R$ 11.20'
            else if(this.amount >= 26 && this.amount <= 50) this.priceOnDemand = 'R$ 10.20'
            else if(this.amount >= 50) this.priceOnDemand = 'R$ 9.00'
            else if(this.amount < 0) this.toast.fire({ type: 'error', title: 'Valor inválido.' })

            if(this.amount >= 1 && this.amount <= 5) this.priceLink = this.priceArray[0]
            else if(this.amount >= 6) this.priceLink = this.priceArray[this.amount - 5]
            else this.priceLink = '#contact-ref'
        }
    }
}
</script>

<style lang="scss" scoped>
.table-wrapper {
    height: 100%;
    padding: 0 50px 50px;
    >.table-component {
        display: flex;
        align-items: center;
        justify-content: center;
        >.table {
            width: 1050px;
            box-shadow: 0 0 16px 0 rgba(55,55,55,0.12);
            >.header {
                display: grid;
                grid-template-columns: 33% 34% 33%;
                grid-template-rows: 258px;
                >.search-plan {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    >.title {
                        font-weight: bold;
                        font-size: 3em;
                    }
                }
                >.search-plan, >.basic-plan-wrapper, >.ondemand-plan-wrapper {
                    border: 1px solid rgba(55,55,55,.10);
                }
                >.basic-plan-wrapper, >.ondemand-plan-wrapper {
                    display: grid;
                    grid-template-columns: 100%;
                    grid-template-rows: 30% 70%;
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
                        >.title-plan {
                            font-size: 1.75em;
                            font-weight: bold;
                            color: #fff;
                        }
                    }
                    >.price-plan-wrapper, .input-employees-plan-wrapper {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        >.price-wrapper {
                            >.price-plan {
                                font-size: 2.18em;
                                line-height: 38px;
                                font-weight: 400;
                                margin-bottom: 2px;
                                color: #A358DF;
                            }
                            >.month {
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
            }
            >.features-rows-wrapper {
                height: 100%;
                >.feature-wrapper {
                    display: grid;
                    grid-template-columns: 33% 34% 33%;
                    grid-template-rows: 48px;
                    >.item {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-right: 1px solid rgba(55,55,55,.12);
                    }
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
    }
}

@media screen and (max-width: 550px) {
    .table-wrapper {
        display: none;
    }
}
</style>

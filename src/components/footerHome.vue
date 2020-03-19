<template>
    <div class="footer">
        <el-row class="info">
            <el-col :span="7">
                <div class="direitos">
                    <div class="company">
                        <img class="logo" src="https://imagens.kronomeapi.com.br/LogoKronome.png">
                        <!-- <p>© Kronome </p> -->
                        <p>(12) 2123-0800</p>
                        <p>suporte@kronome.com</p>
                    </div>
                    <div class="icons">
                        <!-- <router-link to="/" class="apple" tag="button"><font-awesome-icon :icon="['fab', 'apple']" size="lg"/> App Store</router-link><br>
                        <router-link to="/" class="google" tag="button"><font-awesome-icon :icon="['fab', 'google-play']" size="1x"/> Google Play</router-link> -->
                    </div>
                </div>
            </el-col>
            <el-col :span="17">
                <el-col :span="8">
                    <div class="products">
                        <h2 class="title">Nosso produto</h2>
                        <ul>
                            <li><a href="#product-ref">Produto</a></li>
                            <!-- <li><a>Depoimentos</a></li> -->
                            <li><a href="#prices-ref">Preços</a></li>
                            <!-- <li><a>Corporativo</a></li>
                            <li><a>Parceiros/Afiliados</a></li>
                            <li><a>Encontre um parceiro</a></li>
                            <li><a>Templates</a></li>
                            <li><a>Integrações</a></li>
                            <li><a>Desenvolvedores</a></li>
                            <li><a>Estudantes</a></li> -->
                        </ul>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="team">
                        <h2 class="title">Nossa equipe</h2>
                        <ul>
                            <!-- <li><a>Quem somos</a></li> -->
                            <li><a href="#contact-top-ref">Contate-nos</a></li>
                            <!-- <li><a>Carreiras</a></li>
                            <li><a>Notícias</a></li>
                            <li><a>Kit de imprensa</a></li>
                            <li><a>Blog</a></li> -->
                        </ul>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="help">
                        <h2 class="title">Ajuda</h2>
                        <ul>
                            <!-- <li><a>Webinars diários</a></li> -->
                            <li><a href="https://www.youtube.com/channel/UC1ZcoUQ3cIK_eK9p-L1c_Lg/videos" target="_blank">Guias</a></li>
                            <!-- <li><a>Tradução de Serviços Profissionais</a></li> -->
                            <!-- <li><a>Suporte</a></li> -->
                        </ul>
                    </div>
                    <div class="juridic">
                        <!-- <h2 class="title">Jurídico</h2> -->
                        <ul>
                            <!-- <li><a>Termos de Serviço</a></li>
                            <li><a>Políticas de Privacidade</a></li>
                            <li><a>Segurança</a></li> -->
                        </ul>
                    </div>
                </el-col>
            </el-col>
        </el-row>
        <el-row class="copyright">
            <el-col :span="8" class="slogan">
                Feito de <font-awesome-icon class="heart" :icon="['fa', 'heart']" size="sm"/> por Kronome
            </el-col>
            <el-col :span="11">
                <p>Todos os direitos reservados © Kronome</p>
            </el-col>
            <el-col :span="5" class="social">
                <router-link to="/" class="pinterest"><font-awesome-icon :icon="['fab', 'pinterest']" size="lg"/></router-link>
                <router-link to="/" class="twitter"><font-awesome-icon :icon="['fab', 'twitter']" size="lg"/></router-link>
                <router-link to="/" class="linkedin"><font-awesome-icon :icon="['fab', 'linkedin-in']" size="lg"/></router-link>
                <router-link to="/" class="facebook"><font-awesome-icon :icon="['fab', 'facebook']" size="lg"/></router-link>
                <router-link to="/" class="youtube"><font-awesome-icon :icon="['fab', 'youtube']" size="lg"/></router-link>
                <router-link to="/" class="instagram"><font-awesome-icon :icon="['fab', 'instagram']" size="lg"/></router-link>
            </el-col>
        </el-row>
    </div>
</template>

<style lang="scss" scoped>
a {
    text-decoration: none;
}
.footer{
    height: 100%;
    padding: 5% 11%;
    background: #F9F9F9;
    >.info{
            height: 90%;
            font-size: .85em;
            >.el-col{
                height: 100%;
                >.direitos{
                    >.company{
                        line-height: 2;
                        >.logo{
                            height: 45px;
                            object-fit: cover;
                        }
                    }
                    >.icons{
                        margin-top: 40px;
                        >.apple{
                            font-size: .9em;
                            border: 1px solid;
                            background: transparent;
                            border-radius: 5px;
                            padding: 5px 13px;
                            margin-bottom: 15px;
                            color: #808080;
                            text-align: left;
                        }
                        >.google{
                            font-size: .9em;
                            border: 1px solid;
                            background: transparent;
                            border-radius: 5px;
                            padding: 5px 8px;
                            margin-bottom: 15px;
                            color: #808080;
                        }
                    }
                }
                >.el-col{
                    height: 100%;        
                    >.products{
                        >.title{
                            font-weight: 700;
                            margin-bottom: 24px;
                        }
                        >ul{
                            >li{
                                margin-bottom: 24px;
                                >a{
                                    &:hover{
                                        color: #42a5f5;
                                    }
                                }
                            }
                        }
                    }
                    >.team{
                        >.title{
                            font-weight: 700;
                            margin-bottom: 24px;
                        }
                        >ul{
                            >li{
                                margin-bottom: 24px;
                                >a{
                                    &:hover{
                                        color: #42a5f5;
                                    }
                                }
                            }
                        }
                    }
                    >.help{
                        >.title{
                            font-weight: 700;
                            margin-bottom: 24px;
                        }
                        >ul{
                            >li{
                                margin-bottom: 24px;
                                >a{
                                    &:hover{
                                        color: #42a5f5;
                                    }
                                }
                            }
                        }
                    }
                    >.juridic{
                        margin-top: 50px;
                        >.title{
                            font-weight: 700;
                            margin-bottom: 24px;
                        }
                        >ul{
                            >li{
                                margin-bottom: 24px;
                                >a{
                                    &:hover{
                                        color: #42a5f5;
                                    }
                                }
                            }
                        }
                    }
                }
            }
    }
    >.copyright{
        display: flex;
        align-items: center;
        height: 30%;
        width: 100%;
        >.slogan{
            font-size: .9em;
            color: rgb(128, 128, 128);
            >.heart{
                color: red;
            }
        }
        >.social{
            >.pinterest{
                padding-left: 5px;
                color:  rgb(128, 128, 128);
                &:hover{
                    color: #E60023;
                }
            }
            >.twitter{
                padding-left: 5px;
                color:  rgb(128, 128, 128);
                &:hover{
                    color: #1DA1F2;
                }
            }
            >.linkedin{
                padding-left: 5px;
                color:  rgb(128, 128, 128);
                &:hover{
                    color: #0073B0;
                }
            }
            >.facebook{
                padding-left: 5px;
                color:  rgb(128, 128, 128);
                &:hover{
                    color: #4267B2;
                }
            }
            >.youtube{
                padding-left: 5px;
                color:  rgb(128, 128, 128);
                &:hover{
                    color: #FF0000;
                }
            }
            >.instagram{
                padding-left: 5px;
                color:  rgb(128, 128, 128);
                &:hover{
                    color: #A1339C;
                }
            }
        }
    }
}
@media screen and (max-width: 640px) {
    .footer{
        padding: 5% 2%;
    }
}
@media screen and (max-width: 550px) {
    .footer{
        display: none;
    }
}
</style>

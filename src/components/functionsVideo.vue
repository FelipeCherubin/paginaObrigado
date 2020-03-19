<template>
    <div class="functions">
        <el-row class="first">
            <el-col :span="11">
                <div class="description">
                    <h2 class="title">Prático e rápido</h2>
                    <h3 class="subtitle">Organize seus projetos em um só lugar</h3>
                    <p class="text">Atinja os objetivos sem deixar para última hora. Acompanhe o status da sua equipe em tempo real para lidar com riscos e reduzir custos.</p>
                </div>
            </el-col>
            <el-col :span="13">
                <div class="example">
                    <img class="screenshot" src="../assets/examples/3.png">
                </div>
            </el-col>
        </el-row>

        <el-row class="second">
            <el-col :span="13">
                <div class="example">
                    <img class="screenshot" src="../assets/examples/5.png">
                </div>
            </el-col>
            <el-col :span="11">
                <div class="description">
                    <h2 class="title">Simples e Eficaz</h2>
                    <h3 class="subtitle">Não tenha atrasos inesperados</h3>
                    <p class="text">Integre toda sua equipe e organize de forma simples e rápida as informações sobre clientes, projetos e atividades.</p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style lang="scss" scoped>
.functions{
    height: 100%;
    padding: 10% 10%;
    >.first{
        display: flex;
        align-items: center;
        width: 100%;
        >.el-col{
            >.description{
                >.title{
                    color:  rgb(0, 169, 255);
                    font-weight: 500;
                    margin-bottom: 24px;
                }
                >.subtitle{
                    line-height: 1.3;
                    font-size: 2.5em;
                    font-weight: bold;
                }
                >.text{
                    padding-top: 16px;
                    // width: 100%;
                    line-height: 27px;
                    // text-align: justify;
                    margin-bottom: 24px;
                }
                >.link{
                    color:rgb(51, 51, 51);
                    &:hover{
                        color: #42a5f5;
                    }
                }
            }
            >.example{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 40px;
                >.screenshot{
                    width: 100%;
                    object-fit: cover;
                }
            }
        }
    }
    >.second{
        display: flex;
        align-items: center;
        padding-top: 140px;
        >.el-col{
            height: 100%;
            >.description{
                >.title{
                    color:  rgb(0, 204, 111);
                    font-weight: 500;
                    margin-bottom: 20px;
                }
                >.subtitle{
                    line-height: 1.3;
                    font-size: 2.5em;
                    font-weight: bold;
                }
                >.text{
                    padding-top: 18px;
                    line-height: 30px;
                    margin-bottom: 26px;
                }
                >.link{
                    color:rgb(51, 51, 51);
                    &:hover{
                        color: #42a5f5;
                    }
                }
            }
            >.example{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 40px;
                >.screenshot{
                    width: 100%;
                    object-fit: cover;
                }
            }
        }
    }
}
@media screen and (max-width: 680px) {
    .functions{
        height: 100%;
        padding: 30px 5px;
        >.first{
            display: flex;
            flex-direction: column;
            >.el-col{
                width: 100%;
                padding: 0 20px 50px 20px;
                >.description{
                    >.subtitle{
                        font-size: 2em;
                    }
                }
                >.example{
                    padding-left: 0;
                    padding-top: 30px; 
                }
            }
        }
        >.second{
            display: flex;
            flex-direction: column-reverse;
            padding-top: 100px;
            >.el-col{
                width: 100%;
                padding: 0 20px 50px 20px;
                >.description{
                    >.subtitle{
                        font-size: 1.8em;
                    }
                    >.text{
                        line-height: 27px;
                    }
                }
                >.example{
                    padding-right: 0;
                    padding-top: 0;
                }
            }
        }
    }
}
</style>
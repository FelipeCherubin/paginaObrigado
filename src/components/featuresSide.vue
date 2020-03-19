<template>
    <div class="features-wrapper">
        <div class="features">
            <div class="feature">
                <div class="icon"><font-awesome-icon :icon="['fas', 'tasks']" size="lg"/></div>
                <h1 class="title">Tarefas</h1>
                <div class="subtitle">
                    Atribua tarefas para sua equipe de forma simples e 
                    acompanhe o que todos estão fazendo em tempo real.
                </div>
            </div>
            <div class="feature">
                <div class="icon"><font-awesome-icon :icon="['fas', 'users']" size="lg"/></div>
                <h1 class="title">Equipes</h1>
                <div class="subtitle">
                    Veja o desempenho de cada colaborador ou grupo de colaboradores 
                    e tenha uma visão da capacidade de cada um.
                </div>
            </div>
            <div class="feature">
                <div class="icon"><font-awesome-icon :icon="['fas', 'project-diagram']" size="lg"/></div>
                <h1 class="title">Projetos</h1>
                <div class="subtitle">
                    Acompanhe em tempo real o status de todos os projetos em sua empresa.
                </div>
            </div>
            <div class="feature">
                <div class="icon"><font-awesome-icon :icon="['fas', 'building']" size="lg"/></div>
                <h1 class="title">Clientes</h1>
                <div class="subtitle">
                    Tenha a visão de quanto tempo cada cliente demanda de sua equipe.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.features-wrapper {
    padding: 50px 50px 0;
    >.features {
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        flex-wrap: wrap;
        >.feature {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 20px;
            >.icon {
                margin: 10px 0;
            }
            >.title {
                font-size: 1.3em;
                font-weight: bold;
                margin-bottom: 10px;
            }
            >.subtitle {
                text-align: center;
                max-width: 250px;
                margin-bottom: 10px;
            }
        }
    }
}
</style>

<template>
    <div id="form">
        <div >
            <Message v-bind:msg = "msgForm" v-if="msg"/>
        </div>
        <form action="" class="w-96 m-auto" id="burger-form" @submit="createBurger">
            <div class="flex flex-col mb-20">
                <label class="font-bold mb-11 pl-3 pb-1 border-l-4 border-yellow-400" for="nome">Nome</label>
                <input class="-mt-10" id="nome" name="name" v-model="nome" placeholder="Digite seu nome" type="text">
            </div>
            <div class="pb-16">
                <label class="font-bold pl-3 border-l-4 border-yellow-400" for="pao">Escolha o pao: </label>
                <select class="mt-5" name="pao" id="pao" v-model="pao">
                    <option v-bind:value="pao.tipo" v-for="pao in paes" v-bind:key="pao.id"> {{ pao.tipo }} </option>
                </select>
            </div>
            <div class="input-container">
                <label class="font-bold pl-3 border-l-4 border-yellow-400" for="carne">Escolha sua carne: </label>
                <select class="mt-5" name="carne" id="carne" v-model="carne">
                    <option v-bind:value="carne.tipo" v-for="carne in carnes" v-bind:key="carne.id"> {{ carne.tipo }} </option>
                </select>
            </div>

            <div class="pt-24">
                <label class="font-bold pl-3 border-l-4 border-yellow-400" for="pao" id="op-title">Seleciona os opcionais</label>
                <div v-for="opcional in opcionaisdata" v-bind:key="opcional.tipo" >
                    <input class="mt-10" type="checkbox" name="opcionais" id="" v-model="opcionais" v-bind:value="opcional.tipo">
                    <span>{{ opcional.tipo }} </span>
                </div>
            </div>
            <div class="pt-7">
                <input type="submit" class="font-bold m-auto cursor-pointer border-solid border-cinza bg-cinza text-yellow-400 w-72 pt-2 pb-2 hover:bg-transparent hover:text-cinza" value="Criar meu Burger!">
            </div>
        </form>
    </div>
</template>

<script>
import Message from './Message.vue'

export default {
    name: "BurgerForm",
    components: {
        Message
    },
    data() {
        return {
            msgForm: "",
            msg: false,
            pedidoSet: false,
            carnes: null,
            paes: null,
            opcionaisdata: null,
            nome: null,
            carne: null,
            pao: null,
            opcionais: [],
            status: "Solicitado"
            }
        },
    methods: {
        async getIngrdientes() {
            const req = await fetch("http://localhost:3000/ingredientes")
            const data = await req.json()
            
            this.carnes = data.carnes
            this.paes = data.paes
            this.opcionaisdata  = data.opcionais
        },

        async createBurger(e) {
            e.preventDefault()
            const data = {
                nome: this.nome,
                carne: this.carne,
                pao: this.pao,
                opcionais: this.opcionais,
                status: "Solicitado"
            }

            const req = await fetch("http://localhost:3000/burgers", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            }) 

            const resposta = await req.json()
            
            // Mostrando mensagem
            this.msgForm = `Pedido N ${resposta.id} criado com sucesso!`
            this.msg = true

            // Limpando campos 

            this.nome = ""
            this.carne = ""
            this.pao = ""
            this.opcionais = []

            setTimeout(() => this.msg = false, 3000)
            
        }
    },
    mounted() {
        this.getIngrdientes()
    }
}
</script>


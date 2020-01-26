<template>
  <div class="container">
    Escolha o estado
    <select v-model="uf" class="form-control">
      <option
        v-for="item in listaUf.data"
        v-bind:key="item.nome"
        :value="item"
      >{{item.nome}} - {{item.sigla}}</option>
    </select>
    <br />
    Escolha a cidade
    <select v-model="cidade" class="form-control">
      <option
        v-for="item in listaCidade"
        v-bind:key="item.nome"
        :value="item"
      >{{item.nome}}</option>
    </select>
    <br>
    <div v-if="cidade">
      {{ resultado }}
    </div>
  </div>
</template>

<script>

import AsyncComputed from 'vue-async-computed'
import { localService } from "../services/localService";
import Vue from 'vue'

Vue.use(AsyncComputed)

export default {
  name: "Home",
  data() {
    return {
      uf: "",
      listaUf: "",
      cidade: "",
    };
  },
  async mounted() {
    await localService.getAllUF().then(resp => this.listaUf = this.orderby(resp));
  },
  methods: {
    orderby: function(lista){
      lista.data.sort(function (a, b) {
        if (a.nome > b.nome) { return 1 }
        if (a.nome < b.nome) { return -1 }
        return 0;
      });
      return lista;
    }
  },
  asyncComputed: {
    listaCidade: function() {
      if(this.uf.id){
        return localService.getCidades(this.uf.id).then(resp => this.orderby(resp).data);
      }
    },
    resultado: function(){
      return `${this.cidade.nome} - ${this.uf.sigla}`;
    }
  },
};
</script>

<style>
</style>
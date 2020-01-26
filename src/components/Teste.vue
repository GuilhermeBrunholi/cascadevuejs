<template>
  <div class="container">
    <input v-model="valor" />
    <button v-on:click="add()">Add</button>
    <br />
    <br />Primeiro valor:
    <select v-model="valor1">
      <option 
        v-for="item in lista1" 
        v-bind:key="item.id" 
        :value="item">
        {{item.message}}
      </option>
    </select>
    <br />
    valor do valor 1: {{ valor1 }}
    <br />
    <div v-if="valor1 != '' || valor1.id < 1">
      <br />Segundo valor:
      <select v-model="valor2">
        <option 
          v-for="item in lista2" 
          v-bind:key="item.id" 
          :value="item">
          {{item.message}}
        </option>
      </select>
      <br />
      valor do valor 2: {{ valor2 }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Teste',
  data() {
    return {
      info: null,
      valor: "",
      valor1: "",
      lista1: [
        { id: 0, message: "" },
        { id: 1, message: "Primeiro" },
        { id: 2, message: "Segundo" },
        { id: 3, message: "Terceiro" }
      ],
      valor2: ""
      //lista2: []
    };
  },
  computed: {
    lista2: function() {
      var lista = [
        { id: 0, message: "" },
        { id: 4, message: "Quarto", lista1Id: 1 },
        { id: 5, message: "Quinto", lista1Id: 2 },
        { id: 6, message: "Sexto", lista1Id: 3 }
      ];
      return lista.filter(e => e.lista1Id == this.valor1.id);
    }
  },
  methods: {
    add() {
      this.lista1.push({ id: this.lista1.length, message: this.valor });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

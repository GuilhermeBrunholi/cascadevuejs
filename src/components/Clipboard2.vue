<template>
  <div>
    <select v-model="formatSelected" class="form-control">
      <option v-for="item in formats" v-bind:key="item" :value="item">{{item}}</option>
    </select>

    <div class="container" v-if="formatSelected == '1 x 1'">
      <div id="div1" class="cor ajusta" @click="swap('div1')"></div>
    </div>

    <div class="container" v-if="formatSelected == '2 x 1'">
      <div id="div1" class="cor ajusta" @click="swap('div1')"></div>
      <div id="div2" class="cor ajusta" @click="swap('div2')"></div>
    </div>

    <div class="container" v-if="formatSelected == '3 x 2'">
      <div id="div1" class="cor ajusta" @click="swap('div1')"></div>
      <div id="div2" class="cor ajusta" @click="swap('div2')"></div>
      <div id="div3" class="cor ajusta" @click="swap('div3')"></div>
      <div id="div4" class="cor ajusta" @click="swap('div4')"></div>
      <div id="div5" class="cor ajusta" @click="swap('div5')"></div>
      <div id="div6" class="cor ajusta" @click="swap('div6')"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idSelect: "",
      formatSelected: "1 x 1",
      formats: ["1 x 1", "2 x 1", "3 x 2"]
    };
  },
  methods: {
    swap: function(divSelect) {
      var reader = new FileReader();

      reader.onload = function(result) {
        let img = document.getElementById(divSelect);
        img.style = `background-image: url('${result.target.result}');`;
      };
      // Recebe o valor do clipboard
      document.getElementById(divSelect).onpaste = function(event) {
        let items = event.clipboardData.items;
        for (var itemIndex in items) {
          let item = items[itemIndex];
          if (item.kind == "file") {
            reader.readAsDataURL(item.getAsFile());
          }
        }
      };
    },
    save: function() {
      var listId = ["div1", "div2", "div3", "div4", "div5", "div6"];
      var listTags = [];
      for (let i = 0; i < listId.length; i++) {
        listTags.push({
          div: listId[i],
          src: document.getElementById(listId[i]).src
        });
      }
      console.log(listTags);
    }
  }
};
</script>

<style>
.container {
  display: grid;
  grid-template-rows: 300px 300px 300px;
  grid-template-columns: 300px 300px;

  grid-gap: 10px;
}

.cor {
  background-color: azure;
}

img {
  justify-content: center;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
}

.ajusta {
  width: 200px;
  height: 200px;
  display: inline-block;
  background-size: contain; /* faz a imagem ficar contida dentro do elemento */
  background-repeat: no-repeat; /* faz a imagem não ser repetida */
  background-position: center; /* centra a imagem independentemente do tamanho ou largura do elemento */
  background-color: #ffffff;
  border: 2px solid #ffffff;
}
</style>
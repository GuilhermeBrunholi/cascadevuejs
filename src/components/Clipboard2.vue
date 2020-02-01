<template>
  <div class="container">
    <div>
      <img id="div1" class="box" @click="metodo('div1')"/>
      <img id="div2" class="box" @click="metodo('div2')"/>
      <img id="div3" class="box" @click="metodo('div3')"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selecionado: ''
    };
  },
  methods: {
    metodo: function(id){
      this.selecionado = id;
      console.log(this.selecionado);
    }
  },
  mounted() {
    var reader = new FileReader();

    reader.onload = function(result) {
      let img = document.getElementById(this.selecionado);
      img.src = result.target.result;
      img.className = "box";
    };
    // Recebe o valor do clipboard
    document.getElementById(this.selecionado).onpaste = function(event) {
      alert();
      let items = event.clipboardData.items;
      for (var itemIndex in items) {
        let item = items[itemIndex];
        if (item.kind == "file") {
          reader.readAsDataURL(item.getAsFile());
        }
      }
    };
  }
};
</script>

<style>
#container {
  width: 100%;
  border-color: blue;
  text-align: center;
}

.main {
  display: inline-block;
}

.box {
  display: inline-block;
  max-width: 200px;
  max-height: 200px;
  margin: 10px 20px;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
}


</style>
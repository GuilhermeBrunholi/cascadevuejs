<template>
  <div class="container">
    <input type="text" placeholder="Cole sua imagem aqui" />
      <div id="main" class="row">

      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idDelete: ""
    };
  },
  mounted() {
    var cont = 0;
    var reader = new FileReader();
    // cria onde vai mostrar a imagem
    reader.onload = function(result) {
      cont++;
      let id = cont.toString(); // converte o valor para ser armazenado no id da div
      
      // Cria div com o id
      let div = document.createElement("div"); // converte o valor para ser armazenado no id da div
      div.id = id;
      document.getElementById("main").appendChild(div);

      // Cria a tag IMG passando o SRC o valor do clipboard
      let img = document.createElement("img");
      img.className = "box";
      img.src = result.target.result;
      document.getElementById(id).appendChild(img);

      // Cria o BUTTON que exclui a div
      let btn = document.createElement("button");
      btn.innerHTML = "Excluir";
      btn.onclick = function() {
        document.getElementById("main").removeChild(div);
        cont--;
      };
      document.getElementById(id).appendChild(btn);
    };

    // Recebe o valor do clipboard
    document.querySelector("input").onpaste = function(event) {
      let items = event.clipboardData.items;
      for (var itemIndex in items) {
        let item = items[itemIndex];
        if (item.kind == "file" && cont < 6) {
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

.main{
    display: inline-block;
}
.box {
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 10px 20px;
}

#box-color {
  background-color: rgb(255, 255, 255);
}
</style>
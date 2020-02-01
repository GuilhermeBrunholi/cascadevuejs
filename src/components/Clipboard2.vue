<template>
  <div class="container">
    <div>
      <div class="box" @click="swap('div1')">
        <img id="div1" />
      </div>
      <div class="box" @click="swap('div2')">
        <img id="div2" />
      </div>
      <div class="box" @click="swap('div3')">
        <img id="div3" />
      </div>
      <button @click="save">click</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idSelect: ""
    };
  },
  methods: {
    swap: function(divSelect) {
      console.log(` ${this.idSelect}`);

      var reader = new FileReader();

      reader.onload = function(result) {
        console.log(`div que foi trocada ${divSelect}`);
        let img = document.getElementById(divSelect);
        img.src = result.target.result;
        img.className = "box";
      };
      // Recebe o valor do clipboard
      document.getElementById(divSelect).onpaste = function(event) {
        console.log(`div que foi colado ${divSelect}`);
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
      var listId = ["div1", "div2", "div3"];
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
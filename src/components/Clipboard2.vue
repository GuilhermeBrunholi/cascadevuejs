<template>
  <div class="container">
    <div>
      <img id="div1" class="box" />
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
  methods: {
    
  },
  mounted() {
    var reader = new FileReader();

    reader.onload = function(result) {
      let img = document.getElementById("div1");
      img.src = result.target.result;
      img.className = "box";
    };
    // Recebe o valor do clipboard
    document.getElementById("div1").onpaste = function(event) {
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
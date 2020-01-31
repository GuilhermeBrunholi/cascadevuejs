<template>
  <div class="container">
    <div>
      <div id="1" class="box" style="cursor: pointer;"></div>
      <div id="2" class="box"></div>
      <div id="3" class="box"></div>
      <div id="4" class="box"></div>
      <div id="5" class="box"></div>
      <div id="6" class="box"></div>
      <div id="7" class="box"></div>
      <div id="8" class="box"></div>
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
    // Recebe o valor do clipboard
    // document.querySelector("input").onpaste = function(event) {
    //   let items = event.clipboardData.items;
    //   for (var itemIndex in items) {
    //     let item = items[itemIndex];
    //     if (item.kind == "file" && cont < 6) {
    //       reader.readAsDataURL(item.getAsFile());
    //     }
    //   }
    // };
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
  background-color: rgb(255, 255, 255);
}
</style>
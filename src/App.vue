<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export  default  {
  name:"App"
}
</script>
<style lang="scss">
@import "store/outerStyle.css";
@import "store/innerStyle.css";
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.smallTitle{
  height: 20px;
  font-weight: bolder;
  font-size: 1.125rem;
  margin: 10px 0 20px;
}
.content{
  padding: 0 40px;
}
</style>

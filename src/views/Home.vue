<template>
<div class="wrap">

  <div class="styled-masthead css-ys0l65 e1cbhapq0">
    <headerPart />
  </div>
  <div>
    <router-view />
  </div>
  <footerPart />
</div>
</template>

<script>
import headerPart from "@/components/headerPart";
import Main from '@/views/Main'
import footerPart from "@/components/footerPart";
import {HomeAPI} from "@/requireAPI";
export default {
  name: "Home",
  data(){
    return {
      pageData:{}
    }
  },
  async created(){
    // await this.getData()
  },
  methods:{
    // async getData(){
    //   this.pageData = await this.$axios({
    //     url:HomeAPI,
    //     method:'get'
    //   })
    // }
  },
  components:{headerPart,footerPart,Main}
}
</script>

<style scoped>

</style>
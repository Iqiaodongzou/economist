<template>
  <main role="main" id="content" v-if="Object.values(this.pageData).length !== 0">
    <navPart  :data="hasPart.parts[0]"/>
    <topPart :worldInBrief="worldInBrief" :data="hasPart.parts[1]" />
    <contentPart :hasPart="hasPart" />
    <grayPart :specialReport="specialReport" :currentEdition="currentEdition" />
    <little-part :sections="sections" />
  </main>
</template>

<script>
import {HomeAPI} from "@/requireAPI"
import contentPart from "@/views/Main/components/contentPart";
import littlePart from "@/views/Main/components/littlePart";
import grayPart from "@/views/Main/components/grayPart";
import topPart from "@/views/Main/components/topPart";
import navPart from "@/views/Main/components/navPart";
export default {
  name: "index",
  data(){
    return {
      pageData:{},
      hasPart:{},
      sections:{},
      specialReport:{},
      currentEdition:{},
      worldInBrief:{},
    }
  },

  async mounted(){
    // await this.getData();
    this.pageData = this.$store.state.templateData
    this.splitData(this.pageData);
  },
  methods:{
    async getData(){
      await this.$axios({
        url:HomeAPI,
        method:'get'
      }).then(res=>{
        this.pageData = res.data
        this.splitData(this.pageData)

      })

    },
    splitData(data){
      this.getContentPartsData(data)
      this.getLittlePart(data)
      this.getGrayPart(data)
      this.getWorldInBrief(data);
    },
    // 获取hasPart数据
    getContentPartsData(data){
      this.hasPart = data?.props?.pageProps?.storyCollection?.hasPart || {}
    },
    getLittlePart(data){
      this.sections = data?.props?.pageProps?.sections || {}
    },
    getGrayPart(data){
      this.specialReport = data?.props?.pageProps?.specialReport || {}
      // this.currentEdition = data?.props?.pageProps?.storyCollection || {}
      let storyCollection = data.props.pageProps.storyCollection.hasPart.parts
      storyCollection[storyCollection.length-1].hasPart.parts.map(item=>{
        console.log(" ------ 分割线 ------")
        item.isPartOf.map((item,index)=>{
          console.log(JSON.stringify(item))
          // console.log(index + "  --- " + item.context.headline + " ----- " + item.context.description)
        })
      })
    },
    getWorldInBrief(data){
      this.worldInBrief = data.props.pageProps.worldInBrief
    }
  },
  components:{contentPart,littlePart,grayPart,navPart,topPart}
}
</script>

<style scoped lang="scss">
.wrapContent{
  max-width: 89.5rem;
  margin: auto;
}

</style>
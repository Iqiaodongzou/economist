<template>
  <div>
    <main role="main" id="content" v-if="Object.values(this.pageData).length !== 0">
      <navPart  :data="hasPart?.parts[0]"/>
      <topPart :worldInBrief="worldInBrief" :data="hasPart.parts[1]" />
      <contentPart :hasPart="hasPart" />
      <grayPart :specialReport="specialReport" :currentEdition="currentEdition" />
      <little-part :sections="sections" />
    </main>
  </div>
</template>

<script>
import {api} from "@/requireAPI"
import contentPart from "@/views/Main/components/contentPart";
import littlePart from "@/views/Main/components/littlePart";
import grayPart from "@/views/Main/components/grayPart";
import topPart from "@/views/Main/components/topPart";
import navPart from "@/views/Main/components/navPart";
const localData = require("@/assets/tempData/data_home.json")

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
    await this.getData();
    // this.pageData = localData
    this.splitData(this.pageData);
  },
  methods:{
    async getData(){
      await this.$axios({
        url:'/',
        method:'get'
      }).then(res=>{
        this.$getSuccess(res)
        this.pageData = res.data
        this.splitData(this.pageData)

      }).catch(err=>{
        this.$getError(err)
        this.pageData = localData;
        this.splitData(this.pageData)
      })

    },
    splitData(data){
      //将接收到的对象批量化处理
      this.$changeObj(data,'object',this.changeImg);
      this.$changeObj(data,'object',this.changeUrl);

      this.getContentPartsData(data)
      this.getLittlePart(data)
      this.getGrayPart(data)
      this.getWorldInBrief(data);
    },
    changeImg(data){
      let image = data?.image
      if(image?.main?.url?.canonical){
        data.image.main.url.canonical = image.main.url.canonical.split('article_link=')[1] || image.main.url.canonical.split('article_link=')[0];
        // data.image.main.url.canonical = 'https://ts1.cn.mm.bing.net/th/id/R-C.21f651a9b7d96be274f1f0784874b07b?rik=eDRLwTlVgtRWKA&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50089%2f8326.jpg_wh860.jpg&ehk=Hcu8hyvYqUSgjHkijXmJnqZxc%2fvu1KwXGd3wsSLR8Bo%3d&risl=&pid=ImgRaw&r=0'
      }
      if(image?.src){
        data.image.src = image.src.split("article_link=")[1] || image.src.split("article_link=")[0]
        // data.image.src = 'https://ts1.cn.mm.bing.net/th/id/R-C.21f651a9b7d96be274f1f0784874b07b?rik=eDRLwTlVgtRWKA&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50089%2f8326.jpg_wh860.jpg&ehk=Hcu8hyvYqUSgjHkijXmJnqZxc%2fvu1KwXGd3wsSLR8Bo%3d&risl=&pid=ImgRaw&r=0'

      }
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
        // console.log(" ------ 分割线 ------")
        item.isPartOf.map((item,index)=>{
          // console.log(JSON.stringify(item))
          // console.log(index + "  --- " + item.context.headline + " ----- " + item.context.description)
        })
      })
    },
    getWorldInBrief(data){
      this.worldInBrief = data.props.pageProps.worldInBrief
    },
    changeUrl(url){
      if(url && typeof url === 'object' && !Array.isArray(url)){
        for (let urlKey in url) {
          if(url[urlKey] && typeof url[urlKey] == 'string'&& url[urlKey].indexOf('article?article_link=') !== -1){
            url[urlKey] = `/leaders/article?article_link=` + encodeURIComponent(url[urlKey].split("article_link=")[1])
          }
        }
      }
    },
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
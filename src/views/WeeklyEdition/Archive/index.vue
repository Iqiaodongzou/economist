<template>
  <div>
    <form action="/weeklyedition" class="layout-edition-collection-filters">
      <div class="edition-filter">
        <div class="ds-form-field-layout ds-form-field-layout--adjacent"><label class="ds-form-label" for="year-filter"><span>Year<span
            class="css-dtx9ej ek4ruo00">. Selecting an option from the menu
                          will reload the page with that option applied.</span></span></label><select id="year-filter"
                                                                                                      class="ds-form-input ds-form-field-select"
                                                                                                      name="year">
          <option v-for="(item,index) in pageProps?.options" :aria-selected="!Boolean(index)" :value="item.value"
                  :selected="!Boolean(index)">{{ item.value }}
          </option>
        </select></div>
      </div>
    </form>
    <div class="layout-edition-collection ds-layout-grid ds-layout-grid--edged">
      <div class="edition-teaser" v-for="item in pageProps?.content?.hasPart?.parts">
        <span itemscope="" itemprop="image"
              class="edition-teaser__image">
                    <meta itemprop="url"
                          :content="item.image.cover[0].url.canonical">
          <img
              :width="item.image.cover[0].width" :height="item.image.cover[0].height"
              :src="item.image.cover[0].url.canonical"
              sizes="(min-width: 1440px) 335px, (min-width: 1280px) 22.5vw, (min-width: 960px) 30vw, 45vw"
              :alt="item.image.cover[0].headline">
        </span>
        <div class="edition-teaser__text">
          <time class="edition-teaser__subheadline">{{ item.datePublishedString }}</time>
          <h2><a class="headline-link" :href="item.url.canonical"><span
              class="edition-teaser__headline">{{ item.image.cover[0].headline }}</span></a>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {api} from '@/requireAPI'
const localData = require("@/assets/tempData/data_archive.json")
export default {
  name: "index",
  data() {
    return {
      pageProps: {}
    }
  },
  mounted() {
    this.$axios({
      url: api.query.editions,
      method: 'get'
    }).then(res => {
      this.$getSuccess(res)
      this.pageProps = res.data.props.pageProps
      this.$changeObj(this.pageProps,'object',this.changeImg);
      this.$changeObj(this.pageProps,'object',this.changeUrl);

    }).catch(err => {
      this.$getError(err)
      this.pageProps = localData.props.pageProps
      this.$changeObj(this.pageProps,'object',this.changeImg);
      this.$changeObj(this.pageProps,'object',this.changeUrl);
      console.log(this.pageProps)
    })
  },
  methods:{
    changeImg(data){
      let image = data?.image
      if(image?.cover[0]?.url?.canonical){
        data.image.cover[0].url.canonical = image.cover[0].url.canonical.split('article_link=')[1] || image.cover[0].url.canonical.split('article_link=')[0];
        // data.image.cover[0].url.canonical = 'https://tse1-mm.cn.bing.net/th/id/OIP-C.2Zl97rLmDQxey77slvejEwAAAA?pid=ImgDet&rs=1'
      }
    },
    changeUrl(url){
      if(url?.canonical && url?.canonical?.indexOf('article_link=') !== -1){
          url.canonical = `/weeklyedition/` + encodeURIComponent(url.canonical.split("article_link=")[1])
        // console.log(url.canonical)
      }
    },
  }
}
</script>

<style scoped lang="scss">
@import "archiveStyle.css";
</style>
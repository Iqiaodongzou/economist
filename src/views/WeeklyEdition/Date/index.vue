<template>
  <div>
    <template v-for="(item,index) in content">
      <!-- The world this week  -->
      <section class="layout-weekly-edition-section ds-layout-grid" v-if="index === 'The world this week'">
        <div class="layout-weekly-edition-header"><span class="weekly-edition-header__date">{{pageProps.content.datePublishedString}}</span>
          <h1 class="weekly-edition-header__headline">{{pageProps.content.image.main.headline}}</h1>
        </div>
        <span itemscope="" itemprop="image"
              class="weekly-edition-header__image">
                  <meta itemprop="url"
                        :content="pageProps.content.image.main.url.canonical"><img
            :width="pageProps.content.image.main.width" :height="pageProps.content.image.main.height"
            :src="pageProps.content.image.main.url.canonical"
            sizes="(min-width: 1440px) 960px, (min-width: 960px) 50vw, (min-width: 700px) 660px, 95vw" alt="">
                </span>
        <div class="layout-weekly-edition-wtw">
          <h2 class="ds-section-headline ds-section-headline--rule-emphasised">{{index}}</h2>
          <ul class="ds-layout-grid">
            <li class="weekly-edition-wtw__item" v-for="item in item">
              <a class="weekly-edition-wtw__link" :href="item.url.canonical" >{{item.headline}}</a>
            </li>
          </ul>
        </div>
      </section>

      <!--Leaders-->
      <section class="layout-weekly-edition-section ds-layout-grid" v-else-if="index === 'Leaders'">
        <h2 class="ds-section-headline ds-section-headline--rule-emphasised">{{index}}</h2>
        <div class="teaser-weekly-edition--leaders css-12dw4ef ekfon2k0" v-for="item in item">
          <div class="css-z9n3kh ej11e0o0">
            <figure class="css-qts40t e1197rjj0">
              <img theme="[object Object]" alt="" loading="lazy" :width="item.image.main.width"
                   :height="item.image.main.height" decoding="async" data-nimg="1"
                   style="color:transparent"
                   sizes="(min-width: 1440px) 460px, (min-width: 960px) 30vw, (min-width: 600px) 45vw, 95vw"
                   :src="item.image.main.url.canonical">
            </figure>
          </div>
          <p class="css-1elpt04 e17fls870"> <!-- -->{{ item.subheadline }}</p>
          <h3 class="css-qakuwj e1rr6cni0"><a
              :href="item.url.canonical">{{item.headline}}</a></h3>
          <p class="css-1xxp0vh er8c6600">{{item.description}}</p>
        </div>
      </section>

      <!--letters-->
      <section class="layout-weekly-edition-section ds-layout-grid" v-else-if="index === 'Letters'">
        <h2 class="ds-section-headline ds-section-headline--rule-emphasised">{{index}}</h2>
        <div class="teaser-weekly-edition--headline-only css-12dw4ef ekfon2k0">
          <p class="css-1elpt04 e17fls870"> <!-- -->{{item[0].subheadline}}</p>
          <h3 class="css-wl43hz e1rr6cni0">
            <a :href="item[0].url.canonical">{{item[0].headline}}</a></h3>
        </div>
      </section>
      <!--Economic & financial indicators-->
      <section class="layout-weekly-edition-section ds-layout-grid" v-else-if="index === 'Economic & financial indicators'">
        <h2 class="ds-section-headline ds-section-headline--rule-emphasised">{{index}}</h2>
        <div class="teaser-weekly-edition--headline-only css-12dw4ef ekfon2k0">
          <p class="css-1elpt04 e17fls870"> <!-- -->{{item[0].subheadline}}</p>
          <h3 class="css-wl43hz e1rr6cni0">
            <a :href="item[0].url.canonical">{{item[0].headline}}</a></h3>
        </div>
      </section>

      <!-- Briefing -->
      <section class="layout-weekly-edition-section ds-layout-grid" v-else-if="index === 'Briefing'">
              <h2 class="ds-section-headline ds-section-headline--rule-emphasised">{{ index }}</h2>
              <div class="teaser-weekly-edition--briefing css-12dw4ef ekfon2k0" v-for="item in item">
                <div class="css-z9n3kh ej11e0o0">
                  <figure class="css-qts40t e1197rjj0">
                    <img theme="[object Object]" alt="" loading="lazy" :width="item?.image?.main?.width"
                         :height="item?.image?.main?.height" decoding="async" data-nimg="1"
                         style="color:transparent"
                         sizes="(min-width: 1440px) 580px, (min-width: 1280px) 40vw, (min-width: 960px) 45vw, 95vw"
                         :src="item?.image?.main?.url.canonical || item?.image?.promo?.url?.canonical">
                  </figure>
                </div>
                <p class="css-1elpt04 e17fls870"> <!-- -->{{ item.subheadline }}</p>
                <h3 class="css-qakuwj e1rr6cni0"><a
                    :href="item?.url.canonical">{{ item.headline }}</a></h3>
                <p class="css-1xxp0vh er8c6600">{{item.description}}</p>
              </div>
            </section>

      <section class="layout-weekly-edition-section layout-weekly-edition-section--cols ds-layout-grid" v-else   >
        <h2 class="ds-section-headline ds-section-headline--rule-emphasised">{{ index }}</h2>
                  <a
                      class="weekly-edition-section__lede-image"
                      :href="item[0].url.canonical"
                      :aria-label="`${item[0].description} - ${item[0].headline}`">
                    <span
                      itemscope="" itemprop="image" itemtype="https://schema.org/ImageObject">
                  <meta itemprop="url"
                        :content="item[0]?.image?.main?.url?.canonical">
                  <img
                      loading="lazy" :width="item[0]?.image?.main?.width"
                      :height="item[0]?.image?.main?.height"
                      :src="item[0]?.image?.main?.url?.canonical"
                      sizes="(min-width: 1440px) 460px, (min-width: 960px) 30vw, 95vw" alt="">
                            </span>
                  </a>
        <div class="teaser-weekly-edition--cols css-12dw4ef ekfon2k0" v-for="item in item">
          <p class="css-1elpt04 e17fls870"> <!-- -->{{ item.subheadline }}</p>
          <h3 class="css-wl43hz e1rr6cni0"><a
              :href="item.url.canonical">{{ item.headline }}</a></h3>
        </div>
      </section>


    </template>
  </div>
</template>

<script>
import {api} from '@/requireAPI'
import axios from "axios";

const localData = require("@/assets/tempData/data-article.json")
export default {
  name: "index",
  data() {
    return {
      date: {},
      content:{},
      pageProps:{}
    }
  },
  mounted() {
    let content = this.$route.params.content || 'weeklyedition'
    // let isDate = this.checkDate(content)
    // if (!isDate) this.$router.push("/404");
    this.getData(content)

  },
  methods: {
    checkDate(content) {
      // 非空判断
      if (!content) return false;
      // 纯数字过滤
      if (!isNaN(content)) return false;
      // 符合日期格式
      if (isNaN(Date.parse(content))) return false;
      // 符合后，将其转换为带-的日期
      this.date = this.$getDate(content);
      return true;
    },
    getData(content) {
      console.log(1)
      this.$axios({
        url: api.query.article,
        method: 'get',
        params: {
          'article_link':content
        }
      }).then(res => {
        this.$getSuccess(res)
        let content  = res.data.props.pageProps
        this.pageProps = content;
        this.$changeObj(content, 'object', this.changeImg);
        this.$changeObj(content, 'object', this.changeUrl);
        this.changeData(content)
      }).catch(err => {
        if(this.$route.fullPath !== '/weeklyedition'){
          this.getData('/weeklyedition')
          // this.$router.push("/weeklyedition")
          // return ;
        }

        this.$getError(err)
        let content = localData.props.pageProps
        this.pageProps = content
        this.$changeObj(content, 'object', this.changeImg);
        this.$changeObj(content, 'object', this.changeUrl);
        this.changeData(content)
      })
    },
    changeImg(data) {
      let image = data?.image
      if (image?.main?.url?.canonical) {
        data.image.main.url.canonical = image?.main?.url?.canonical.split('article_link=')[1] || image?.main?.url?.canonical.split('article_link=')[0];
        // data.image.main.url.canonical = 'https://ts1.cn.mm.bing.net/th/id/R-C.21f651a9b7d96be274f1f0784874b07b?rik=eDRLwTlVgtRWKA&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50089%2f8326.jpg_wh860.jpg&ehk=Hcu8hyvYqUSgjHkijXmJnqZxc%2fvu1KwXGd3wsSLR8Bo%3d&risl=&pid=ImgRaw&r=0'
      }
      if(image?.promo?.url?.canonical) {
        data.image.promo.url.canonical = data?.image?.promo?.url?.canonical?.split("article_link=")[1] || data?.image?.promo?.url?.canonical.split("article_link=")[0]
        // data.image.promo.url.canonical = 'https://ts1.cn.mm.bing.net/th/id/R-C.21f651a9b7d96be274f1f0784874b07b?rik=eDRLwTlVgtRWKA&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50089%2f8326.jpg_wh860.jpg&ehk=Hcu8hyvYqUSgjHkijXmJnqZxc%2fvu1KwXGd3wsSLR8Bo%3d&risl=&pid=ImgRaw&r=0'
      }

      // if(isNaN(data) && typeof data == "object" && !Array.isArray(data)){
      //   for (const dataKey in data) {
      //     if (data && typeof data[dataKey] == 'string' && dataKey.indexOf("__") === -1 && data?.url) {
      //       console.log(data,dataKey,data[dataKey],data?.hasPart?.parts)
      //     }
      //   }
      // }
    },
    changeUrl(url){
      if(url?.canonical && url?.canonical?.indexOf('article_link=') !== -1){
        url.canonical = `/leaders/article?article_link=` + url.canonical.split('article_link=')[1]
        // console.log(url.canonical)
      }
    },
    changeData({content}){
      if(content?.hasPart?.parts?.length){
        let obj = {}
        content.hasPart.parts.map(item=>{
          if(!obj[item?.print?.section?.headline]){
            obj[item.print.section.headline] = []
          }
          obj[item.print.section.headline].push(item)
        })
        this.content = obj
      }
    }
  },
}
</script>

<style scoped lang="scss">
@import "dateStyle.css";
</style>
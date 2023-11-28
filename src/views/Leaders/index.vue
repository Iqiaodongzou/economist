<template>

  <div class="global-layout css-0 eyqt17c0">
    <div>
      <div class="css-9rt3sc e10tor440">
        <main role="main" id="content">
          <article data-test-id="NewArticle" id="new-article-template">
            <div class="css-1bfdg3q e1pkqesp0" data-test-id="standard-article-template">
              <div class="css-1qjp74c e8tkvfk0">
                <div class="css-1r2sn2n e1mdktgm0">
                  <section class="css-qm1vln e1m3q8rc0">
                    <div class="css-b4a1pi elvs37n0"><span class="css-1te5c83 e11l78dl0">
                      <a href="/leaders/"
                         data-analytics="sidebar:section"><span>Leaders</span></a></span><span
                        class="css-1mdqtqm e11bnqe00"> | <!-- -->{{ pageProps?.content?.subheadline }} </span></div>
                    <h1 class="css-fk78xg e1t4u3eq0">{{ pageProps?.content?.headline }}</h1>
                    <h2 class="css-o55d57 elmr55g0">{{ pageProps?.content?.description }}</h2>
                  </section>
                </div>
                <div class="css-kpd7oo e1mdktgm0">
                  <section class="css-1ugvd2u e18wk22u0">
                    <figure class="css-qts40t e1197rjj0">
                      <img :alt="pageProps?.content?.image?.main?.description" fetchpriority="high"
                           :width="pageProps?.content?.image?.main?.width"
                           :height="pageProps?.content?.image?.main?.height"
                           decoding="async" data-nimg="1"
                           style="color:transparent"
                           sizes="(min-width: 960px) 700px, 95vw"
                           :src="pageProps?.content?.image?.main?.url?.canonical">
                      <figcaption class="css-18w36g1 edweubf2"><span
                          class="css-6pzdis edweubf1">image: {{ pageProps?.cp2Content?.leadComponent?.credit }}</span>
                      </figcaption>
                    </figure>
                  </section>
                </div>
                <div class="css-1r2sn2n e1mdktgm0">
                  <div class="css-17yzdrv euxoahl0">
                    <div class="css-1fiks87 e1rnrkkh0">
                      <div class="css-19diqro e1f4i2e00">
                        <div class="css-w0h03k eygoqsu0">
                          <div>
                            <time datetime="2023-10-05T10:03:37.653Z" class="css-j5ehde exy50qi0"> <!-- -->
                              {{ pageProps?.content?.datePublishedString }}
                            </time>
                          </div>
                          <div>
                            <div class="css-1902i5q eygoqsu0">
                              <button
                                  class="ds-actioned-link ds-actioned-link--minor ds-actioned-link--share">
                                <span>Share</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <section data-body-id="cp2"  class="css-12k3cm0 e1ey6m751">
                      <div class="css-1746s8a e1ey6m752">
                        <div class="css-1lm38nn e50l3u40" >
                          <figure>
                            <div>
                              <figcaption>Listen to this story.</figcaption>
                              <span
                                  class="css-1fs0t47 ed4dtdz0">Enjoy more audio and podcasts on<!-- --> <a
                                  id="audio-ios-cta" href="https://economist-app.onelink.me/d2eC/bed1b25"
                                  target="_blank" rel="noreferrer">iOS</a> <!-- -->or<!-- --> <a
                                  id="audio-android-cta" href="https://economist-app.onelink.me/d2eC/7f3c199"
                                  target="_blank" rel="noreferrer">Android</a>.</span>
                            </div>
                            <audio class="react-audio-player " controls="" id="audio-player" preload="none"
                                   :src="pageProps?.content?.audio?.main?.url?.canonical"
                                   :title="pageProps?.content?.audio?.main?.hasPart?.parts[0]?.headline"
                                   controlslist="nodownload">
                              <p>Your browser does not support the &lt;audio&gt; element.</p>
                            </audio>
                            <div class="css-1h1me4y e50l3u41">
                              <div class="css-vu6x35 ebr52qc0"></div>
                            </div>
                          </figure>
                        </div>
                        <p class="css-1hno3qs e190yofl0" v-for="item in pageProps?.cp2Content?.body"
                           v-html="item.textHtml"></p>
                      </div>
                    </section>
                    <div class="css-opzdk5 ec43w3m0">
                      <p class="css-crkmw2 e1tbpewm0">This article appeared in the Leaders section of the print
                        edition under the headline "{{ pageProps?.content?.subheadline }}"</p>
                    </div>
                    <div data-tracking-id="content-well-chapter-list" class="css-1ijq0b9 e8htone0">
                      <div class="ds-chapter-list">
                        <h2 class="ds-section-headline ds-section-headline--rule-accent">
                          <a href="/leaders/"
                             class="ds-section-headline-link"
                             data-analytics="chapter_list_header:leaders">Leaders</a> <span
                            class="ds-section-subheadline">October 21st 2023</span></h2>
                        <ul>
                          <li class="ds-chapter-list__item" v-for="item in pageProps?.content?.sectionArticles">
                            <a class="ds-link-with-arrow ds-link-with-arrow--minor"
                               :href="item.url.canonical"
                               data-analytics="article:reports_content:headline_1"><span>{{ item.headline }}</span></a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div data-test-id="horizontal" class="css-l43203 e1hqvufh0">
                      <div orientation="horizontal" class="css-1qw218p e1hqvufh1">
                        <div orientation="horizontal" class="css-c1gc0z e1hqvufh3">
                          <figure class="css-qts40t e1197rjj0">
                            <img
                                :alt="publication?.image?.cover[0].headline" loading="lazy"
                                :width="publication?.image?.cover[0].width"
                                :height="publication?.image?.cover[0].height" decoding="async" data-nimg="1"
                                style="color:transparent"
                                sizes="300px"
                                :src="publication?.image?.cover[0].url.canonical">
                          </figure>
                        </div>
                        <div orientation="horizontal" class="css-std7t4 e1hqvufh2">
                          <h3 orientation="horizontal" class="css-108skiy e1hqvufh4">From the
                            {{ publication?.datePublishedString }}
                            edition</h3>
                          <p orientation="horizontal" class="css-1ne7ha9 e1hqvufh5">Discover stories from this
                            section and more in the list of contents </p><a
                            class="ds-link-with-arrow-icon ds-link-with-arrow-icon--minor"
                            :href="publication?.url?.canonical"
                            data-analytics="sidebar:weekly_edition">
                          <svg viewBox="0 0 24 24"
                               xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                              <path class="path-background"
                                    d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm.142 4.5l-1.008 1.062c3.33 3.276 4.194 4.14 4.608 4.5-1.602-.018-3.168-.018-10.242-.018v1.584c7.074 0 8.73 0 10.242-.018-.432.36-1.314 1.206-4.608 4.536l1.008 1.044 6.354-6.354L12.142 5.5z"
                                    fill="#2E45B8" fill-rule="nonzero"></path>
                            </g>
                          </svg>
                          <span>Explore the edition</span></a>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
              <div class="css-mqgbir ea9fiz30">
                <h2 class="ds-section-headline ds-section-headline--rule-emphasised"><a
                    href="https://www.economist.com/leaders/" class="ds-section-headline-link">More from
                  Leaders</a>
                </h2>
                <div class="css-1m3z1gu e1nb91wc1">
                  <div class="css-1gljmzf e8tkvfk0">

                    <div class="css-1n611c3 e1mdktgm0">
                      <div class="css-12dw4ef ekfon2k0">
                        <div class="css-z9n3kh ej11e0o0">
                          <figure class="css-qts40t e1197rjj0">
                            <img theme="[object Object]" alt="" loading="lazy"
                                 :width="pageProps?.content?.articleSection?.internal[0]?.hasPart?.parts[1]?.image?.main?.width"
                                 :height="pageProps?.content?.articleSection?.internal[0]?.hasPart?.parts[1]?.image?.main?.height"
                                 decoding="async"
                                 data-nimg="1" style="color:transparent"
                                 sizes="(min-width: 1440px) 700px, (min-width: 1280px) 50vw, (min-width: 960px) 66vw, 95vw"
                                 :src="pageProps?.content?.articleSection?.internal[0]?.hasPart?.parts[1]?.image?.main?.url?.canonical">
                          </figure>
                        </div>
                        <h3 class="css-zmb6q0 e1rr6cni0"><a
                            :href="pageProps?.content?.articleSection?.internal[0]?.hasPart?.parts[1]?.url?.canonical"
                            data-analytics="more_from:headline_1">{{
                            pageProps?.content?.articleSection?.internal[0]?.hasPart?.parts[1]?.headline
                          }}</a></h3>
                        <p class="css-1xxp0vh er8c6600">
                          {{ pageProps?.content?.articleSection?.internal[0]?.hasPart?.parts[1]?.description }}</p>
                      </div>
                    </div>

                    <div class="css-1olanph e1mdktgm0">
                      <template v-for="(item,index) in pageProps?.content?.articleSection?.internal[0]?.hasPart?.parts"
                                v-if="index === 2 || index === 3">
                        <div class="css-zc8ob7 ekfon2k0">
                          <div class="css-b0lk6w ej11e0o0">
                            <figure class="css-qts40t e1197rjj0">
                              <img theme="[object Object]" alt="" loading="lazy"
                                   :width="item?.image?.main?.width"
                                   :height="item?.image?.main?.height" decoding="async"
                                   data-nimg="1" style="color:transparent"
                                   sizes="(min-width: 1440px) 700px, (min-width: 1280px) 50vw, (min-width: 960px) 66vw, 95vw"
                                   :src="item?.image?.main?.url?.canonical">
                            </figure>
                          </div>
                          <h3 class="css-qakuwj e1rr6cni0"><a
                              :href="item?.url?.canonical"
                              data-analytics="more_from:headline_2">{{item?.headline}}</a></h3>
                          <p class="css-1xxp0vh er8c6600">{{item?.description}}</p>
                        </div>
                        <hr class="css-16c9eiw e8tkvfk1" v-if="index === 2">
                      </template>
                    </div>
                    <hr class="css-670k81 e8tkvfk1">
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import {api} from "@/requireAPI";

const localData = require("@/assets/tempData/data_leaders.json")
export default {
  name: "index",

  data() {
    return {
      pageProps: {},
      publication: {}
    }
  },
  mounted() {
    let content = this.$route.query
    this.getData(content)
  },
  methods: {
    getData(content) {
      this.$axios({
        url: api.query.article,
        method: 'get',
        params: {
          'article_link': content.article_link
        }
      }).then(res => {
        this.$getSuccess(res)
        this.pageProps = res.data.props.pageProps;
        this.$changeObj(this.pageProps, 'object', this.changeImg);
        this.$changeObj(this.pageProps,'object',this.changeUrl);
        //this.publication = this.pageProps.content.publication[(Math.random() * this.pageProps.content.publication.length).toFixed(0)]
        if(this.pageProps.content.publication === null){
          console.log("while publication is null call this function")
          this.publication = this.pageProps.content.articleSection
        } else {
          console.log("still there error?")
          this.publication = this.pageProps.content.publication[(Math.random() * this.pageProps.content.publication.length).toFixed(0)]
        }
        this.changeTextHTML()
        console.log(this.publication)
      }).catch(err => {
        this.$getError(err)
        this.pageProps = localData.props.pageProps
        this.$changeObj(this.pageProps, 'object', this.changeImg);
        this.$changeObj(this.pageProps,'object',this.changeUrl);
        this.publication = this.pageProps.content.publication[(Math.random() * this.pageProps.content.publication.length).toFixed(0)]
        this.changeTextHTML()
        console.log(this.publication)
      })
    },
    changeTextHTML(){
      this.pageProps.cp2Content.body.map(item=>{
        if(item.textHtml){
          item.textHtml = item.textHtml.split("http://54.190.52.30:8081/query/article?article_link=").join("/leaders/article?article_link=")
        }
      })
    },
    changeImg(data) {
      // if(data?.image?.main?.url?.canonical){
      //     console.log(data.image.main.url.canonical)
      // }
    },
    changeUrl(url){
      if(url?.canonical && url?.canonical?.indexOf('article_link=') !== -1){
        url.canonical = `/leaders/article?article_link=` + encodeURIComponent(url.canonical.split("article_link=")[1])
        // console.log(url.canonical)
      }
    },
  }
}
</script>

<style scoped lang="scss">
@import "leaderStyle.css";
</style>

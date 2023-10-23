<template>
  <div class="grayPart">
    <section class="css-lyacxe e115cdyu0">
      <div class="css-1bfdg3q e1pkqesp0">
        <div class="css-1f8rm34 e4cxti0">
          <div class="report css-15scm6x e8tkvfk0">
            <div class="_image-grid-item css-hl6d9o e1mdktgm0"><a :href="bottomGray.url?.canonical"
                                                                  aria-labelledby="report-headline-_iwG54jXAh2sB2Wn2MmMX"
                                                                  data-analytics="reports:cover_image"><span
                itemscope="" itemprop="image" itemtype="https://schema.org/ImageObject">
                          <meta itemprop="url"
                                :content="bottomGray.image?.main.url.canonical">
                          <img loading="lazy" :width="bottomGray.image?.main.width" :height="bottomGray.image?.main.height"
                               :src="bottomGray.image?.main.url.canonical"
                               sizes="(min-width: 1440px) 434px, (min-width: 960px) 35vw, (min-width: 600px) 58.5vw, 90vw"
                               alt="Special reports: Homeland Economics">
                        </span></a></div>
            <div class="_header-grid-item css-119954n e1mdktgm0">
              <h2><strong>Special reports</strong>: {{datePublished}}</h2><a class="_headline-link"
                                                                            :href="bottomGray.url?.canonical"
                                                                            data-analytics="reports:headline">
              <h3 id="report-headline-_iwG54jXAh2sB2Wn2MmMX">{{bottomGray.headline}}</h3>
            </a>
              <p class="_description" data-test-id="description">{{bottomGray.description}}</p>
            </div>
            <div class="_articles-grid-item css-zlaor5 e1mdktgm0">
              <ul class="_articles-container">
                <li v-for="item in bottomGray.hasPart?.parts">
                  <hr>
                  <a class="ds-link-with-arrow"
                     :href="item.url.canonical"><span>{{item.headline}}</span></a>
                </li>
              </ul>
            </div>
            <div class="_cta css-1y32p9 e1mdktgm0"><a class="ds-link-with-arrow-icon ds-link-with-arrow-icon--heavy"
                                                      :href="bottomGray.url?.canonical"
                                                      data-analytics="reports:read_full_report">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path class="path-background"
                        d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm.142 4.5l-1.008 1.062c3.33 3.276 4.194 4.14 4.608 4.5-1.602-.018-3.168-.018-10.242-.018v1.584c7.074 0 8.73 0 10.242-.018-.432.36-1.314 1.206-4.608 4.536l1.008 1.044 6.354-6.354L12.142 5.5z"
                        fill="#2E45B8" fill-rule="nonzero"></path>
                </g>
              </svg>
              <span>Read full report</span></a></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "grayPart",
  data(){
    return {
      bottomGray:{},
      datePublished:""
    }
  },
  mounted() {
    this.getData()
    this.getDate();
  },
  methods:{
    getData(){
      this.bottomGray = this.specialReport.hasPart.parts[0]


    },
    getDate(){
      let date = String(new Date(this.bottomGray.datePublished)).split(" ");
      let dayIndex = ["st","nd","rd"]
      let nthDay = date[2]%10
      let newDate = {
        month:date[1],
        nth:nthDay <= 3 ? date[2] + dayIndex[nthDay-1] : date[2] + "th",
        year:date[3]
      }
      this.datePublished = `${newDate.month} ${newDate.nth} ${newDate.year}`
    }
  },
  props:["specialReport","currentEdition"]
}
</script>
<style scoped lang="scss">


</style>
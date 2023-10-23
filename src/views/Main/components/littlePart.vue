<template>
  <div class="littlePart">
    <section class="layout-section-teasers ds-layout-grid">


      <div class="css-crptkz e1uk0seg0" v-for="item in sections">
        <h3 class="ds-section-headline ds-section-headline--rule-emphasised">
          <a :href="item.title.url" class="ds-section-headline-link">{{ item.title.text }}</a></h3>
        <ul>
          <template v-for="(item,index) in item.articles">

            <li class="_lead-article" v-if="index === 0">
              <div class="css-12dw4ef ekfon2k0">
                <div class="css-z9n3kh ej11e0o0">
                  <figure class="css-qts40t e1197rjj0">
                    <img alt="" loading="lazy" width="1280" height="720" decoding="async" data-nimg="1"
                         style="color:transparent"
                         sizes="(min-width: 1440px) 335px, (min-width: 1280px) 22.5vw, (min-width: 960px) 30vw, (min-width: 600px) 47.5vw, 95vw"
                         :src="item.image.src">
                  </figure>
                </div>
                <h3 class="css-qakuwj e1rr6cni0"><a
                    :href="item.url"
                    data-analytics="automated_list_1:headline_1">{{item.headline}}</a></h3>
              </div>
            </li>

            <li v-if="index !== 0">
              <div class="css-12dw4ef ekfon2k0">
                <h3 class="css-wl43hz e1rr6cni0"><a
                    :href="item.url"
                    data-analytics="automated_list_1:headline_2">{{item.headline}}</a></h3>
              </div>
            </li>

          </template>
        </ul>
      </div>
    </section>
    <section class="css-lyacxe e115cdyu0">
      <div class="css-1bfdg3q e1pkqesp0"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "littlePart",
  data() {
    return {}
  },
  mounted() {
  },
  props: ["sections"]
}
</script>

<style scoped lang="scss">

</style>
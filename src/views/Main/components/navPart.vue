<template>
  <div class="navPart">
    <h1 class="visually-hidden">The Economist | World News, Economics, Politics, Business &amp; Finance</h1>
    <div class="css-9xx9q4 e3e40d40">
      <div class="css-1bfdg3q e1pkqesp0">
        <div class="css-1xqo7ld e1p220na0">
          <div class="css-10saz0z e15nnq2z0" v-for="item in data.hasPart.parts">
            <figure class="css-qts40t e1197rjj0">
              <img data-test-id="discover-rail-ident" alt="" loading="lazy" :width="item.image.main?.width" :height="item.image.main?.height" decoding="async"
                   data-nimg="1" style="color:transparent" sizes="56px"
                   :src="item.image.main?.url.canonical"></figure>
            <div>
              <div class="css-12dw4ef ekfon2k0">
                <h3 class="css-1jkvacq e1rr6cni0"><a
                    :href="item?.url.canonical"
                    data-analytics="discover_rail:link_1">{{ item.headline }}</a></h3>
                <p class="css-6k90la er8c6600">{{item.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navPart",
  mounted() {
    console.log(this.data)
  },
  props: ['data']
}
</script>

<style scoped>

</style>
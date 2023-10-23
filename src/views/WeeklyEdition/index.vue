<template>
  <div>

    <div class="css-1bfdg3q">
      <ul role="tablist" class="ds-tab-list">
        <li role="presentation" class="ds-tab-item">
          <a role="tab" title="Current edition" aria-selected="false"
             class="ds-tab-item__link ds-tab-item__link--minor"
             :class="date !== '/weeklyedition/archive' ? 'ds-tab-item__link--selected' : ''"
             href="/weeklyedition">Current edition</a></li>
        <li role="presentation" class="ds-tab-item">
          <a role="tab" title="Browse all editions" aria-selected="true"
             class="ds-tab-item__link ds-tab-item__link--minor"
             :class="date === '/weeklyedition/archive' ? 'ds-tab-item__link--selected' : ''"
             href="/weeklyedition/archive">Browse all editions</a></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      date: ''
    }
  },
  mounted() {
    this.restartPage()
  },
  methods: {
    restartPage() {
      this.date = this.$route.fullPath
    },
  },
  updated() {
    this.restartPage()
  }
}
</script>

<style scoped lang="scss">
.navList {
  display: flex;
}
</style>
<template>
  <div class="topPart">
    <section id="new-relic-top-stories" class="css-1qwcxwl eeawncf0">
      <div class="css-1bfdg3q e1pkqesp0">
        <div class="css-11ztmd3 e8tkvfk0">
          <div class="css-tgsxjn e1mdktgm0">
            <div class="css-1twe5b9 ekfon2k0">
              <div class="css-z9n3kh ej11e0o0">
                <figure class="css-qts40t e1197rjj0">
                  <img theme="[object Object]" fetchpriority="high" alt="" :width="parts[0].image.main.width"
                       :height="parts[0].image.main.height" decoding="async"
                       data-nimg="1" style="color:transparent"
                       sizes="(min-width: 1440px) 700px, (min-width: 1280px) 600px, (min-width: 960px) 66vw, 90vw"
                       :src="parts[0].image.main.url.canonical"/>
                </figure>
              </div>
              <p class="css-1elpt04 e17fls870"> <!-- -->{{ parts[0].articleSection.internal[0].headline }}</p>
              <h3 class="css-1nh4cha e1rr6cni0"><a
                  :href="parts[0].url.canonical"
                  data-analytics="top_stories:headline_1">{{ parts[0].headline }}</a></h3>
              <p class="css-sn9piy er8c6600">{{ parts[0].description }}</p>
            </div>
          </div>
          <div class="css-ieli9y e1mdktgm0">
            <template v-for="(item,index) in parts" v-if="index > 0 && index < 3">

              <div class="ekfon2k0" :class="index === 1 ? 'css-1p9run8' : 'css-1r990wx'">

                <div v-if="index === 1" class="css-1t7n40o ej11e0o0">
                  <figure class="css-qts40t e1197rjj0">
                    <img theme="[object Object]" alt="" loading="lazy" :width="item.image.main.width"
                         :height="item.image.main.height" decoding="async" data-nimg="1"
                         style="color:transparent"
                         sizes="(min-width: 1440px) 335px, (min-width: 1280px) 22.5vw, (min-width: 960px) 30vw, (min-width: 600px) 47.5vw, 95vw"
                         :src="item.image.main.url.canonical"
                    >
                  </figure>
                </div>
                <p class="css-1elpt04 e17fls870"> <!-- -->{{ item.articleSection.internal[0].headline }}</p>
                <h3 class="css-zmb6q0 e1rr6cni0"><a
                    :href="item.url.canonical"
                    data-analytics="top_stories:headline_2">{{ item.headline }}</a>
                </h3>
                <p class="css-1xxp0vh er8c6600">{{ item.description }}</p>


              </div>
              <hr class="e8tkvfk1" :class="index === 1 ? 'css-1cekwqg' : 'css-jzdb0t'">
            </template>
          </div>


          <hr class="css-jezcio e8tkvfk1">
          <div class="css-tmr63y e1mdktgm0">
            <hr class="css-npe7f6 e8tkvfk1">
            <div class="css-1mpoj98 e96n60t0">
              <div class="_content" v-html="WorldInBriefDOMList">


              </div>
              <div class="_cta"><a class="ds-emphasised-link ds-emphasised-link--secondary" href="/the-world-in-brief"
                                   data-analytics="world_in_brief"><span>Continue reading</span></a>
              </div>
            </div>
            <hr class="css-jzdb0t e8tkvfk1">
          </div>
          <div class="css-1gudbqu e1mdktgm0">
            <div class="css-r5rvo2 e8tkvfk0">

              <div v-for="(item,index) in parts" v-if="index >=3" class="css-17glo8i e1mdktgm0">
                <div class="css-1nsgpej ekfon2k0">
                  <div class="css-18ehd7y ej11e0o0">
                    <figure class="css-qts40t e1197rjj0">
                      <img theme="[object Object]" alt="" loading="lazy"
                           :width="item.width"
                           :height="item.height" decoding="async" data-nimg="1"
                           style="color:transparent"
                           sizes="(min-width: 1440px) 335px, (min-width: 960px) 285px, (min-width: 600px) 296px, 182px"
                           :src="item.image.main.url.canonical">
                    </figure>
                  </div>
                  <h3 class="css-13u88cu e1rr6cni0"><a
                      :href="item.url.canonical"
                      data-analytics="top_stories:headline_4">{{item.headline}}</a>
                  </h3>
                  <p class="css-1xxp0vh er8c6600">{{item.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "topPart",
  data() {
    return {
      parts: this.data.hasPart.parts,
      WorldInBriefDOMList:null,
    }
  },
  mounted() {

    let dom  = this.createEle('div')
    let h2DOM = this.createEle('h2')
    h2DOM.className = 'ds-section-headline ds-section-headline--rule-accent'
    h2DOM.innerText = 'The world in brief'
    dom.appendChild(h2DOM)
    this.worldInBrief.text.map((item,index)=>{
      if(index< 3){

        let divEle = this.createEle('div');
        divEle.className = '_gobbet css-111mrt0 ex3zz5c0'
        let pEle =this.createEle("p")

        this.createDOM(pEle,item.children)
        pEle.innerHTML += '...'
        divEle.appendChild(pEle)
        dom.appendChild(divEle)
      }
    })
    this.WorldInBriefDOMList = dom.innerHTML
    // let domTree = this.createDOM(this.worldInBrief.text)

  },
  methods:{
    createDOM(ele,list = []){
      list.map(item=>{
        if(item.type === 'tag'){
          let contentEle = this.createEle(item.name)
          if(item.children){
            this.createDOM(contentEle,item.children)
          }
          ele.appendChild(contentEle)

        }
        if(item.type === 'text'){
          ele.innerHTML += item.data.split(" ").filter((item,index)=>index<12).join(" ")
        }
      })
    },
    createEle(type){
      this.ele = document.createElement(type)
      return this.ele;
    }
  },
  props: ['data','worldInBrief']
}
</script>

<style scoped>

</style>
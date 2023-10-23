import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.withCredentials = true
/**
 * @param {Object} obj 需要修改的对象或数组
 * @param {String} type 需要修改的内容
 * @param {Function} func 修改的函数
 * @example changeObj({a:1,b:'2'},'Number',item=>item++) 将对象中的所有 Number 类型的数据各自+1
 *
 * */

function changeObj(obj,type,func = function(){}){

  if( (obj && Array.isArray(obj) && type === 'Array') || typeof obj === type){
    func(obj)
  }
  if(!obj || typeof obj != 'object') return;

  if(Array.isArray(obj)){
    // 对数组进行处理
    obj.map(item =>{
      this.$changeObj(item,type,func)
    })
  }else{
    // 对对象进行处理
    for (const objKey in obj) {
      this.$changeObj(obj[objKey],type,func);
    }
  }
}
Vue.prototype.$changeObj = changeObj

Vue.prototype.$getSuccess = res=>{
  console.log(`端口${res?.config?.url || ''}数据获取成功，数据为:`,res.data)
}

Vue.prototype.$getError = err=>{
  console.error(`端口${err?.config?.url || ''}数据获取失败，暂时使用本地数据，错误信息为:${err.message},错误返回为：`,err)
}

Vue.prototype.$createEle = function(type){
  this.ele = document.createElement(type)
  return this.ele;
}

Vue.prototype.$createDOM = function(ele,list = [],otherChange = function(){},shortTextLength = 0){
  list.map(item=>{

    if(item.type === 'tag'){
      let contentEle = this.$createEle(item.name)
      if(item.children){
        otherChange(contentEle,item)
        if(item.type !== 'a'){
          ele.innerHTML += ' '
        }
        this.$createDOM(contentEle,item.children,otherChange,shortTextLength)
      }



      ele.appendChild(contentEle)

    }
    if(item.type === 'text'){
      if(shortTextLength !== 0){
        let list = item.data.split(" ")
        list.map(item=>{
          if(shortTextLength-- > 0 ){
            ele.innerHTML += item + ' '
          }
        })



      }else{
        ele.innerHTML += item.data
      }
    }

  })
}



/***
 *
 * @param dateSet {String} - 可选参数，不填则返回最新日期
 * @returns {Object}
 */
Vue.prototype.$getDate = (dateSet = '') =>{
  let date = dateSet ? new Date(dateSet) : new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month < 10 ? '0' + month : month
  let day = date.getDate()
  day = day < 10 ? '0' + day : day
  return {
    string: `${year}-${month}-${day}`,
    urlString: `${year}/${month}/${day}`,
    year: year.toString(),
    month: month.toString(),
    day: day.toString()
  }
}


Vue.config.productionTip = false
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "/api"
// axios.defaults.timeout = 2000
// axios.defaults.baseURL = "http://159.138.11.4:8081"


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

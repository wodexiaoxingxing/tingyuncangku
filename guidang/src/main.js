// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import ElementUI from 'element-ui'
import '../theme/index.css'
// import 'element-ui/lib/theme-chalk/index.css'
import filters from "@/api/filters"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import installMixin from "@/mixin";
Vue.use(MintUI);
Vue.use(ElementUI);
Vue.use(require('vue-wechat-title'));
Vue.config.productionTip = false;

// 引入静态资源
require('@/assets/css/reset.scss');
//实现过滤器
for (var i in filters) {
  Vue.filter(i, filters[i]);
}

//全局的路由钩子函数。所有的路由，进入之前都会执行该方法！
router.beforeEach((to, from, next) => {
  //什么时候要拦截，满足以下两点
  //该用户未登陆的时候
  next()
})

/**
 * 自定义Mixin
 * 安装全局mixin
 * 注册全局mixin在mixin中完成
 */
installMixin(Vue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});

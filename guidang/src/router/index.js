import Vue from 'vue'
import Router from 'vue-router'

const page1 = () =>
    import ('@/components/page1');
const page2 = () =>
    import ('@/components/page2');
const page3 = () =>
    import ('@/components/page3');
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/yuanjie',
    routes: [
        { path: '/', redirect: '/page1-008/open-create.action' },
        {
            path: '/page1-008/open-create.action',
            name: 'page1',
            component: page1,
            meta: { title: '页面1' },
        },
        {
            path: '/page2-008',
            name: 'page2',
            component: page2,
            meta: { title: '页面2' },
        },
        {
            path: '/page3-008/:id/ceshine3',
            name: 'page3',
            component: page3,
            meta: { title: '页面3' },
        }
    ]
})
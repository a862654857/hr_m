import Vue from 'vue';
import App from './App';
import router from './router';
import '@/assets/style/resrt.css'
import '@/assets/style/iconfont/iconfont.css'
import '@/assets/style/iconfont/iconfont.js'
import Vant from 'vant';
import 'vant/lib/index.css';
//引入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入

import "babel-polyfill";
 
Vue.use(Vant);

// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
// Vue.use(mavonEditor);

// import Icon from 'vue-awesome/components/Icon'
// import 'vue-awesome/icons/'

// Vue.component('icon', Icon)
 
import { Cookie } from './js/common';
	
// router.beforeEach((to, from, next) => {
// NProgress.start()
// var user = Cookie.Get('token');
//  if (to.meta.title)
//  {
//  	document.title =to.meta.title;
//  }
 
// //if(process.env.NODE_ENV =='development'){
// //	Cookie.Set('token', '8ba5cba4db64d4b17cd7bca3dcb74027');
// //	Cookie.Set('uname', '谌舜谋');
// //	Cookie.Set("company_key",1);
// //	user = '056632360935522171'; 
// //}

// console.log(to.path,'to')
// if (!user && to.path.substr(0,5).toLowerCase() != '/auth' && to.path.toLowerCase() != '/login' && to.path.toLowerCase() != '/scan') {
//     next({ path: '/login' })
// } else {
// 	next();
// }
// })

// router.afterEach(() => {
//   NProgress.done()
// })

//alert("to"+to.path)
//alert('from'+from.path)
//if( user || to.path === '/login' || to.path === '/authPC'){
//	alert("user")
//	next();
//}else{
//	alert("auth")
//	next({path:'/authPC',query:{props:to}})
//}
//})



new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
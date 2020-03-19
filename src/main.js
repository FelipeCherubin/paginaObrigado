import Vue from 'vue'
import App from './App.vue'
import router from './router'

import nodePlugin from './plugins/nodePlugin'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/pt-br'
import {Row, Col, Container, Aside} from 'element-ui'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGooglePlay, faApple, faPinterest, faTwitter, faLinkedinIn, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCheckCircle, faMinusCircle, faUsers, faProjectDiagram, faBuilding, faTasks } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSweetalert2 from 'vue-sweetalert2'

library.add(faGooglePlay, faApple, faPinterest, faTwitter, faLinkedinIn, 
  faFacebook, faInstagram, faYoutube, faHeart, faCheckCircle, faMinusCircle,
  faTasks, faUsers, faProjectDiagram, faBuilding)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Row, Col, Container, Aside)
Vue.use(nodePlugin)
Vue.use(ElementUI, { locale })
Vue.use(VueSweetalert2)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
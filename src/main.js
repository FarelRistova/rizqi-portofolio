import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'

import './assets/css/main.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/swiper/swiper-bundle.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css'

import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import './assets/vendor/php-email-form/validate.js'
import './assets/vendor/typed.js/typed.umd.js'
import './assets/vendor/purecounter/purecounter_vanilla.js'
import './assets/vendor/waypoints/noframework.waypoints.js'
import './assets/vendor/glightbox/js/glightbox.min.js'
import './assets/vendor/imagesloaded/imagesloaded.pkgd.min.js'
import './assets/vendor/isotope-layout/isotope.pkgd.min.js'
import './assets/vendor/swiper/swiper-bundle.min.js'

import 'aos/dist/aos.css'
AOS.init()

const app = createApp(App)
app.mount('#app')

setTimeout(() => {
  import('./assets/js/main.js')
}, 100)
import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import Typed from 'typed.js'
import GLightbox from 'glightbox'
import imagesLoaded from 'imagesloaded'
import Isotope from 'isotope-layout'
import 'waypoints/lib/noframework.waypoints.js'

import './assets/css/main.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/swiper/swiper-bundle.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css'

import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import './assets/vendor/php-email-form/validate.js'
import './assets/vendor/purecounter/purecounter_vanilla.js'
import './assets/vendor/swiper/swiper-bundle.min.js'

import 'aos/dist/aos.css'

window.Typed = Typed
window.GLightbox = GLightbox
window.imagesLoaded = imagesLoaded
window.Isotope = Isotope

AOS.init()

const app = createApp(App)
app.mount('#app')

import './assets/js/main.js'
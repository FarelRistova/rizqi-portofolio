<template>
  <div>
    <!-- Sama persis dengan template: <header id="header"> -->
    <header id="header" class="header d-flex flex-column justify-content-center">
      <i class="header-toggle d-xl-none bi bi-list"></i>
      <Sidebar />
    </header>

    <!-- Sama persis dengan template: <main class="main"> -->
    <main class="main">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ResumeSection />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <footer id="footer" class="footer position-relative light-background">
      <Footer />
    </footer>

    <!-- Scroll Top -->
    <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center">
      <i class="bi bi-arrow-up-short"></i>
    </a>

    <!-- Preloader -->
    <div id="preloader"></div>
  </div>
</template>

<script>
import Sidebar from './components/layout/Sidebar.vue'
import Footer from './components/layout/Footer.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ResumeSection from './components/sections/ResumeSection.vue'
import PortfolioSection from './components/sections/PortofolioSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import ContactSection from './components/sections/ContactSection.vue'

export default {
  components: {
    Sidebar,
    Footer,
    HeroSection,
    AboutSection,
    SkillsSection,
    ResumeSection,
    PortfolioSection,
    ServicesSection,
    ContactSection,
  },
  mounted() {
    import('/src/assets/js/main.js')
  }
}
</script>
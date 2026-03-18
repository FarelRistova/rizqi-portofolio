<template>
  <nav id="navmenu" class="navmenu">
    <ul>
      <li><a href="#hero" class="active"><i class="bi bi-house navicon"></i><span>Home</span></a></li>
      <li><a href="#about"><i class="bi bi-person navicon"></i><span>About</span></a></li>
      <li><a href="#resume"><i class="bi bi-file-earmark-text navicon"></i><span>Resume</span></a></li>
      <li><a href="#portfolio"><i class="bi bi-images navicon"></i><span>Portofolio</span></a></li>
      <li><a href="#services"><i class="bi bi-hdd-stack navicon"></i><span>Services</span></a></li>
      <li><a href="#contact"><i class="bi bi-envelope navicon"></i><span>Contact</span></a></li>
      <li>
        <a href="/cv/rizqisatria-cv.pdf" target="_blank" rel="noopener">
          <i class="bi bi-file-earmark-pdf navicon"></i>
          <span>View CV</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>
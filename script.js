// Estado da aplicação
let cookiePreferences = {
  necessary: true,
  functionality: false,
  statistics: false,
  marketing: false,
  unclassified: false,
}

// Elementos do DOM
const modal = document.getElementById("modal")
const openModalBtn = document.getElementById("openModal")
const openModalCTABtn = document.getElementById("openModalCTA")
const closeModalBtn = document.getElementById("closeModal")

const cookieModal = document.getElementById("cookieModal")
const cookieAcceptBtn = document.getElementById("cookieAccept")
const cookieRejectBtn = document.getElementById("cookieReject")
const cookieOptionsBtn = document.getElementById("cookieOptions")

const cookieOptionsModal = document.getElementById("cookieOptionsModal")
const closeCookieOptionsBtn = document.getElementById("closeCookieOptions")
const acceptSelectedBtn = document.getElementById("acceptSelected")

// Funções do Modal Principal
function openModal() {
  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeModal() {
  modal.classList.remove("active")
  document.body.style.overflow = "auto"
}

// Funções de Cookies
function hideCookieModal() {
  cookieModal.classList.add("hidden")
}

function showCookieOptionsModal() {
  cookieOptionsModal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function hideCookieOptionsModal() {
  cookieOptionsModal.classList.remove("active")
  document.body.style.overflow = "auto"
}

function handleAcceptCookies() {
  console.log("Accepted necessary cookies only")
  hideCookieModal()
  hideCookieOptionsModal()
}

function handleRejectCookies() {
  cookiePreferences = {
    necessary: true,
    functionality: false,
    statistics: false,
    marketing: false,
    unclassified: false,
  }
  console.log("Rejected all non-necessary cookies")
  hideCookieModal()
  hideCookieOptionsModal()
}

function handleAcceptSelected() {
  console.log("Accepted selected cookies:", cookiePreferences)
  hideCookieModal()
  hideCookieOptionsModal()
}

function toggleCookiePreference(type) {
  if (type === "necessary") return // Não pode desabilitar cookies necessários

  cookiePreferences[type] = !cookiePreferences[type]
  updateCookieToggle(type)
}

function updateCookieToggle(type) {
  const toggle = document.querySelector(`[data-type="${type}"]`)
  if (toggle) {
    if (cookiePreferences[type]) {
      toggle.classList.add("active")
    } else {
      toggle.classList.remove("active")
    }
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Modal Principal
  if (openModalBtn) {
    openModalBtn.addEventListener("click", openModal)
  }

  if (openModalCTABtn) {
    openModalCTABtn.addEventListener("click", openModal)
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal)
  }

  // Fechar modal clicando fora
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal()
      }
    })
  }

  // Cookies
  if (cookieAcceptBtn) {
    cookieAcceptBtn.addEventListener("click", handleAcceptCookies)
  }

  if (cookieRejectBtn) {
    cookieRejectBtn.addEventListener("click", handleRejectCookies)
  }

  if (cookieOptionsBtn) {
    cookieOptionsBtn.addEventListener("click", showCookieOptionsModal)
  }

  if (closeCookieOptionsBtn) {
    closeCookieOptionsBtn.addEventListener("click", hideCookieOptionsModal)
  }

  if (acceptSelectedBtn) {
    acceptSelectedBtn.addEventListener("click", handleAcceptSelected)
  }

  // Cookie Toggles
  const cookieToggles = document.querySelectorAll(".cookie-toggle[data-type]")
  cookieToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const type = this.getAttribute("data-type")
      toggleCookiePreference(type)
    })
  })

  // Fechar modal de opções clicando fora
  if (cookieOptionsModal) {
    cookieOptionsModal.addEventListener("click", (e) => {
      if (e.target === cookieOptionsModal) {
        hideCookieOptionsModal()
      }
    })
  }

  // Links com scroll to top
  const footerLinks = document.querySelectorAll(".footer-link")
  footerLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Se for um link interno, adiciona scroll to top
      if (this.getAttribute("href").includes(".html")) {
        setTimeout(scrollToTop, 100)
      }
    })
  })

  const cookieLinks = document.querySelectorAll(".cookie-link")
  cookieLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      setTimeout(scrollToTop, 100)
    })
  })

  // Tecla ESC para fechar modais
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modal.classList.contains("active")) {
        closeModal()
      }
      if (cookieOptionsModal.classList.contains("active")) {
        hideCookieOptionsModal()
      }
    }
  })

  // Animações de scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observar elementos para animação
  const animatedElements = document.querySelectorAll(".step-card, .benefit-card, .feature-item-detailed")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  // Smooth scroll para links internos
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]')
  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Verificar se deve mostrar o modal de cookies
  const cookieConsent = localStorage.getItem("cookieConsent")
  if (!cookieConsent) {
    // Mostrar modal de cookies após um pequeno delay
    setTimeout(() => {
      cookieModal.classList.remove("hidden")
    }, 1000)
  } else {
    hideCookieModal()
  }
})

// Funções utilitárias
function setCookieConsent(preferences) {
  localStorage.setItem("cookieConsent", JSON.stringify(preferences))
  localStorage.setItem("cookieConsentDate", new Date().toISOString())
}

// Atualizar as funções de aceitar/rejeitar cookies para salvar no localStorage
const originalHandleAcceptCookies = handleAcceptCookies
handleAcceptCookies = () => {
  setCookieConsent({ necessary: true })
  originalHandleAcceptCookies()
}

const originalHandleRejectCookies = handleRejectCookies
handleRejectCookies = () => {
  setCookieConsent({ necessary: true })
  originalHandleRejectCookies()
}

const originalHandleAcceptSelected = handleAcceptSelected
handleAcceptSelected = () => {
  setCookieConsent(cookiePreferences)
  originalHandleAcceptSelected()
}

// Função para debug (pode ser removida em produção)
function debugCookies() {
  console.log("Current cookie preferences:", cookiePreferences)
  console.log("Stored consent:", localStorage.getItem("cookieConsent"))
}

// Adicionar função global para debug
window.debugCookies = debugCookies

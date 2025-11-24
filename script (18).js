// JavaScript for Interactive Effects

// Smooth scrolling and active nav link
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add active class to nav links on scroll
window.addEventListener("scroll", () => {
  let current = ""
  const sections = document.querySelectorAll("section")

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active")
    }
  })
})

// Animation for skill bars on scroll
const observerOptions = {
  threshold: 0.1,
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll(".progress-bar")
      progressBars.forEach((bar) => {
        const width = bar.style.width
        bar.style.width = "0%"
        setTimeout(() => {
          bar.style.width = width
        }, 100)
      })
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe the skills section
const skillsSection = document.querySelector(".skill-item")
if (skillsSection) {
  observer.observe(skillsSection.parentElement)
}

// Add hover effect feedback
document.querySelectorAll(".card, .btn, .contact-link").forEach((element) => {
  element.addEventListener("mouseenter", function () {
    this.style.transition = "all 0.3s ease"
  })
})

// Contact form functionality
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio website loaded successfully!")
  console.log("Student: Byekwaso Dremor Samuel")
  console.log("Registration: 24/BSE/BU/R/0022")
})

// Scroll to top button functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Add scroll to top on button click
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    // You can add a scroll-to-top button here if desired
  }
})

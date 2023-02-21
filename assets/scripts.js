document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.js-anchor').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
    })
  })
})
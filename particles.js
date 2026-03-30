particlesJS("particles-js", {
  particles: {
    number: {
      value: 150,
      density: { enable: true, value_area: 800 }
    },

    color: {
      value: ["#ffffff", "#aaccff", "#d5b3ff"]
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: true,
        speed: 0.8,
        opacity_min: 0.2
      }
    },

    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 1.5,
        size_min: 0.3
      }
    },

    line_linked: {
      enable: false
    },

    move: {
      enable: true,
      speed: 0.15,
      direction: "none",
      random: true,
      out_mode: "out"
    }
  },

  interactivity: {
    events: {
      onhover: { enable: false },
      onclick: { enable: false }
    }
  },

  retina_detect: true
});
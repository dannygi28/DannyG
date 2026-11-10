/* Menú móvil, búsqueda y formulario de contacto */

document.addEventListener("DOMContentLoaded", () => {

  // MENÚ RESPONSIVO

  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");

  if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

      const isOpen = navigation.classList.toggle("is-open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
      );

    });

    navigation.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        navigation.classList.remove("is-open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
          "aria-label",
          "Abrir menú"
        );

      });

    });
  }


  // FORMULARIO DE CONTACTO

  const contactForm = document.querySelector("#contact-form");

  if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

      event.preventDefault();

      const formData = new FormData(contactForm);

      const name = String(
        formData.get("name") || ""
      ).trim();

      const feedback = document.querySelector("#form-feedback");

      if (feedback) {

        feedback.textContent =
          `¡Gracias${name ? `, ${name}` : ""}! Tu mensaje está listo. Para recibirlo realmente, conecta este formulario a Netlify Forms o a un servicio de correo.`;

      }

      console.log(
        "Formulario de contacto:",
        Object.fromEntries(formData.entries())
      );

      contactForm.reset();

    });

  }


  // AÑO AUTOMÁTICO DEL FOOTER

  document.querySelectorAll(".current-year").forEach((element) => {

    element.textContent = new Date().getFullYear();

  });


  // BÚSQUEDA

  document.querySelectorAll(".search-box").forEach((form) => {

    form.addEventListener("submit", (event) => {

      event.preventDefault();

      const query = form.querySelector("input").value.trim();

      if (query) {

        window.location.href =
          `portafolio.html?q=${encodeURIComponent(query)}`;

      }

    });

  });

});
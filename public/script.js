const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}

const parallaxElements = document.querySelectorAll("[data-parallax]");

const updateParallax = () => {
  const viewportMiddle = window.innerHeight / 2;

  parallaxElements.forEach((el) => {
    const speed = Number(el.dataset.parallax || 0.1);
    const rect = el.getBoundingClientRect();
    const centerOffset = rect.top + rect.height / 2 - viewportMiddle;
    const translateY = centerOffset * speed * -0.28;

    el.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(1.06)`;
  });
};

let ticking = false;

const onScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateParallax();
      ticking = false;
    });

    ticking = true;
  }
};

if (parallaxElements.length > 0) {
  updateParallax();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", updateParallax);
}

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const galleryItems = document.querySelectorAll(".gallery-item");

const closeLightbox = () => {
  if (!lightbox) {
    return;
  }

  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

if (lightbox && lightboxImage && lightboxCaption && lightboxClose && galleryItems.length > 0) {
  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const imageUrl = item.dataset.image;
      const caption = item.dataset.caption || "";

      if (!imageUrl) {
        return;
      }

      lightboxImage.src = imageUrl;
      lightboxCaption.textContent = caption;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });
}

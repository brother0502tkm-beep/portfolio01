jQuery("#js-drawer-icon").on("click", function (e){
    e.preventDefault();
    jQuery("#js-drawer-icon").toggleClass("is-checked");
    jQuery("#js-drawer-content").toggleClass("is-checked");
});

// const drawerIcon = document.querySelector("#js-drawer-icon");
// const drawerContent = document.querySelector("#js-drawer-content");

//  drawerIcon.addEventListener("click", function(e) {
//     e.preventDefault();
//     drawerIcon.classList.toggle("is-checked");
//     drawerContent.classList.toggle("is-checked");
// });

jQuery(".js-accordion").on("click", function(e) {
    e.preventDefault();

    if(jQuery(this).parent().hasClass("is-open")) {
      jQuery(this).parent().removeClass("is-open");
      jQuery(this).next().slideUp();
    } else {
        jQuery(this).parent().addClass("is-open");
        jQuery(this).next().slideDown();
    }
  });

  const swiper = new Swiper("#js-gallery-swiper", {
    spaceBetween: 82,
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: "#js-gallery-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: "#js-gallery-next",
    prevEl: "#js-gallery-prev",
  },
});

const modalOpenItems = document.querySelectorAll(".js-modal-open");
const modalCloseItems = document.querySelectorAll(".js-modal-close");
const aboutModal = document.querySelector("#js-about-modal");

modalOpenItems.forEach(function (modalOpenItem) {
    modalOpenItem.addEventListener("click", function(e) {
        e.preventDefault();

        if (aboutModal) {
            aboutModal.showModal();
        }
    })
});

modalCloseItems.forEach(function (modalCloseItem) {
    modalCloseItem.addEventListener("click", function(e) {
        e.preventDefault();

        if (aboutModal) {
            aboutModal.close();
        }
    });
});
// ドロワー箇所でチェックした時にドロワーコンテンツが消える
jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
  jQuery("#js-drawer-icon").removeClass("is-checked");
    jQuery("#js-drawer-content").removeClass("is-checked");
});

jQuery('a[href^="#"]').on("click", function (e) {
    const speed = 300;
    const id = jQuery(this).attr("href");
    const target = jQuery("#" == id ? "html" : id);
    const position = jQuery(target).offset().top;
    jQuery("html, body").animate(
        {
            scrollTop: position,
        },
        speed,
        "swing" // swing or linear
    );
});


const pageTop = document.querySelector("#js-page-top");
window.addEventListener("scroll", function() {
    if(100 < window.scrollY) {
        pageTop.classList.add("is-show");
    }else {
        pageTop.classList.remove("is-show");
    }
});

const intersectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
    if (entry.isIntersecting) {
        entry.target.classList.add("is-in-view");
     }else {
        // entry.target.classList.remove("is-in-view");
     }
    });
});

const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach(function (inViewItems) {
    intersectionObserver.observe(inViewItems);
});

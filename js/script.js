
  document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navbarNav = document.querySelector('.navbar-nav');

    hamburgerMenu.addEventListener('click', function () {
      navbarNav.classList.toggle('active');
    });
  });
  
  
// 
  document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('circular-popup');
  
    // Function to update the popup position based on scroll
    function updatePopupPosition() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const popupHeight = popup.offsetHeight;
  
      if (scrollTop > windowHeight - popupHeight - 20) {
        popup.style.bottom = '20px';
      } else {
        popup.style.bottom = '2rem';
      }
    }
  
    // Event listener for scroll event
    window.addEventListener('scroll', updatePopupPosition);
    window.addEventListener('resize', updatePopupPosition);
  
    // Initial call to set the position
    updatePopupPosition();
  });
  

document.getElementById('whatsapp-link').onclick = function() { 
 const message = 'HALLO MITRA MUDA apakah produk masih tersedia.'; // Replace with your message
  const whatsappURL = 'https://wa.me/6285649485250?text=' + encodeURIComponent(message);
  window.location.href = whatsappURL;
};



document.addEventListener('DOMContentLoaded', function() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');

  galleryItems.forEach(item => {
      item.addEventListener('click', function() {
          lightbox.style.display = 'block';
          lightboxImg.src = this.src;
      });
  });

  closeBtn.addEventListener('click', function() {
      lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', function(event) {
      if (event.target === lightbox) {
          lightbox.style.display = 'none';
      }
  });

  let isDragging = false;
  let startX, startY, initialX, initialY;

  lightboxImg.addEventListener('mousedown', function(e) {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      initialX = lightboxImg.offsetLeft;
      initialY = lightboxImg.offsetTop;
      lightboxImg.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', function(e) {
      if (isDragging) {
          const dx = e.clientX - startX;
          const dy = e.clientY - startY;
          lightboxImg.style.left = `${initialX + dx}px`;
          lightboxImg.style.top = `${initialY + dy}px`;
      }
  });

  document.addEventListener('mouseup', function() {
      isDragging = false;
      lightboxImg.style.cursor = 'grab';
  });
});

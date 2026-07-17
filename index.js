// Claro Academy JavaScript Functionality

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll class toggle
  const header = document.getElementById('header');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run once in case page loads scrolled down

  // 2. Mobile menu drawer functionality
  const hamburger = document.getElementById('hamburger-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer-menu');
  const body = document.body;

  const toggleMobileMenu = () => {
    hamburger.classList.toggle('active');
    mobileDrawer.classList.toggle('active');
    // Prevent scrolling when mobile menu is open
    body.classList.toggle('overflow-hidden');
  };

  hamburger.addEventListener('click', toggleMobileMenu);

  // Close mobile drawer when clicking a nav link
  const mobileLinks = [
    document.getElementById('mob-link-programs'),
    document.getElementById('mob-link-about'),
    document.getElementById('mob-btn-booking')
  ];

  mobileLinks.forEach(link => {
    if (link) {
      link.addEventListener('click', () => {
        if (mobileDrawer.classList.contains('active')) {
          toggleMobileMenu();
        }
      });
    }
  });

  // 3. Pre-select program from program card buttons
  const selectJuniorsBtn = document.getElementById('btn-select-juniors');
  const selectAdultsBtn = document.getElementById('btn-select-adults');
  const programSelector = document.getElementById('form-program');

  if (selectJuniorsBtn && programSelector) {
    selectJuniorsBtn.addEventListener('click', () => {
      programSelector.value = 'juniors';
    });
  }

  if (selectAdultsBtn && programSelector) {
    selectAdultsBtn.addEventListener('click', () => {
      programSelector.value = 'adults';
    });
  }

  // 4. Booking Form Submission handling
  const bookingForm = document.getElementById('session-booking-form');
  const successMessage = document.getElementById('booking-success-msg');

  if (bookingForm && successMessage) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent page reload

      // Get values (for local logging / API request structure)
      const bookingData = {
        name: document.getElementById('form-name').value,
        email: document.getElementById('form-email').value,
        phone: document.getElementById('form-phone').value,
        program: document.getElementById('form-program').value,
        date: document.getElementById('form-date').value,
        notes: document.getElementById('form-notes').value
      };

      console.log('Session booking submitted successfully:', bookingData);

      // Animate transition to success state
      bookingForm.style.transition = 'opacity 0.3s ease';
      bookingForm.style.opacity = '0';
      
      setTimeout(() => {
        bookingForm.style.display = 'none';
        successMessage.style.display = 'block';
        successMessage.style.opacity = '0';
        successMessage.style.transition = 'opacity 0.5s ease';
        
        // Trigger reflow
        successMessage.offsetHeight;
        successMessage.style.opacity = '1';
      }, 300);
      
      // Clear form
      bookingForm.reset();
    });
  }

  // 5. Contact Form Submission handling
  const contactForm = document.getElementById('contact-us-form');
  const contactSuccessMessage = document.getElementById('contact-success-msg');

  if (contactForm && contactSuccessMessage) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const contactData = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        phone: document.getElementById('contact-phone').value,
        topic: document.getElementById('contact-topic').value,
        message: document.getElementById('contact-message').value
      };

      console.log('Contact form submitted successfully:', contactData);

      contactForm.style.transition = 'opacity 0.3s ease';
      contactForm.style.opacity = '0';
      
      setTimeout(() => {
        contactForm.style.display = 'none';
        contactSuccessMessage.style.display = 'block';
        contactSuccessMessage.style.opacity = '0';
        contactSuccessMessage.style.transition = 'opacity 0.5s ease';
        
        contactSuccessMessage.offsetHeight;
        contactSuccessMessage.style.opacity = '1';
      }, 300);
      
      contactForm.reset();
    });
  }
});

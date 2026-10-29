document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('dynamicModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const closeBtn = document.querySelector('.modal-close-btn');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-title');
      modalTitle.textContent = title;
      
      // Clear out the previous layout contents safely
      modalBody.innerHTML = '';

      // Find the template tag inside the clicked card
      const template = card.querySelector('.modal-rich-content');
      
      if (template) {
        // Clone the content fragments inside the template element
        const clone = template.content.cloneNode(true);
        const sections = clone.querySelectorAll('.rich-section');

        sections.forEach((section, index) => {
          // Construct out the formal wrapping layout block element
          const block = document.createElement('div');
          block.classList.add('modal-content-block');

          // Extract image URL from the section's data attribute
          const imgUrl = section.getAttribute('data-img');
          if (imgUrl) {
            const img = document.createElement('img');
            img.src = imgUrl;
            img.alt = `${title} structural step ${index + 1}`;
            block.appendChild(img);
          }

          // Move all rich HTML contents (h3, p, ul, a) from section to layout block
          while (section.firstChild) {
            block.appendChild(section.firstChild);
          }

          modalBody.appendChild(block);
        });
      }

      // Display the active modal screen state
      modal.classList.add('is-active');
    });
  });

  // Modal Dismiss Triggers
  const hideModal = () => modal.classList.remove('is-active');
  closeBtn.addEventListener('click', hideModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) hideModal();
  });
});

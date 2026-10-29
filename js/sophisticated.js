// <!-- Modal Logic -->
    
        const openModalBtn = document.getElementById('openModalBtn');
        const closeModalBtn = document.getElementById('closeModalBtn');
        const modalOverlay = document.getElementById('modalOverlay');

        function openModal() {
            modalOverlay.classList.add('is-active');
            document.body.style.overflow = 'hidden'; // Lock background scroll
        }

        function closeModal() {
            modalOverlay.classList.remove('is-active');
            document.body.style.overflow = ''; // Unlock background scroll
        }

        openModalBtn.addEventListener('click', openModal);
        closeModalBtn.addEventListener('click', closeModal);

        // Close on clicking outside the modal window box
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });

        // Close on Escape key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('is-active')) {
                closeModal();
            }
        });
   

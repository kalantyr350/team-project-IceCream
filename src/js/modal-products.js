(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-products-modal-open]"),
      closeModalBtn: document.querySelector("[data-products-modal-close]"),
      modal: document.querySelector("[data-products-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle("products-is-open");
    }
  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-products-modal-2-open]"),
      closeModalBtn: document.querySelector("[data-products-modal-2-close]"),
      modal: document.querySelector("[data-products-modal-2]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle("products-is-open-2");
    }
  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-products-modal-3-open]"),
      closeModalBtn: document.querySelector("[data-products-modal-3-close]"),
      modal: document.querySelector("[data-products-modal-3]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle("products-is-open-3");
    }
  })();
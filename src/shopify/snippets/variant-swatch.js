class VariantSwatch extends HTMLElement {
  constructor() {
    super();
    this._init();
  }

  _init() {
    const customSelects = this.querySelectorAll(
      ".custom-select[data-variant-availability]"
    );
    customSelects.forEach((customSelect) => {
      this._setupEvents(customSelect);
    });
  }

  _setupEvents(customSelect) {
    const trigger = customSelect.querySelector(
      ".featured-products_custom-select__trigger"
    );
    const triggerText = customSelect.querySelector(
      ".featured-products_custom-select__text"
    );
    const options = customSelect.querySelectorAll(".custom-select__option");
    const hiddenInput = customSelect.nextElementSibling;
    const priceElement = this.querySelector("[data-product-price]");
    const addToCartButton = this.querySelector(".add-to-cart-button");

    const updateButtonState = () => {
      const selectedOption = Array.from(options).find(
        (option) => option.dataset.value === hiddenInput.value
      );

      if (selectedOption) {
        const isAvailable = selectedOption.dataset.available !== "0";
        addToCartButton.classList.toggle("disabled", !isAvailable);
      }
    };

    trigger.addEventListener("click", () => {
      event.preventDefault();
      customSelect.classList.toggle("custom-select--open");
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        const value = option.getAttribute("data-value");
        const text = option.textContent;
        const price = option.getAttribute("data-price");

        if (hiddenInput) {
          hiddenInput.value = value;
        }

        triggerText.textContent = text;

        if (priceElement && price) {
          priceElement.textContent = `${price} |`;
        }

        customSelect.classList.remove("custom-select--open");

        updateButtonState();
      });
    });

    updateButtonState();

    document.addEventListener("click", (e) => {
      if (!customSelect.contains(e.target)) {
        customSelect.classList.remove("custom-select--open");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  customElements.define("variant-swatch", VariantSwatch);
});

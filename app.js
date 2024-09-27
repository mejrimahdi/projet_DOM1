document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.card');
    const totalPriceElement = document.querySelector('.total');
    let totalPrice = 0;
  
    productCards.forEach(card => {
      const plusBtn = card.querySelector('.fa-plus-circle');
      const minusBtn = card.querySelector('.fa-minus-circle');
      const deleteBtn = card.querySelector('.fa-trash-alt');
      const heartBtn = card.querySelector('.fa-heart');
      const quantityElement = card.querySelector('.quantity');
      const unitPriceElement = card.querySelector('.unit-price');
      let quantity = 0;
      const unitPrice = parseFloat(unitPriceElement.textContent.replace('$', '').trim());
  
      // Function to update the total price
      const updateTotalPrice = (change) => {
        totalPrice += change;
        totalPriceElement.textContent = `${totalPrice.toFixed(2)} $`;
      };
  
      // Plus button click event
      plusBtn.addEventListener('click', () => {
        quantity += 1;
        quantityElement.textContent = quantity;
        updateTotalPrice(unitPrice);
      });
  
      // Minus button click event
      minusBtn.addEventListener('click', () => {
        if (quantity > 0) {
          quantity -= 1;
          quantityElement.textContent = quantity;
          updateTotalPrice(-unitPrice);
        }
      });
  
      // Delete button click event
      deleteBtn.addEventListener('click', () => {
        if (quantity > 0) {
          updateTotalPrice(-quantity * unitPrice);
          quantity = 0;
          quantityElement.textContent = quantity;
        }
        card.remove(); // Remove the card from the DOM
      });
  
      // Heart button click event (like functionality)
      heartBtn.addEventListener('click', () => {
        heartBtn.classList.toggle('liked');
      });
    });
  });
  
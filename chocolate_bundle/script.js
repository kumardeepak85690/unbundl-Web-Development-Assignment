document.addEventListener('DOMContentLoaded', function () {
    const chocolates = [
      { name: 'Milk Chocolate', price: 5 },
      { name: 'Dark Chocolate', price: 10 },
      { name: 'White Chocolate', price: 3 },
      { name: 'Hazelnut Chocolate', price: 1 },
      { name: 'Caramel Chocolate', price: 2 },
      { name: 'Almond Chocolate', price: 10 },
      { name: 'Mint Chocolate', price: 3 },
      { name: 'Orange Chocolate', price: 1 },
      { name: 'Raspberry Chocolate', price: 2 },
      { name: 'Coconut Chocolate', price: 5 },
      // Add more chocolates as needed
    ];
  
    const chocolateOptions = document.getElementById('chocolate-options');
    const selectedList = document.getElementById('selected-list');
    const totalPriceValue = document.getElementById('total-price-value');
    let totalPrice = 0;
  
    let selectedCount = 0; // Track the number of selected chocolates
  
    // Dynamically generate chocolate options
    chocolates.forEach((chocolate) => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = chocolate.price;
      checkbox.addEventListener('change', updateSelectedItems);
  
      const label = document.createElement('label');
      label.textContent = `${chocolate.name} - ₹${chocolate.price.toFixed(2)}`;
      label.classList.add('checkbox-label');
  
      const div = document.createElement('div');
      div.appendChild(checkbox);
      div.appendChild(label);
  
      chocolateOptions.appendChild(div);
    });
  
    // Update selected items and total price
    function updateSelectedItems() {
      let selectedPrice = 0;
      const selectedItems = [];
      const checkboxes = document.querySelectorAll(
        '#chocolate-options input[type="checkbox"]:checked'
      );
  
      selectedCount = checkboxes.length; // Update selected count
  
      if (selectedCount > 8) {
        this.checked = false; // Prevent checking if exceeding limit
        return;
      }
  
      checkboxes.forEach((checkbox) => {
        selectedPrice += parseFloat(checkbox.value);
        selectedItems.push(checkbox.nextSibling.textContent.trim());
      });
  
      totalPrice = selectedPrice.toFixed(2);
      selectedList.innerHTML = '';
      selectedItems.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        selectedList.appendChild(li);
      });
  
      totalPriceValue.textContent = `₹${totalPrice}`;
    }
  });
  
<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    const billAmountInput = document.getElementById('billAmount');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const numPeopleInput = document.getElementById('numPeople');
    
    const calculateBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    const tipPerPersonDisplay = document.getElementById('tipPerPerson');
    const totalPerPersonDisplay = document.getElementById('totalPerPerson');

    calculateBtn.addEventListener('click', () => {
        const bill = parseFloat(billAmountInput.value);
        const tipPercent = parseFloat(tipPercentageInput.value);
        const people = parseInt(numPeopleInput.value);

        // Validation
        if (isNaN(bill) || bill <= 0) {
            alert('Please enter a valid bill amount.');
            return;
        }
        if (isNaN(tipPercent) || tipPercent < 0) {
            alert('Please enter a valid tip percentage.');
            return;
        }
        if (isNaN(people) || people <= 0) {
            alert('Number of people must be at least 1.');
            return;
        }

        // Calculations
        const totalTip = bill * (tipPercent / 100);
        const totalBill = bill + totalTip;
        
        const tipPerPerson = totalTip / people;
        const totalPerPerson = totalBill / people;

        // Display results with 2 decimal places
        tipPerPersonDisplay.textContent = `$${tipPerPerson.toFixed(2)}`;
        totalPerPersonDisplay.textContent = `$${totalPerPerson.toFixed(2)}`;
    });

    resetBtn.addEventListener('click', () => {
        // Clear inputs
        billAmountInput.value = '';
        tipPercentageInput.value = '15';
        numPeopleInput.value = '1';
        
        // Reset displays
        tipPerPersonDisplay.textContent = '$0.00';
        totalPerPersonDisplay.textContent = '$0.00';
    });
});
=======
document.addEventListener('DOMContentLoaded', () => {
    const billAmountInput = document.getElementById('billAmount');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const numPeopleInput = document.getElementById('numPeople');
    
    const calculateBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    const tipPerPersonDisplay = document.getElementById('tipPerPerson');
    const totalPerPersonDisplay = document.getElementById('totalPerPerson');

    calculateBtn.addEventListener('click', () => {
        const bill = parseFloat(billAmountInput.value);
        const tipPercent = parseFloat(tipPercentageInput.value);
        const people = parseInt(numPeopleInput.value);

        // Validation
        if (isNaN(bill) || bill <= 0) {
            alert('Please enter a valid bill amount.');
            return;
        }
        if (isNaN(tipPercent) || tipPercent < 0) {
            alert('Please enter a valid tip percentage.');
            return;
        }
        if (isNaN(people) || people <= 0) {
            alert('Number of people must be at least 1.');
            return;
        }

        // Calculations
        const totalTip = bill * (tipPercent / 100);
        const totalBill = bill + totalTip;
        
        const tipPerPerson = totalTip / people;
        const totalPerPerson = totalBill / people;

        // Display results with 2 decimal places
        tipPerPersonDisplay.textContent = `$${tipPerPerson.toFixed(2)}`;
        totalPerPersonDisplay.textContent = `$${totalPerPerson.toFixed(2)}`;
    });

    resetBtn.addEventListener('click', () => {
        // Clear inputs
        billAmountInput.value = '';
        tipPercentageInput.value = '15';
        numPeopleInput.value = '1';
        
        // Reset displays
        tipPerPersonDisplay.textContent = '$0.00';
        totalPerPersonDisplay.textContent = '$0.00';
    });
});
>>>>>>> 6dc62b4a495c872ca3eda086820c735140f5f22b

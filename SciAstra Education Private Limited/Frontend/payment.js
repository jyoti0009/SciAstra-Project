document.getElementById('payment-form').addEventListener('submit', handlePaymentSubmission);

function handlePaymentSubmission(event) {
    event.preventDefault();
    
    const paymentMethod = getSelectedPaymentMethod();
    if (validatePaymentMethod(paymentMethod)) {
        alert(`Payment method selected: ${paymentMethod}`);
        // Implement two-step verification logic here
        processPayment(paymentMethod);
    } else {
        alert('Please select a valid payment method.');
    }
}

function getSelectedPaymentMethod() {
    return document.getElementById('payment-method').value;
}

function validatePaymentMethod(method) {
    // Add your validation logic here (e.g., check if the method is not empty)
    return method !== '';
}

function processPayment(method) {
    // Redirect to dummy payment page or handle payment processing
    console.log(`Processing payment with method: ${method}`);
    // Example: window.location.href = '/dummy-payment-page';
}
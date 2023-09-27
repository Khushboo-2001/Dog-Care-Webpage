function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can implement further validation here

    // For this example, we'll just log the form data
    console.log('Form submitted with the following data:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // You can send the form data to a server or perform other actions here
  }
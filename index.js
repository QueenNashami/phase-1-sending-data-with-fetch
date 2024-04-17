// Add your code here
function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const formData = {
      name,
      email,
    };
    const configurationObject = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    };
  
    // Return the fetch chain to allow for further processing
    return fetch(url, configurationObject)
      .then(response => response.json())
      .then(data => {
        const userId = document.createElement('p');
        userId.textContent = `New user ID: ${data.id}`;
        document.body.appendChild(userId);
      })
      .catch(error => {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorMessage);
      });
  }
  
  // Example usage in console
  // Assuming JSON Server is running on http://localhost:3000
  submitData('John Doe', 'john.doe@email.com');
  
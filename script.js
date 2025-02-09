const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

// Create and append the loading spinner
const spinner = document.createElement('div');
spinner.id = 'loading-spinner';
document.body.appendChild(spinner);

const nextPageUrl = 'main.html'; // Replace with the actual URL of the next page

form.addEventListener('submit', (e) => {
	e.preventDefault(); // Prevent traditional form submission
	
	const userInput = codeInput.value.trim();
	
	if (userInput) {
		// Hide form and show spinner
		form.style.display = 'none';
		spinner.style.display = 'block';
		
		// Save name in localStorage
		localStorage.setItem('userInput', userInput);
		
		// Simulate loading for 2 seconds before redirecting
		setTimeout(() => {
			window.location.href = nextPageUrl; // Redirect to the next page
		}, 2000);
	}
});

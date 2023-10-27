// Import the UI module for handling UI interactions
import { handleSearch } from './ui.js';

// Add an event listener to the search button when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', handleSearch);

    // Add an event listener to the input field to listen for "Enter" key press
    const inputField = document.querySelector('.search-box input');
    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            // If the "Enter" key is pressed, trigger the search function
            handleSearch();
        }
    });
});
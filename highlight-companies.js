// Script to highlight company names
document.addEventListener('DOMContentLoaded', function() {
    // Find all experience location paragraphs
    const locationElements = document.querySelectorAll('.experience-location');
    
    // For each location element
    locationElements.forEach(element => {
        // Check if it contains Vunet Systems
        if (element.innerHTML.includes('Vunet Systems')) {
            // Replace the text with a highlighted version
            element.innerHTML = element.innerHTML.replace(
                'Vunet Systems', 
                '<span style="color: #6c5ce7; font-weight: 600;">Vunet Systems</span>'
            );
        }
    });
});

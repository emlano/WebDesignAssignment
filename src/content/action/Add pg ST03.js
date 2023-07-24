	// define the color schemes
	const colorSchemes = [
		{ bg: 'black', color: 'white' },	
	];

	// set the initial color scheme and font size
	let currentColorScheme = 0;
	let currentFontSize = 16;
	setStyles();

	function setStyles() {
		// update the color scheme and font size
		const style = `body { background-color: ${colorSchemes[currentColorScheme].bg}; color: ${colorSchemes[currentColorScheme].color}; font-size: ${currentFontSize}px; }`;
		document.getElementById('style').innerHTML = style;
	}
	
	function showInfo(place, imageUrl, description) {
  	// Create a modal dialog box to display the information
  	let modal = document.createElement('div');
  	modal.style.display = 'block';
  	modal.style.position = 'fixed';
  	modal.style.zIndex = '1';
 	modal.style.left = '0';
  	modal.style.top = '0';
	modal.style.width = '100%';
	modal.style.height = '100%';
	modal.style.overflow = 'auto';
	modal.style.backgroundColor = 'rgba(0,0,0,0.4)';

	// Create a content div inside the modal box
	let content = document.createElement('div');
	content.style.backgroundColor = '#000';
	content.style.margin = '10% auto';
	content.style.padding = '10px';
	content.style.width = '40%';

	// Create an image tag and set its source to the clicked image URL
	let image = document.createElement('img');
	image.src = imageUrl;
	image.style.width = '100%';

	// Create a paragraph tag and set its text to the clicked place description
	let desc = document.createElement('p');
	desc.textContent = description;
	desc.style.textAlign = 'center';

	// Append the image and description to the content div
	content.appendChild(image);
	content.appendChild(desc);

	// Append the content div to the modal box
	modal.appendChild(content);

	// Append the modal box to the HTML body
	document.body.appendChild(modal);

	// Close the modal box when the user clicks outside of it
	modal.onclick = function() {
		modal.style.display = 'none';
	}
}
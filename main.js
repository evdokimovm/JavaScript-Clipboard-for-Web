var button = document.getElementById("copy-btn"),
	input =  document.getElementById("content");

button.addEventListener("click", function(event) {
	event.preventDefault();
	// Select the input node's contents
	input.select();
	// Copy it to the clipboard
	document.execCommand("copy");
});
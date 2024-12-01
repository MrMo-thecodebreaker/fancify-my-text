// Function to make the text inside the textarea bigger
function makeTextBigger() {
    // Get the textarea element by its ID
    var textArea = document.getElementById("userText");
    
    // Change the font size of the textarea to 24pt
    textArea.style.fontSize = "24pt";
}

// Function to change the text style based on the selected radio button
function changeTextStyle() {
    var textArea = document.getElementById("userText");
    var fancyShmancyRadio = document.getElementById("fancyShmancy");
    var boringBettyRadio = document.getElementById("boringBetty");

    // Check if the "FancyShmancy" radio button is checked
    if (fancyShmancyRadio.checked) {
        // Apply FancyShmancy styles (bold, blue color, underline)
        textArea.style.fontWeight = "bold"; // Make the text bold
        textArea.style.color = "blue"; // Change the text color to blue
        textArea.style.textDecoration = "underline"; // Underline the text
        alert("You selected FancyShmancy!");
    }
    // Check if the "BoringBetty" radio button is checked
    else if (boringBettyRadio.checked) {
        // Remove FancyShmancy styles (reset to normal)
        textArea.style.fontWeight = "normal"; // Reset font weight to normal
        textArea.style.color = "black"; // Reset text color to black
        textArea.style.textDecoration = "none"; // Remove underline
        alert("You selected BoringBetty!");
    }
}

// Function to convert the text in the textarea to uppercase and add "-Moo" to the last word of each sentence
function makeTextUppercase() {
    // Get the textarea element by its ID
    var textArea = document.getElementById("userText");
    
    // Get the value of the textarea (the text entered by the user)
    var text = textArea.value;

    // Split the text into sentences based on period and space (". ")
    var sentences = text.split(". ");
    
    // Iterate over each sentence
    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();
        
        // If the sentence is not empty, modify the last word
        if (sentence.length > 0) {
            var words = sentence.split(" "); // Split sentence into words
            var lastWord = words[words.length - 1]; // Get the last word
            
            // Add "-Moo" to the last word, but ensure it still has the period at the end of the sentence
            words[words.length - 1] = lastWord.toLowerCase() + "-Moo";
            
            // Rejoin the words into the sentence
            sentences[i] = words.join(" ");
        }
    }
    
    // Join the sentences back together with ". " (period and space)
    var updatedText = sentences.join(". ");

    // Convert the sentence part of the text to uppercase (but leave "-Moo" in lowercase)
    updatedText = updatedText.replace(/([^.]+)(-Moo)/g, function(match, sentence, moo) {
        // Make sure sentence is uppercase, but leave "-Moo" lowercase
        return sentence.toUpperCase() + moo;
    });

    // Make sure each sentence ends with a period
    updatedText = updatedText.replace(/([^.]+)(?=\s*$)/g, function(match) {
        return match + "."; // Add a period if missing
    });

    // Set the new value back to the textarea
    textArea.value = updatedText;
}

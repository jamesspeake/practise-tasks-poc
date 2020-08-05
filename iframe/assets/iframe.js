document.addEventListener("DOMContentLoaded", function(){

    /* Post messages to parent window on all inputs, buttons etc */

    // Inputs
    const inputs = document.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("blur", function() {
            console.log("Input changed: " + this.id);
            var data = {
                field: this.id,
                value: this.value
            };
            top.postMessage(data, '*');
        });
    }

    // Buttons
    const buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            console.log("Button click: " + this.id);
            var data = {
                field: this.id,
                value: this.value
            };
            top.postMessage(data, '*');

            // TODO: Add window.location change if data-path exists on it and it is the current focus
        });
    }

    // Textarea
    const textareas = document.querySelectorAll("textarea");
    for (let i = 0; i < textareas.length; i++) {
        textareas[i].addEventListener("blur", function() {
            console.log("Text area changed: " + this.id);
            var data = {
                field: this.id,
                value: this.value
            };
            top.postMessage(data, '*');
        });
    }

    /* Receive messages from parent window */

    // Event listener for passing in instructions from parent frame
    var currentFocus = null;
    function receiveMessage(event) {

        // Highlighting
        if (event.data.type === "highlight") {
            if (currentFocus !== null) {
                document.getElementById(currentFocus).classList.remove("highlight");
            } 
            if (event.data.value !== null) {
                console.log("Highlighting: " + event.data.value);
                currentFocus = event.data.value;
                document.getElementById(currentFocus).classList.add("highlight");
            } else {
                console.log("Highlighting off");
                currentFocus = null;
            }
        }

        // Could have an additional 'do it for me' function where you pass in the value you're expecting

    }

    window.addEventListener("message", receiveMessage, false);
});


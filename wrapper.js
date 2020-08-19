document.addEventListener("DOMContentLoaded", loadConfig(function(configFile) {
    // Parse JSON string into object
    var config = JSON.parse(configFile);

    // Load the iframe
    loadIframe(config.iframe);

    // Set the title
    document.getElementById("title").innerText = config.title;

    // Load the steps
    var steps = config.steps;
    var currentStep = null;
    function setCurrentStep(data) {
        currentStep = data;
        document.getElementById("instructions").innerText = data.instruction;
        setHintText("");
        if (showMeVal) { 
            showMe();
        }
        console.log("Posting to API step " + data.step);
    }

    function setHintText(hintText) {
        document.getElementById("hint").innerText = hintText;
    }

    // Initialise the first instruction
    setCurrentStep(steps[0]);


    // Function to compare the value of what's been entered against trigger
    // Can be extended to include fuzzy searching
    function compareFieldValues(enteredValue, triggerValue) {
        return enteredValue.toLowerCase() === triggerValue.toLowerCase();
    }


    // TODO: If this is the last step then hide the toggle button 
    // TODO: If this is the last step then enable the next button & add a start again button

    // Toggle the highlight stuff
    var showMeVal = false;
    function showMeToggle() {
        showMeVal = !showMeVal;
        var showMeText = showMeVal ? "Turn off highlight" : "Show me where";
        document.getElementById("showMe").innerText = showMeText;
        showMe();
    }
    document.getElementById("showMe").addEventListener("click", showMeToggle);

    function showMe() {
        
        frameDoc = contentFrame.contentDocument; 

        var currentFocus = currentStep.triggerField;
        if (showMeVal) {
            console.log("Highlighting: " + currentFocus);
            frameDoc.getElementById(currentFocus).classList.add("highlight");
        } else {
            console.log("Highlighting off");
            frameDoc.getElementById(currentFocus).classList.remove("highlight");
        }

    }
}));

function loadConfig(callback) {  

    // Shonky way of switching config file!! Should be using data-config on body tag
    var configFile = "config_registration.json"; 
    if (window.location.pathname.indexOf("task2.html") != -1) {
        configFile = "config_email.json";
    } else if (window.location.pathname.indexOf("task3.html") != -1) {
        configFile = "config_send_email.json";
    }

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', configFile, true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

 // TODO: hook into the browser back and forward buttons so you can go back to previous step
// - will need to remove values from fields if you want to go back
// TODO: Could use a fuzzy matching function - https://fusejs.io/
// https://bashooka.com/coding/javascript-fuzzy-search-libraries/

// TODO: Disable all buttons and clicks and only enable when they are the trigger 

function loadIframe(iframePath) {

    // Load the iframe
    document.getElementById('contentFrame').src = iframePath;

    // Add all the functions to the iframe - yes this can be easily done
    contentFrame.onload = function() {
        frameDoc = contentFrame.contentDocument; 
    
        // Add listeners to the iframe
    
        // Inputs
        const inputs = frameDoc.querySelectorAll("input");
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
        const buttons = frameDoc.querySelectorAll("button");
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
        const textareas = frameDoc.querySelectorAll("textarea");
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
    };
}
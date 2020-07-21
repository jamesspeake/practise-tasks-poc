document.addEventListener("DOMContentLoaded", loadConfig(function(configFile) {
    // Parse JSON string into object
    var config = JSON.parse(configFile);

    // Load the iframe
    var iframe = config.iframe;
    document.getElementById('contentFrame').src = iframe;

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

    // event listener for whats going on in the iframe
    function receiveMessage(event) {
        

            if (event.data.field === currentStep.triggerField) {
                for(i=0; i<steps.length; i++) {
                    var step = steps[i];
                    if (event.data.field === step.triggerField && event.data.value === step.triggerValue) {
                        var nextStep = steps[i+1];
                        setCurrentStep(nextStep);
                    }
                } 
            } else {
                document.getElementById("hint").innerText = currentStep.hint;
            }
            // TODO: could there be additional steps that only produce hint text - ie if we want to catch someone clicking the cancel button
        
    }
    window.addEventListener("message", receiveMessage, false);

    // TODO: If this is the last step then hide the toggle button and put a start again button

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
        var highlightFocus = showMeVal ? currentStep.triggerField : null;
        var data = {
            type: "highlight",
            value: highlightFocus
        }
        var contentFrame = document.getElementById("contentFrame").contentWindow;
        contentFrame.postMessage(data, '*'); // TODO: * isn't best practice, but fine for this
    }
}));

function loadConfig(callback) {  

    // Shonky way of switching config file!! Should be using data-config on body tag
    var configFile = "config_registration.json"; 
    if (window.location.pathname.indexOf("task2.html") != -1) {
        configFile = "config_email.json";
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

// TODO: Disable moving between screens if it's not the right step
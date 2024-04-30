function buildVideo(source, question1, question2) {
    const container = document.getElementById("container");
  
    // Create a section for the video
    const videoSection = document.createElement("section");
    container.appendChild(videoSection);
  
    // Create a video element
    const video = document.createElement("video");
    video.src = source;
    video.controls = true;
    videoSection.appendChild(video);
  
    // Create a section for the first question
    const questionSection1 = document.createElement("section");
    container.appendChild(questionSection1);
  
    // Create a div for the first question container
    const questionContainer1 = document.createElement("div");
    questionContainer1.classList.add("question-container");
    questionSection1.appendChild(questionContainer1);
  
    // Create a paragraph for the first question text
    const questionText1 = document.createElement("p");
    questionText1.textContent = question1;
    questionContainer1.appendChild(questionText1);
  
    // Define the options for the first question
    const options1 = [
      { value: "a. the 3d arrangment of molecules", correct: true },
      { value: "b. the 2d arrangment of molecules", correct: false },
      { value: "c. the 3d arrangment of ions", correct: false },
      { value: "d. the 2d arrangment of electrons", correct: false }
    ];
  
    // Create the options (radio buttons and labels) for the first question
    createOptions(questionContainer1, options1);
  
    // Create a section for the second question
    const questionSection2 = document.createElement("section");
    container.appendChild(questionSection2);
  
    // Create a div for the second question container
    const questionContainer2 = document.createElement("div");
    questionContainer2.classList.add("question-container");
    questionSection2.appendChild(questionContainer2);
  
    // Create a paragraph for the second question text
    const questionText2 = document.createElement("p");
    questionText2.textContent = question2;
    questionContainer2.appendChild(questionText2);
  
    // Define the options for the second question
    const options2 = [
      { value: "a. hydrogen bonding", correct: true },
      { value: "b. ionic bonding", correct: false },
      { value: "c. dipole-dipole forces", correct: false },
      { value: "d. london dispersion forces", correct: false }
    ];
  
    // Create the options (radio buttons and labels) for the second question
    createOptions(questionContainer2, options2);
  }
  
  function createOptions(questionContainer, options) {
    options.forEach((option, index) => {
      // Create a radio button
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `options-${index}`;
      radio.value = option.value;
  
      // Create a label for the radio button
      const label = document.createElement("label");
      label.textContent = option.value;
  
      // Add event listener to the radio button
      radio.addEventListener("change", function() {
        // Reset the color of all labels in the question container to white
        const labels = questionContainer.querySelectorAll('label');
        labels.forEach((lbl) => {
          lbl.style.color = 'white';
        });
  
        // Check the selected option and highlight the correct or incorrect choice
        if (option.correct) {
          label.style.color = 'green';
        } else {
          label.style.color = 'red';
        }
      });
  
      questionContainer.appendChild(radio);
      questionContainer.appendChild(label);
  
      // Add a line break after each option
      const br = document.createElement("br");
      questionContainer.appendChild(br);
    });
  }
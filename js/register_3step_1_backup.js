
  document.addEventListener("DOMContentLoaded", function () {
    // PASTE THE YEAR GENERATOR SCRIPT RIGHT HERE:
  const gradYearSelect = document.getElementById("gradYear");
  const startYear = 1960;
  const endYear = 2026;
  for (let year = endYear; year >= startYear; year--) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    gradYearSelect.appendChild(option);
  }
    const form = document.getElementById("alumniFestForm");
    const steps = Array.from(document.querySelectorAll(".form-step"));
    const progressSteps = Array.from(document.querySelectorAll(".progress-step"));
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentStep = 1;

    // 1. CONDITIONAL LOGIC: Former/Maiden Name Checkbox
    const maidenCheckbox = document.getElementById("hasMaidenName");
    const maidenNameGroup = document.getElementById("maidenNameGroup");

    maidenCheckbox.addEventListener("change", function () {
      if (this.checked) {
        maidenNameGroup.classList.add("show");
      } else {
        maidenNameGroup.classList.remove("show");
        maidenNameGroup.querySelector("input").value = ""; // clear if unchecked
      }
    });

    // 2. MULTI-STEP NAVIGATION FUNCTIONS
    function updateFormDisplay() {
      // Toggle Form Steps Visibility
      steps.forEach((step) => {
        step.classList.toggle("active", parseInt(step.dataset.step) === currentStep);
      });

      // Update Progress Circles Styling
      progressSteps.forEach((progress) => {
        const stepNum = parseInt(progress.dataset.step);
        progress.classList.toggle("active", stepNum === currentStep);
        progress.classList.toggle("completed", stepNum < currentStep);
      });

      // Update Navigation Buttons Text & UI
      if (currentStep === 1) {
        prevBtn.style.display = "none";
      } else {
        prevBtn.style.display = "block";
      }

      if (currentStep === steps.length) {
        nextBtn.textContent = "Submit Registration";
        nextBtn.style.background = "#059669"; // Green color for submission success cue
      } else { 
        nextBtn.textContent = "Continue";
nextBtn.style.background = "var(--primary-color)";
}
}
function validateStepInputs() {
const activeStepContainer = steps.find(step => parseInt(step.dataset.step) === currentStep);
const requiredInputs = activeStepContainer.querySelectorAll("[required]");
let valid = true;
requiredInputs.forEach((input) => {
if (!input.checkValidity()) {
input.reportValidity(); // Natively highlights the blank element
valid = false;
}
});
return valid;
}
// 3. EVENT LISTENERS FOR CONTROLS
nextBtn.addEventListener("click", function () {
if (!validateStepInputs()) return; // Stop advancement if fields fail validation
if (currentStep < steps.length) {
currentStep++;
updateFormDisplay();
} else {
// Native Submit trigger if it is the final panel
form.requestSubmit();
}
});
prevBtn.addEventListener("click", function () {
if (currentStep > 1) {
currentStep--;
updateFormDisplay();
}
});
// Prevent accidental standard submissions when hitting enter on input elements
form.addEventListener("keydown", function(e) {
if(e.key === "Enter" && e.target.tagName === "INPUT") {
e.preventDefault();
nextBtn.click();
}
});
});
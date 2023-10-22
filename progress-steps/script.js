const maxSteps = document.querySelectorAll(".step").length;
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const steps = document.querySelectorAll(".step");
const progress = document.querySelector(".progress");

let currentStep = 0;

const update = () => {
    steps.forEach((step, id) => {
        if(id <= currentStep) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    })

    const actives = document.querySelectorAll('.active');
    progress.style.width = `${(actives.length - 1) / (maxSteps - 1) * 100}%`;
    
    if(currentStep === 0) {
        prevButton.disabled = true;
    }
    else if(currentStep === maxSteps - 1) {
        nextButton.disabled = true;
    }
    else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    } 
}

const nextStep = () => {
    currentStep++;
    update(nextStep);
}

const prevStep = () => {
    currentStep--;
    update(prevStep);
}
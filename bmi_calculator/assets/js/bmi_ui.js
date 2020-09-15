const button = document.getElementById('calculate')
const weightInput = document.getElementById('weight')
const heightInput = document.getElementById('height')
const resultsNode = document.getElementById('results')
const selectorNode = document.getElementById('method')
let method = 'metric'

const calculateBMI = () => {
    let bmiValue
    if (method === 'metric'){
        bmiValue = BMICalculator.calculateMetric(weightInput.value, heightInput.value)
    } else {
        bmiValue = BMICalculator.calculateImperial(weightInput.value, heightInput.value)
    }
    resultsNode.innerHTML = `<h2>Your BMI value is ${bmiValue.value.toFixed(2)} - congratulations! You are considered ${bmiValue.display.message}!</h2>`
    resultsNode.style.color = bmiValue.display.colour
}

button.addEventListener('click', () => {
    calculateBMI()    
})

selectorNode.addEventListener('change', () =>{
    method = selectorNode.options[selectorNode.selectedIndex].value
    if (method === 'imperial'){
        weightInput.placeholder = weightInput.placeholder.replace('kilograms', 'pounds')
        heightInput.placeholder = heightInput.placeholder.replace('centimeters', 'inches')
    } else {
        weightInput.placeholder = weightInput.placeholder.replace('pounds', 'kilograms')
        heightInput.placeholder = heightInput.placeholder.replace('inches', 'centimeters')
    }

})

//button.click
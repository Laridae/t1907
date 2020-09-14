const button = document.getElementById('calculate')
const weightInput = document.getElementById('weight')
const heightInput = document.getElementById('height')
const resultsNode = document.getElementById('results')



button.addEventListener('click', function() {
    // debugger
    let bmiValue = BMICalculator.calculateMetric(weightInput.value, heightInput.value)
    resultsNode.innerHTML = `<h2>Your BMI value is ${bmiValue.value.toFixed(2)} - congratulations!
    You are considered ${bmiValue.display.message}!</h2>`
    resultsNode.style.color = bmiValue.display.colour
    
})

//button.click
const BMICalculator = {
    calculateMetric(weight, height){
        let results = (weight/ ((height/100) * (height/100)))
        return {
            value: results,
            display: this.checkResult(results)
        }
    },
    checkResult(bmiValue){
        let display = {}
        if (bmiValue < 18.5) {
            display.message = 'in need of Breakfast'
            display.colour = 'Blue'
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9){
            display.message = 'balanced'
            display.colour = 'GoldenRod'
        } else if (bmiValue >=25 && bmiValue <= 29.9){
            display.message = 'absolutely fabolous'
            display.colour = 'LightSalmon'
        } else if (bmiValue >= 30){
            display.message = 'in need of Hiking'
            display.colour = 'teal'
        }
        return display

    }
}
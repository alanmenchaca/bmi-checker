export default class Calculator {
    static unitSystem = '';

    static userData = {
        height: 0,
        weight: 0
    };

    static bmiData = {
        bmi: 0,
        bmiCategory: '',
        idealWeight: {min: 0, max: 0}
    }
    0

    static getBMIData(unitSystem, userData) {
        this.unitSystem = unitSystem
        this.userData = userData
        this.fillBMIData();

        return this.bmiData;
    };

    static fillBMIData() {
        this.computeBMI();
        this.findBMICategory();
        this.findIdealWeight();
    }

    static computeBMI() {
        const BMI = this.unitSystem === 'metric' ?
            this.computeBMIWithMetricSystem() : this.computeBMIWithImperialSystem();
        this.bmiData.bmi = BMI.toFixed(1);
    }

    static computeBMIWithMetricSystem() {
        // formula: weight_kg / (height_m)**2
        const heightInMeters = this.userData.height / 100;
        return this.userData.weight / Math.pow(heightInMeters, 2);
    }

    static computeBMIWithImperialSystem() {
        // formula: weight_lb / (height_in)**2 * 703
        return this.userData.weight / Math.pow(this.userData.height, 2) * 703;
    }

    static findBMICategory() {
        const bmi = this.bmiData.bmi;
        let bmiCategory;

        if (bmi < 18.5) {
            bmiCategory = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiCategory = 'Healthy Weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            bmiCategory = 'Overweight';
        } else if (bmi >= 30 && bmi < 39.9) {
            bmiCategory = 'Obese';
        } else {
            bmiCategory = 'Severe Obese';
        }

        this.bmiData.bmiCategory = bmiCategory;
    }

    static findIdealWeight() {
        let height = this.getHeight();
        this.bmiData.idealWeight = this.getIdealWeight(height);
    }

    static getHeight() {
        let height = this.userData.height / 100;

        if (this.unitSystem !== 'metric') {
            const INCH_TO_METERS = 0.0254;
            height = this.userData.height * INCH_TO_METERS;
        }

        return height;
    }

    static getIdealWeight(height) {
        let [minWeight, maxWeight] = this.findMinAndMaxWeight(height);

        if (this.unitSystem !== 'metric') {
            const KG_TO_LIBS = 2.205;
            minWeight = minWeight * KG_TO_LIBS;
            maxWeight = maxWeight * KG_TO_LIBS;
        }

        return {
            min: minWeight.toFixed(1),
            max: maxWeight.toFixed(1)
        };
    }

    static findMinAndMaxWeight(height) {
        const BMI_LOWER_LIMIT = 18.5;
        const BMI_UPPER_LIMIT = 24.9;

        let minWeight = BMI_LOWER_LIMIT * Math.pow(height, 2);
        let maxWeight = BMI_UPPER_LIMIT * Math.pow(height, 2);

        return [minWeight, maxWeight];
    }
}

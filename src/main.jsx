import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import BMICalculator from './components/BMICalculator.jsx'

createRoot(document.getElementById('bmi-calculator')).render(
    <StrictMode>
        <BMICalculator/>
    </StrictMode>,
)

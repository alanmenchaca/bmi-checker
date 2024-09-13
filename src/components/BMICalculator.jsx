import {useEffect, useState} from "react";
import Calculator from "../utils/calculator.js";

export default function BMICalculator() {
    const [unitSystem, setUnitSystem] = useState('metric');
    const [userData, setUserData] =
        useState({height: '', weight: ''});
    const [bmiData, setBmiData] = useState({
        bmi: 0, bmiCategory: '', idealWeight: {min: 0, max: 0}
    });

    function handleOnChangeUnitSystem(e) {
        setUnitSystem(e.target.value);
        resetData();
    }

    function resetData() {
        setUserData({height: '', weight: ''});
        setBmiData({bmi: 0, bmiCategory: '', idealWeight: {min: 0, max: 0}});
    }

    function handleOnChangeUserData(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value ? parseFloat(e.target.value) : e.target.value
        });
    }

    useEffect(() => {
        if (userData.height && userData.weight) {
            setBmiData({...bmiData, ...Calculator.getBMIData(unitSystem, userData)});
        }
    }, [userData]);

    return (
        <div
            className="relative flex flex-col bg-[#F4F2EF]
            gap-2 md:gap-4 lg:gap-7 rounded-2xl
            px-5 md:px-8 py-10
            lg:w-[450px]
            xl:w-[500px]">
            <p className="text-dark-green md:text-xl lg:text-2xl">Enter your details below</p>
            <form className="grid grid-cols-2 gap-2 lg:gap-3 text-sm text-gray-500 mb-3">
                <label>
                    <input type="radio" name="unitSystem" value="metric"
                           onChange={handleOnChangeUnitSystem} className="mr-2"
                           defaultChecked={true}/>
                    <p className="inline">Metric</p>
                </label>
                <label>
                    <input type="radio" name="unitSystem" value="imperial"
                           onChange={handleOnChangeUnitSystem} className="mr-2"/>
                    <p className="inline">Imperial</p>
                </label>
                <div>
                    <label htmlFor="height">Height</label>
                    <input type="number" name="height" placeholder="0"
                           onChange={handleOnChangeUserData} value={userData.height}
                           className="block text-dark-green rounded-md w-full h-12 p-3 mt-1
                           focus:outline-none border-2 border-gray-100 focus:border-medium-green"/>
                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <input type="number" name="weight" placeholder="0"
                           onChange={handleOnChangeUserData} value={userData.weight}
                           className="block text-dark-green rounded-md w-full h-12 p-3 mt-1
                           focus:outline-none border-2 border-gray-100 focus:border-medium-green"/>
                </div>
            </form>
            <div className="text-dark-green bg-gradient-to-l from-medium-green
            p-5 md:p-10 rounded-2xl lg:rounded-r-full">
                {/*<p>Metric: {unitSystem}</p>
                <p>Height: {userData.height}</p>
                <p>Weight: {userData.weight}</p>
                <p>#######################</p>
                <p>BMI: {bmiData.bmi}</p>
                <p>BMI Category: {bmiData.bmiCategory}</p>
                <p>Ideal Weight: {bmiData.idealWeight.min} - {bmiData.idealWeight.max}</p>*/}
                {/*#######################################*/}
                {(userData.weight && userData.height) > 0 && (
                    <div className="flex flex-col lg:flex-row gap-3">
                        <div className="font-bold lg:w-1/2">
                            <p>Your BMI is...</p>
                            <p className="text-3xl lg:text-6xl xl:text-7xl">{bmiData.bmi}</p>
                        </div>
                        <p className="sm:w-[300px] text-xs xl:text-sm lg:w-1/2">
                            Your BMI suggests you are {bmiData.bmiCategory}. Your ideal weight is
                            between {bmiData.idealWeight.min} kgs - {bmiData.idealWeight.max} kgs.
                        </p>
                    </div>
                )}
                {!(userData.weight && userData.height) && (
                    <div>
                        <p className="mb-3 text-lg md:text-2xl">Welcome!</p>
                        <p className="sm:w-[300px] text-sm xl:text-base">
                            Provide your height and weight to instantly view your BMI result.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
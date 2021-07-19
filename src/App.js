import React from "react";
import Dashboard from "./Containers/Dashboard";

function App() {
    // const [bmi, setBmi] = useState(0);
    // const [weight, setWeight] = useState(0);
    // const [height, setHeight] = useState(0);
    // useEffect(() => {
    //     setBmi((weight * 100 * 100) / (height * height));
    // }, [weight, height]);

    // const updateWeight = () => {
    //     const newWeight = document.getElementById("weight").value;
    //     setWeight(newWeight);
    // };
    // const updateHeight = () => {
    //     const newHeight = document.getElementById("height").value;
    //     setHeight(newHeight);
    // };

    return (
        <div className="App">
            <Dashboard />
            {/* <h1>BMI Tracker</h1>
            <div className="inputArea">
                <label htmlFor="weight">
                    Weight {weight}
                    <input
                        type="range"
                        id="weight"
                        onChange={updateWeight}
                        min="1"
                        max="150"
                    />
                </label>
                <label htmlFor="height">
                    Height {height}
                    <input
                        type="range"
                        id="height"
                        onChange={updateHeight}
                        min="50"
                        max="220"
                    />
                </label>
                <p>{bmi}</p>
            </div> */}
        </div>
    );
}

export default App;

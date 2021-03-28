import logo from './logo.svg';
import './App.css';
import StrokePredictionForm from "./StrokePredictionForm";

const desc = "Use the form above to determine your risk of getting a stroke. (Note: The Prediction value is currently solely for demonstrative purposes and does not reflect a model's prediction)"

const App = () => {

  return (
    <div className="App">
        <p className={"stroke-predictor-title"}>Stroke Predictor</p>
        <StrokePredictionForm />
        <p className={"stroke-predictor-description"}>{desc}</p>
    </div>
  );
}

export default App;

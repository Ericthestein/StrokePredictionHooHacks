import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import {MenuItem, Select} from "@material-ui/core";

import "./StrokePredictionForm.css";

/**
 * Props: name, options[], onUpdate, value
 * @constructor
 */
const DropdownInput = (props) => {
    const {name, options, onUpdate, value} = props;

    return(
        <FormControl className={"form-item"}>
            <InputLabel>{name}</InputLabel>
            <Select
                error={false}
                required={true}
                value={value}
                onChange={(event) => {onUpdate(event.target.value)}}
            >
                {options.map((val) => {
                    return(
                        <MenuItem value={val} key={val}>{val}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )

}

/**
 * Props: name, onUpdate, value
 * @constructor
 */
const NumberInput = (props) => {
    const {name, onUpdate, value} = props;

    return(
        <FormControl className={"form-item"}>
            <InputLabel>{name}</InputLabel>
            <Input
                error={false}
                required={true}
                type={"number"}
                value={value}
                onChange={(event) => {onUpdate(event.target.value)}}
            />
        </FormControl>
    )
}

const StrokePredictionForm = () => {
    const [prediction, setPrediction] = useState(-1);
    const [gettingPrediction, setGettingPrediction] = useState(false);

    const [gender, setGender] = useState("Male")
    const [age, setAge] = useState(30)
    const [hypertension, setHypertension] = useState(0)
    const [heartDisease, setHeartDisease] = useState(0)
    const [everMarried, setEverMarried] = useState("Yes")
    const [workType, setWorkType] = useState("Private")
    const [residenceType, setResidenceType] = useState("Urban")
    const [averageGlucose, setAverageGlucose] = useState(120)
    const [BMI, setBMI] = useState(30)
    const [smoking, setSmoking] = useState("formerly smoked")

    const onPredictClicked = () => {
        // TODO: Use a REST API to get model prediction

        setPrediction(Math.random());
    }

    return(
        <div className={"container"}>
            <FormGroup className={"formgroup"}>
                <DropdownInput
                    name={"Gender"}
                    options={["Male", "Female"]}
                    onUpdate={setGender}
                    value={gender}
                />

                <NumberInput
                    name={"Age"}
                    onUpdate={setAge}
                    value={age}
                />

                <DropdownInput
                    name={"Hypertension"}
                    options={[0, 1]}
                    onUpdate={setHypertension}
                    value={hypertension}
                />

                <DropdownInput
                    name={"Heart Disease"}
                    options={[0, 1]}
                    onUpdate={setHeartDisease}
                    value={heartDisease}
                />

                <DropdownInput
                    name={"Ever Married?"}
                    options={["Yes", "No"]}
                    onUpdate={setEverMarried}
                    value={everMarried}
                />

                <DropdownInput
                    name={"Work Type"}
                    options={["Private", "Self-employed", "Govt_job", "children"]}
                    onUpdate={setWorkType}
                    value={workType}
                />

                <DropdownInput
                    name={"Residence Type"}
                    options={["Urban", "Rural"]}
                    onUpdate={setResidenceType}
                    value={residenceType}
                />

                <NumberInput
                    name={"Average Glucose Level"}
                    onUpdate={setAverageGlucose}
                    value={averageGlucose}
                />

                <NumberInput
                    name={"BMI"}
                    onUpdate={setBMI}
                    value={BMI}
                />

                <DropdownInput
                    name={"Smoking History"}
                    options={["formerly smoked", "never smoked", "smokes"]}
                    onUpdate={setSmoking}
                    value={smoking}
                />

            </FormGroup>

            <Button
                variant="contained"
                color={"primary"}
                onClick={onPredictClicked}
                disabled={gettingPrediction}
                className={"predict-button"}
            >
                {gettingPrediction ? <CircularProgress />
                    : "Predict"}
            </Button>

            <p className={"prediction-text"}>{prediction !== -1 ? `Prediction: ${Math.floor(prediction * 100)}%` : ""}</p>
        </div>
    )
}

export default StrokePredictionForm;
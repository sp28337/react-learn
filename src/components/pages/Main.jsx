import React, { useState } from "react"
import Foot from "../views/global/Foot"
import InputComponent from "../comps/Input"
import css from "../../styles/form"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const { FormContainer, Button } = css

const Main = (props) => {

    const { action } = props
    const [ value, setValue ] = useState("")
    const [ type, setType ] = useState("")
    const [ comment, setComment ] = useState("")

    const validation = () => {
        if (value.length > 2 && type) {
            console.log("Successful validation")

            const dataLine = {
                value: value,
                type: type,
                comment: comment
            }

            action(
                prev => [...prev, dataLine]
            )
            setValue("")
            setType("")
            setComment("")

        } else console.log("Failed validation")
    }

    const handleChange = (event) => {
        setType(event.target.value);
      };

    return (
        <React.Fragment>
            <FormContainer>
                <InputComponent inputValue={value} action={setValue} placeholder={"Transaction sum"} maxLength={"100"}/>
                <FormControl style={{marginRight: "auto"}}>
                    <FormLabel id="demo-controlled-radio-buttons-group">Choose transaction type:</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={type}
                        onChange={handleChange}
                        style={{
                            flexDirection: "row"
                        }}
                    >
                        <FormControlLabel value="profit" control={<Radio />} label="profit" />
                        <FormControlLabel value="expence" control={<Radio />} label="expence" />
                    </RadioGroup>
                </FormControl>
                {/* <InputComponent inputValue={type} action={setType} placeholder={"Transaction type"} maxLength={"100"}/> */}
                <InputComponent inputValue={comment} action={setComment} placeholder={"Enter comment"} maxLength={"100"}/>
                <Button 
                    backgroundColor={
                        value.length < 3 ? "#E5E5E5" : 
                        type ? "#B0F347" : "#E5E5E5"} onClick={validation}>Save transaction</Button>
            </FormContainer>
            <Foot></Foot>
        </React.Fragment>        
    )
}

export default Main
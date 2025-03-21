import React from "react"
import Foot from "../views/global/Foot"
import InputComponent from "../comps/Input"
import css from "../../styles/form"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useSelector, useDispatch } from 'react-redux'
import { changeType, changeValue, changeComment } from '../../redux/reducers/main-data-reducer'

const { FormContainer, Button } = css

const Main = (props) => {

    const { action } = props
    const value = useSelector((state) => state.typeReducer.value)
    const type = useSelector((state) => state.typeReducer.type)
    const comment = useSelector((state) => state.typeReducer.comment)
    const dispatch = useDispatch()

    const validation = () => {
        if (value.length > 2 && type) {
            console.log("Successful validation")

            const dataLine = {
                value: value,
                type: type,
                comment: comment,
            }

            action(prev => [...prev, dataLine])

            dispatch(changeValue(""))
            dispatch(changeType("profit"))
            dispatch(changeComment(""))

        } else console.log("Failed validation")
    }

    const handleChangeType = (event) => {
        dispatch(changeType(event.target.value))
    };

    const handleChangeComment = (param) => {
        dispatch(changeComment(param))
    };

    const handleChangeValue = (param) => {
        dispatch(changeValue(param))
      }

    const handleChangeCommentRadio = (event) => {
        dispatch(changeComment(event.target.value))
    }

    return (
        <React.Fragment>
            <FormContainer style={{alignItems: "flex-start"}}>
                <InputComponent 
                    inputValue={value} 
                    action={handleChangeValue} 
                    placeholder={"Transaction sum"} 
                    maxLength={"100"}
                />
                <FormControl style={{
                                marginRight: "auto", 
                                marginTop: "9px", 
                                marginBottom: "12px"
                            }}
                >
                    <FormLabel id="demo-controlled-radio-buttons-group">
                        
                        Choose transaction type:

                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={type}
                        onChange={handleChangeType}
                        style={{
                            flexDirection: "row",
                            marginTop: "5px",
                            marginLeft: "6px"
                        }}
                    >
                        <FormControlLabel value="profit" control={<Radio />} label="profit" />
                        <FormControlLabel value="expence" control={<Radio />} label="expence" />
                    </RadioGroup>
                </FormControl>
                { 
                    type === "expence" && 
                        <FormControl style={{marginRight: "auto", marginTop: "0px", marginBottom: "14px"}}>
                            <FormLabel id="demo-controlled-radio-buttons-group">
                                
                                Choose expences type:

                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={comment}
                                onChange={handleChangeCommentRadio}
                                style={{
                                    flexDirection: "row",
                                    marginTop: "5px",
                                    marginLeft: "6px"
                                }}
                            >
                                <FormControlLabel value="grocery shopping" control={<Radio />} label="grocery shopping" />
                                <FormControlLabel value="paying bills" control={<Radio />} label="paying bills" />
                                <FormControlLabel value="shopping for clothes" control={<Radio />} label="shopping for clothes" />
                                <FormControlLabel value="car expences" control={<Radio />} label="car expences" />
                                <FormControlLabel value="entertainment" control={<Radio />} label="entertainment" />
                                <FormControlLabel value="travels" control={<Radio />} label="travels" />
                            </RadioGroup>
                        </FormControl>
                }
                { 
                    type === "profit" && 
                        <InputComponent 
                            inputValue={comment} 
                            action={handleChangeComment} 
                            placeholder={"Enter comment"} 
                            maxLength={"100"}
                        /> 
                }
                <Button 
                    backgroundColor={
                        value.length < 3 ? "#E5E5E5" : 
                        type ? "#B0F347" : "#E5E5E5"
                    } 
                    onClick={validation}
                >
                    Save transaction
                    
                </Button>
            </FormContainer>
            <Foot></Foot>
        </React.Fragment>        
    )
}

export default Main

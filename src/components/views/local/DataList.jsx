import React, { useState } from "react";
import css from "../../../styles/dataList"

const { DataContainer, ContentLine, ContentCell, ButtonLine, ButtonItem, Hr } = css

const DataList = (props) => {

    const { data = [], setShow } = props
    const [ dataType, setDataType ] = useState("profit")
    const filterData = data.filter(item => item.type === dataType)
    const filterDataSum = data.filter(item => item.type === dataType)
        .reduce((summ, item) => {
            return summ + +item.value.split(" ").join("")
        }, 0)

    const filterDataDelta = data
        .reduce((summ, item) => {
            if (item.type === "profit") {
                return summ + +item.value.split(" ").join("")
            } else {
                return summ - +item.value.split(" ").join("")
            }
        }, 0)
    
    const reduceDataType1 = () => { 
        setDataType("profit")
        setShow(false)
    }
    const reduceDataType2 = () => {
        setDataType("expence")
        setShow(true)
    }
    const reduceDataType3 = () => setDataType("all")

    return (
        <React.Fragment>

            <ButtonLine>
                <ButtonItem onClick={reduceDataType1}>Profits</ButtonItem>
                <ButtonItem onClick={reduceDataType2}>Expences</ButtonItem>
                <ButtonItem onClick={reduceDataType3}>All</ButtonItem>
            </ButtonLine>

            <DataContainer>
                
                { filterData.length > 0 && 
                    <React.Fragment>
                        { filterData.map((item, index) => {
                            return (
                                    <ContentLine key={index} backgroundColor={item.type === "profit" ? "lightgreen" : "lightcoral"}>
                                        <ContentCell width={"15%"}>{item.type === "profit" ? `+${item.value}` : `-${item.value}`}</ContentCell>
                                        <ContentCell width={"15%"}>{item.type}</ContentCell>
                                        <ContentCell width={"70%"}>{item.comment}</ContentCell>
                                    </ContentLine>
                                    )
                                }
                            )
                        }
                        <Hr/>
                        <ContentLine>
                            <ContentCell width={"15%"} backgroundColor={dataType === "profit" ? "lightgreen" : "lightcoral"}>{dataType === "profit" ? `+${filterDataSum}` : `-${filterDataSum}`}</ContentCell>
                            <ContentCell width={"15%"}>--</ContentCell>
                            <ContentCell width={"70%"}>--</ContentCell>
                        </ContentLine>
                    </React.Fragment> 
                }

                { filterData.length === 0 && <React.Fragment>
                    { data.map((item, index) => {
                        return (
                            <ContentLine key={index} backgroundColor={item.type === "profit" ? "lightgreen" : "lightcoral"}>
                                <ContentCell width={"15%"}>{item.type === "profit" ? `+${item.value}` : `-${item.value}`}</ContentCell>
                                <ContentCell width={"15%"}>{item.type}</ContentCell>
                                <ContentCell width={"70%"}>{item.comment}</ContentCell>
                            </ContentLine>
                        )
                    })}
                    <Hr/>
                    <ContentLine>
                        <ContentCell 
                            width={"15%"} 
                            backgroundColor={
                                    filterDataDelta > 0 ? 
                                    "lightgreen" : 
                                    "lightcoral"
                            }>
                                {filterDataDelta > 0 ? `+${filterDataDelta}` : `${filterDataDelta}`}
                        </ContentCell>
                        <ContentCell width={"15%"}>--</ContentCell>
                        <ContentCell width={"70%"}>--</ContentCell>
                    </ContentLine>
                </React.Fragment> 
                }

            </DataContainer>
        </React.Fragment>        
    )
}

export default DataList

import React, { useState } from "react";
import css from "../../../styles/dataList"

const { DataContainer, ContentLine, ContentCell, ButtonLine, ButtonItem } = css

const DataList = (props) => {

    const { data = [] } = props
    const [ dataType, setDataType ] = useState("profit")
    const filterData = data.filter(item => item.split("::")[1] === dataType)

    const reduceDataType1 = () => {
        setDataType("profit")
    }

    const reduceDataType2 = () => {
        setDataType("divergence")
    }

    const reduceDataType3 = () => {
        setDataType("all")
    }

    return (
        <React.Fragment>
            <ButtonLine>
                <ButtonItem onClick={reduceDataType1}>Profit</ButtonItem>
                <ButtonItem onClick={reduceDataType2}>Divergence</ButtonItem>
                <ButtonItem onClick={reduceDataType3}>All</ButtonItem>
            </ButtonLine>
            <DataContainer>
                { filterData.map((item, index) => {
                    return (
                        <ContentLine key={index}>
                            <ContentCell width={"15%"}>{item.split("::")[0]}</ContentCell>
                            <ContentCell width={"15%"}>{item.split("::")[1]}</ContentCell>
                            <ContentCell width={"70%"}>{item.split("::")[2]}</ContentCell>
                        </ContentLine>
                    )
                })}
            </DataContainer>
        </React.Fragment>        
    )
}

export default DataList

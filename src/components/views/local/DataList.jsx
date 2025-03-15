import React, { useState } from "react";
import css from "../../../styles/dataList"

const { DataContainer, ContentLine, ContentCell, ButtonLine, ButtonItem } = css

const DataList = (props) => {

    const { data = [] } = props
    const [ dataType, setDataType ] = useState("profit")
    const filterData = data.filter(item => item.split("::")[1] === dataType)

    return (
        <React.Fragment>
            <ButtonLine>
                <ButtonItem>Profit</ButtonItem>
                <ButtonItem>Divergence</ButtonItem>
                <ButtonItem>All</ButtonItem>
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

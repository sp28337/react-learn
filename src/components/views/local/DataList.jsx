import React from "react";
import css from "../../../styles/dataList"

const { DataContainer, ContentLine, ContentCell } = css

const DataList = () => {
    return (
        <React.Fragment>
            <DataContainer>
                { Array(3).fill(null).map((item, index) => {
                    return (
                        <ContentLine>
                            <ContentCell width={"15%"}>{"10000"}</ContentCell>
                            <ContentCell width={"15%"}>{"profit"}</ContentCell>
                            <ContentCell width={"70%"}>{"hard work pays off"}</ContentCell>
                        </ContentLine>
                    )
                })}

            </DataContainer>
        </React.Fragment>        
    )
}

export default DataList

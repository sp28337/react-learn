import React from "react"
import { useNavigate } from "react-router-dom"
import css from "../../../styles/dataList"

const { DataContainer, ContentLine, ContentCell, ButtonLine, ButtonItem, Hr } = css

const DataList = (props) => {

    const navigate = useNavigate()
    const { data = [], viewType } = props
    const filterData = data.filter(item => item.type === viewType)
    const filterDataSum = data.filter(item => item.type === viewType)
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
        navigate("/stat/profit")
    }
    const reduceDataType2 = () => {
        navigate("/stat/expence")
    }
    const reduceDataType3 = () => {
        navigate("/stat/all")
    }

    function showProfit() {

        const condition = filterDataSum > 0    ? 
                          `+ ${filterDataSum}` : 
                          `${filterDataSum}`

        return (
            <React.Fragment>
            
                { 
                    filterData.map((item, index) => {
                        return (
                            <ContentLine key={index} backgroundColor="rgb(229, 229, 229)">
                                <ContentCell width={"15%"}>{item.type === "profit" && `+ ${item.value}`}

                                </ContentCell>
                                <ContentCell width={"15%"}>{item.type}

                                </ContentCell>
                                <ContentCell width={"70%"}>{item.comment}

                                </ContentCell>
                            </ContentLine>
                        )
                    })
                }

                <Hr/>

                <ContentLine>
                    <ContentCell width={"15%"} backgroundColor={
                                                                    filterDataSum === 0    ? 
                                                                    "rgb(229, 229, 229)" : 
                                                                    "lightgreen"
                                                                }
                    >
                        {condition}

                    </ContentCell>
                    <ContentCell width={"15%"}>
                        
                        --

                    </ContentCell>
                    <ContentCell width={"70%"}>
                        
                        --
                        
                    </ContentCell>
                </ContentLine>

            </React.Fragment>
        )
    }

    function showExpences() {
        
        const condition = filterDataSum > 0    ? 
                          `- ${filterDataSum}` : 
                          `${filterDataSum}`

        return (
            <React.Fragment>

                { filterData.map((item, index) => {
                    return (
                        <ContentLine key={index} backgroundColor="rgb(229, 229, 229)">
                            <ContentCell width={"15%"}>{item.type === "expence" && `- ${item.value}`}

                            </ContentCell>
                            <ContentCell width={"15%"}>{item.type}

                            </ContentCell>
                            <ContentCell width={"70%"}>{item.comment}

                            </ContentCell>
                        </ContentLine>
                    )
                })}

                <Hr/>

                <ContentLine>
                    <ContentCell width={"15%"} backgroundColor={
                                                                    filterDataSum === 0    ? 
                                                                    "rgb(229, 229, 229)" : 
                                                                    "lightcoral"
                                                                }
                    >
                        {condition}

                    </ContentCell>
                    <ContentCell width={"15%"}>
                        
                        --
                        
                    </ContentCell>
                    <ContentCell width={"70%"}>
                        
                        --
                    
                    </ContentCell>
                </ContentLine>

            </React.Fragment>
        )
    }

    function showAll() {
        
        return ( 
            <React.Fragment>
                
                { 
                    data.map((item, index) => {
                        return (
                            <ContentLine key={index} backgroundColor={
                                                                        item.type === "profit" ? 
                                                                        "lightgreen"           : 
                                                                        "lightcoral"
                                                                    }
                            >
                                <ContentCell width={"15%"}>
                                    {
                                        item.type === "profit" ? 
                                        `+ ${item.value}`      : 
                                        `- ${item.value}`
                                    }
                                </ContentCell>
                                <ContentCell width={"15%"}>{item.type}

                                </ContentCell>
                                <ContentCell width={"70%"}>{item.comment}
                                    
                                </ContentCell>
                            </ContentLine>
                        )
                    })
                }

                <Hr/>

                <ContentLine>
                    <ContentCell 
                        width={"15%"} backgroundColor={
                                                        filterDataDelta > 0 ?
                                                        "lightgreen"        : 
                                                        filterDataDelta < 0 ?
                                                        "lightcoral"        : 
                                                        "rgb(229, 229, 229)"
                                                    }
                    >
                        {
                            filterDataDelta > 0    ? 
                            `+ ${filterDataDelta}` : 
                            `${filterDataDelta}`
                        }
                    </ContentCell>
                    <ContentCell width={"15%"}>

                        --

                    </ContentCell>
                    <ContentCell width={"70%"}>

                        --

                    </ContentCell>
                </ContentLine>

            </React.Fragment>
        )
    }

    return (
        <React.Fragment>

            <ButtonLine>
                <ButtonItem 
                    style={{fontWeight: viewType === "profit" ? "bold": ""}} 
                    onClick={reduceDataType1}
                >
                    Profits

                </ButtonItem>
                <ButtonItem 
                    style={{fontWeight: viewType === "expence" ? "bold": ""}} 
                    onClick={reduceDataType2}
                >
                    Expences

                </ButtonItem>
                <ButtonItem 
                    style={{fontWeight: viewType === "all" ? "bold": ""}} 
                    onClick={reduceDataType3}
                >
                    All
                    
                </ButtonItem>
            </ButtonLine>

            <DataContainer>
                { 
                    viewType === "profit" & data.length > 0  ? 
                    showProfit()                             :
                    viewType === "expence" & data.length > 0 ? 
                    showExpences()                           :
                    filterData.length === 0                 && 
                    showAll()
                }
            </DataContainer>

        </React.Fragment>        
    )
}

export default DataList

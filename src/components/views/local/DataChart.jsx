import React, { useEffect, useState } from "react"
import css from "../../../styles/dataList"
import { ResponsivePie } from '@nivo/pie'


const { DataContainer } = css
const MyResponsivePie = ({ data /* see data tab */ }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 30,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)

const DataChart = (props) => {
    
    const { data = [], show } = props

    const filterData = data.filter(item => item.type === "expence")

    const [r01, setR01] = useState(0)
    const [r02, setR02] = useState(0)
    const [r03, setR03] = useState(0)
    const [r04, setR04] = useState(0)
    const [r05, setR05] = useState(0)
    const [r06, setR06] = useState(0)

    useEffect(() => {
        for ( let i = 0; i < filterData.length; i++ ) {
            
            if (filterData[i].comment === "grocery shopping") {   
                setR01(prev => prev + +(filterData[i].value.split(" ").join("")))
            } else if (filterData[i].comment === "paying bills") {   
                setR02(prev => prev + +(filterData[i].value.split(" ").join("")))
            } else if (filterData[i].comment === "shopping for clothes") {   
                setR03(prev => prev + +(filterData[i].value.split(" ").join("")))
            } else if (filterData[i].comment === "car expences") {   
                setR04(prev => prev + +(filterData[i].value.split(" ").join("")))
            } else if (filterData[i].comment === "entertainment") {   
                setR05(prev => prev + +(filterData[i].value.split(" ").join("")))
            } else if (filterData[i].comment === "travels") {   
                setR06(prev => prev + +(filterData[i].value.split(" ").join("")))
            }
        }
    }, [filterData])
    
    return (
        <React.Fragment>
            { show && <DataContainer style={{height: "500px", width: "800px"}}>
                <MyResponsivePie data={[{
                    "id": "grocery shopping",
                    "label": "grocery shopping",
                    "value": r01,
                    "color": "hsl(54, 70%, 50%)"
                    },
                    {
                    "id": "paying bills",
                    "label": "paying bills",
                    "value": r02,
                    "color": "hsl(276, 70%, 50%)"
                    },
                    {
                    "id": "shopping for clothes",
                    "label": "shopping for clothes",
                    "value": r03,
                    "color": "hsl(77, 70%, 50%)"
                    },
                    {
                    "id": "car expences",
                    "label": "car expences",
                    "value": r04,
                    "color": "hsl(191, 70%, 50%)"
                    },
                    {
                    "id": "entertainment",
                    "label": "entertainment",
                    "value": r05,
                    "color": "hsl(133, 70%, 50%)"
                    },
                    {
                    "id": "travels",
                    "label": "travels",
                    "value": r06,
                    "color": "hsl(191, 70%, 50%)"
                    }].filter(item => item.value > 0)}/>
            </DataContainer>
            }
        </React.Fragment>
    )
}

export default DataChart

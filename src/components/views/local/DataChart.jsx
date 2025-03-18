import React, { useEffect, useMemo, useState } from "react"
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

    const filterData = useMemo(() => data.filter(item => item.type === "expence"), [data])

    const [totals, setTotals] = useState({
        grocery: 0,
        bills: 0,
        clothes: 0,
        entertainment: 0,
        travels: 0,
      });

    useEffect(() => {
        const newTotals = {
            grocery: 0,
            bills: 0,
            clothes: 0,
            entertainment: 0,
            travels: 0,
            carExpences: 0
        };

        filterData.forEach(item => {
            const value = parseFloat(item.value.split(" ").join(""));
            if (item.comment === "grocery shopping") newTotals.grocery += value;
            else if (item.comment === "paying bills") newTotals.bills += value;
            else if (item.comment === "shopping for clothes") newTotals.clothes += value;
            else if (item.comment === "entertainment") newTotals.entertainment += value;
            else if (item.comment === "travels") newTotals.travels += value;
            else if (item.comment === "car expences") newTotals.carExpences += value;
            });

        setTotals(newTotals);
    }, [filterData]);
    
    return (
        <React.Fragment>
            { show && <DataContainer style={{height: "500px", width: "800px"}}>
                <MyResponsivePie data={[{
                    "id": "grocery shopping",
                    "label": "grocery shopping",
                    "value": totals.grocery,
                    "color": "hsl(54, 70%, 50%)"
                    },
                    {
                    "id": "paying bills",
                    "label": "paying bills",
                    "value": totals.bills,
                    "color": "hsl(276, 70%, 50%)"
                    },
                    {
                    "id": "shopping for clothes",
                    "label": "shopping for clothes",
                    "value": totals.clothes,
                    "color": "hsl(77, 70%, 50%)"
                    },
                    {
                    "id": "car expences",
                    "label": "car expences",
                    "value": totals.carExpences,
                    "color": "hsl(191, 70%, 50%)"
                    },
                    {
                    "id": "entertainment",
                    "label": "entertainment",
                    "value": totals.entertainment,
                    "color": "hsl(133, 70%, 50%)"
                    },
                    {
                    "id": "travels",
                    "label": "travels",
                    "value": totals.travels,
                    "color": "hsl(191, 70%, 50%)"
                    }].filter(item => item.value > 0)}/>
            </DataContainer>
            }
        </React.Fragment>
    )
}

export default DataChart

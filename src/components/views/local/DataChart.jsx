import React, { useEffect } from "react"
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
                itemsSpacing: 0,
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
    
    useEffect(() => {}, [])
    
    return (
        <React.Fragment>
            <DataContainer style={{height: "500px", width: "800px"}}>
                <MyResponsivePie data={[{
                    "id": "elixir",
                    "label": "elixir",
                    "value": 195,
                    "color": "hsl(54, 70%, 50%)"
                    },
                    {
                    "id": "sass",
                    "label": "sass",
                    "value": 79,
                    "color": "hsl(276, 70%, 50%)"
                    },
                    {
                    "id": "haskell",
                    "label": "haskell",
                    "value": 246,
                    "color": "hsl(77, 70%, 50%)"
                    },
                    {
                    "id": "css",
                    "label": "css",
                    "value": 266,
                    "color": "hsl(191, 70%, 50%)"
                    },
                    {
                    "id": "rust",
                    "label": "rust",
                    "value": 1,
                    "color": "hsl(133, 70%, 50%)"
                    }]}/>
            </DataContainer>
        </React.Fragment>
    )
}

export default DataChart

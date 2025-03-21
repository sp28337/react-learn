import React from 'react'
import { useParams } from 'react-router-dom'
import Foot from '../views/global/Foot'
import DataList from '../views/local/DataList'
import DataChart from '../views/local/DataChart'

const Stat = (props) => {
    
    const { statData = [] } = props
    const { viewType } = useParams()
        
    return (
        <React.Fragment>
            <DataList viewType={viewType} data={statData}/>
            {viewType === "expence" && <DataChart viewType={viewType} data={statData}/>}
            <Foot></Foot>
        </React.Fragment>        
    )
}

export default Stat

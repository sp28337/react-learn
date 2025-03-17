import React from 'react'
import Foot from '../views/global/Foot'
import DataList from '../views/local/DataList'
import DataChart from '../views/local/DataChart'

const Stat = (props) => {
    
    const { statData = [] } = props    

    return (
        <React.Fragment>
            <DataList data={statData}/>
            <DataChart></DataChart>
            <Foot></Foot>
        </React.Fragment>        
    )
}

export default Stat

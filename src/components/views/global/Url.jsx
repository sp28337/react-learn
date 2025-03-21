import React, { useEffect } from 'react'
import css from "../../../styles/styles"
import { useSelector, useDispatch } from "react-redux"
import { setUrl } from "../../../redux/reducers/current-url"
import { useLocation } from "react-router-dom"

const { UrlContainer } = css

const Url = () => {
    
    const dispatch = useDispatch()
    const location = useLocation()
    const changeUrl = (param) => {
        dispatch(setUrl(`${param.replaceAll("/", " / ")}`))
    }
    
    useEffect(() => {
        changeUrl(location.pathname)
    }, [location.pathname])

    const url = useSelector(state => state.urlReducer.url)
    return (
        <React.Fragment>
            <UrlContainer><div>{url}</div></UrlContainer>
        </React.Fragment>        
    )
}

export default Url

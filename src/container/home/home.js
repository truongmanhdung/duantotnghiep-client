import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { fetchBooks } from '../../features/todoSlide/todoSlide'
import { useDispatch } from 'react-redux'
import Blog from '../blog/blog'
import { useCallback } from 'react'

function Home(props) {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(fetchBooks({}))
    }

    const [count, setCount] = useState(0)
    const handleClickBlog = useCallback((number) => {
        setCount((prevState) => {
            return prevState + number
        })
    }, [])
    return (
        <div>
            <p>Đây là home page {count}</p>
        
            <Blog handleClickBlog={handleClickBlog} count={count} />
            <button onClick={handleClick}>click</button>
        </div>
    )
}

Home.propTypes = {

}

export default Home


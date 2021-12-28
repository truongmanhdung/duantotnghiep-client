import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { memo } from 'react'

function Blog(props) {
    const {handleClickBlog, count} = props
    const handleClick = (number) => {
        const numberNew = number + 1
        handleClickBlog(numberNew)
    }
    return (
        <div>
            <Button onClick={() => handleClick(count)}>click + 1</Button>
        </div>
    )
}

Blog.propTypes = {
    handleClickBlog: PropTypes.func,
    count: PropTypes.number,
}

export default memo(Blog)


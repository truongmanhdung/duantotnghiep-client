import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

function LayoutWebsite(props) {
  return (
    <div>
      <Outlet />
    </div>
  )
}

LayoutWebsite.propTypes = {

}

export default LayoutWebsite


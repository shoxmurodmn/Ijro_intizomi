import React from 'react'
import DataList from './DataList'
import InfoList from './InfoList'

import "./style.css"

function Information() {
  return (
    <div>
      <div className='wrapperInformation '>
          <DataList></DataList>
          <InfoList></InfoList>    
      </div>
    </div>
  )
}

export default Information
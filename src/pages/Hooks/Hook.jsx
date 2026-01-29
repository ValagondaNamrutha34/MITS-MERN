import React from 'react'
import { Link } from 'react-router-dom'

const Hook = () => {
  return (
    <div>
        <ol>
            <li><Link to='/usestate'>UseState</Link></li>
            <li><Link to='/useEffect'>UseEffect</Link></li>
            <li><Link to='/useEffectApi'>UseEffectApi</Link></li>
            <li><Link to='/useReducer'>UseReducer</Link></li>
            <li><Link to='/useMemo'>UseMemo</Link></li>
            <li><Link to='/useCallback'>UseCallback</Link></li>
            
        </ol>
    </div>
  )
}

export default Hook
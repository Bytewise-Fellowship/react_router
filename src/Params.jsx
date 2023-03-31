import React from 'react'
import {useParams,useSearchParams} from 'react-router-dom';

const Params = () => {
    const {id} = useParams();
  return (
    <div>
        <h2>i there this is my id : {id}</h2>
    </div>
  )
}

export default Params
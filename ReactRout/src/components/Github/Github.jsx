import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

function Github() {
    const [data, setData ] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/ujjawalb01')
        .then(response => response.json() )
        .then(data => {
            console.log(data);
            setData(data)
        })

    },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Follower: {data.followers}
      <img src={data.avatar_url} alt="gitpic"
      width={300} />
    </div>
  )
}

export default Github

import React, { useEffect } from 'react'
import { useProduct } from './useProduct'

const Card2 = () => {
  const {data, isLoading, error} = useProduct({limit:10,page_no:1})



  useEffect(()=>{
    //   if(!isLoading){
        console.log(data)
    //   }
  },[data])

 
  return (
    <div>
        cards2
    </div>
  )
}

export default Card2

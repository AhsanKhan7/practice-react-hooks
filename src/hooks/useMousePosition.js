import {useEffect, useState} from 'react'

const useMousePosition = () => {
    const [position, setPostion] = useState({ x: 0, y: 0 })
  
    useEffect(() => {
        const handleMouseMove = (e) => {
          setPostion({
            x: e.pageX,
            y: e.pageY
        })
      }
  
        document.addEventListener('mousemove', handleMouseMove)
      
  
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
    })
    
    return position
  }
  
  export default useMousePosition
import React from "react"
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"
import img5 from "./images/img5.jpg"
export default function ImageSlider () {
    const images = [img1,img2,img3,img4,img5]
    const [imageIndex, setImageIndex] = React.useState(0)
    function goToBack(){
        setImageIndex((imageIndex-1+images.length)%images.length)
    }
    function goToNext(){
       setImageIndex((imageIndex+1)%images.length)
    }
    React.useEffect(()=>{
        const Interval = setInterval(goToNext, 3000)
        return ()=> clearInterval(Interval)
        },[imageIndex]
    )
    return (
        <div className="image-slider">
            <button onClick={goToBack} >Previous</button>
            <img src={images[imageIndex]} className="imgSlide" alt=""/> 
            <button onClick={goToNext}>Next</button>
        </div>
    )
}
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
        const currentIndex= (imageIndex-1+images.length)%images.length;
        setImageIndex(currentIndex)
    }
    function goToNext(){
        const currentIndex=(imageIndex+1)%images.length;
       setImageIndex(currentIndex)
    }
    React.useEffect(()=>{
        const Interval = setInterval(goToNext, 3000)
        return ()=> clearInterval(Interval)
        },[imageIndex]
    )
    return (
        <div className="image-slider">
            <div className="images">
            <button className="back" onClick={goToBack} >&lt;</button>
            <img src={images[imageIndex]} className="imgSlide" alt="image slide"/> 
            <button className="next" onClick={goToNext}>&gt;</button>
            </div>
            <div className="dot-feedback">
                {
                    images.map((image, newIndex)=>(
                        <span 
                        key={newIndex}
                        className={newIndex === imageIndex?'activedot':'blankDot'}
                        onClick={goToNext}
                        ></span>
                    ))
                }
            </div>
        </div>
    )
}
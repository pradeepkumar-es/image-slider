import React from "react"
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"
import img5 from "./images/img5.jpg"
export default function ImageSlider () {
    const images = [img1,img2,img3,img4,img5]  //images array as collection of image
    const [imageIndex, setImageIndex] = React.useState(0)  //definig initial index to 0

    //running this function when goToBack function is called
    function goToBack(){    
        const currentIndex= (imageIndex-1+images.length)%images.length;
        setImageIndex(currentIndex)
    }

    //running this function when goToNext function is called
    function goToNext(){
        const currentIndex=(imageIndex+1)%images.length;
       setImageIndex(currentIndex)
    }

    //automatic transition of image after every 3 seconds using useEffect hook
    React.useEffect(()=>{
        const Interval = setInterval(goToNext, 3000)
        return ()=> clearInterval(Interval)
        },[imageIndex]
    )
    return (

        //Elements to display on browser
        <div className="image-slider">
            <div className="images">

            {/* button calling the function goToBack when user click it */}   
            <button className="back" onClick={goToBack} >&lt;</button>   

            {/* img element to display current image */}
            <img src={images[imageIndex]} className="imgSlide" alt="image slide"/> 

            {/* button calling the function goToNext when user click it */}  
            <button className="next" onClick={goToNext}>&gt;</button>
            </div>
            <div className="dot-feedback">
                {

                    //applying conditional css to dot feedback by running arrow function on each
                    //elemet of images array and using onClick event listner when user click it it call
                    //goToNext function to display next image
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
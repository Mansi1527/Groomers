import img2 from "./image/img2.jpeg"
import gif1 from "./image/gif1.gif"
import "./style.css";
import img3_logo from "./image/img3_logo.png"
const Page2=()=>{
    return (
    <div >
    <div className="page2">
        <div className="logg">
            <img src={img3_logo} className="logo" alt=""/>
        </div>
        

        <div>
            <img src={img2} className="img1"/>
        </div>
        
        </div>
        {/* <div className="logg">
            <img src={gif1} className="gif1" alt=""/>
        </div> */}
        <div className="quote">
            <h1 className="quoteH1">Your Journey to Groomed Greatness Starts Here!</h1>
        </div>
        <div className="desc">
            <h1 className="about">We believe that personal grooming is an art form, and we are dedicated to perfecting it. Our team of skilled barbers and stylists are committed to helping you look and feel your best. We understand that every man is unique, and we take pride in crafting tailored grooming solutions to suit your individual style and preferences.Our salon is a haven for those who seek precision haircuts, traditional shaves, and modern grooming techniques. We provide a relaxed and welcoming environment where you can unwind and indulge in some well-deserved self-care. </h1>
        </div>
        
    </div>
    )
}
export default Page2;
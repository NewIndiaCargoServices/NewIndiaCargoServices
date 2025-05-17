import './Background.css'
import vid1 from '../../assets/vid1.mp4'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

const Background  = ({playStatus,heroCount }) => {
    if (playStatus)
        {
    return( 
        <video className='background fade-in' autoPlay loop muted>
            <source src={vid1}/>
        </video>
        )
    }
    // else if(heroCount===0){
    //     return <img src={img1} className='background fade-in' alt="img1" />
    // }
    // else if(heroCount===1){
    //     return <img src={img2} className='background fade-in' alt="img2" />
    // }
    // else if(heroCount===2){
    //     return <img src={img3} className='background fade-in' alt="img3" />
    // }
}

export default Background

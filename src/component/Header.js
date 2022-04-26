import{MdEmail} from 'react-icons/md'
import img1 from '../images/img1.png';



export default function Header(){
    return (
        <div className="header">
            <img src={img1} alt="img" className='header--img'/>
            <h1>Laura Smith</h1>
            <h3>Frontend Developer</h3>
            <a href="#">laurasmith.website</a>
            <button className='header--btn'><MdEmail/> <span>Email</span></button>
        </div>
    )

}
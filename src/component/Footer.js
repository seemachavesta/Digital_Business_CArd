import {AiFillTwitterSquare, AiFillFacebook, AiOutlineInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

export default function Footer(){
    return (
        <div className='footer'>
      
           <span> <AiFillTwitterSquare/></span>
            <span><AiFillFacebook/></span>
            <span><AiOutlineInstagram/></span>
            <span><AiFillLinkedin/></span>
            <span><AiFillGithub/></span>
        </div>


    )
}
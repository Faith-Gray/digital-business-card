import fb from './assets/Facebook.png'
import github from './assets/GitHub.png'
import instagram from './assets/Instagram.png'
import linkedIn from './assets/Linkedin.png'
import twitter from './assets/Twitter.png'

export default function Footer() {
    return (
        <div className='container'>
            <img src={twitter} className="icon" />
            <img src={fb} className="icon" />
            <img src={instagram} className="icon" />
            <img src={linkedIn} className="icon" />
            <img src={twitter} className="icon" />

        </div>
    )
}
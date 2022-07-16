import doggy from './assets/doggy.png'

export default function Info() {
    return (
        <div className='info-container'>
            <img src={doggy} className="doggy" />

            <h1 className='name'>Laura Smith</h1>
            <h4 className='job'>Frontend Developer</h4>
            <p>laurasmith.website</p>
            <button className='button'>Email</button>


        </div>
    )
}
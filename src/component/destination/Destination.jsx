import React, {useState}  from 'react'
import data from '../../data.json'
import './Destination.css'
import moon from '../../assets/destination/image-moon.png'
import europa from '../../assets/destination/image-europa.png'
import mars from '../../assets/destination/image-mars.png'
import titan from '../../assets/destination/image-titan.png'



const Destination = () => {
    const [ind, setind] = useState(0)
    const imges=[moon, europa, mars, titan]
    return (
        <section className='destination'>
            <div className='title'>
                <h1>01 Pick your destination</h1>
            </div>
            <div className="content-box" >
                <div className='img-box'>
                    <img src={imges[ind]} alt="img"/>
                </div>
                <div className='right-box'>
                    <nav>
                        <ul>
                        {data.destinations.map((item,index)=>{
                                return(<li key={index}>
                                    <a onClick={()=>{setind(index);}}>
                                        {item.name}
                                    </a>
                                    </li>)
                            })
                        }
                        </ul>
                    </nav>
                        <div className='info-box'>
                            <h1>{data.destinations[ind].name}</h1>
                            <p>{data.destinations[ind].description} </p>
                        </div>
                        <div className='details'>
                            <div className='distance'>
                                <h3>Avg. distance</h3>
                                <p>{data.destinations[ind].distance}</p>
                            </div>
                            <div className='travel'>
                                <h3>Est. travel time</h3>
                                <p>{data.destinations[ind].travel}</p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        
        
    )
}

export default Destination
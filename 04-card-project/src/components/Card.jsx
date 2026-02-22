import React from 'react';
import {Bookmark} from 'lucide-react'
const Card = (props) => {
    return (
        <>

            <div className="card">

                <div>
                    <div className="top">
                        <img src={props.bandLogo} alt="BrandLogo" title={props.nameOfCompany} />
                        <button title="Save this job">save <span><Bookmark size={14} /></span></button>
                    </div>

                    <div className="center">
                        <h3 title={props.nameOfCompany}>{props.nameOfCompany} <span>{props.dataPosted}</span></h3>
                        <h2 title={props.post}>{props.post}</h2>
                        <div className='tag'>
                            <h4>{props.tag1}</h4>
                            <h4>{props.tag2}</h4>
                        </div>

                    </div>
                </div>

                <div className="bottom">
                    <div className="price">
                        <h3>{props.pay}</h3>
                        <p>{props.location}</p>
                    </div>
                    <button title="Apply for this job">Apply now</button>
                </div>

            </div>

        </>
    );
}

export default Card;

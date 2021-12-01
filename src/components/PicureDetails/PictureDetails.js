import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PictureDetails = () => {
    const {id}=useParams();
    const[isLoading,setIsLoading]=useState(true)
    const [pictureDetails,setPictureDetails]=useState({});

    const clientId=`3JieZw7Atk7KnObpH3ic7Cn27VReB_T-tcINe5C970I`;
    // fetching a single page 
    useEffect(()=>{
        setIsLoading(true);
        const uri=`https://api.unsplash.com/photos/${id}/?client_id=${clientId}`;
        fetch(uri)
        .then(res=>res.json())
        .then(data=>{
            setPictureDetails(data);
            setIsLoading(false)
        })

    },[])
    // destructuring picture details 
    const {likes,location,urls,user,exif,views}=pictureDetails;
    // a loading will be on in time of data fetching 
    if(isLoading){
        return <div className="mt-5">
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        </div>
    }
    return (
        <div className="container">
            <h1 className="mb-4">A Single Picture</h1>
            <div className='row row-cols-lg-2 row-cols-1 g-3 mb-4'>
                <div className="col">
                    <img src={urls?.raw} className="w-75" alt="" />
                </div>
                <div className="col text-start p-3">
                    <h2>Location: <span className="text-success"> {location?.name? location?.name: "Unknown"}</span></h2>
                    <h3>Clicked By:<span className="text-info"> {user?.name}</span></h3>
                    <h2><u>Camera Specification: </u>
                    </h2>
                        <p><ul>
                            <li>Name & Model:{exif?.name? exif?.name: "Unknown"}</li>
                            <li>Exposure: {exif?.exposure_time ? exif?.exposure_time: "Unknown"}</li>
                            <li>Aperture:{exif?.aperture ? exif?.aperture : "Unknown"}</li>
                        </ul></p>
                        
                        <h5><i class="fas fa-thumbs-up text-info"/> Liked By: {likes} users</h5>
                        <h5><i class="fas fa-eye text-secondary"/> Views: {views}</h5>
                   
                </div>

            </div>
            {/* back to home button  */}
            <Link to="/"><button className="btn btn-danger">Back to Home?</button></Link>
        </div>
    );
};

export default PictureDetails;
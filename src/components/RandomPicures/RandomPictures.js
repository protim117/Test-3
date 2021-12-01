import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SinglePicture from '../SinglePicture/SinglePicture';

const RandomPictures = () => {
    const [pictures,setPictures]=useState([]);
    // initial loading is true 
    const[isLoading,setIsLoading]=useState(true);
    const [page,setPage]=useState(0);
    // i didn't added it in .env file as I will produce a link here and will upload it in github 
    const clientId=`3JieZw7Atk7KnObpH3ic7Cn27VReB_T-tcINe5C970I`;
    useEffect(()=>{
        setIsLoading(true);
        // as we have to display 10 images 3 in each pages so I added a condition to verify if it's the last page or not
        let uri;
        if(page!==3){
           uri=`https://api.unsplash.com/photos/random/?client_id=${clientId}&count=3&orientation=squarish&page=${page+1}`;
        }
        else{
             uri=`https://api.unsplash.com/photos/random/?client_id=${clientId}&count=1&orientation=squarish`;
        }

        fetch(uri)
        .then(res=>res.json())
        .then(data=>{
            setPictures(data);
            setIsLoading(false)
        })
    },[page])

    // if data is loading then a spinner will going on 
    if(isLoading){
    return  <div className="mt-5">
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        </div>
    }
    // after data fetching output will be returned 
    return (
        <div className="container">
            <h1 className="mb-5">This is random pictures </h1>
                <div className="row row-cols-lg-3 row-cols-1 g-4">
                    {
                        pictures.map(picture=><SinglePicture key={picture.id} picture={picture}/>)
                    }

                </div>
                {/* Pagination button */}
                <div className="m-4 p-5">
                {
                    [...Array(4).keys(4)]
                    .map(number =><button
                        keys={number}
                        className={number===page? 'btn-danger btn':'btn'}
                        onClick={()=>setPage(number)}
                    >{number+1}</button>)
                }
                </div>
        </div>
    );
};

export default RandomPictures;<h1>This is random picture</h1>
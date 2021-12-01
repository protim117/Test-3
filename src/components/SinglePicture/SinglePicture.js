import React from 'react';
import { Link } from 'react-router-dom';

const SinglePicture = ({picture}) => {
    const {urls,id}=picture;
    return (
        <div className='col'>
            {/* single picture after mapping  */}
            <Link to={`picture/${id}`}><img src={urls.raw} alt="" className="w-100" /></Link> 
        </div>
    );
};

export default SinglePicture;
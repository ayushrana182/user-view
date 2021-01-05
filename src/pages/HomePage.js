import React from 'react'
import HeaderContainer from '../components/HeaderContainer'
import ProfileImage from '../components/ProfileImage'
import MenuCard from '../components/MenuCard'
import PhotoUpload from '../components/PhotoUpload'
const Homepage = () => {
    return ( 
        <div className="home-page">
            <HeaderContainer/>
            <PhotoUpload />
            <ProfileImage />
            <MenuCard />
        </div>
     );
}
export default Homepage ;
 
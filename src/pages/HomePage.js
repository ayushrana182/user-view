import React from 'react'
import HeaderContainer from '../components/HeaderContainer'
import ProfileImage from '../components/ProfileImage'
import MenuCard from '../components/MenuCard'
import CoverImage from '../components/CoverImage'
import Grid from '@material-ui/core/Grid';
import Footer from '../components/Footer.component';
import MenuMaker from '../components/MenuMaker';
import RestroDetail from '../components/RestroDetail'
const Homepage = () => {
    return ( 
        <div className="home-page">
            <HeaderContainer page = "Complete your Profile "/>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CoverImage />
                </Grid>
            </Grid>
            <ProfileImage />
            <RestroDetail/>
                    <MenuCard />
                    <MenuMaker />
            <Footer/>
        </div>
     );
}
export default Homepage ;
 
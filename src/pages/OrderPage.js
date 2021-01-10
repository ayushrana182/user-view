import React from 'react';
import Footer from '../components/Footer.component';

import HeaderContainer from '../components/HeaderContainer';
import OrdersTable from '../components/OrdersTable';
 
const Orderpage = () => {
    return ( 
        <div id = "order-page">
            <HeaderContainer page = "Orders Page "/>
            <OrdersTable />
            <Footer />
        </div>

     );
}
export default Orderpage ;
 
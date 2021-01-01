import React from 'react';

import HeaderContainer from '../components/HeaderContainer';
import OrdersTable from '../components/OrdersTable';
 
const Orderpage = () => {
    return ( 
        <div id = "order-page">
            <HeaderContainer page = "Order Page "/>
            <OrdersTable />
        </div>

     );
}
export default Orderpage ;
 
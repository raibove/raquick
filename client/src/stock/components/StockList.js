import React from 'react';
import StockItem from './StockItem';
import './StockList.css';

const StockList = (props)=>{
    if(props.items.length === 0){
        return (
            <div>
                <h2>No Product Found.</h2>
            </div>
        );
    }

    return(
    <React.Fragment>
        <div className="wrapper">
            <table className="StockList">
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Date</th>
                </tr>

                {
                    props.items.map(item=>
                        <StockItem
                            key={item._id}
                            product={item.product} 
                            quantity={item.quantity}
                            price={item.price}
                            date={item.date}
                        />
                    )}
                    </thead>
            </table>
        </div>
    </React.Fragment>
    );
};
export default StockList;
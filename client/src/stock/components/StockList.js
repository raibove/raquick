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
                    <th>Date Added</th>
                    <th>Quantity (kg)</th>
                    <th>Price/kg</th>
                </tr>
                </thead>
                <tbody>
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
                    </tbody>
            </table>
        </div>
    </React.Fragment>
    );
};
export default StockList;
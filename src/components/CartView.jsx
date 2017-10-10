import React, { Component } from 'react'
import Product from './Product'
import AdminForm from './AdminForm'

class CartView extends Component {
  render () {
    return (
        
      <div>
        <h1>Cart View</h1>
        <h2>Products</h2>
        <div>
          { this.props.productList.map((product, index) => {
         { this.props.productList.reduce((totalPrice, product)=>{
            return (
                
              <div key={index}>
                <Product
                  productName={product.productName}
                  price={product.price}
                  description={product.description}
                />
                <button onClick={() => this.props.deleteProductFromProductList(index)}>Delete</button>
              </div>

            )
         )}
          }) }
          
        </div>
     
      </div>
    
    )
  }
}

export default CartView
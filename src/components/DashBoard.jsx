import React from 'react';
import Categories from '../components/Categories';
import Customers from '../components/Customers';
import LatestProduct from '../components/LatestProduct';
import ProductList from '../components/ProductList';
import TotalProducts from '../components/TotalProducts';

const Dashboard = ({
  categories,
  customers,
  latestProduct,
  productList,
  totalProducts,
}) => {

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {categories && <Categories />}
        {totalProducts && <TotalProducts />}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {customers && (
          <div
            style={{
              width: '400px',
              height: '50vh',
              border: '5px solid #b2b2b2',
              margin: '3rem',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              boxShadow:
                'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            }}
          >
            <h1 style={{ fontSize: '2rem', margin: '0.6rem' }}>CUSTOMERS</h1>
            <div
              style={{
                overflowX: 'auto',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Customers />
            </div>
          </div>
        )}

        {productList && (
          <div
            style={{
              width: '400px',
              height: '50vh',
              border: '5px solid #b2b2b2',
              margin: '3rem',
              overflowX: 'auto',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              boxShadow:
                'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            }}
          >
            <h1 style={{ fontSize: '2rem', margin: '0.6rem' }}>PRODUCTS</h1>
            <div
              style={{
                overflowX: 'auto',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <ProductList />
            </div>
          </div>
        )}
        {latestProduct && (
          <div
            style={{
              width: '400px',
              height: '50vh',
              border: '5px solid #b2b2b2',
              margin: '3rem',
              overflowX: 'auto',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              boxShadow:
                'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            }}
          >
            <h1 style={{ fontSize: '2rem', margin: '0.6rem' }}>
              LATEST PRODUCTS
            </h1>
            <div
              style={{
                overflowX: 'auto',
              }}
            >
              <LatestProduct />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

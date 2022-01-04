import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {
  createDashboardRequest,
  createDashboardSuccess,
} from '../redux/actions/dashboardActions';
import { useDispatch, useSelector } from 'react-redux';

const CreateDashboard = () => {

  const dashboards = useSelector((state) => state.dashboards);
  const { dashboard } = dashboards;
  const boards = dashboard.filter((board) => board !== null);


  const [productName, setProductName] = useState('');
  const [categories, setCategories] = useState(false);
  const [customers, setCustomers] = useState(false);
  const [latestProduct, setLatestProduct] = useState(false);
  const [productList, setProductList] = useState(false);
  const [totalProducts, setTotalProducts] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const dispatch = useDispatch();

  const resetDashboard = () => {
    setProductName('');
    setCategories(false);
    setCustomers(false);
    setLatestProduct(false);
    setProductList(false);
    setTotalProducts(false);
  }
  const handleCreateDashboard = (e) => {
    e.preventDefault();
    dispatch(createDashboardRequest());
    if (productName) {
      const board = boards.filter((board) => board?.name === productName)
      if(!board?.length) {
            dispatch(
        createDashboardSuccess({
          name: productName,
          Categories: categories,
          Customers: customers,
          LatestProduct: latestProduct,
          ProductList: productList,
          TotalProducts: totalProducts,
        })
      );
      resetDashboard()
      setSuccessMessage('New dashboard Added');
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);  
      } else if (board?.length) {
        resetDashboard()
        setErrorMessage('Dashboard already Exists');
        setTimeout(() => {
          setErrorMessage('');
        }, 2000);
      }
    } else if (!productName) {
      setErrorMessage('Please Fill Out Dashboard Name');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
      <div
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
          width: '50%',
          padding: '2rem',
        }}
      >
        <h1 style={{ textAlign: 'center' }}>Create Dashboard</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <div>
            <Form
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
              className='m-5'
              onSubmit={handleCreateDashboard}
            >
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Dashboard Name: </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Name'
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check
                  type='checkbox'
                  label='List of Products'
                  checked={productList}
                  onChange={() => setProductList(!productList)}
                />
                <Form.Check
                  type='checkbox'
                  label='Total Products'
                  checked={totalProducts}
                  onChange={() => setTotalProducts(!totalProducts)}
                />
                <Form.Check
                  type='checkbox'
                  label='Customers'
                  checked={customers}
                  onChange={() => setCustomers(!customers)}
                />
                <Form.Check
                  type='checkbox'
                  label='Latest product'
                  checked={latestProduct}
                  onChange={() => setLatestProduct(!latestProduct)}
                />
                <Form.Check
                  type='checkbox'
                  label='Categories'
                  checked={categories}
                  onChange={() => setCategories(!categories)}
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Create
              </Button>
            </Form>
          </div>
        </div>
        {errorMessage && (
          <p style={{ fontSize: '1rem', color: 'red', fontWeight: 'bold' }}>
            {errorMessage}
          </p>
        )}
        {successMessage && (
          <p style={{ fontSize: '1rem', color: 'green', fontWeight: 'bold' }}>
            {successMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default CreateDashboard;

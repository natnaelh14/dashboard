import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const TotalProducts = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  useEffect(() => {
    fetch(' https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((response) => setTotalProducts(response.length));
  }, []);
  return (
    <Card
      bg={'primary'}
      text={'white'}
      style={{ width: '20rem', fontSize: '2rem', fontWeight: 'bold', margin: '1rem' }}
      className='mb-2'
    >
      <Card.Header>TOTAL PRODUCTS</Card.Header>
      <Card.Body>
        <Card.Text style={{ fontSize: '4rem' }}>{totalProducts}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TotalProducts;

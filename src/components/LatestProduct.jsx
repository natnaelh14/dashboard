import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const LatestProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(' https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);

  const product = products[Math.floor(Math.random() * products.length)];

  return (
    <>
      {product && (
        <Card border="danger" style={{ width: 'auto', height: 'auto', padding: '0.5rem', margin: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card.Img
              variant='top'
              style={{ height: 150, width: 150 }}
              src={product.image}
            />
          </div>
          <Card.Body>
            <Card.Title
            style={{ fontSize: '1.1rem', fontWeight: 'bold', textAlign: 'center'}}
            >{product.title}</Card.Title>
            <Card.Text style={{ fontSize: '0.9rem', textAlign: 'justify' }}>
              <b>Description: </b> {product.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <ListGroupItem>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  width: 'fit-content',
                }}
              >
                <b>Price:</b> ${product.price}
              </div>
            </ListGroupItem>
            <ListGroupItem>
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <b>Category:</b> {product.category.toUpperCase()}
              </div>
            </ListGroupItem>
          </ListGroup>
        </Card>
      )}
    </>
  );
};

export default LatestProduct;

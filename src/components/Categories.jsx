import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((res) => setCategories(res));
  }, []);

  return (
    <Card
      bg={'primary'}
      text={'white'}
      style={{ width: '20rem', fontSize: '2rem', fontWeight: 'bold', margin: '1rem' }}
      className='mb-2'
    >
      <Card.Header>CATEGORIES</Card.Header>
      <Card.Body>
        {categories.map((category, i) => (
          <Card.Text key={i} style={{ fontSize: '1rem' }}>
            {category.toUpperCase()}
          </Card.Text>
        ))}
      </Card.Body>
    </Card>
  );
};

export default Categories;

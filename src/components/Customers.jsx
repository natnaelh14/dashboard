import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch(' https://fakestoreapi.com/users')
      .then((response) => response.json())
      .then((response) => setCustomers(response));
  }, []);

  return (
    <div >
      {customers.map((customer) => (
    <Card key={customer.id} border="warning" style={{ width: 'auto', padding: '0.5rem', margin: '1rem'}}>
    <Card.Header style={{ fontWeight: 'bold'}}>{customer.name.firstname.toUpperCase()} {customer.name.lastname.toUpperCase()}</Card.Header>
    <Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroupItem style={{ textAlign: 'left'}}><b>Email: </b>{customer.email}</ListGroupItem>
    <ListGroupItem style={{ textAlign: 'left'}}><b>Phone #: </b>{customer.phone}</ListGroupItem>
    <ListGroupItem style={{ textAlign: 'left'}}><b>Address: </b>{customer.address.street}, {customer.address.city}, {customer.address.zipcode}</ListGroupItem>
  </ListGroup>
    </Card.Body>
  </Card>
      ))}
    </div>

  );
};

export default Customers;

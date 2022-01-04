import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Header = () => {
  const dashboards = useSelector((state) => state.dashboards);
  const { dashboard } = dashboards;
  const boards = dashboard.filter((board) => board !== null).filter((board) => board !== undefined)

  return (
    <Nav style={{backgroundColor: '#00d2b1'}} className='justify-content-center' activeKey='/home'>
      <Nav.Item style={{ margin: '1.5rem', textDecoration: 'none' }} >
        <NavLink style={{ color: 'black', fontSize: '2rem', fontWeight: 'bold',textDecoration: 'none' }} to='/'>{`Dashboard (${boards?.length ? boards?.length : 0})`}</NavLink>
      </Nav.Item>
      <Nav.Item style={{ margin: '1.5rem'}}>
        <NavLink style={{ color: 'black', fontSize: '2rem', fontWeight: 'bold', textDecoration: 'none' }} to='/create'>Create Dashboard</NavLink>
      </Nav.Item>
    </Nav>
  );
};

export default Header;

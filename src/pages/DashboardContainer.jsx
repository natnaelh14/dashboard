import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Dashboard from '../components/DashBoard';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const DashboardContainer = () => {
  const dashboards = useSelector((state) => state.dashboards);
  const { dashboard } = dashboards;
  const boards = dashboard.filter((board) => board !== null).filter((board) => board !== undefined);

  const [selectedOption, setSelectedOption] = useState(
    boards[0] ? boards[0]?.name : 'No Dashboard'
  );
  const [currentBoard, setCurrentBoard] = useState(
    boards[0] ? boards[0] : null
  );

  const handleSelect = (eventKey, event) => {
    setSelectedOption(eventKey);
    const tempBoard = boards.filter((board) => board?.name === eventKey);
    if (tempBoard[0]) {
      setCurrentBoard(tempBoard[0]);
    }
  };
  return (
    <div>
      <div style={{ marginTop: '1rem' }}>
        <DropdownButton
          variant='warning'
          id='dropdown-basic-button'
          title={selectedOption}
          onSelect={handleSelect}
        >
          {boards?.map((board, i) => (
            <Dropdown.Item key={i} eventKey={board?.name}>
              {board?.name}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
      {currentBoard && (
        <Dashboard
          categories={currentBoard.Categories}
          customers={currentBoard.Customers}
          latestProduct={currentBoard.LatestProduct}
          productList={currentBoard.ProductList}
          totalProducts={currentBoard.TotalProducts}
        />
      )}
    </div>
  );
};

export default DashboardContainer;

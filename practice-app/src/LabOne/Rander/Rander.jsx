import React from 'react'
import DessertList from '../Component/DessertList'

const desserts = [
    {
      name: "Chocolate Cake",
      calories: 400,
      createdAt: "2022-09-01",
    },
    {
      name: "Ice Cream",
      calories: 200,
      createdAt: "2022-01-02",
    },
    {
      name: "Tiramisu",
      calories: 300,
      createdAt: "2021-10-03",
    },
    {
      name: "Cheesecake",
      calories: 600,
      createdAt: "2022-01-04",
    },
  ];

function Rander() {
  return (
    <div>
        <h2>List of low calorie desserts:</h2>
        <DessertList data={desserts} />
    </div>

  )
}

export default Rander
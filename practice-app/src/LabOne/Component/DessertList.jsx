import React from 'react'

function DessertList(props) {
    const { data } = props;

    // Filtering desserts with less than 500 calories and sorting by calories
    const filteredAndSortedDesserts = data
      .filter(dessert => dessert.calories < 500)
      .sort((a, b) => a.calories - b.calories);

    
  return (
    <ul>
      {filteredAndSortedDesserts.map(dessert => (
        <li key={dessert.name}>
          {`${dessert.name} - ${dessert.calories} cal`}
        </li>
      ))}
    </ul>
  )

  }
export default DessertList
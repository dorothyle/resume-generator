import React, { useState } from 'react';

function Dummy() {
  const [person, setPerson] = useState({
    name: "Elizabeth",
    age: 24,
    gender: "female"
  });

  const handleFetchData = async () => {
    console.log(JSON.stringify(person));
    try {
      const response = await fetch('http://127.0.0.1:5000/modify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(person)
      });
      
      if (!response.ok) {
        console.log("RESPONSE IS NOT OK")
        throw new Error('Failed to fetch data');
      }

      const updatedPerson = await response.json();
      setPerson(updatedPerson);
    } catch (error) {
        console.log('CANNOT FETCH DATA')
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={handleFetchData}>Fetch Data</button>
      {person && (
        <div>
          <h2>Updated Data:</h2>
          <pre>{JSON.stringify(person, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Dummy;
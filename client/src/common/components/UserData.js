import React, { useState, useEffect } from 'react';

function UserData() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/userdata');
      const data = await response.json();
      setFormData(data);
    }
    fetchData();
  }, []);  

  return (
    <div>
      {formData}
      <h2>Form Data Received:</h2>
      {formData ? (
        <ul>
          <li><strong>Tour Area:</strong> {formData.TourArea}</li>
          <li><strong>Tour Count:</strong> {formData.TourCount}</li>
          <li><strong>Tour Time (Morning):</strong> {formData.TourTimeMorning ? 'Yes' : 'No'}</li>
          <li><strong>Tour Time (Afternoon):</strong> {formData.TourTimeAfternoon ? 'Yes' : 'No'}</li>
          <li><strong>Tour Time (Evening):</strong> {formData.TourTimeEvening ? 'Yes' : 'No'}</li>
          <li><strong>Selected Date:</strong> {formData.selectedDate}</li>
          <li><strong>Tour Attractions:</strong> {formData.TourAttractions}</li>
          <li><strong>Selected Attractions Options:</strong> {formData.selectedAttractionsOptions}</li>
          <li><strong>Tour Restaurant:</strong> {formData.TourRestaurant}</li>
          <li><strong>Selected Restaurant Options:</strong> {formData.selectedRestaurantOptions}</li>
          <li><strong>Kosher Type:</strong> {formData.KosherType}</li>
          <li><strong>Budget Per Person:</strong> {formData.BudgetPerson}</li>
        </ul>
      ) : (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      )}
    </div>
  );
}

export default UserData;


// NEW CODE


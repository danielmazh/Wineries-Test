import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import Select, { components } from 'react-select';
import { useNavigate } from 'react-router-dom';
import '../../styles//QuestionnaireForm.css';
import './inner-component/react-datepicker'





function MultiPageForm() {
  const [formData, setFormData] = useState({
    TourArea: '',
    TourCount: '',
    textInput: '',
    TourTimeMorning: false,
    TourTimeAfternoon: false,
    TourTimeEvening: false,
    selectedDate: null,
    TourAttractions: false,
    selectedAttractionsOptions: [],
    TourRestaurant: false,
    selectedRestaurantOptions: [],
    KosherType: false,
    rangeInput: '',

  });

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(3);

  const storedData = JSON.parse(localStorage.getItem('formData'));
  const email = localStorage.getItem('email');

  const selectedDay = formData.selectedDate ? formData.selectedDate.toLocaleDateString('he-IL', { weekday: 'long' }) : '';
  const selectedDayText = `היום שנבחר הוא ${selectedDay}`;

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const { Option } = components;
  const [showAttractionsOptions, setShowAttractionsOptions] = useState(false);
  const [selectedAttractionsOption, setSelectedAttractionsOption] = useState('');
  const [showRestaurantOptions, setShowRestaurantOptions] = useState(false);
  const [selectedRestaurantOption, setSelectedRestaurantOption] = useState('');
  const navigate = useNavigate();


  
  const handleSelectChange = (selectedOptions, checkboxName) => {
    const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
    const selectedValuesString = selectedValues.join(',');

    if (checkboxName === 'TourAttractions') {
      setFormData({
        ...formData,
        selectedAttractionsOptions: selectedValues,
      });
    } else if (checkboxName === 'TourRestaurant') {
      setFormData({
        ...formData,
        selectedRestaurantOptions: selectedValues,
      });
    }
  };


  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
  
    if (name === 'TourAttractions') {
      setShowAttractionsOptions(checked);
      setSelectedAttractionsOption('');
      setFormData({
        ...formData,
        selectedAttractionsOptions: [],
        [name]: newValue,
      });
    } else if (name === 'TourRestaurant') {
      setShowRestaurantOptions(checked);
      setSelectedRestaurantOption('');
      setFormData({
        ...formData,
        selectedRestaurantOptions: [],
        [name]: newValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: newValue,
      });
    }
  
    if (name === 'selectedDate') {
      localStorage.setItem('formData', JSON.stringify({ ...formData, [name]: newValue }));
      document.querySelector('.react-datepicker__close-icon').click();
    }
  };
  

  useEffect(() => {
    // Save form data to local storage whenever formData changes
    localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData, showOptions, selectedOption]);
    


  useEffect(() => {
    // Load form data from local storage when component mounts
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);
  
  
  // const handleFormSubmit = (event) => {
  //   console.log('currentPage', currentPage);
  //   event.preventDefault();
  //   // Submit form data to server or do other final processing
  //   // ...
  //   alert('Form submitted successfully!');
  // };


// ADDED - TEST
// const handleFormSubmit = async (event) => {
//   event.preventDefault();
//   const storedData = JSON.parse(localStorage.getItem('formData'));
//   try {
//     const response = await axios.post('/api/userdata', { formData });
//     const { token } = response.data;
//     setJwt(token);
//     localStorage.setItem('token', token);
//     localStorage.setItem('email', email);
//     props.setIsLoggedIn(true); 
//     navigate(`/userdata/${token}`);
//     console.log('userdata loaded Success');
//   } catch (error) {
//     console.error(error);
//     setError('Incorrect email or password');
//   }
// };



// ADDED - TEST
// const handleFormSubmit = async (event) => {
//   event.preventDefault();
//   const storedData = JSON.parse(localStorage.getItem('formData'));

//   const token = localStorage.getItem('token');
//   navigate(`/TourDataSystemPage/${token}`);

//   const QuestionnaireFormData = {
//     TourArea: storedData.TourArea,
//     TourCount: storedData.TourCount,
//     TourTimeMorning: storedData.TourTimeMorning,
//     TourTimeAfternoon: storedData.TourTimeAfternoon,
//     TourTimeEvening: storedData.TourTimeEvening,
//     selectedDate: storedData.selectedDate,
//     TourAttractions: storedData.TourAttractions,
//     selectedAttractionsOptions: storedData.selectedAttractionsOptions,
//     TourRestaurant: storedData.TourRestaurant,
//     selectedRestaurantOptions: storedData.selectedRestaurantOptions,
//     KosherType: storedData.KosherType,
//     BudgetPerson: storedData.BudgetPerson,
//   };

//   try {
//     const response = await fetch('/SubmitFormData', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(QuestionnaireFormData)
//     });

//     if (response.ok) {
//       const data = await response.json();

//       console.log('Server response:', data);
//       navigate('/userdata');
//     } else {
//       console.error('Server response not ok');
//     }
//   } catch (error) {
//     console.error('Error submitting form data:', error);
//   }
// };

// ADDED - TEST
async function handleFormSubmit() {
  const storedData = JSON.parse(localStorage.getItem('formData'));
  console.log('Stored data from localStorage:', storedData);


  const QuestionnaireFormData = {
    TourArea: storedData.TourArea,
    TourCount: storedData.TourCount,
    TourTimeMorning: storedData.TourTimeMorning,
    TourTimeAfternoon: storedData.TourTimeAfternoon,
    TourTimeEvening: storedData.TourTimeEvening,
    selectedDate: storedData.selectedDate,
    TourAttractions: storedData.TourAttractions,
    selectedAttractionsOptions: storedData.selectedAttractionsOptions,
    TourRestaurant: storedData.TourRestaurant,
    selectedRestaurantOptions: storedData.selectedRestaurantOptions,
    KosherType: storedData.KosherType,
    BudgetPerson: storedData.BudgetPerson,
  };
  console.log('QuestionnaireFormData:', QuestionnaireFormData);

  try {
    const response = await fetch("/api/userdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ QuestionnaireFormData })
    });
    console.log('Response from server:', response);

    if (response.ok) {
      console.log('FormData received successfully');
      navigate('/userdata');
    } else {
      console.error('Error receiving FormData');
    }
  } catch (error) {
    console.error('Error submitting FormData:', error);
    console.error('Response from server:', error.response);
  }

}



// ************************************************************************************************


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  // ********** Page0 **********
  const renderPage0 = () => (
    <div>
      <h1 style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0)'}}>-------------------------------------------------</h1>
      <h1 style={{textAlign: 'center'}}>ברוכים הבאים</h1> 
      <h2 style={{textAlign: 'center'}}>{email}</h2>
      {/* <p>{JSON.stringify(localStorage)}</p> */}

      <br />
      <br />

    </div>

  );


// ********** Page1 **********
  const renderPage1 = () => (
    <div>
      <h1 style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0)'}}>-------------------------------------------------</h1>
      <h4 style={{textAlign: 'center'}}>עמוד 1 מתוך {totalPages}</h4>

      <label>
        :בחרו איזור לסיור היין שלכם
        <br /><select 
          name="TourArea"
          value={formData.TourArea}
          onChange={handleInputChange}
        >
          <option value="">יש לבחור מהרשימה</option>
          <option value="Jerusalem">ירושלים</option>
          <option value="Center">מרכז</option>
          <option value="North">צפון</option>
        </select>
      </label>

      <br />
      <br />

      <label>
        :בחרו תאריך לסיור היין שלכם
        <br />

        <DatePicker
          selected={formData.selectedDate}
          onChange={(date) => setFormData({...formData, selectedDate: date})}
          placeholderText="יש לבחור תאריך"
          dateFormat="dd/MM/yyyy"
        />


          {formData.selectedDate && (
          <p>{`היום שנבחר הוא ${selectedDay}`}</p>
          )}
      </label>

    


      <br />
      <br />

      <label>
        :בכמה יקבים תרצו לסייר בסיור היין שלכם
        <br /><select 
          name="TourCount"
          value={formData.TourCount}
          onChange={handleInputChange}
        >
          <option value="">יש לבחור מהרשימה</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>

      <br />
      <br />

      <label  class="form-data-list">:מהן שעות הסיור הרצויות עבורכם
        <br />
        <br />

        <>בוקר<input
          className="form-checkbox-input"
          type="checkbox"
          name="TourTimeMorning"
          checked={formData.TourTimeMorning}
          onChange={handleInputChange}
        />
        </>
        
        <br /><br />

        <>צהריים<input
          className="form-checkbox-input"
          type="checkbox"
          name="TourTimeAfternoon"
          checked={formData.TourTimeAfternoon}
          onChange={handleInputChange}
        />
        </>

        <br /><br />

        <>ערב<input
          className="form-checkbox-input"
          type="checkbox"
          name="TourTimeEvening"
          checked={formData.TourTimeEvening}
          onChange={handleInputChange}
        />
        </>
      </label>

      <br />


    </div>
  );




  // ********** Page2 **********
  const renderPage2 = () => (
    <div >
      <h1 style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0)'}}>-------------------------------------------------</h1>
      <h4 style={{textAlign: 'center'}}>עמוד 2 מתוך {totalPages}</h4>

      <label>
        :מספר אנשים בסיור
        <br /><select 
          name="TourPeopleCount"
          value={formData.TourPeopleCount}
          onChange={handleInputChange}
        >
          <option value="">יש לבחור מהרשימה</option>
          <option value="1-2">1-2</option>
          <option value="2-5">2-4</option>
          <option value="5+">5+</option>
        </select>
      </label>

      <br />
      <br />

      <label>
        :תקציב רצוי לאדם
        <br /><input
          type="range"
          name="rangeInput"
          min="50"
          max="500"
          value={formData.rangeInput}
          onChange={handleInputChange}
        />
        <span className="form-input-container">{formData.rangeInput}</span>
      </label>

      <br />
      <br />



      <label>
        אטרקציות ובילויים
        <input 
          className="form-checkbox-input"
          type="checkbox"
          name="TourAttractions"
          checked={formData.TourAttractions}
          onChange={handleInputChange}
        />
      </label>

      {formData.TourAttractions && (
        <div className="form-group"><br />
          <label htmlFor="selectedAttractionsOptions">:יש לבחור לפחות אחת מהאפשרויות</label>
          <Select
            id="selectedAttractionsOptions"
            isMulti
            options={[        
              { value: 'Wine-Tasting ', label: 'טעימות יין' },        
              { value: 'Vineyard-Tour ', label: 'סיור כרמים' },        
              { value: 'Wine-Making-Workshop ', label: 'סדנת הכנת יין' },        
              { value: 'Motorized-Tour-Using-ATVs ', label: 'סיור ממונע באמצעות טרקטורונים' },        
              { value: 'Private-Events ', label: 'אירועים פרטיים' },        
              { value: 'Collecting-Edible-Wild-Plants ', label: 'ליקוט צמחי בר אכילים' },
              ]}

            value={formData.selectedAttractionsOptions.map(value => ({ value, label: value }))}
            onChange={(selectedOptions) => handleSelectChange(selectedOptions, 'TourAttractions')}
          />
        </div>
      )}

      <br />
      <br />

      <label>
        כשרות היקב<input
          type="checkbox"
          name="KosherType"
          checked={formData.KosherType}
          onChange={handleInputChange}
        />

        </label>

        <br />
        <br />

      <label>
        מסעדה במקום
        <input 
          className="form-checkbox-input"
          type="checkbox"
          name="TourRestaurant"
          checked={formData.TourRestaurant}
          onChange={handleInputChange}
        />
      </label>

      {formData.TourRestaurant && (
        <div className="form-group"><br />
          <label htmlFor="selectedRestaurantOptions">:יש לבחור לפחות אחת מהאפשרויות</label>
          <Select
            id="selectedRestaurantOptions"
            isMulti
            options={[        
              { value: 'Dairy-Restaurant ', label: 'מסעדה חלבית' },        
              { value: 'Meat-Restaurant ', label: 'מסעדה בשרית' },        
              { value: 'Fish-Restaurant ', label: 'מסעדת דגים' },        
              { value: 'Vegan-Restaurant ', label: 'מסעדה טבעונית' },      
            ]}
            
            value={formData.selectedRestaurantOptions.map(value => ({ value, label: value }))}
            onChange={(selectedOptions) => handleSelectChange(selectedOptions, 'TourRestaurant')}
          />
        </div>
      )}

    <br />
    <br />


    </div>
  );


  // ********** Page3 **********
  const renderPage3 = () => (
    <div>
      <h1 style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0)'}}>-------------------------------------------------</h1>
      <h4 style={{textAlign: 'center'}}>עמוד 3 מתוך {totalPages}</h4>
      <p>סיכום הנתונים:</p>

      <ul class="form-data-list">
        <li>איזור הסיור המבוקש: {formData.TourArea}</li>
        <li>מספר משתתפים בסיור: {formData.TourCount}</li>

        <li>שעות הבוקר?: {formData.TourTimeMorning ? 'Yes' : 'No'}</li>
        <li>שעות הצהריים?: {formData.TourTimeAfternoon ? 'Yes' : 'No'}</li>
        <li>שעות הערב?: {formData.TourTimeEvening ? 'Yes' : 'No'}</li>

        <li>תאריך של הסיור: {formData.selectedDate ? formData.selectedDate.toLocaleDateString('he-IL', { weekday: 'long' }) + ' ' + formData.selectedDate.toLocaleDateString('he-IL') : 'No date selected'}</li>
        <li>אטרקציות? {formData.TourAttractions ? 'Yes' : 'No'}</li>
        <li>אטרקציות מבוקשות: {formData.selectedAttractionsOptions}</li>

        <li>כשרות? {formData.KosherType ? 'Yes' : 'No'}</li>

        <li>מסעדה? {formData.TourRestaurant ? 'Yes' : 'No'}</li>
        <li>מסעדות מבוקשות: {formData.selectedRestaurantOptions}</li>

        <li>תקציב לאדם: {formData.rangeInput}</li>
      </ul>
    </div>
  );

  // ********** Buttons **********
  const handlePreviousClick = () => {
    console.log('currentPage', currentPage);
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    console.log('currentPage', currentPage);
    setCurrentPage(currentPage + 1);
  };


  // ********** Form **********
  return (
    <div dir="rtl"><br /><br /><br />
    <div className='Question-form-container'>
      <form className='Question-form' onSubmit={handleFormSubmit}>
        {currentPage === 0 && renderPage0()}
        {currentPage === 1 && renderPage1()}
        {currentPage === 2 && renderPage2()}
        {currentPage === 3 && renderPage3()}

          {currentPage == 0 && (
          <>
          <button className="Question-buttons-main-001" type="button" onClick={handleNextClick}>החלו לתכנן!</button>
          </>
          )}

          {currentPage == 1 && (
          <>
          <button className="Question-buttons-main-001" type="button" onClick={handleNextClick}>הבא</button>
          </>
          )}

          {currentPage == 2 && (
          <>
          <button className="Question-buttons-main-001" type="button" onClick={handlePreviousClick}>הקודם</button>
          <button className="Question-buttons-main-001" type="button" onClick={handleNextClick}>הבא</button>
          </> 
          )}


          {currentPage == 3  && (
          <>
          <button className="Question-buttons-main-001" type="button" onClick={handlePreviousClick}>הקודם</button>
          <button className="Question-buttons-main-001" type="submit">סיימתי!</button>
          </>
          )}

        <br />
        <br />

      </form>
    </div>
    </div>
  );
}

export default MultiPageForm;



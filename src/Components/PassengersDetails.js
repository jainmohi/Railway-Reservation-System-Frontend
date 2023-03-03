import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function MyComponent() {
  const [dataArray, setDataArray] = useState([]);
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setDataArray([...dataArray, formData]);
    setFormData({});
  };

  const handleInputChange = (event,showForm) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    showForm = true;
    return showForm;
  };

  const renderForms = (n) => {
    const forms = [];
    let i=0;
    do{
      forms.push(
        <Form key={i} onSubmit={
                                (event)=>{handleSubmit(event);
                                }}>
          <Form.Group controlId={`formBasicEmail${i}`}>
            <Form.Label>Email address {i+1}</Form.Label>
            <Form.Control type="email" name={`email${i}`} placeholder="Enter email" onChange={handleInputChange} value={formData[`email${i}`] || ''} required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      );
      i++;
    }while(i<n);
    console.log(forms.length);
    console.log(dataArray);
    return forms;
  };

  return (
    <div>
      {renderForms(3)}
      <ul>
        {dataArray.map((data, index) => (
          <li key={index}>{data['email'+'i']}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
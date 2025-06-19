import React, { useState } from 'react';

export default function CourseRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [subCourse, setSubCourse] = useState('');
  const [duration, setDuration] = useState('');
  const [payment, setPayment] = useState('');

  const courseOptions = ['HND', 'Diploma', 'Bsc'];

  const subCourseOptions = {
    HND: [
      { name: 'HND in Software Engineering', duration: '18 Months', payment: 'Rs. 370,000' },
      { name: 'HND in Cybersecurity', duration: '18 Months', payment: 'Rs. 370,000' },
      { name: 'HND in Networking', duration: '18 Months', payment: 'Rs. 370,000' },
      { name: 'HND in Computing', duration: '18 Months', payment: 'Rs. 370,000' },
    ],

    Diploma: [
      { name: 'Diploma in ICT', duration: '4 Months', payment: 'Rs. 50,000' },
      { name: 'Diploma in English', duration:'4 Months',  payment: 'Rs 40,000' },
      { name: 'Dual Diploma in ICT & English', duration: '6 Months', payment: 'Rs. 85,000' },
      { name: 'Diploma in Web Engineering', duration: '4 Months', payment: 'Rs. 60,000' },
      { name: 'Diploma in Business Management', duration:'3 Months',  payment: 'Rs 40,000' },
    ],

    Bsc: [
      { name: 'BSC (Hons) Cyber Security', duration: '1.5 Years', payment: 'Rs. 500,000' },
      { name: ' BSC (Hons) Financial Management', duration: '1.5 Years', payment: 'Rs. 500,000' },
    ]
  };

  const handleCourseChange = (e) => {
    const selected = e.target.value;
    setCourse(selected);
    setSubCourse('');
    setDuration('');
    setPayment('');
  };

  const handleSubCourseChange = (e) => {
    const selectedSub = e.target.value;
    setSubCourse(selectedSub);

    const selectedDetails = subCourseOptions[course].find(sc => sc.name === selectedSub);
    if (selectedDetails) {
      setDuration(selectedDetails.duration);
      setPayment(selectedDetails.payment);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}
Email: ${email}
Course: ${course}
Subcourse: ${subCourse}
Duration: ${duration}
Payment: ${payment}`);
  };

  
  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: 'auto' }}>
      <h2>🎓 Course Registration </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>👤 Name:</label><br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div><br />

        <div>
          <label>📧 Email:</label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div><br />

        <div>
          <label>📚 Course:</label><br />
          <select value={course} onChange={handleCourseChange} required>
            <option value="">-- Select Course --</option>
            {courseOptions.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </select>
        </div><br />

        {course && (
          <div>
            <label>📘 Subcourse:</label><br />
            <select value={subCourse} onChange={handleSubCourseChange} required>
              <option value="">-- Select Subcourse --</option>
              {subCourseOptions[course].map((sc, i) => (
                <option key={i} value={sc.name}>{sc.name}</option>
              ))}
            </select>
          </div>
        )}<br />

        {subCourse && (
          <>
            <div>
              <label>⏳ Duration:</label><br />
              <input type="text" value={duration} readOnly />
            </div><br />
            <div>
              <label>💰 Payment:</label><br />
              <input type="text" value={payment} readOnly />
            </div><br />
          </>
        )}

        <button type="submit">✅ Register</button>
      </form>
    </div>
  );
}

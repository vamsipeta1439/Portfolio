import React from 'react';

function Education() {
  const educationData = [
    {
        id: 1,
        institution: 'NxtWave CCBP 4.0 Intensive Program',
        course: 'MERN Stack Development',
        year: '2022 - 2023',
        grade: 'Distinction'
      },
    {
      id: 2,
      institution: 'Sri Sai College of IT & Management',
      course: 'MCA - Master of Computer Applications',
      year: '2022 - 2024',
      grade: '8.0 GPA'
    },
    {
      id: 3,
      institution: 'Sri Govindaraja Swamy Arts College',
      course: 'Bsc Computer Science',
      year: '2019 - 2022',
      grade: '8.90 GPA'
    },
  ];
  
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <table className="education-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>College/Institution</th>
              <th>Course</th>
              <th>Year of Study</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {educationData.map(education => (
              <tr key={education.id}>
                <td>{education.id}</td>
                <td>{education.institution}</td>
                <td>{education.course}</td>
                <td>{education.year}</td>
                <td>{education.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Education;
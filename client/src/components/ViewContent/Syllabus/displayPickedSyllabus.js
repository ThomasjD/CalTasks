import React, { useState, useEffect, useContext } from 'react';
import DisplayPickedSyllabusInfo from './displayPickedSyllabusInfo/displayPickedSyllabusInfo';
import student from '../../../containers/Student.css';
import SyllabusContext from '../../../context/syllabusContext';
import taskStyle from '../Tasks/Task/Task.module.css';
const DisplayPickedSyllabus = props => {
  const syllabusContext = useContext(SyllabusContext);

  const renderTableHeaderHandler = () => {
    if (syllabusContext.everythingSyllabus.syllabusData) {
      let dataLocation = syllabusContext.dataRequestDetails.dataLocation;

      let header = Object.keys(
        syllabusContext.everythingSyllabus.syllabusData.syllabi[dataLocation]
      );

      return header.map((key, index) => {
        switch (key) {
          case 'syllabusId':
            return <th key={index}>Click to Delete</th>;
            break;

          case 'name':
            return <th key={index}>{key.toUpperCase()}</th>;
            break;

          case 'syllabusCompletionTime':
            return <th key={index}>Total Time</th>;
            break;

          case 'completionStatus':
            return <th key={index}>{key.toUpperCase()}</th>;
            break;

          case 'lessons':
            return <th key={index}>{key.toUpperCase()}</th>;
            break;
        }
      });
    }
  };
  //todayTaskChanged={props.changed}
  const infoOfSelectedSyllabusHandler = () => {
    let starvingCow = {};
    if (syllabusContext.everythingSyllabus.syllabusData) {
      let dataLocation = syllabusContext.dataRequestDetails.dataLocation;
      let syllabus =
        syllabusContext.everythingSyllabus.syllabusData.syllabi[dataLocation];

      let grass = Object.keys(syllabus).map(key => {
        if (
          key === 'syllabusId' ||
          'name' ||
          'syllabusCompletionTime' ||
          'completionStatus' ||
          'lessons'
        ) {
          let food = { ...starvingCow, [key]: syllabus[key] };
          starvingCow = food;
        }

        return starvingCow;
      });

      console.log(starvingCow); //single object
      console.log(grass); //array of objects

      return (
        <React.Fragment>
          <DisplayPickedSyllabusInfo
            syllabus={starvingCow}
            particularKey={starvingCow.name}
          />
        </React.Fragment>
      );
    }
  };

  return (
    <div>
      <h1 id="title"> Syllabus Info</h1>

      <table id="students">
        <thead>
          <tr>{renderTableHeaderHandler()}</tr>
        </thead>
        <tbody>{infoOfSelectedSyllabusHandler()}</tbody>
      </table>
    </div>
  );
};

export default DisplayPickedSyllabus;

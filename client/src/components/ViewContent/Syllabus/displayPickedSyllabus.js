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
            return <th key={index}>Schedule Task</th>;
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
    if (syllabusContext.everythingSyllabus.syllabusData) {
      let dataLocation = syllabusContext.dataRequestDetails.dataLocation;
      let syllabus =
        syllabusContext.everythingSyllabus.syllabusData.syllabi[dataLocation];
      let bigPicture = Object.keys(
        syllabus //[keys of that syllabus]
      )
        .map(key => {
          return [...Array(syllabus[key])].map((_, index) => {
            return (
              <React.Fragment>
                <DisplayPickedSyllabusInfo
                  // syllabus={
                  //   syllabusContext.everythingSyllabus.syllabusData.syllabi[
                  //     dataLocation
                  //   ]
                  // }
                  Igkey={key}
                  particularKey={key + index}
                />
              </React.Fragment>
            );
          });
        })
        .reduce((arr, el) => {
          return arr.concat(el);
        }, []);
      return bigPicture;

      // alert(
      //   `inside infoOfSelectedSyllabusHandler object value  ${syllabusContext.everythingSyllabus.syllabusData.syllabi[dataLocation].key}`
      // );
      //alert(key);
      //let keykey = JSON.stringify(key);

      //for each key, return the value of that key

      // let syllabus =
      //   syllabusContext.everythingSyllabus.syllabusData.syllabi[
      //     dataLocation
      //   ];

      // alert(
      //   `inside infoOfSelectedSyllabusHandler header ${JSON.stringify(header)}`
      // );

      // return (
      //   <React.Fragment>
      //     <DisplayPickedsyllabusInfo
      //       particularKey = {key.concat(index)}
      //       syllabus={
      //         syllabusContext.syllabusData.syllabusData.syllabi[dataLocation]
      //       }
      //     ></DisplayPickedsyllabusInfo>
      //   </React.Fragment>
      // );

      //alert(`Inside tasksOfSelectedDayHandler dataLocation: ${dataLocation}`); //
    }
  };

  return (
    <div>
      <h1 id="title"> Tasks for The Day</h1>
      <table id="students">
        <tbody>
          <tr>{renderTableHeaderHandler()}</tr>
          {infoOfSelectedSyllabusHandler()}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayPickedSyllabus;

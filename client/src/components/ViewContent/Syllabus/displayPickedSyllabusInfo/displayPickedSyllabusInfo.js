import React from 'react';
import taskStyle from '../../Tasks/Task/Task.module.css';

const DisplayPickedSyllabusInfo = props => {
  // <SyllabiList
  //         syllabusEverything={syllabusContext.everythingSyllabus.syllabusData}
  //         syllabusId={
  //           syllabusContext.everythingSyllabus.syllabusData[syllabus].syllabusId
  //         }
  //         index={index}
  //       />
  //alert(`inside SyllabiList props.syllabusName ${props.syllabusName}`);
  return (
    <React.Fragment>
      <tr key={props.particularKey}>
        <td>
          <button className={taskStyle.delete}></button>
        </td>

        <td>{props.syllabus.name}</td>
        <td>{props.syllabus.syllabusCompletionTime}</td>
        <td>{props.syllabus.completionStatus}%</td>
        <td>{props.syllabus.lessons.length} lessons</td>
      </tr>
    </React.Fragment>
  );
};

export default DisplayPickedSyllabusInfo;

{
  /* <React.Fragment>
      <tr key={props.particularKey}>
        <td>
          <button className={taskStyle.delete}></button>
        </td>
        <td>{props.syllabus.syllabusId}</td>
        <td>{props.syllabus.name}</td>
        <td>{props.syllabus.syllabusCompletionTime}</td>
        <td>{props.syllabus.completionStatus}%</td>
        <td>{props.syllabus.lessons.length} lessons</td>
      </tr>
    </React.Fragment> */
}

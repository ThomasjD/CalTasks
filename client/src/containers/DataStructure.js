import React, { Component } from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import registerServiceWorker from '../registerServiceWorker';

class DataStructure extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    word: 'hello'
  };

  render() {
    return <App lovelyWord={this.state.word}></App>;
  }
}

export default DataStructure;
// state = {
//   objectives: [
//     {
//       objId: '',
//       objTitle: '',
//       timeCat: '',
//       // daily: 1
//       // days: 1.1-1.7
//       // months: 2.3,2.6,2.9
//       // year: 3.1,3.6, 3.9, 3.12
//       subjectCat: '',
//       expirationDate: '',
//       objStatus: '',
//       requiredCompletionTime: ''
//     }
//   ],

//   objRequiredWork: {
//     objId: '', //from objectives.objId
//     requiredWork: [
//       {
//         syllabi: [
//           { syllabusId: '' } //list of required syllabi
//         ],
//         level1Tasks: [],
//         level2Tasks: [],
//         level3Tasks: []
//       }
//     ]
//   },

//   syllabi: [
//     {
//       syllabusId: '',
//       syllabusTitle: '', //ReactMax
//       objSource: '', //objId
//       field: '', //Programing
//       concentration: '', //Front End
//       subjectCat: '', //Library
//       subject: '' //React
//     }
//   ],

//   syllabusWork: {
//     syllabusId: '', //same as syllabusId above
//     workTasks: [
//       {
//         lessonId: '',
//         taskTitle: '',
//         unit: '',
//         chapter: '',
//         sections: '',
//         topics: '',
//         requiredTime: ''
//       }
//     ]
//   },

//   scheduledTasks: [
//     {
//       taskId: '', // SyllabusWork.syllabusId.workTasks.lessonId
//       task: '', //SyllabusWork.syllabusId.workTasks.taskTitle
//       source: '', //Syllabus/syllabusId/syllabusTitle
//       subjectCat: '', ////Syllabus/syllabusId/subjectCat
//       //task is errand/apt/chore -> subjectCat = nonRepetitiveTasks
//       //task is repetitive tasks -> subject Cat = repetitiveTaskTasks
//       assignedTime: '',
//       assignedDate: '',
//       Deadline: '' //date
//     }
//   ]
// };

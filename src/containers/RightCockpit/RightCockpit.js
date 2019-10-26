import React, { Component } from 'react';
import ViewContent from '../../components/ViewContent';
import CreateContent from '../../components/Creation/CreateContent';

class RightCockpit extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    sampleSyllabus: 'Section 1: Getting Started 10 / 11|40min 1. Introduction 2min 2. What is React? 3min 3. Join our Online Learning Community 1min 4. Real-World SPAs & React Web Apps 2min 5. Writing our First React Code 15min 6. Why Should we Choose React? 2min 7. React Alternatives 1min 8. Understanding Single Page Applications and Multi Page Applications 4min 9. Course Outline 7min 10. How to get the Most out of This Course 2min 11. Useful Resources & Links 12. Module Introduction 2min 13. Understanding "let" and "const" 3min 14. Arrow Functions 5min 15. Exports and Imports 5min 16. Understanding Classes 5min 17. Classes, Properties and Methods 3min 18. The Spread & Rest Operator 7min 19. Destructuring 3min 20. Reference and Primitive Types Refresher 4min 21. Refreshing Array Functions 3min 22. Wrap Up 1min 23. Next-Gen JavaScript - Summary 5min 24. JS Array Functions 1min ' //,
    // Syllabi: [
    //   {
    //     syllabusId: 'idreactMax',
    //     syllabusTitle: 'ReactMax', //ReactMax
    //     content: 'Section 1: Getting Started 10 / 11|40min 1. Introduction 2min 2. What is React? 3min 3. Join our Online Learning Community 1min 4. Real-World SPAs & React Web Apps 2min 5. Writing our First React Code 15min 6. Why Should we Choose React? 2min 7. React Alternatives 1min 8. Understanding Single Page Applications and Multi Page Applications 4min 9. Course Outline 7min 10. How to get the Most out of This Course 2min 11. Useful Resources & Links 12. Module Introduction 2min 13. Understanding "let" and "const" 3min 14. Arrow Functions 5min 15. Exports and Imports 5min 16. Understanding Classes 5min 17. Classes, Properties and Methods 3min 18. The Spread & Rest Operator 7min 19. Destructuring 3min 20. Reference and Primitive Types Refresher 4min 21. Refreshing Array Functions 3min 22. Wrap Up 1min 23. Next-Gen JavaScript - Summary 5min 24. JS Array Functions 1min ',
    //     objSource: '', //objId
    //     field: '', //Programing
    //     concentration: '', //Front End
    //     subjectCat: '', //Library
    //     subject: '', //React
    //     workTasks: [
    //       {
    //         lessonId: '',
    //         taskTitle: '',
    //         unit: '',
    //         chapter: '',
    //         section: '',
    //         topics: '',
    //         requiredTime: ''
    //       }
    //     ]
    //   }
    //]
  };

  render() {
    let newParagraph = sampleSyllabus.splice('')
    let section = 'Section'
    let newSection = ''

    for (let c = 0; c < sampleSyllabus; c++){
      if (c === && ) {

      }

      }
    }

    return (

    )
    
  }

  // render() {
  //   return (
  //     <React.Fragment>
  //       <ViewContent />
  //     </React.Fragment>
  //   );
  // }
}

export default RightCockpit;


/*Trying syllabus text parser
let newParagraph = sampleSyllabus.split('');

console.log(newParagraph.length)

const section = 'Section';
const progress = '/';

let currentSection = 0;

let work = []
    
// let Syllabus =
// {
//   syllabus:
//   [
//   {
//     syllabusId: '',
//     syllabusTitle: '',
//     work: [
//     { lessonId: '', title: '', section: '', estTime: '', progress: '' }] }]

// };

const sectionFunc = (c) => {
let testSection = ''
    for (let t = 0; t<7; t++){
      let k = t + c
      testSection += newParagraph[k]
    }

    if (testSection === section){
       currentSection += 1

    } 
    return true
}

const lessonMaker = (c) => {
  //let title = 
  currentSection += 1
  //let section2 = currentSection.toString()
  //console.log(section2)
  // work.push({
  //    title: '', 
  //    section: (section2), 
  //    estTime: '', 
  //    progress: ''
  // })

}



//console.log(newParagraph.length)
for (let c = 0; c < newParagraph.length; c++) {
   //sectionCount =+ c

  if (newParagraph[c] === 'S') {
   // console.log(c);
    if (sectionFunc(c)) {
      lessonMaker(c)
    }

  }
}
console.log(currentSection.toString())





*/
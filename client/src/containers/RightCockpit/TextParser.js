import React, { Component } from 'react';
// import ViewContent from '../../components/ViewContent';
// import CreateContent from '../../components/Creation/CreateContent';

class SyllabusCreator extends Component {
  constructor(props) {
    super(props)
    this.syllabusId =  ''; 
    this.syllabusTitle = ''; 
    this.sections = {
      sectionId: '',
      sectionNumber: '', // if 'Section #:' The 8th digit after 'S' -> ':' 
      sectionTitle: '',  
    //   sectionCompletionDone: '',
    //   sectionCompletionTotal: '',
    //   sectionHour: '',
    //   sectionMin: '',
    };
    this.lessons= [
      {
        sectionId: '',
        // sectionNumber: '',
        lessonId: '', //after: -> 2 digits before '/'
        // sectionTitle: '', 
        lessonTitle: '',
        // lessonMin: '',
      }
    ]
  }

  state = {

    syllabi: [
          {
            syllabusId: '', //syllabusTitle
            syllabusTitle: '', //ReactMax
            Sections: 
              [{
                sectionId: '',
                sectionNumber: '', // if 'Section #:' The 8th digit after 'S' -> ':' 
                sectionTitle: '',  
                sectionCompletionDone: '',
                sectionCompletionTotal: '',
                sectionHour: '',
                sectionMin: '',
              }          
              ]
            }
          ],

    lessons: [
          {
            sectionId: '',
            sectionNumber: '',
            lessonId: '', //after: -> 2 digits before '/'
            sectionTitle: '', 
            lessonTitle: '',
            lessonMin: '',
          }
        ]
        }

  render() {
    let newParagraph = sampleSyllabus.splice('')
    let section = 'Section'
    let newSection = ''

    // for (let c = 0; c < sampleSyllabus; c++){
    //   if (c === && ) {

    //   }

    //   }
    // }

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
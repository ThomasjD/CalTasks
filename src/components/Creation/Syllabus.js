class Syllabus {
  constructor(a, b, c, d, e) {
    this.syllabusId = a;
    this.syllabusTitle = b;
    this.sections = {
      sectionId: '',
      sectionNumber: c,
      sectionTitle: d
    };
    this.lessons = [
      {
        lessonId: '',
        lessonTitle: e
      }
    ];
    this.idMaker = () => {
      let id = Math.floor(Math.random() * 10);
      return id;
    };
  }

  print() {
    return console.log(
      `${this.syllabusTitle} is section# ${this.sections.sectionNumber}`
    );
  }
}
export default Syllabus;

//   sections:
//       [
//           {
//             sectionId: '',
//             sectionNumber: '',
//             sectionTitle: '',
//           }
//       ],

// lessons:
//     [
//         {
//           sectionId: '',
//           // sectionNumber: '',
//           lessonId: '', //after: -> 2 digits before '/'
//           // sectionTitle: '',
//           lessonTitle: '',
//           // lessonMin: '',
//         }
//     ]

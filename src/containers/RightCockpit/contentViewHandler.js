const miniViewHandler = (newViewChoice) => {

  if (newViewChoice === this.state.contentChoice) {
    return this.setState({ contentChoice: '0' });
  } else {
    //Setting which Content view to show
    //there will be only 1 contentChoice stored in state
    switch (newViewChoice) {
      case '0': //only cockpit
        this.setState({ contentChoice: '0' });
        break;

      case '1': //All tasks
        this.setState({ contentChoice: '1' });
        if (this.state.tasks != 0) {
          this.setState({ lastHeader: this.state.tasks[0] });
        } else {
          this.setState({ lastHeader: this.state.lastHeader });
        }
        break;

      case '2': //TodaysTasks
        this.setState({ contentChoice: '2' });
        if (this.state.Monday != 0) {
          this.setState({ lastTodayTasksHeader: this.state.Monday[0] });
        } else {
          this.setState({
            lastTodayTasksHeader: this.state.lastTodayTasksHeader
          });
        }
        break;

      case '3': //Syllabus
        this.setState({ contentChoice: '3' });
        console.log(
          `this is lastLessonHeader ${this.state.lastLessonHeader}`
        );
        if (this.state.maxReact.length != 0) {
          this.setState({ lastLessonHeader: this.state.maxReact[0] });
        } else {
          this.setState({ lastLessonHeader: this.state.lastLessonHeader });
        }
        console.log(
          `this is lastLessonHeader ${this.state.lastLessonHeader}`
        );
        break;
      case '4': //New Task
        this.setState({ contentChoice: '4' });
        break;
    }
  }
};


}

export default miniViewHandler 
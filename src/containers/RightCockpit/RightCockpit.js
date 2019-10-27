import React, { Component } from 'react';
import classes from '../../components/Cockpit/Cockpit.module.css';
import Cockpit2 from '../../components/Cockpit/Cockpit2';

import Tasks from '../../components/Tasks/Tasks';
import TodayTasks from '../../components/TodayTasks/TodayTasks';
class RightCockpit extends Component {
  state = {
    tasks: [
      {
        id: 'qrwrwq',
        todo: 'Find work',
        deadline: 'Lunes',
        location: 'Poplado'
      },
      {
        id: 'egewhw',
        todo: 'buy shoes',
        deadline: 'Martes',
        location: 'Floresta'
      },
      {
        id: 'asfasv',
        todo: 'mail package',
        deadline: 'Jueves',
        location: 'Laureles'
      }
    ],
    contentChoice: '0',
    lastHeader: [],
    lastTodayTasksHeader: []
  };

  contentViewHandler = event => {
    let newViewChoice = event.target.value;
    console.log(newViewChoice);
    //Comparing new contentChoice with previous contentChoice
    //if newContentChoice === oldContentChoice
    //turn off the view
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
          this.setState({ contentChoice: '3', showSyllabus: true });

          break;
      }
    }
  };

  render() {
    let displayOptions = (
      <div>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className="btn btn-danger m-1 active">
            <button
              type="radio"
              name="options"
              id="option1"
              autoComplete="off"
              onClick={event => this.contentViewHandler(event)}
              value="0"
            />{' '}
            Cockpit
          </label>

          <label className="btn btn-primary m-1 active">
            <button
              type="radio"
              name="options"
              id="option1"
              autoComplete="off"
              onClick={event => this.contentViewHandler(event)}
              value="1"
            />{' '}
            All Tasks
          </label>

          <label className="btn btn-success m-1 active ">
            <button
              type="radio"
              name="options"
              id="option2"
              autoComplete="off"
              onClick={event => this.contentViewHandler(event)}
              value="2"
            />{' '}
            Todays Tasks
          </label>

          <label className="btn btn-warning m-1 ">
            <button
              type="radio"
              name="options"
              id="option3"
              autoComplete="off"
              onClick={event => this.contentViewHandler(event)}
              value="3"
            />{' '}
            React Syllabus
          </label>
        </div>
      </div>
    );

    let displayContent = null;

    switch (this.state.contentChoice) {
      case '0':
        displayContent = (
          <React.Fragment>
            <h3>Hello Thomas.... What would you like to see?</h3>
            <img
              className={classes.logoImage}
              src={require('../../Assets/cockpitIcon.png')}
            />
          </React.Fragment>
        );
        break;

      case '1':
        displayContent = (
          <React.Fragment>
            <p>tasks has # {this.state.tasks.length}</p>
                        
            <Tasks
              reRenderTasks={this.state.reRenderTasks}
              tasks={this.state.tasks}
              clicked={this.deleteTaskhandler}
              changed={this.taskChangeHandler}
              lastHeader={this.state.lastHeader}
            />
                      
          </React.Fragment>
        );
        break;

      case '2':
        displayContent = (
          <React.Fragment>
                        
            <TodayTasks
              reRenderTodayTasks={this.state.reRenderTodayTasks}
              lastTodayTasksHeader={this.state.lastTodayTasksHeader}
              clicked={this.deleteTodayTaskhandler}
              changed={this.todayTaskChangeHandler}
              monday={this.state.Monday}
            />
                      
          </React.Fragment>
        );
        break;

      case '3':
        displayContent = (
          <React.Fragment>
                        
            <Cockpit2
              showSyllabusFromNav={this.state.showSyllabusFromNav}
              showSyllabus={this.state.showSyllabus}
              tasks={this.state.tasks}
              lastHeader={this.state.lastHeader}
              deleteCockpit2={() => {
                this.setState({ showCockpit2: false });
              }}
            />
                      
          </React.Fragment>
        );
        break;
    }
    return (
      <React.Fragment>
        {displayOptions}
        {displayContent}
      </React.Fragment>
    );
  }
}
export default RightCockpit;

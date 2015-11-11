import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes';

export default class App extends React.Component {
  constructor(props) {
    // We're passing props to super by convention.
    // If you don't pass it, this.props won't get set!
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React!'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };

    // We additionally had to set up a binding for `this.addNote`.
    // Without it `this` of `addNote()` would point at the wrong context and wouldn't work.
    // It is a little annoying, but it is necessary to bind nonetheless.
    // Using `bind` at `constructor` gives us a small performance benefit as opposed to binding at `render()`.
    this.addNote = this.addNote.bind(this);
  }

  render() {
    const notes = this.state.notes;

    return (
      <div>
        <button className='add-note' onClick={this.addNote}>Add Note</button>
        <Notes items={notes} />
      </div>
    );
  }

  addNote() {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  }
}

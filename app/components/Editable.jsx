import React from 'react';

export default class Editable extends React.Component {
  constructor(props) {
    super(props);

    // Bind to correct context.
    this.finishEdit = this.finishEdit.bind(this);
    this.checkEnter = this.checkEnter.bind(this);
    this.edit = this.edit.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    // this.renderTask = this.renderTask.bind(this);
    this.renderValue = this.renderValue.bind(this);

    // Use the state to keep track of when we are editing.
    this.state = {
      editing: false
    };
  }

  render() {
    const {value, onEdit, ...props} = this.props;
    const editing = this.state.editing;

    return (
      <div {...props}>
        {editing ? this.renderEdit() : this.renderValue()}
      </div>
    );
  }

  renderEdit() {
    return <input type='text'
      autoFocus={true}
      defaultValue={this.props.value}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  }

  renderValue() {
    const onDelete = this.props.onDelete;

    return (
      <div onClick={this.edit}>
        <span className='value'>{this.props.value}</span>
        {onDelete ? this.renderDelete() : null}
      </div>
    );
  }

  renderDelete() {
    return <button className='delete' onClick={this.props.onDelete}>delete</button>;
  }

  edit() {
    this.setState({
      editing: true
    });
  }

  checkEnter(e) {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  finishEdit(e) {
    // See http://survivejs.com/webpack_react/implementing_notes/#adding-onedit-stub for a diagram of proposed solution.
    this.props.onEdit(e.target.value);

    this.setState({
      editing: false
    });
  }
};

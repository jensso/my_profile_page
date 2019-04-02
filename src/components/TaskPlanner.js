class TaskPlanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: [],
      inputVal: '',
      taskExists: false,
    };
  }
  handleInput(ev) {
    this.setState({inputVal: ev.target.value,
                  inputEmpty: false,});
}
  handleSubmit(ev) {
    ev.preventDefault();
    this.state.taskExists = this.state.newTask.includes(this.state.inputVal);
    if (!this.state.taskExists && this.state.inputVal !== '') {
      this.state.newTask.push(this.state.inputVal);
    };
    if (this.state.inputVal === '') {
      this.setState({inputEmpty: true,})
    }
    else {
      this.setState({inputVal:'',
                      inputEmpty: false,});
    }
  }

  render() {
      return (
      <React.Fragment>
      <div className="container"><h2 className="lead mx-2 p-2">Have your ToDo's scheduled</h2></div>
      <div id="jso_taskPlanner" className="jumbotron m-1 p-2">

        <form className="form-group bg-dark" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="write something you want to achieve"
          className="form-control-lg" onChange={this.handleInput.bind(this)} value={this.state.inputVal}></input>
          <button type="submit">create a new task</button>
        </form>
        {this.state.inputEmpty && <p className="lead m-1 p-2 bg-warning text-danger text-center">Please type something!</p>}
        {this.state.taskExists && <p className="lead m-1 p-2 bg-warning text-danger text-center">This Task was already planned!</p>}
        <JSo_taskInput inputVal={this.state.inputVal} newTask={this.state.newTask} taskExists={this.state.taskExists}/>

      </div>
      </React.Fragment>
    )
  }
}
class TaskInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textDeco: '',
      btnText: 'set task done',
    };
  }
  handleSetDone(ev) {

    this.state.textDeco === '' ?
    this.setState({
      textDeco: ev.target.parentNode.style.textDecoration='line-through',
      btnText: ev.target.innerText='revive this task',
    })
    :
    this.setState({
      textDeco: ev.target.parentNode.style.textDecoration='',
      btnText: ev.target.innerText='set task done',
    });
}
  handleRemove(ev) {
    this.setState({});
    // delete this.props.newTask[ev.target.parentNode];
    // ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);
    this.props.newTask.splice(ev.target.parentNode, 1);
    // console.log(this.props.newTask);
}
  render() {
    return (
    <TransitionGroup>
    {!this.props.taskExists && this.props.newTask.map((task,index)=> <CSSTransition timeout={1800} classNames="fade" key={index}><p className="lead mx-2 p-3 bg-dark text-light">
    {index+1}. {task}
      <button onClick={this.handleRemove.bind(this)} className="btn btn-danger mx-1 float-right border-light">remove task</button>
      <button onClick={this.handleSetDone.bind(this)} className="btn btn-warning mx-1 text-light float-right border-light">set task done</button>
    </p></CSSTransition>)}
    </TransitionGroup>
    )
  }
}

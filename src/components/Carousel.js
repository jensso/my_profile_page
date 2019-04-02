const beautifulViews = ['aero','colorado','spring',
              'canyon','sifnos','traumstrand','alps'
              ];
export class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0,
                    showViews: beautifulViews,
                  }; //this.state ends
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
  } // constructor ends
  handleLeft(ev) {
    this.setState({counter: this.state.counter-1});
    if (this.state.counter === 0) {
      this.setState({counter: this.state.showViews.length-1,
      });
      }
  }
  handleRight(ev) {
    this.setState({counter: this.state.counter+1});
    if (this.state.showViews.length-1 === this.state.counter) {
      this.setState({counter: 0});
      }
  }
  render() {
    return(
      <React.Fragment>
      <div className="container">
        <h2 className="lead mx-2 p-2">Some beautiful Views</h2>
      </div>
      <div id="jso_carousel"className="jumbotron m-1">
        <section id="myCarousel" className="d-flex justify-content-center">
          <span onClick={this.handleLeft}>-</span>
            <img src={`./images/${this.state.showViews[this.state.counter]}.jpg`} width="75%" height="250rem" alt="nothing to see here"/>
          <span onClick={this.handleRight}>+</span>
        </section>
      </div>
      </React.Fragment>
    )
  } // render ends
}

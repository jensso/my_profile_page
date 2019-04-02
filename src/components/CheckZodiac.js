const zodiacSigns = [ Aries = [ start = new Date(1999,2,21), end = new Date(1999,3,19),'ARIES'],
             Taurus = [start = new Date(1999,3,20), end = new Date(1999,4,20),'TAURUS'],
             Gemini = [start = new Date(1999,4,21), end = new Date(1999,5,20),'GEMINI'],
             Cancer = [start = new Date(1999,5,21), end = new Date(1999,6,22),'CANCER'],
             Leo = [start = new Date (1999,6,23), end = new Date(1999,7,22),'LEO'],
             Virgo = [start = new Date (1999,7,23), end = new Date(1999,8,22),'VIRGO'],
             Libra = [start = new Date(1999,8,23), end = new Date(1999,9,22),'LIBRA'],
             Scorpio = [start = new Date(1999,9,23), end = new Date(1999,10,21),'SCORPIO'],
             Sagittarius = [start = new Date(1999,10,22), end = new Date(1999,11,21),'SAGITTARIUS'],
             Capricorn = [start = new Date(1999-1,11,22), end = new Date(1999,0,19),'CAPRICORN'],
             // due to the change of the year the code needs to be adjusted
             Aquarius = [start = new Date(1999,0,20), end = new Date(1999,1,18),'AQUARIUS'],
             Pisces = [start = new Date(1999,1,19), end = new Date(1999,2,20),'PISCES']
           ];

class CheckZodiac extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      arrayOfZodiacs: zodiacSigns,
    }; //this.state ends
  } // constructor ends
    handleDateInput(ev) {
      ev.stopPropagation();
      this.setState({inputDate: ev.target.value,
      });
      console.log(ev.target.value);
    }
    handleDateSubmit(ev) {
      ev.preventDefault();
      const dateOfBirth = new Date(this.state.inputDate);

      this.setState({inputDate: dateOfBirth});
      console.log(dateOfBirth);
    }

    // whichZodiacAmI(dateOfBirth) {
    //   const year = 1999;
    // console.log(dateOfBirth);
    //   for (let i = 0; i < this.state.zodiacSigns.length; i++) {
    //       if (this.state.zodiacSigns[i][0] <= dateOfBirth && this.state.zodiacSigns[i][1] >= dateOfBirth) {
    //         return this.state.zodiacSigns[i][2];
    //     }
    //   }
    // }


  render() {
    return(
      <React.Fragment>
      <div className="container">
        <h2 className="lead mx-2 p-2">Check your Zodiac sign</h2>
      </div>

      <div id="jso_checkZodiac" className="jumbotron m-1 p-2 d-flex">
        <div className="myWrapper">
        <img src="./images/lights.jpg" alt="nothing to see here" />
        </div>
        <div className="myWrapper">
        <p className="small mx-2 p-2 bg-dark text-light">Enter your date of birth to check your Zodiac
        </p>
        <input type="date" onChange={this.handleDateInput.bind(this)} value={this.state.inputDate} className="form-control"/>
        {/*this.state.arrayOfZodiacs.map((zodiac, index)=>
          <p className="small mx-2 p-2 bg-dark text-light" key={index}>Your Zodiac sign is this.state.arrayOfZodiacs[index][2]</p>)*/}
        </div>
      </div>
      </React.Fragment>
    )
  } // render ends
}

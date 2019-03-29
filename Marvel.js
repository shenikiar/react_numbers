import React, { Component } from "react";


class Marvel extends Component {
  constructor() {
    super ()
    this.state = {
      birthday: [],
      search: "",
      dateOfBirth: null
    }
  }

    async componentDidMount(){
        fetch("http://numbersapi.com/random/date ")
        .then(response => response.json())
            .then(data => {
    console.log(data)
    this.setState({dogurl: data.url})
            }

       render(){
        return(
          
        <>
        <div>
        <h2>Does It All Add Up?</h2>
        <p>If this works correctly, hopely you are seeing an explanation for the numbers that make up your date of birth.</p>
        {/* number facts */}

        
        <span id="number-fact"></span>


        <div className="form-check">
          <input className="form-check-input" type="radio" name="opinion" id="opinion1" value="option1" checked/>
          <label className="form-check-label" htmlFor="opinion1">
            This just blew my mind!!!
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="opinion" id="opinion2" value="option2"/>
          <label className="form-check-label" htmlFor="opinion2">
            Great information!
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="opinion" id="opinion3" value="option3" disabled/>
          <label className="form-check-label" htmlFor="opinion3">
            I would do this again.
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="opinion" id="opinion4" value="option4" disabled/>
          <label className="form-check-label" htmlFor="opinion4">
            Not impressed at all.
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="opinion" id="opinion5" value="option5" disabled/>
          <label className="form-check-label" htmlFor="opinion5">
            This just stole precious moments from my life.
          </label>
        </div>
      </div>
   </>
    );
  }
}
}

export default Marvel;


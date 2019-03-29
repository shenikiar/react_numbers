import React, { Component } from "react";

//random dog pics, for Home Page
//const img = randomPic();



class Home extends Component {
    constructor() {
        super();
        this.state = {
            dogurl: null,
            firstName: '',
            dateOfBirth: '',
            sign: ''
        }
    }
    
    updateFirstName(event) {
        console.log(event)
        this.setState({firstName: event.target.value}, () => console.log(this.state))
    }
    
    updateDateOfBirth(event) {
        console.log(event)
        this.setState({dateOfBirth: event.target.value}, () => console.log(this.state))
    }
    
    updateSign(event) {
        console.log(event)
        this.setState({sign: event.target.value}, () => console.log(this.state))
    }
    
    this.handleClick = this.handleClick.bind(this);
    
    handleClick() {
        this.setState(state => ({
            firstName: !state.firstName,
            dateOfBirth: !state.dateOfBirth,
            sign: !state.sign
        })
                     )
        const comic ='https://gateway.marvel.com:443/v1/public/events?modifiedSince=02151985&apikey=722a6e83697311402287253d0951d50b';
        fetch(comic).then(response=>response.json())
        .then(json=>{this.setState({json: json.data.results}, () => console.log(this.state));
        });
    }
    
    componentDidMount(){
        fetch("https://random.dog/woof.json?filter=mp4,webm")
        .then(response => response.json())
            .then(data => {
    console.log(data)
    this.setState({dogurl: data.url})
})
.catch(error => console.error(error))

    }
  render() {
    return (
        <button onClick={this.handleClick}>
        {this.state.firstName,
        this.state.dateOfBirth,
        this.state.sign
        </button>
        }
          
      <div>
        <img src={this.state.dogurl} />
        <h2>Just For Fun!!!</h2>
        <p>What does your birthday and Marvel have in common?  Possibly absolutely nothing. But Ive come up with a fun way to find out.  And I am curious just enough to want to find out.</p>

        <p>So let us try your date of birth and see if what is revealed is interesting.</p>
        
        {/*enter name and birthday*/}
        
          <div className="form-group">
            <label htmlFor="name">First name</label>
            <input type="text" className="form-control" value={this.state.firstName} onChange={(event) => this.updateFirstName(event)} id="name" placeholder="name"/>

            <label htmlFor="birthday">Date of Birth</label>
            <input type="date" className="form-control" value={this.state.dateOfBirth} onChange={(event) => this.updateDateOfBirth(event)} id="birthday" placeholder="Birthday"/>
        
            <label htmlFor="sign">Sign</label>
            <input type="sign" className="form-control" value={this.state.sign} onChange={(event) => this.updateSign(event)} id="sign" placeholder="sign"/>
            
            {/*button that accepts name and birthday to call API*/}
            <button type="button" onClick={() => this.handleClick()} className="btn btn-dark" aria-haspopup="true" aria-expanded="false">
                Here we Go!
            </button>
          </div>
{/*</form>*/}
      </div>
    );
  }
}

export default Home;


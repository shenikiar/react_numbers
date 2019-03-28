import React, { Component } from "react";

//random dog pics, for Home Page
//const img = randomPic();



class Home extends Component {
    state = {dogurl:null}
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
        
          
      <div>
        <img src={this.state.dogurl}/>
        <h2>Just For Fun!!!</h2>
        <p>What does your birthday and Marvel have in common?  Possibly absolutely nothing. But Ive come up with a fun way to find out.  And I am curious just enough to want to find out.</p>

        <p>So let us try your date of birth and see if what is revealed is interesting.</p>
        
        {/*enter name and birthday*/}
        <form className="dropdown-menu p-4" 
        form action="https://gateway.marvel.com:443/v1/public/events?modifiedSince=09151979&apikey=722a6e83697311402287253d0951d50b"
        method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">First name</label>
            <input type="text" className="form-control" id="name" placeholder="name"/>

            <label htmlFor="birthday">Date of Birth</label>
            <input type="date" className="form-control" id="birthday" placeholder="Birthday"/>
        
            <label htmlFor="sign">Sign</label>
            <input type="sign" className="form-control" id="sign" placeholder="sign"/>
            
            {/*button that accepts name and birthday to call API*/}
            <button type="button" className="btn btn-dark" aria-haspopup="true" aria-expanded="false">
        
        
        
    
        Here we Go!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Home;


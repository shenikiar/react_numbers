import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Whats Your Birthday Mean?</h2>
        <p>Ever wonder if there is really any relevance to numbers and if so,
        could the say you were born have some meaning?  I won't pretend to be
        a scholar of numerology, astrology, or history but I will admit to being
        curious about a lot and just enough to want to find out.</p>

        <p>So let's try your date of birth and see if what is revealed is interesting.</p>

        <form class="dropdown-menu p-4">
          <div class="form-group">
            <label for="name">First name</label>
            <input type="name" class="form-control" id="name" placeholder="name"/>

            <label for="birthday">Date of Birth</label>
            <input type="birthday" class="form-control" id="birthday" placeholder="Birthday"/>


            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Here we Go!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Home;

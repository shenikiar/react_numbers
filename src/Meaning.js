import React, { Component } from "react";

class Meaning extends Component {
  render() {
    return (
      <div>
        <h2>Does It All Add Up?</h2>
        <p>If this works correctly, hopely you are seeing an explanation for the numbers that make up your date of birth.</p>
        {/* number facts */}
        <span id="number-fact"></span>

        <div class="form-check">
          <input class="form-check-input" type="radio" name="opinion" id="opinion1" value="option1" checked/>
          <label class="form-check-label" for="opinion1">
            This just blew my mind!!!
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="radio" name="opinion" id="opinion2" value="option2"/>
          <label class="form-check-label" for="opinion2">
            Great information!
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="radio" name="opinion" id="opinion3" value="option3" disabled/>
          <label class="form-check-label" for="opinion3">
            I would do this again.
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="radio" name="opinion" id="opinion4" value="option4" disabled/>
          <label class="form-check-label" for="opinion4">
            Not impressed at all.
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="radio" name="opinion" id="opinion5" value="option5" disabled/>
          <label class="form-check-label" for="opinion5">
            This just stole precious moments from my life.
          </label>
        </div>
      </div>
    );
  }
}

export default Meaning;

import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class pagBase extends Component {
  render(){
    return(
      <div className="jumbotron col-md-10 m-2">
      <form>
          <div className="form-group">
            <label className="col-form-label">Title Post</label>
            <input type="text" className="form-control" id="titlePost" placeholder="Post Title"/>
          </div>
          <div className="form-group">
            <label className="col-form-label">Category</label>
            <select className="form-control" id="catPost">
              <option>React</option>
              <option>Redux</option>
              <option>Udacity</option>

            </select>
          </div>
            <div className="form-group">
              <label className="col-form-label">Message Post:</label>
            <textarea className="form-control" id="msgPost" rows="3" placeholder="Message Post"></textarea>
            </div>
          <button className="btn btn-primary m-1" type="submit" value="submit">Submit Post</button>
          <Link to="/"><button className="btn btn-dark m-1" type="reset" value="Reset">Cancel</button></Link>
        </form>
      </div>
    )
  }
}
export default pagBase

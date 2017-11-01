import React, {Component} from "react"

 class PostDetail extends Component{
  render(){
    return(
      <div className="jumbotron col-md-5 m-2">

          <div className="form-group">
            <label className="col-form-label">Title Post</label>
            <input type="text" className="form-control" id="titlePost" placeholder="Post Title"/>
          </div>
          <div className="form-group">
            <label className="col-form-label">Category</label>

          </div>
            <div className="form-group">
              <label className="col-form-label">Message Post:</label>

            </div>
        </div>
    )
  }
}export default PostDetail

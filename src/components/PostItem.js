import React, {Component} from 'react'

class PostItem extends Component {
  render (){
    return(
      <div className="card border-success mb-3">
        <div className="card-header">
          Post Name
        </div>
          <div className="card-body">
            <div className="row">

             <div className="col-sm-3 text-center">
                <span className=" fa fa-chevron-circle-up fa-2x "></span><br></br>
                <span>##</span><br></br>
                <span className=" fa fa-chevron-circle-down fa-2x"></span>
              </div>
              <div className="col-sm-9">
                <p className="card-text">
                  Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                </p>
                    <a href="#" className="ml-1 btn btn-dark"> read More</a>
              </div>
            </div>
        </div>
          <div className="card-footer text-right text-muted">
            2 Days Ago

              <a href="#" className="ml-1 btn btn-outline-warning fa fa-pencil "> </a>
                <a href="#" className="ml-1 btn btn-outline-danger fa fa-trash"> </a>
          </div>

      </div>
    )
  }
}
export default PostItem

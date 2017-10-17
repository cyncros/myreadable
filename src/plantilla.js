import React, {Component} from 'react'

class Plantilla extends Component{
  render (){
    return (
      <div>

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-5">
        <div className="container">
          <a href="index.html" className="navbar-brand"><span className="fa fa-cube  fa-3x"></span></a>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item px-2">
                <a href="index.html" className="nav-link">Dashboard</a>
              </li>
              <li className="nav-item px-2">
                  <a href="people.html" className="nav-link">
                    <i className="fa fa-male"></i> React
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a href="plant.html" className="nav-link">
                    <i className="fa fa-leaf"></i> Redux
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a href="plant.html" className="nav-link">
                    <i className="fa fa-leaf"></i> Udacity
                  </a>

              </li>

            </ul>
          </div>
        </div>
      </nav>
<div className="jumbotron">
  <section id="posts">
    <div className="container">
      <div className="row">
        <div className="col-md-9">



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





          </div>
        <div className="col-md-3">
          <div className="card text-center bg-primary text-white mb-3">
            <div className="card-body">
              <h3>Posts</h3>
              <h1 className="display-4">
                <i className="fa fa-pencil"></i> 3
              </h1>
              <a href="posts.html" className="btn btn-outline-dark btn-sm m-1">View</a>
              <a href="posts.html" className="btn btn-outline-dark btn-sm m-1">+Add</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</div>


      <footer id="main-footer" className="bg-dark fixed-bottom text-white mt-3 p-3">
        <div className="conatiner">
          <div className="row">
            <div className="col">
              <p className="lead text-center">Copyright &copy; 2017 <span className="fa fa-cube"></span></p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    )

  }
}
export default Plantilla;

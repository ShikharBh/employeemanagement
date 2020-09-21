import React, { Component } from "react";
import "./Home.css";
import Img1 from "../../assets/images/img20.jpg";
import { Link } from "react-router-dom";
import Img2 from "../../assets/images/img21.jpg";
import { Helmet } from "react-helmet";

const axios = require("axios");

var filterPastFlag = false;
var filterUpcommingFlag = true;
var filterAllevents = false;

class Home extends Component {
 
  state = {
    ProductData: [],
    pageNumber: 1,
    events: [],
    AllEventsData: [],
    isChecked: false,
    isChecked1: false,
    isChecked2: false,
    shown: true,
    totalPages: 0,
    currentPage: 0,
    totalEvents : 0
  };

  componentWillMount() {
    this.getFutureEventDetails();
    filterUpcommingFlag = true;
    filterAllevents=false;
    filterPastFlag=false; 
  }

  getEventDetails = () => {
    axios
      .get(
        `http://localhost:4509/api/events/pagination?pagenumber=${
          this.state.pageNumber
        }`,
        {
          "Content-type": "application/json"
        }
      )
      .then(response => {
        this.setState({
          totalPages: response.data.totalPages,
          ProductData: response.data.events,
          events: response.data.events,
          currentPage : response.data.currentPage,
          totalEvents : response.data.totalEvents
          
        });
      });
  };
  getFutureEventDetails = () => {
    axios
      .get(
        `http://localhost:4509/api/events/futureevents?pagenumber=${
          this.state.pageNumber
        }`,
        {
          "Content-type": "application/json"
        }
      )
      .then(response => {
        this.setState({
          totalPages: response.data.totalPages,
          ProductData: response.data.events,
          events: response.data.events,
          currentPage : response.data.currentPage,
          totalEvents : response.data.totalEvents

          
        });
      });
  };

  getPastEventDetails = async () => {
    axios
      .get(
        `http://localhost:4509/api/events/pastevents?pagenumber=${
          this.state.pageNumber
        }`,
        {
          "Content-type": "application/json"
        }
      )
      .then(response => {
        this.setState({
          totalPages: response.data.totalPages,
          ProductData: response.data.events,
          events: response.data.events,
          currentPage : response.data.currentPage,
          totalEvents : response.data.totalEvents

        
        });
      });
  };

  AllEventDetails = async () => {
    filterUpcommingFlag = false;
    filterPastFlag = false;
    filterAllevents = true;
    await this.setPageNumber();
    this.getEventDetails();
  };

  pastEventDetails = async () => {
    filterPastFlag = true;
    filterUpcommingFlag = false;
    filterAllevents = false;
    await this.setPageNumber();
    this.getPastEventDetails();
  };

  setPageNumber = async () => {
    await this.setState({
      pageNumber: 1
    });
  };

  increment = async () => {
  
    if (
      this.state.pageNumber >= 1 &&
      this.state.totalPages > this.state.pageNumber
    ) {
      await this.setState({
        pageNumber: this.state.pageNumber + 1
      });
    }
    if (filterAllevents) {
      this.getEventDetails();
    } else if (filterPastFlag) {
      this.getPastEventDetails();
    } else {
      this.getFutureEventDetails();
    }
  };

  getBackToHome = async () => {
    filterAllevents = false;
    filterPastFlag = false;
    filterUpcommingFlag = true;
    await this.setState({
      pageNumber: 1
    });
    this.getFutureEventDetails();
  };

  decrement = async () => {
  
    if (this.state.pageNumber > 1) {
      await this.setState({
        pageNumber: this.state.pageNumber - 1
      });
    }
    if (filterAllevents) {
      this.getEventDetails();
    } else if (filterPastFlag) {
      this.getPastEventDetails();
    } else {
      this.getFutureEventDetails();
    }
  };

  postDataElements = events => {
    return events.map((postdetails, index) => {
      var startDateOnly = postdetails.startDate.slice(0, 10);
      var startTimeOnly = postdetails.startDate.slice(11, 16);
      
      return (
        <div className="card col-md-3" key={index}>
          <img
            src={postdetails.image}
            className="card-img-top image-col"
            alt="Event"
          />
          <div className="card-body">
            <h5 className="card-title">{postdetails.name}</h5>
            <p className="card-text">{postdetails.venue}</p>
            <p className="card-date">{startDateOnly} at {startTimeOnly}</p>
            </div>
            <div className="button">
            <Link
              to={`/eventdetails/${postdetails.id}`}
              className="btn btn-primary more-details-attributes details-button"
            >
            Details
            </Link>
            </div>
          
        </div>
      );
    });
  };

  render() {
    const styleforpast = !filterPastFlag
      ? {}
      : {
          "backgroundColor": "darkblue"
        };
    const styleforupcomming = !filterUpcommingFlag
      ? {}
      : {
          "backgroundColor": "darkblue"
        };
    const styleforallevents = !filterAllevents
      ? {}
      : {
          "backgroundColor": "darkblue"
        };

    const style =
      this.state.pageNumber !== 1 
        ? {}
        : {
            "pointerEvents": "none",
            "backgroundColor": "lightgray"
          };
    const style1 =
      this.state.pageNumber === this.state.totalPages
        ? {
            "pointerEvents": "none",
            "backgroundColor": "lightgray"
          }
        : {};
  
    return (
    
      <React.Fragment>
        <Helmet>
          <title>NeuEvents</title>
        </Helmet>
        <div className="background-color">
          <div className="container-fluid">
            <div className="">
              <div className="col-md-12">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={Img1}
                        className="d-block w-100 home-image-slide"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={Img2}
                        className="d-block w-100 home-image-slide"
                        alt="..."
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4" />
              <div className="btn-group col-md-4">
                <button
                  type="button"
                  onClick={this.pastEventDetails}
                  className="btn btn-primary button-attributes filter-button"
                  style={styleforpast}
                >
                  Past
                </button>
                <button
                  type="button"
                  onClick={this.getBackToHome}
                  className="btn btn-primary button-attributes filter-button"
                  style={styleforupcomming}
                >
                  Upcoming
                </button>
                <button
                  type="button"
                  onClick={this.AllEventDetails}
                  className="btn btn-primary button-attributes filter-button"
                  style={styleforallevents}
                >
                  All
                </button>
                <label className="label">{'Events:'+ this.state.totalEvents}</label>
              </div>
              <div className="col-md-4" />
            </div>
          </div>
          <div className="col-md-12 card-container-col">
            <div className="container">
              <div className="row">
                {this.postDataElements(this.state.events)}
              </div>
            </div>
          </div>
          <div className="container ">
            <nav aria-label="Page navigation example" className="paging">
              <ul className="pagination pagination pagination-circle pg-blue justify-content-center">
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={this.decrement}
                    aria-label="Previous"
                    style={style}
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </button>
                </li>   
                <li className="page-item">
                  <button
                    className="page-link"                    
                    aria-label="currentPage"  
                        disabled              
                  >
                    <span aria-hidden="true">{this.state.currentPage}/{this.state.totalPages}</span>
                  </button>
                </li>
         
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={this.increment}
                    aria-label="Next"
                    style={style1}                    
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </button>
                </li>
                
              </ul>
            </nav>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
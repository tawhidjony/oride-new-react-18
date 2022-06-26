import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="social-dash-wrap">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-main">
              <h4 className="text-capitalize breadcrumb-title">
                Social Media Dashboard
              </h4>
              <div className="breadcrumb-action justify-content-center flex-wrap">
                <div className="action-btn">
                  <div className="form-group mb-0">
                    <div className="input-container icon-left position-relative">
                      <span className="input-icon icon-left">
                        <span data-feather="calendar" />
                      </span>
                      <input
                        type="text"
                        className="form-control form-control-default date-ranger"
                        name="date-ranger"
                        placeholder="Oct 30, 2019 - Nov 30, 2019"
                      />
                      <span className="input-icon icon-right">
                        <span data-feather="chevron-down" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="dropdown action-btn">
                  <button
                    className="btn btn-sm btn-default btn-white dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="la la-download" /> Export
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenu2"
                  >
                    <span className="dropdown-item">Export With</span>
                    <div className="dropdown-divider" />
                    <a href className="dropdown-item">
                      <i className="la la-print" /> Printer
                    </a>
                    <a href className="dropdown-item">
                      <i className="la la-file-pdf" /> PDF
                    </a>
                    <a href className="dropdown-item">
                      <i className="la la-file-text" /> Google Sheets
                    </a>
                    <a href className="dropdown-item">
                      <i className="la la-file-excel" /> Excel (XLSX)
                    </a>
                    <a href className="dropdown-item">
                      <i className="la la-file-csv" /> CSV
                    </a>
                  </div>
                </div>
                <div className="dropdown action-btn">
                  <button
                    className="btn btn-sm btn-default btn-white dropdown-toggle"
                    type="button"
                    id="dropdownMenu3"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="la la-share" /> Share
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenu3"
                  >
                    <span className="dropdown-item">Share Link</span>
                    <div className="dropdown-divider" />
                    <a href className="dropdown-item">
                      <i className="la la-facebook" /> Facebook
                    </a>
                    <a href className="dropdown-item">
                      <i className="la la-twitter" /> Twitter
                    </a>
                    <a href className="dropdown-item">
                      <i className="la la-google" /> Google
                    </a>
                    <a href className="dropdown-item">
                      <i className="la la-feed" /> Feed
                    </a>
                    <a href className="dropdown-item">
                      <i className="la la-instagram" /> Instagram
                    </a>
                  </div>
                </div>
                <div className="action-btn">
                  <a href className="btn btn-sm btn-primary btn-add">
                    <i className="la la-plus" /> Add New
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-25">
            <div className="social-overview-wrap">
              <div className="card border-0">
                <div className="card-header">
                  <h6>Social Media Overview</h6>
                </div>
                <div className="card-body">
                  <ul className="social-overview">
                    <li>
                      <div className="social-box bg-facebook">
                        <span className="la la-facebook" />
                      </div>
                      <h3>5,461</h3>
                      <p>Likes</p>
                    </li>
                    <li>
                      <div className="social-box bg-twitter">
                        <span className="la la-twitter" />
                      </div>
                      <h3>5,461</h3>
                      <p>Followers</p>
                    </li>
                    <li>
                      <div className="social-box gradientInstragram">
                        <span className="la la-instagram" />
                      </div>
                      <h3>5,461</h3>
                      <p>Followers</p>
                    </li>
                    <li>
                      <div className="social-box bg-youtube">
                        <span className="la la-youtube" />
                      </div>
                      <h3>5,461</h3>
                      <p>Subscribers</p>
                    </li>
                    <li>
                      <div className="social-box bg-pinterest">
                        <span className="la la-pinterest" />
                      </div>
                      <h3>5,461</h3>
                      <p>Followers</p>
                    </li>
                    <li>
                      <div className="social-box bg-linkedin">
                        <span className="la la-linkedin" />
                      </div>
                      <h3>5,461</h3>
                      <p>Followers</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mb-25">
            <div className="card card-overview border-0">
              <div className="card-header">
                <h6>Facebook Overview</h6>
                <div className="card-extra">
                  <div className="card-tab btn-group nav nav-tabs">
                    <a
                      className="btn btn-xs btn-white active border-light"
                      id="f_today-tab"
                      data-toggle="tab"
                      href="#f_overview-today"
                      role="tab"
                      area-controls="f_overview"
                      aria-selected="true"
                    >
                      Today
                    </a>
                    <a
                      className="btn btn-xs btn-white border-light"
                      id="f_week-tab"
                      data-toggle="tab"
                      href="#f_overview-week"
                      role="tab"
                      area-controls="f_overview"
                      aria-selected="false"
                    >
                      Week
                    </a>
                    <a
                      className="btn btn-xs btn-white border-light"
                      id="f_month-tab"
                      data-toggle="tab"
                      href="#f_overview-month"
                      role="tab"
                      area-controls="f_overview"
                      aria-selected="false"
                    >
                      Month
                    </a>
                    <a
                      className="btn btn-xs btn-white border-light"
                      id="f_year-tab"
                      data-toggle="tab"
                      href="#f_overview-year"
                      role="tab"
                      area-controls="f_overview"
                      aria-selected="false"
                    >
                      Year
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body pt-0 pb-0">
                <div className="tab-content">
                  <div
                    className="tab-pane fade active show"
                    id="f_overview-today"
                    role
                    aria-labelledby="f_overview-tab"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="card-overview__left">
                          <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-6">
                              <div className="overview-single">
                                <div className="overview-content">
                                  <h1>25,845</h1>
                                  <p>Engaged Users</p>
                                  <div>
                                    <span className="color-success">
                                      <i data-feather="trending-up" />
                                      <strong>25%</strong>
                                    </span>
                                    <small>20,641 (prev)</small>
                                  </div>
                                </div>
                                <div className="overview-single__chart">
                                  <div className="parentContainer">
                                    <div>
                                      <canvas id="lineChartOne" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-6 br-1">
                              <div className="overview-single">
                                <div className="overview-content">
                                  <h1>2,534</h1>
                                  <p>Page Impressions</p>
                                  <div>
                                    <span className="color-success">
                                      <i data-feather="trending-up" />
                                      <strong>40%</strong>
                                    </span>
                                    <small>20,641 (prev)</small>
                                  </div>
                                </div>
                                <div className="overview-single__chart">
                                  <div className="parentContainer">
                                    <div>
                                      <canvas id="lineChartTwo" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="card-overview__right">
                          <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-6">
                              <div className="overview-single">
                                <div className="overview-content">
                                  <h1>2,142</h1>
                                  <p>Total Page Likes</p>
                                  <div>
                                    <span className="color-danger">
                                      <i data-feather="trending-down" />
                                      <strong>15%</strong>
                                    </span>
                                    <small>20,641 (prev)</small>
                                  </div>
                                </div>
                                <div className="overview-single__chart">
                                  <div className="parentContainer">
                                    <div>
                                      <canvas id="lineChartThree" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-6 co-last">
                              <div className="overview-single">
                                <div className="overview-content">
                                  <h1>1,132</h1>
                                  <p>New Page LIke</p>
                                  <div>
                                    <span className="color-success">
                                      <i data-feather="trending-up" />
                                      <strong>13%</strong>
                                    </span>
                                    <small>20,641 (prev)</small>
                                  </div>
                                </div>
                                <div className="overview-single__chart">
                                  <div className="parentContainer">
                                    <div>
                                      <canvas id="lineChartFour" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="f_overview-week"
                    role
                    aria-labelledby="f_overview-tab"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="card-overview__left">
                          <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-6">
                              <div className="overview-single">
                                <div className="overview-content">
                                  <h1>25,845</h1>
                                  <p>Engaged Users</p>
                                  <div>
                                    <span className="color-success">
                                      <i data-feather="trending-up" />
                                      <strong>25%</strong>
                                    </span>
                                    <small>20,641 (prev)</small>
                                  </div>
                                </div>
                                <div className="overview-single__chart">
                                  <div className="parentContainer">
                                    <div>
                                      <canvas id="lineChartFive" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-6 br-1">
                              <div className="overview-single">
                                <div className="overview-content">
                                  <h1>92,534</h1>
                                  <p>Page Impressions</p>
                                  <div>
                                    <span className="color-success">
                                      <i data-feather="trending-up" />
                                      <strong>26%</strong>
                                    </span>
                                    <small>20,641 (prev)</small>
                                  </div>
                                </div>
                                <div className="overview-single__chart">
                                  <div className="parentContainer">
                                    <div>
                                      <canvas id="lineChartSix" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="card-overview__right">
                          <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-6">
                              <div className="overview-single">
                                <div className="overview-content">
                                  <h1>9,142</h1>
                                  <p>Total Page Likes</p>
                                  <div>
                                    <span className="color-danger">
                                      <i data-feather="trending-down" />
                                      <strong>23%</strong>
                                    </span>
                                    <small>20,641 (prev)</small>
                                  </div>
                                </div>
                                <div className="overview-single__chart">
                                  <div className="parentContainer">
                                    <div>
                                      <canvas id="lineChartSeven" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-6 co-last">
                              <div className="overview-single">
                                <div className="overview-content">
                                  <h1>432</h1>
                                  <p>New Page LIke</p>
                                  <div>
                                    <span className="color-success">
                                      <i data-feather="trending-up" />
                                      <strong>44%</strong>
                                    </span>
                                    <small>20,641 (prev)</small>
                                  </div>
                                </div>
                                <div className="overview-single__chart">
                                  <div className="parentContainer">
                                    <div>
                                      <canvas id="lineChartEight" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="f_overview-month"
                    role
                    aria-labelledby="f_overview-tab"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="card-overview__left">
                          <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-6">
                              <div className="overview-single">
                                <div className="overview-content">
                                  <h1>25,845</h1>
                                  <p>Engaged Users</p>
                                  <div>
                                    <span className="color-success">
                                      <i data-feather="trending-up" />
                                      <strong>25%</strong>
                                    </span>
                                    <small>20,641 (prev)</small>
                                  </div>
                                </div>
                                <div className="overview-single__chart">
                                  <div className="parentContainer">
                                    <div>
                                      <canvas id="lineChartNine" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-6 br-1">
                              <div className="overview-single">
                                <div className="overview-content">
                                  <h1>492,534</h1>
                                  <p>Page Impressions</p>
                                  <div>
                                    <span className="color-success">
                                      <i data-feather="trending-up" />
                                      <strong>36%</strong>
                                    </span>
                                    <small>20,641 (prev)</small>
                                  </div>
                                </div>
                                <div className="overview-single__chart">
                                  <div className="parentContainer">
                                    <div>
                                      <canvas id="lineChartTen" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="card-overview__right">
                          <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-6">
                              <div className="overview-single">
                                <div className="overview-content">
                                  <h1>12,142</h1>
                                  <p>Total Page Likes</p>
                                  <div>
                                    <span className="color-danger">
                                      <i data-feather="trending-down" />
                                      <strong>13%</strong>
                                    </span>
                                    <small>20,641 (prev)</small>
                                  </div>
                                </div>
                                <div className="overview-single__chart">
                                  <div className="parentContainer">
                                    <div>
                                      <canvas id="lineChartEleven" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-6 co-last">
                              <div className="overview-single">
                                <div className="overview-content">
                                  <h1>1,432</h1>
                                  <p>New Page LIke</p>
                                  <div>
                                    <span className="color-success">
                                      <i data-feather="trending-up" />
                                      <strong>14%</strong>
                                    </span>
                                    <small>20,641 (prev)</small>
                                  </div>
                                </div>
                                <div className="overview-single__chart">
                                  <div className="parentContainer">
                                    <div>
                                      <canvas id="lineChartTwelve" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="f_overview-year"
                    role
                    aria-labelledby="f_overview-tab"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="card-overview__left">
                          <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-6">
                              <div className="overview-single">
                                <div className="overview-content">
                                  <h1>25,845</h1>
                                  <p>Engaged Users</p>
                                  <div>
                                    <span className="color-success">
                                      <i data-feather="trending-up" />
                                      <strong>25%</strong>
                                    </span>
                                    <small>20,641 (prev)</small>
                                  </div>
                                </div>
                                <div className="overview-single__chart">
                                  <div className="parentContainer">
                                    <div>
                                      <canvas id="lineChartThirteen" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-6 br-1">
                              <div className="overview-single">
                                <div className="overview-content">
                                  <h1>492,534</h1>
                                  <p>Page Impressions</p>
                                  <div>
                                    <span className="color-success">
                                      <i data-feather="trending-up" />
                                      <strong>36%</strong>
                                    </span>
                                    <small>20,641 (prev)</small>
                                  </div>
                                </div>
                                <div className="overview-single__chart">
                                  <div className="parentContainer">
                                    <div>
                                      <canvas id="lineChartFourteen" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="card-overview__right">
                          <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-6">
                              <div className="overview-single">
                                <div className="overview-content">
                                  <h1>12,142</h1>
                                  <p>Total Page Likes</p>
                                  <div>
                                    <span className="color-danger">
                                      <i data-feather="trending-down" />
                                      <strong>13%</strong>
                                    </span>
                                    <small>20,641 (prev)</small>
                                  </div>
                                </div>
                                <div className="overview-single__chart">
                                  <div className="parentContainer">
                                    <div>
                                      <canvas id="lineChartFifteen" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-6 co-last">
                              <div className="overview-single">
                                <div className="overview-content">
                                  <h1>1,432</h1>
                                  <p>New Page LIke</p>
                                  <div>
                                    <span className="color-success">
                                      <i data-feather="trending-up" />
                                      <strong>14%</strong>
                                    </span>
                                    <small>20,641 (prev)</small>
                                  </div>
                                </div>
                                <div className="overview-single__chart">
                                  <div className="parentContainer">
                                    <div>
                                      <canvas id="lineChartSixteen" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ends: .row */}
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-md-6 mb-25">
            <div className="card border-0">
              <div className="card-header">
                <h6>Youtube Subscribers</h6>
                <div className="card-extra">
                  <ul className="card-tab-links nav-tabs nav">
                    <li>
                      <a
                        href="#y_subscriber-week"
                        className="active"
                        data-toggle="tab"
                        id="ys_week-tab"
                        role="tab"
                        area-controls="y_subscriber"
                        aria-selected="true"
                      >
                        Week
                      </a>
                    </li>
                    <li>
                      <a
                        href="#y_subscriber-month"
                        data-toggle="tab"
                        id="ys_month-tab"
                        role="tab"
                        area-controls="y_subscriber"
                        aria-selected="false"
                      >
                        Month
                      </a>
                    </li>
                    <li>
                      <a
                        href="#y_subscriber-year"
                        id="ys_year-tab"
                        data-toggle="tab"
                        role="tab"
                        area-controls="y_subscriber"
                        aria-selected="false"
                      >
                        Year
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="y_subscriber-week"
                    role="tabpanel"
                    aria-labelledby="y_subscriber-week"
                  >
                    <div className="card-chart-bar d-flex justify-content-between">
                      <div className="card-bar-top">
                        <p>Subscribers</p>
                        <h3 className="card-bar-info d-flex align-items-end">
                          25,472
                          <sub className="color-success">
                            <i data-feather="arrow-up" /> 25%
                          </sub>
                        </h3>
                      </div>
                      <ul className="legend-static">
                        <li className="custom-label">
                          <span
                            style={{
                              backgroundColor: "rgb(95, 99, 242)",
                            }}
                          />
                          Gained
                        </li>
                        <li className="custom-label">
                          <span
                            style={{
                              backgroundColor: "rgb(255, 77, 79)",
                            }}
                          />
                          Lost
                        </li>
                      </ul>
                    </div>
                    <div className="card-chart">
                      <div className="parentContainer">
                        <div>
                          <canvas id="ys_barChartOne" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="y_subscriber-month"
                    role="tabpanel"
                    aria-labelledby="y_subscriber-week"
                  >
                    <div className="card-chart-bar d-flex justify-content-between">
                      <div className="card-bar-top">
                        <p>Subscribers</p>
                        <h3 className="card-bar-info d-flex align-items-end">
                          75,582
                          <sub className="color-success">
                            <i data-feather="arrow-up" /> 45%
                          </sub>
                        </h3>
                      </div>
                      <ul className="legend-static">
                        <li className="custom-label">
                          <span
                            style={{
                              backgroundColor: "rgb(95, 99, 242)",
                            }}
                          />
                          Gained
                        </li>
                        <li className="custom-label">
                          <span
                            style={{
                              backgroundColor: "rgb(255, 77, 79)",
                            }}
                          />
                          Lost
                        </li>
                      </ul>
                    </div>
                    <div className="card-chart">
                      <div className="parentContainer">
                        <div>
                          <canvas id="ys_barChartTwo" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="y_subscriber-year"
                    role="tabpanel"
                    aria-labelledby="y_subscriber-week"
                  >
                    <div className="card-chart-bar d-flex justify-content-between">
                      <div className="card-bar-top">
                        <p>Subscribers</p>
                        <h3 className="card-bar-info d-flex align-items-end">
                          124,892
                          <sub className="color-success">
                            <i data-feather="arrow-up" /> 65%
                          </sub>
                        </h3>
                      </div>
                      <ul className="legend-static">
                        <li className="custom-label">
                          <span
                            style={{
                              backgroundColor: "rgb(95, 99, 242)",
                            }}
                          />
                          Gained
                        </li>
                        <li className="custom-label">
                          <span
                            style={{
                              backgroundColor: "rgb(255, 77, 79)",
                            }}
                          />
                          Lost
                        </li>
                      </ul>
                    </div>
                    <div className="card-chart">
                      <div className="parentContainer">
                        <div>
                          <canvas id="ys_barChartThree" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-md-6 mb-25">
            <div className="card border-0">
              <div className="card-header">
                <h6>Twitter Overview</h6>
                <div className="card-extra">
                  <ul className="card-tab-links nav-tabs nav">
                    <li>
                      <a
                        className="active"
                        href="#to_week"
                        data-toggle="tab"
                        id="to_week-tab"
                        role="tab"
                        area-controls="to_week"
                        aria-selected="true"
                      >
                        Week
                      </a>
                    </li>
                    <li>
                      <a
                        href="#to_month"
                        data-toggle="tab"
                        id="to_month-tab"
                        role="tab"
                        area-controls="to_month"
                        aria-selected="false"
                      >
                        Month
                      </a>
                    </li>
                    <li>
                      <a
                        href="#to_year"
                        data-toggle="tab"
                        id="to_year-tab"
                        role="tab"
                        area-controls="to_year"
                        aria-selected="false"
                      >
                        Year
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body linechart-overview-wrap">
                <div className="tab-content">
                  <div
                    className="tab-pane fade active show"
                    id="to_week"
                    role="tabpanel"
                    aria-labelledby="to_week-tab"
                  >
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Tweets</span>
                        <p className="m-0">
                          <strong>278</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpOne" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Tweet Impressions</span>
                        <p className="m-0">
                          <strong>78.8k</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpTwo" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>New Followers</span>
                        <p className="m-0">
                          <strong>3,015</strong>
                          <sub className="color-danger">
                            <i className="la la-arrow-down" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpThree" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Engagement Rates</span>
                        <p className="m-0">
                          <strong>5.2</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpFour" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end">
                      <div className="chart-desc">
                        <span>Retweets</span>
                        <p className="m-0">
                          <strong>8,625</strong>
                          <sub className="color-danger">
                            <i className="la la-arrow-down" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpFive" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="to_month"
                    role="tabpanel"
                    aria-labelledby="to_month-tab"
                  >
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Tweets</span>
                        <p className="m-0">
                          <strong>378</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpOneM" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Tweet Impressions</span>
                        <p className="m-0">
                          <strong>88.8k</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpTwoM" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>New Followers</span>
                        <p className="m-0">
                          <strong>4,417</strong>
                          <sub className="color-danger">
                            <i className="la la-arrow-down" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpThreeM" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Engagement Rates</span>
                        <p className="m-0">
                          <strong>7.2</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpFourM" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end">
                      <div className="chart-desc">
                        <span>Retweets</span>
                        <p className="m-0">
                          <strong>10,625</strong>
                          <sub className="color-danger">
                            <i className="la la-arrow-down" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpFiveM" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="to_year"
                    role="tabpanel"
                    aria-labelledby="to_year-tab"
                  >
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Tweets</span>
                        <p className="m-0">
                          <strong>578</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpOneY" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Tweet Impressions</span>
                        <p className="m-0">
                          <strong>78.8k</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpTwoY" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>New Followers</span>
                        <p className="m-0">
                          <strong>3,015</strong>
                          <sub className="color-danger">
                            <i className="la la-arrow-down" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpThreeY" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Engagement Rates</span>
                        <p className="m-0">
                          <strong>5.2</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpFourY" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end">
                      <div className="chart-desc">
                        <span>Retweets</span>
                        <p className="m-0">
                          <strong>8,625</strong>
                          <sub className="color-danger">
                            <i className="la la-arrow-down" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpFiveY" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ends: .card-body */}
            </div>
          </div>
          <div className="col-xxl-4 col-md-6 mb-25">
            <div className="card border-0">
              <div className="card-header">
                <h6>Instagram Overview</h6>
                <div className="card-extra">
                  <ul className="card-tab-links nav-tabs nav">
                    <li>
                      <a
                        className="active"
                        href="#io_week"
                        data-toggle="tab"
                        id="io_week-tab"
                        role="tab"
                        area-controls="io_week"
                        aria-selected="true"
                      >
                        Week
                      </a>
                    </li>
                    <li>
                      <a
                        href="#io_month"
                        data-toggle="tab"
                        id="io_month-tab"
                        role="tab"
                        area-controls="io_month"
                        aria-selected="false"
                      >
                        Month
                      </a>
                    </li>
                    <li>
                      <a
                        href="#io_year"
                        data-toggle="tab"
                        id="io_year-tab"
                        role="tab"
                        area-controls="io_year"
                        aria-selected="false"
                      >
                        Year
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body linechart-overview-wrap">
                <div className="tab-content">
                  <div
                    className="tab-pane fade active show"
                    id="io_week"
                    role="tabpanel"
                    aria-labelledby="io_week-tab"
                  >
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Likes</span>
                        <p className="m-0">
                          <strong>278</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpSix" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Comments</span>
                        <p className="m-0">
                          <strong>78.8k</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpSeven" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>New Followers</span>
                        <p className="m-0">
                          <strong>3,015</strong>
                          <sub className="color-danger">
                            <i className="la la-arrow-down" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpEight" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Engagement Rates</span>
                        <p className="m-0">
                          <strong>5.2</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpNine" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end">
                      <div className="chart-desc">
                        <span>Total Post</span>
                        <p className="m-0">
                          <strong>8,625</strong>
                          <sub className="color-danger">
                            <i className="la la-arrow-down" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpTen" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="io_month"
                    role="tabpanel"
                    aria-labelledby="io_month-tab"
                  >
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Likes</span>
                        <p className="m-0">
                          <strong>378</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpSixM" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Comments</span>
                        <p className="m-0">
                          <strong>78.8k</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpSevenM" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>New Followers</span>
                        <p className="m-0">
                          <strong>3,015</strong>
                          <sub className="color-danger">
                            <i className="la la-arrow-down" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpEightM" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Engagement Rates</span>
                        <p className="m-0">
                          <strong>5.2</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpNineM" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end">
                      <div className="chart-desc">
                        <span>Total Post</span>
                        <p className="m-0">
                          <strong>8,625</strong>
                          <sub className="color-danger">
                            <i className="la la-arrow-down" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpTenM" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="io_year"
                    role="tabpanel"
                    aria-labelledby="io_year-tab"
                  >
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Likes</span>
                        <p className="m-0">
                          <strong>578</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpSixY" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Comments</span>
                        <p className="m-0">
                          <strong>78.8k</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpSevenY" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>New Followers</span>
                        <p className="m-0">
                          <strong>3,015</strong>
                          <sub className="color-danger">
                            <i className="la la-arrow-down" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpEightY" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Engagement Rates</span>
                        <p className="m-0">
                          <strong>5.2</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpNineY" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end">
                      <div className="chart-desc">
                        <span>Total Post</span>
                        <p className="m-0">
                          <strong>8,625</strong>
                          <sub className="color-danger">
                            <i className="la la-arrow-down" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharpTenY" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-md-6 mb-25">
            <div className="card border-0">
              <div className="card-header">
                <h6>Linkedin Overview</h6>
                <div className="card-extra">
                  <ul className="card-tab-links nav-tabs nav">
                    <li>
                      <a
                        className="active"
                        href="#lo_week"
                        data-toggle="tab"
                        id="lo_week-tab"
                        role="tab"
                        area-controls="lo_week"
                        aria-selected="true"
                      >
                        Week
                      </a>
                    </li>
                    <li>
                      <a
                        href="#lo_month"
                        data-toggle="tab"
                        id="lo_month-tab"
                        role="tab"
                        area-controls="lo_week"
                        aria-selected="false"
                      >
                        Month
                      </a>
                    </li>
                    <li>
                      <a
                        href="#lo_year"
                        data-toggle="tab"
                        id="lo_year-tab"
                        role="tab"
                        area-controls="lo_week"
                        aria-selected="false"
                      >
                        Year
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body linechart-overview-wrap">
                <div className="tab-content">
                  <div
                    className="tab-pane fade active show"
                    id="lo_week"
                    role="tabpanel"
                    aria-labelledby="lo_week-tab"
                  >
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Likes</span>
                        <p className="m-0">
                          <strong>178</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharp11" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Comments</span>
                        <p className="m-0">
                          <strong>78.8k</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharp12" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>New Followers</span>
                        <p className="m-0">
                          <strong>3,015</strong>
                          <sub className="color-danger">
                            <i className="la la-arrow-down" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharp13" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Engagement Rates</span>
                        <p className="m-0">
                          <strong>5.2</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharp14" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end">
                      <div className="chart-desc">
                        <span>Total Post</span>
                        <p className="m-0">
                          <strong>8,625</strong>
                          <sub className="color-danger">
                            <i className="la la-arrow-down" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharp15" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="lo_month"
                    role="tabpanel"
                    aria-labelledby="lo_month-tab"
                  >
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Likes</span>
                        <p className="m-0">
                          <strong>378</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharp11M" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Comments</span>
                        <p className="m-0">
                          <strong>78.8k</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharp12M" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>New Followers</span>
                        <p className="m-0">
                          <strong>3,015</strong>
                          <sub className="color-danger">
                            <i className="la la-arrow-down" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharp13M" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Engagement Rates</span>
                        <p className="m-0">
                          <strong>5.2</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharp14M" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end">
                      <div className="chart-desc">
                        <span>Total Post</span>
                        <p className="m-0">
                          <strong>8,625</strong>
                          <sub className="color-danger">
                            <i className="la la-arrow-down" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharp15M" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="lo_year"
                    role="tabpanel"
                    aria-labelledby="lo_year-tab"
                  >
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Likes</span>
                        <p className="m-0">
                          <strong>578</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharp11Y" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Comments</span>
                        <p className="m-0">
                          <strong>78.8k</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharp12Y" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>New Followers</span>
                        <p className="m-0">
                          <strong>3,015</strong>
                          <sub className="color-danger">
                            <i className="la la-arrow-down" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharp13Y" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
                      <div className="chart-desc">
                        <span>Engagement Rates</span>
                        <p className="m-0">
                          <strong>5.2</strong>
                          <sub className="color-success">
                            <i className="la la-arrow-up" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharp14Y" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-end">
                      <div className="chart-desc">
                        <span>Total Post</span>
                        <p className="m-0">
                          <strong>8,625</strong>
                          <sub className="color-danger">
                            <i className="la la-arrow-down" /> 14%
                          </sub>
                        </p>
                      </div>
                      <div className="border-line-chart">
                        <div className="parentContainer">
                          <div>
                            <canvas id="lineChartSharp15Y" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-8 mb-25">
            <div className="card border-0">
              <div className="card-header">
                <h6>Social Traffic Metrics</h6>
                <div className="card-extra">
                  <div className="card-tab btn-group atbd-button-group mr-3 nav nav-tabs">
                    <a
                      className="btn btn-xs btn-white active border"
                      id="f_today-tab"
                      data-toggle="tab"
                      href="#st_matrics-today"
                      role="tab"
                      area-controls="st_matrics"
                      aria-selected="true"
                    >
                      Today
                    </a>
                    <a
                      className="btn btn-xs btn-white border"
                      id="f_week-tab"
                      data-toggle="tab"
                      href="#st_matrics-week"
                      role="tab"
                      area-controls="st_matrics"
                      aria-selected="false"
                    >
                      Week
                    </a>
                    <a
                      className="btn btn-xs btn-white border"
                      id="f_month-tab"
                      data-toggle="tab"
                      href="#st_matrics-month"
                      role="tab"
                      area-controls="st_matrics"
                      aria-selected="false"
                    >
                      Month
                    </a>
                    <a
                      className="btn btn-xs btn-white border"
                      id="f_year-tab"
                      data-toggle="tab"
                      href="#st_matrics-year"
                      role="tab"
                      area-controls="st_matrics"
                      aria-selected="false"
                    >
                      Year
                    </a>
                  </div>
                  <div className="dropdown dropleft">
                    <a
                      href="#"
                      role="button"
                      id="Today"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span data-feather="more-horizontal" />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="Today">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="tab-content">
                  <div
                    className="tab-pane fade active show"
                    id="st_matrics-today"
                    role
                    aria-labelledby="st_matrics-tab"
                  >
                    <div className="table-responsive">
                      <table className="table table-bordered table-social">
                        <thead>
                          <tr>
                            <th scope="col" />
                            <th scope="col" colSpan={3}>
                              Acquisition
                            </th>
                            <th scope="col" colSpan={3}>
                              Behavior
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Social Network</td>
                            <td>Users</td>
                            <td>New Users</td>
                            <td>Sessions</td>
                            <td>Bounce Rate</td>
                            <td>Pages / Sessions</td>
                            <td>Avg. Session Duration</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Facebook</a>
                            </td>
                            <td>1,458</td>
                            <td>452</td>
                            <td>9,235</td>
                            <td>25%</td>
                            <td>3.9</td>
                            <td>00:05:16</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Twitter</a>
                            </td>
                            <td>4,785</td>
                            <td>426</td>
                            <td>8,156</td>
                            <td>-26%</td>
                            <td>1.5</td>
                            <td>00:05:16</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Linkedin</a>
                            </td>
                            <td>3,416</td>
                            <td>951</td>
                            <td>6,124</td>
                            <td>56%</td>
                            <td>5.3</td>
                            <td>00:05:16</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Youtube</a>
                            </td>
                            <td>5,426</td>
                            <td>753</td>
                            <td>9,147</td>
                            <td>15%</td>
                            <td>7.5</td>
                            <td>00:05:16</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Instagram</a>
                            </td>
                            <td>6,258</td>
                            <td>852</td>
                            <td>4,369</td>
                            <td>75%</td>
                            <td>2.7</td>
                            <td>00:05:16</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Google+</a>
                            </td>
                            <td>9,632</td>
                            <td>123</td>
                            <td>1,256</td>
                            <td>46%</td>
                            <td>2.6</td>
                            <td>00:05:16</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="st_matrics-week"
                    role="tabpanel"
                    aria-labelledby="st_matrics-tab"
                  >
                    <div className="table-responsive">
                      <table className="table table-bordered table-social">
                        <thead>
                          <tr>
                            <th scope="col" />
                            <th scope="col" colSpan={3}>
                              Acquisition
                            </th>
                            <th scope="col" colSpan={3}>
                              Behavior
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Social Network</td>
                            <td>Users</td>
                            <td>New Users</td>
                            <td>Sessions</td>
                            <td>Bounce Rate</td>
                            <td>Pages / Sessions</td>
                            <td>Avg. Session Duration</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Facebook</a>
                            </td>
                            <td>1,558</td>
                            <td>452</td>
                            <td>9,235</td>
                            <td>27%</td>
                            <td>6.9</td>
                            <td>00:06:16</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Twitter</a>
                            </td>
                            <td>4,585</td>
                            <td>426</td>
                            <td>8,856</td>
                            <td>-26%</td>
                            <td>1.5</td>
                            <td>00:03:16</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Linkedin</a>
                            </td>
                            <td>3,416</td>
                            <td>951</td>
                            <td>6,124</td>
                            <td>56%</td>
                            <td>5.3</td>
                            <td>00:05:16</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Youtube</a>
                            </td>
                            <td>5,426</td>
                            <td>553</td>
                            <td>4,647</td>
                            <td>20%</td>
                            <td>8.5</td>
                            <td>00:05:16</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Instagram</a>
                            </td>
                            <td>62,258</td>
                            <td>452</td>
                            <td>4,669</td>
                            <td>55%</td>
                            <td>1.7</td>
                            <td>00:05:16</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Google+</a>
                            </td>
                            <td>6,632</td>
                            <td>113</td>
                            <td>1,956</td>
                            <td>56%</td>
                            <td>5.6</td>
                            <td>00:06:16</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="st_matrics-month"
                    role="tabpanel"
                    aria-labelledby="st_matrics-tab"
                  >
                    <div className="table-responsive">
                      <table className="table table-bordered table-social">
                        <thead>
                          <tr>
                            <th scope="col" />
                            <th scope="col" colSpan={3}>
                              Acquisition
                            </th>
                            <th scope="col" colSpan={3}>
                              Behavior
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Social Network</td>
                            <td>Users</td>
                            <td>New Users</td>
                            <td>Sessions</td>
                            <td>Bounce Rate</td>
                            <td>Pages / Sessions</td>
                            <td>Avg. Session Duration</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Facebook</a>
                            </td>
                            <td>1,258</td>
                            <td>452</td>
                            <td>9,235</td>
                            <td>25%</td>
                            <td>3.5</td>
                            <td>00:05:16</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Twitter</a>
                            </td>
                            <td>4,785</td>
                            <td>423</td>
                            <td>8,156</td>
                            <td>-26%</td>
                            <td>1.5</td>
                            <td>00:05:16</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Linkedin</a>
                            </td>
                            <td>3,416</td>
                            <td>956</td>
                            <td>6,124</td>
                            <td>46%</td>
                            <td>5.3</td>
                            <td>00:05:16</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Youtube</a>
                            </td>
                            <td>5,426</td>
                            <td>753</td>
                            <td>9,147</td>
                            <td>15%</td>
                            <td>7.5</td>
                            <td>00:05:16</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Instagram</a>
                            </td>
                            <td>6,258</td>
                            <td>852</td>
                            <td>4,369</td>
                            <td>75%</td>
                            <td>2.7</td>
                            <td>00:05:16</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Google+</a>
                            </td>
                            <td>9,632</td>
                            <td>123</td>
                            <td>1,656</td>
                            <td>36%</td>
                            <td>2.8</td>
                            <td>00:05:16</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="st_matrics-year"
                    role="tabpanel"
                    aria-labelledby="st_matrics-tab"
                  >
                    <div className="table-responsive">
                      <table className="table table-bordered table-social">
                        <thead>
                          <tr>
                            <th scope="col" />
                            <th scope="col" colSpan={3}>
                              Acquisition
                            </th>
                            <th scope="col" colSpan={3}>
                              Behavior
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Social Network</td>
                            <td>Users</td>
                            <td>New Users</td>
                            <td>Sessions</td>
                            <td>Bounce Rate</td>
                            <td>Pages / Sessions</td>
                            <td>Avg. Session Duration</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Facebook</a>
                            </td>
                            <td>1,458</td>
                            <td>452</td>
                            <td>9,245</td>
                            <td>35%</td>
                            <td>5.9</td>
                            <td>00:08:16</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Twitter</a>
                            </td>
                            <td>4,285</td>
                            <td>424</td>
                            <td>8,356</td>
                            <td>-25%</td>
                            <td>1.5</td>
                            <td>00:05:16</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Linkedin</a>
                            </td>
                            <td>3,416</td>
                            <td>951</td>
                            <td>6,124</td>
                            <td>56%</td>
                            <td>5.3</td>
                            <td>00:05:16</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Youtube</a>
                            </td>
                            <td>5,426</td>
                            <td>753</td>
                            <td>9,147</td>
                            <td>15%</td>
                            <td>7.5</td>
                            <td>00:05:16</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Instagram</a>
                            </td>
                            <td>6,258</td>
                            <td>852</td>
                            <td>4,369</td>
                            <td>75%</td>
                            <td>2.7</td>
                            <td>00:05:16</td>
                          </tr>
                          <tr>
                            <td>
                              <a href>Google+</a>
                            </td>
                            <td>9,632</td>
                            <td>123</td>
                            <td>1,256</td>
                            <td>46%</td>
                            <td>2.6</td>
                            <td>00:05:16</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

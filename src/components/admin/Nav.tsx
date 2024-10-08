import React from 'react';

interface Props {
  // define your props here
}

const Nav: React.FC<Props> = (props) => {
  return (
    <div className="row g-6 mb-6">
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card shadow border-0">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                  Budget
                </span>
                <span className="h3 font-bold mb-0">$11590.90</span>
              </div>
              <div className="col-auto">
                <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                  <i className="bi bi-credit-card" />
                </div>
              </div>
            </div>
            <div className="mt-2 mb-0 text-sm">
              <span className="badge badge-pill bg-soft-success text-success me-2">
                <i className="bi bi-arrow-up me-1" />
                37%
              </span>
              <span className="text-nowrap text-xs text-muted">
                Since last month
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card shadow border-0">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                  New projects
                </span>
                <span className="h3 font-bold mb-0">320</span>
              </div>
              <div className="col-auto">
                <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                  <i className="bi bi-people" />
                </div>
              </div>
            </div>
            <div className="mt-2 mb-0 text-sm">
              <span className="badge badge-pill bg-soft-success text-success me-2">
                <i className="bi bi-arrow-up me-1" />
                80%
              </span>
              <span className="text-nowrap text-xs text-muted">
                Since last month
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card shadow border-0">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                  Total hours
                </span>
                <span className="h3 font-bold mb-0">4.100</span>
              </div>
              <div className="col-auto">
                <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                  <i className="bi bi-clock-history" />
                </div>
              </div>
            </div>
            <div className="mt-2 mb-0 text-sm">
              <span className="badge badge-pill bg-soft-danger text-danger me-2">
                <i className="bi bi-arrow-down me-1" />
                -5%
              </span>
              <span className="text-nowrap text-xs text-muted">
                Since last month
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card shadow border-0">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                  Work load
                </span>
                <span className="h3 font-bold mb-0">88%</span>
              </div>
              <div className="col-auto">
                <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                  <i className="bi bi-minecart-loaded" />
                </div>
              </div>
            </div>
            <div className="mt-2 mb-0 text-sm">
              <span className="badge badge-pill bg-soft-success text-success me-2">
                <i className="bi bi-arrow-up me-1" />
                10%
              </span>
              <span className="text-nowrap text-xs text-muted">
                Since last month
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

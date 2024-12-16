import React from "react";
import "./style.css"
import Information from "../TapListInformation/Information";


function Topshiriqlar() {
  return (
    <div>
      <div className="Topshiriqlar_info">
        <ul class="nav nav-tabs mb-3 Topshiriqlar_nav" id="ex-with-icons" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              data-mdb-tab-init
              class="nav-link active"
              id="ex-with-icons-tab-1"
              href="#ex-with-icons-tabs-1"
              role="tab"
              aria-controls="ex-with-icons-tabs-1"
              aria-selected="true"
            >
              <i class="fas fa-list-ul me-2 fa-chart-pie"></i>Barcha topshiriqlar
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              data-mdb-tab-init
              class="nav-link"
              id="ex-with-icons-tab-2"
              href="#ex-with-icons-tabs-2"
              role="tab"
              aria-controls="ex-with-icons-tabs-2"
              aria-selected="false"
            >
              <i class="far fa-clock me-2"></i>Bajarilmoqda
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              data-mdb-tab-init
              class="nav-link"
              id="ex-with-icons-tab-3"
              href="#ex-with-icons-tabs-3"
              role="tab"
              aria-controls="ex-with-icons-tabs-3"
              aria-selected="false"
            >
              <i class="fas fa-check me-2"></i>Bajarilgan
            </a>
          </li>

          <li class="nav-item" role="presentation">
            <a
              data-mdb-tab-init
              class="nav-link"
              id="ex-with-icons-tab-3"
              href="#ex-with-icons-tabs-3"
              role="tab"
              aria-controls="ex-with-icons-tabs-3"
              aria-selected="false"
            >
              <i class="fas fa-circle-exclamation me-2"></i>Bajarilmagan
            </a>
          </li>

          <li class="nav-item" role="presentation">
            <a
              data-mdb-tab-init
              class="nav-link"
              id="ex-with-icons-tab-3"
              href="#ex-with-icons-tabs-3"
              role="tab"
              aria-controls="ex-with-icons-tabs-3"
              aria-selected="false"
            >
              <i class="fas fa-triangle-exclamation me-2"></i>Muddatidan kech bajarilgan
            </a>
          </li>
        </ul>

        <div className="tab-content Topshiriqlar_info_page" id="ex-with-icons-content">
          <div
            className="tab-pane fade show active"
            id="ex-with-icons-tabs-1"
            role="tabpanel"
            aria-labelledby="ex-with-icons-tab-1"
          >
            <Information></Information>
          </div>
          <div
            className="tab-pane fade"
            id="ex-with-icons-tabs-2"
            role="tabpanel"
            aria-labelledby="ex-with-icons-tab-2"
          >
            <Information></Information>
            
          </div>
          <div
            className="tab-pane fade"
            id="ex-with-icons-tabs-3"
            role="tabpanel"
            aria-labelledby="ex-with-icons-tab-3"
          >
            <Information></Information>
           
          </div>
          <div
            className="tab-pane fade"
            id="ex-with-icons-tabs-3"
            role="tabpanel"
            aria-labelledby="ex-with-icons-tab-3"
          >
            <Information></Information>
           
          </div>
          <div
            className="tab-pane fade"
            id="ex-with-icons-tabs-3"
            role="tabpanel"
            aria-labelledby="ex-with-icons-tab-3"
          >
            <Information></Information>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topshiriqlar;

import React from 'react'
import Report from './Hisobot'
import Information from './TapListInformation/Information';

import { Tab, initMDB } from "mdb-ui-kit";
import './style.css'
import Topshiriqlar from './Topshiriqlar';
initMDB({ Tab });

function Tabs() {
  return (
      <div className=''>
            <ul class="nav nav-tabs mb-3 tapNav" id="myTab0" role="tablist">
                  <li class="nav-item text-primary" role="presentation">
                  <button
                  data-mdb-tab-init
                  class="nav-link active text-primary fw-bolder"
                  id="home-tab0"
                  data-mdb-target="#home0"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  >
                  Report
                  </button>
                  </li>

                  <li class="nav-item" role="presentation">
                  <button
                  data-mdb-tab-init
                  class="nav-link text-danger fw-bolder"
                  id="contact-tab0"
                  data-mdb-target="#contact0"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  >
                  Topshiriqlar
                  </button>
                  </li>

                  <li class="nav-item" role="presentation">
                  <button
                  style={{color:"#A855F7"}}
                  data-mdb-tab-init
                  class="nav-link fw-bolder"
                  id="profile-tab0"
                  data-mdb-target="#profile0"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  >
                  Assignments
                  </button>
                  </li>
                  
                  <li class="nav-item" role="presentation">
                  <button
                  style={{color:"#EAB308"}}
                  data-mdb-tab-init
                  class="nav-link fw-bolder"
                  id="contact-tab0"
                  data-mdb-target="#jadval0"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  >
                  Berilgan javoblar
                  </button>
                  </li>

                  <li class="nav-item" role="presentation">
                  <button
                  style={{color:"#A855F7"}}
                  data-mdb-tab-init
                  class="nav-link fw-bolder"
                  id="contact-tab0"
                  data-mdb-target="#qabul0"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  >
                  Qabul qilinmaganlar
                  </button>
                  </li>
            </ul>
            <div class="tab-content" id="myTabContent0">
                  <div
                  class="tab-pane fade show active"
                  id="home0"
                  role="tabpanel"
                  aria-labelledby="home-tab0"
                  >
                  <Report/>
                  </div>
                  <div class="tab-pane fade" id="profile0" role="tabpanel" aria-labelledby="profile-tab0">
                  <Information></Information>    
                  </div>

                  <div class="tab-pane fade" id="contact0" role="tabpanel" aria-labelledby="contact-tab0">
                  <Topshiriqlar></Topshiriqlar>
                  </div>

                  <div class="tab-pane fade" id="jadval0" role="tabpanel" aria-labelledby="contact-tab0">
                        <Information></Information>    
                  </div>

                  <div class="tab-pane fade" id="qabul0" role="tabpanel" aria-labelledby="contact-tab0">
                        <Information></Information>    
                  </div>
            </div>
            
   </div>
  )
}

export default Tabs
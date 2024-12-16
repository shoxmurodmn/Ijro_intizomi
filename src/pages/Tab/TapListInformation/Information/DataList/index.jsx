import React from 'react'
import './style.css'
function DataList() {
  return (
    <div>
    <div className="info_nav flexGC">
      Topshiriqlar ro‘yxati
    </div>

    <div className="info_List"></div>
    
    <div className="info_footer">
      <div>
          Sahifadagi elementlar
      </div>
        
          <ul class="pagination list_page">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
      
    </div>
    
  </div>
  )
}

export default DataList
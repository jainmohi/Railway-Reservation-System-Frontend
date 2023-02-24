import React from 'react';

export default function Footer() {
    return <div>
            <footer className="bg-light py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p className="text-muted mb-0">Railway Reservation System &copy; 2023</p>
        </div>
        <div className="col-md-6">
          <ul className="list-inline mb-0 float-md-end">
            <li className="list-inline-item"><a href="#">About</a></li>
            <li className="list-inline-item"><a href="#">Contact</a></li>
            <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            <li className="list-inline-item"><a href="#">Terms of Use</a></li>
          </ul>
        </div>
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                <ul className="list-unstyled list-inline social text-center">
                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li className="list-inline-item"><a href="#" target="_blank"><i className="fa fa-envelope"></i></a></li>
                </ul>
            </div>
        </div>	
      </div>
    </div>
  </footer>  
            </div>
}
import React from "react";

function Sidebar (){
    return(
        <div className="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
               <div className="mobile-sidebar-header d-md-none">
                    <div className="header-logo">
                        <a href="index.html"><img src="img/logo1.png" alt="logo" /></a>
                    </div>
               </div>
                <div className="sidebar-menu-content">
                    <ul className="nav nav-sidebar-menu sidebar-toggle-view">
                        <li className="nav-item">
                            <a href="index.html" className="nav-link"><i className="flaticon-dashboard"></i><span>Dashboard</span></a>
                        </li>
                        
                        <li className="nav-item sidebar-nav-item">
                            <a href="#" className="nav-link"><i className="flaticon-classmates"></i><span>Students</span></a>
                            <ul className="nav sub-group-menu">
                                <li className="nav-item">
                                    <a href="all-student.html" className="nav-link"><i className="fas fa-angle-right"></i>All Students</a>
                                </li>
                                <li className="nav-item">
                                    <a href="student-details.html" className="nav-link"><i className="fas fa-angle-right"></i>Student Details</a>
                                </li>
                                <li className="nav-item">
                                    <a href="admit-form.html" className="nav-link"><i className="fas fa-angle-right"></i>Admission Form</a>
                                </li>
                                <li className="nav-item">
                                    <a href="student-promotion.html" className="nav-link"><i className="fas fa-angle-right"></i>Student Promotion</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item sidebar-nav-item">
                            <a href="#" className="nav-link"><i className="flaticon-multiple-users-silhouette"></i><span>Teachers</span></a>
                            <ul className="nav sub-group-menu">
                                <li className="nav-item">
                                    <a href="all-teacher.html" className="nav-link"><i className="fas fa-angle-right"></i>All Teachers</a>
                                </li>
                                <li className="nav-item">
                                    <a href="teacher-details.html" className="nav-link"><i className="fas fa-angle-right"></i>Teacher Details</a>
                                </li>
                                <li className="nav-item">
                                    <a href="add-teacher.html" className="nav-link"><i className="fas fa-angle-right"></i>Add Teacher</a>
                                </li>
                                <li className="nav-item">
                                    <a href="teacher-payment.html" className="nav-link"><i className="fas fa-angle-right"></i>Payment</a>
                                </li>
                            </ul>
                        </li>
                        
                        <li className="nav-item sidebar-nav-item">
                            <a href="#" className="nav-link"><i className="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i><span>Class</span></a>
                            <ul className="nav sub-group-menu">
                                <li className="nav-item">
                                    <a href="all-class.html" className="nav-link"><i className="fas fa-angle-right"></i>All Classes</a>
                                </li>
                                <li className="nav-item">
                                    <a href="add-class.html" className="nav-link"><i className="fas fa-angle-right"></i>Add New Class</a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a href="transport.html" className="nav-link"><i className="flaticon-bus-side-view"></i><span>Transport</span></a>
                        </li>
                        
                        <li className="nav-item">
                            <a href="account-settings.html" className="nav-link"><i className="flaticon-settings"></i><span>Account</span></a>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default Sidebar;
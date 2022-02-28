import React from "react";

function Dashboard(){
    

return(
    <div>
    <div className="row gutters-20">
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="dashboard-summery-one mg-b-20">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="item-icon bg-light-green ">
                                        <i className="flaticon-classmates text-green"></i>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item-content">
                                        <div className="item-title">Students</div>
                                        <div className="item-number"><span className="counter" data-num="150000">1,50,000</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="dashboard-summery-one mg-b-20">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="item-icon bg-light-blue">
                                        <i className="flaticon-multiple-users-silhouette text-blue"></i>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item-content">
                                        <div className="item-title">Teachers</div>
                                        <div className="item-number"><span className="counter" data-num="2250">2,250</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="dashboard-summery-one mg-b-20">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="item-icon bg-light-yellow">
                                        <i className="flaticon-couple text-orange"></i>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item-content">
                                        <div className="item-title">Parents</div>
                                        <div className="item-number"><span className="counter" data-num="5690">5,690</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="dashboard-summery-one mg-b-20">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="item-icon bg-light-red">
                                        <i className="flaticon-money text-red"></i>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item-content">
                                        <div className="item-title">Earnings</div>
                                        <div className="item-number"><span>$</span><span className="counter" data-num="193000">1,93,000</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                </div>
                
)

}


export default Dashboard;
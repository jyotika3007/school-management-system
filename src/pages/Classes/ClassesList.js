import React, { useEffect } from "react";

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ClassList from '../../components/ClassList/ClassList';


function ClassesList(){

// const [totalStudents, setTotalStudents] = useEffect("");
// const [totalTeachers, setTotalTeachers] = useEffect("");
// const [totalClasses, setTotalClasses] = useEffect("");
// const [totalTransportations, setTotalTransportations] = useEffect("");


// useEffect(()=>{

// },[]);

    return (
    <div>
    <Header />
        <div className="dashboard-page-one">
          <Sidebar />
          <div className="dashboard-content-one">
            <Breadcrumbs title="All Classes List"/>
            <ClassList />
            <Footer />
          </div>
        </div>
    </div>
    ) 
}


export default ClassesList;
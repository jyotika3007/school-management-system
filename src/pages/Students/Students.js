import React, { useEffect } from "react";

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import StudentsList from '../../components/StudentsList/StudentsList';


function Students(){

// const [totalStudents, setTotalStudents] = useEffect("");
// const [totalTeachers, setTotalTeachers] = useEffect("");
// const [totalClasses, setTotalClasses] = useEffect("");
// const [totalTransportations, setTotalTransportations] = useEffect("");


// useEffect(()=>{

// },[]);

    return (
    <>
    <Header />
        <div className="dashboard-page-one">
          <Sidebar />
          <div className="dashboard-content-one">
            <Breadcrumbs title="All Students" />
            <StudentsList />
            <Footer />
          </div>
        </div>
    </>
    ) 
}


export default Students;
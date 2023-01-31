// import React, { useState, useEffect } from "react"
import Layout from "component/Layout"
import Highlight from "component/Highlight";
import Newsletter from "component/NewSletter";
import ResourcesList from "component/ResourcesList";
import Footer from "component/Footer";
//import resources from "pages/api/data.json";

//import { resources } from "api/data";

function Home({resources}) {
  
  return (
    <Layout>
      <Highlight
         resources = {resources.slice(0, 2)}
      />
      
      <Newsletter />
      <ResourcesList
         resources = {resources.slice(2)}
      />
      {/* { JSON.stringify(resources) } */}
      <Footer />
    </Layout>
  ) 
}

//is called every time you will visit the page
//function is excuted on the server
//data are always fresh
export async function getServerSideProps(){
  const resData = await fetch(`${process.env.API_URL}/resources`);
  const data = await resData.json();

  //console.log(data);
  // console.log(data.map(resource =>{
  //   return{
  //     params: {id: resource.id}
  //   }
  // }));

    return {
      props: {
        resources: data
      }
    }
}

//is calleds at the build time, and its called onle once

// export async function getSaticProps(){

//   const resData = await fetch("http://localhost:3000/api/resources");
//   const data = await resData.json();


// return {
//   props:{
//     resources:data
//   }
// }
// }

export default Home;

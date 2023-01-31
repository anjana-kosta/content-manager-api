const express = require("express");
const app = express();
const PORT = 3001;

const fs = require("fs");
const path = require("path");
const pathToFile = path.resolve("./data.json");
// const cors = require("cors");

// const corsOption = {
//     origin : 'http://localhost:3000',
//     optionSucessStatus: 200
// }

// app.use(cors(corsOption));

const getResources = () => JSON.parse(fs.readFileSync(pathToFile))

app.use(express.json());

app.get("/", (req, res)=>{
    //console.log("form the code");
  res.send("hello word")
})

app.get("/api/resources/:id", (req, res) => {
    const resources = getResources();
    const { id } = req.params;
    const resource = resources.find(resource => resource.id === id);
    res.send(resource);
})

app.patch("/api/resources/:id", (req, res) => {
    const resources = getResources();
    const { id } = req.params;
    const index = resources.findIndex(resource => resource.id === id);
  
    const activeResource = resources.find(resource => resource.status === "active")


if(resources[index].status === "complete"){
return res.status(422).send("cna not update recource has been completed")
}

       resources[index] = req.body;
    
        //active resource related functionalty
        if(req.body.status === "active"){
            if(activeResource){
                return res.status(422).send("there is active resource alreday")
            }
    
            resources[index].status = "active";
            resources[index].activationTime = new Date();
        }

         //active resource related functionalty
  
    fs.writeFile(pathToFile, JSON.stringify(resources, null, 2), (error) => {
      if (error) {
        return res.status(422).send("Cannot store data in the file!");
      }
  
      return res.send("Data has been updated!");
    })
  })


app.get("/api/activeresource", (req, res) => {
    const resources = getResources();
    const activeResource = resources.find((resource)=> resource.status === "active");
    res.send(activeResource);
})

app.get("/api/resources", (req, res)=>{
    // const stringifyData = fs.readFileSync(pathToFile);
    // console.log(JSON.parse(stringifyData));

    const resources = getResources();
    res.send(resources);
    })

app.post("/api/resources", (req, res)=>{
    const resources = getResources();
    const resource = req.body;

    resource.createdAt = new Date();
    resource.status = "inactive";
    resource.id = Date.now().toString();

    //resources.push(resource);
    resources.unshift(resource);


  fs.writeFile(pathToFile, JSON.stringify(resources, null, 2), (error)=>{
      if(error){
        return res.status(422).send("can not store data in the file!");
       }
      return res.send("data has been saved")
   })
})

app.listen(PORT, ()=>{
    console.log("Server is listening:" +  PORT);
})
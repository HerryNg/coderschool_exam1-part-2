const e = require("express");
const fs = require("fs");
const { title } = require("process");
const companyController = {};
companyController.getAllCompanies = (req, res, next) => {
  console.log("getAllCompany");
  console.log("getall query", req.query);
  const { page } = req.query;
  const requestPage = parseInt(page) || 1;
  const limit = 20;

try {
  let rawData = fs.readFileSync("data.json", "utf8")
  let data = JSON.parse(rawData);
  let citylist = data.jobs;
 
  let result;
  
  if(title) {
  result = data.companies.filter((e) => e.title === title);
  }
  
  if(name){
    result =data.companies.filter((e) => e.name === name)
  }
  result = data.companies.slice(
    (requestPage - 1) * limit,
    requestPage * limit
  );
  
 console.log("result,leng", result.length);
 return res.status(200).send({result});

}catch (error){
  next(error);
}

  
};
companyController.createCompany = (req, res, next) => {
  console.log("createCompany");
  return res.status(200).send("haha");
};
companyController.deleteCompanyById = (req, res, next) => {
  console.log("deleteCompany");
  return res.status(200).send("haha");
};
companyController.updateCompanyById = (req, res, next) => {
  console.log("updateCompany");
  return res.status(200).send("haha");
};

module.exports = companyController;

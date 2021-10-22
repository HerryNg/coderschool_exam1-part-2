const express = require("express");
const router = express.Router();

const companyApi = require("./company.api");
router.use("/companies", companyApi);

module.exports = router;

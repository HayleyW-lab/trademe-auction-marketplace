const express = require("express");
const { getListingById } = require("../controllers/listingController");

const router = express.Router();

router.get("/:id", getListingById);

module.exports = router;
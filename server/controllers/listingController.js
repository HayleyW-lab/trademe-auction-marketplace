const listings = require("../data/listings");

const getListingById = (req, res) => {
  const { id } = req.params;
  const listing = listings.find((listingItem) => listingItem.id === id);

  if (!listing) {
    return res.status(404).json({
      error: "Listing not found",
    });
  }

  return res.status(200).json(listing);
};

module.exports = {
  getListingById,
};

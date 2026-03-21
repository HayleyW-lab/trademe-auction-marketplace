const listing = {
  title: "PlayStation 5 Console",
  image:
    "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
  currentBid: 650,
};

function ProductListing() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Product Listing Page</h1>

      <div
        style={{
          maxWidth: "400px",
          border: "1px solid #ccc",
          borderRadius: "12px",
          padding: "1rem",
        }}
      >
        <img
          src={listing.image}
          alt={listing.title}
          style={{
            width: "100%",
            borderRadius: "8px",
            marginBottom: "1rem",
          }}
        />

        <h2>{listing.title}</h2>
        <p>Current Bid: ${listing.currentBid}</p>
      </div>
    </div>
  );
}

export default ProductListing;
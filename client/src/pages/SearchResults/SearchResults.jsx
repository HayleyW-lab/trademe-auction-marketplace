import "./SearchResults.css"
import Header from "../../common/Header"
import Footer from "../../common/Footer"

function SearchResults()
{
  return (
  <div className="searchResultsPage">
    <Header/>
    <div className="searchHeader">
      <p className="paths">Home / Marketplace / Home & Living</p>
      <p className="category">Home & Living</p>
    </div>
    
    <div className="filters">
      <div className="labels">Refine</div>
      <div className="labels">Category</div>
      <div className="labels">All Locations</div>
      <div className="labels">New & Used</div>
      <div className="labels">Shipping: All</div>
    </div>
    <div className="searchResultsMain">
      <div className="searchResultsHeader">
        <div className="resultsShown">Showing 516 results for 'wooden desk'</div>
        <div className="sorting">Sort</div>
      </div>
      <div className="resultsGrid">
        {auctionItems.map((item) =>
        (
          <div key={item.id} className="itemCard">
            <img src={item.image} alt={item.title} className="itemImage"/>
            <div className="itemInfo">
              <div className="itemTitle">{item.title}</div>
              <div className="itemDescription">{item.description}</div>
              <div className="itemPrice">{item.price}</div>
            </div>
          </div>
        ))}

        {/* <div className="itemCard">
          <div className="itemImage">Image</div>
          <div className="itemInfo">
            <div className="itemTitle">Title</div>
            <div className="itemDescription">This is a general description of the product. It does what you expect. Good condition. Contact me if you have any concerns. I am giving it away because I no longer have any use for it beyond just taking up space within my house.</div>
            <div className="itemPrice">Price</div>
          </div>
        </div> */}

      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default SearchResults;
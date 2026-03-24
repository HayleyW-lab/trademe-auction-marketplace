import "./SearchResults.css"
import Header from "../../common/Header"
import Footer from "../../common/Footer"


// https://img5.su-cdn.com/cdn-cgi/image/width=750,height=750/mall/file/2023/10/23/9e0f37a7886bdf2ccb4149b515b42a54.jpg

const auctionItems =
[
  {
    id: 1,
    title: "Wooden Desk",
    description: "A classic, minimalist wooden desk perfect for a home office or hallway. Features a lovely dark wood finish and three handy drawers for stationery. Slim profile makes it great for smaller spaces.",
    price: "$25.00"
  },

  {
    id: 2,
    title: "Solid Teak Study Desk",
    description: "Proper solid teak desk with plenty of character and storage. Includes seven drawers with stylish curved handles. Perfect for someone who needs a sturdy workspace that can handle a dual-monitor setup.",
    price: "$30.00"
  },

  {
    id: 3,
    title: "Solid Rimu Desk",
    description: "You can’t beat the warmth of Rimu. This desk is built to last with four deep drawers on the left and a clean open space on the right. Ideal for students or as a dedicated crafting station.",
    price: "$40.00"
  },

  {
    id: 4,
    title: "Large Desk",
    description: "A substantial desk for those who like to spread out. Massive storage capacity with eight drawers in total. Traditional aesthetic that adds a professional feel to any room.",
    price: "$100"
  },

  {
    id: 5,
    title: "20th Century Wooden Desk",
    description:"",
    price: "$110"
  },

  {
    id: 6,
    title: "Corner Desk with Cabinets",
    description: "",
    price: "$150"
  },

  {
    id: 7,
    title: "Vintage Wooden Desk",
    description: "",
    price: "$220"
  },

  {
    id: 8,
    title: "Oak Desk",
    description: "",
    price: "$300"
  }
]

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

        <div className="itemCard">
          <div className="itemImage">Image</div>
          <div className="itemInfo">
            <div className="itemTitle">Title</div>
            <div className="itemDescription">This is a general description of the product. It does what you expect. Good condition. Contact me if you have any concerns. I am giving it away because I no longer have any use for it beyond just taking up space within my house.</div>
            <div className="itemPrice">Price</div>
          </div>
        </div>

        <div className="itemCard">
          <div className="itemImage">Image</div>
          <div className="itemInfo">
            <div className="itemTitle">Title</div>
            <div className="itemDescription">Description</div>
            <div className="itemPrice">Price</div>
          </div>
        </div>

        <div className="itemCard">
          <div className="itemImage">Image</div>
          <div className="itemInfo">
            <div className="itemTitle">Title</div>
            <div className="itemDescription">Description</div>
            <div className="itemPrice">Price</div>
          </div>
        </div>

        <div className="itemCard">
          <div className="itemImage">Image</div>
          <div className="itemInfo">
            <div className="itemTitle">Title</div>
            <div className="itemDescription">Description</div>
            <div className="itemPrice">Price</div>
          </div>
        </div>

        <div className="itemCard">
          <div className="itemImage">Image</div>
          <div className="itemInfo">
            <div className="itemTitle">Title</div>
            <div className="itemDescription">Description</div>
            <div className="itemPrice">Price</div>
          </div>
        </div>

      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default SearchResults;
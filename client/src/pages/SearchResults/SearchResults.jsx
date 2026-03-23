import "./SearchResults.css"
import Header from "../../common/Header"
import Footer from "../../common/Footer"


// https://img5.su-cdn.com/cdn-cgi/image/width=750,height=750/mall/file/2023/10/23/9e0f37a7886bdf2ccb4149b515b42a54.jpg

function SearchResults()
{
  return (
  <div className="searchResultsPage">
    <Header/>
    <div className="searchHeader">
      <p className="paths">Home / Marketplace / Home & Living</p>
      <p className="category">Home & Living</p>
    </div>
    
    <div className="categories-filters">
      Categories
    </div>
    <div className="searchResultsMain">
      Search Results
    </div>
    <Footer/>
  </div>
  )
}

export default SearchResults;
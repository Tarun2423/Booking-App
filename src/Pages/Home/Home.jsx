import Featured from '../../Components/Featured/Featured'
import FeaturedProperties from '../../Components/FeaturedProperties/FeaturedProperties'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import MailList from '../../Components/MailList/MailList'
import Navbar from '../../Components/Navbar/Navbar'
import PropertyList from '../../Components/PropertyList/PropertyList'
import './Home.css'

const Home = () => {
  return (
    <><Navbar/>
        <Header/> 
        <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guest Love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
          </div>   
    
    </>
  )
}

export default Home
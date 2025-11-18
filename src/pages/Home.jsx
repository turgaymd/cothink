import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AddResearch from "../components/AddResearch";
const Home=({activeTab})=>{
    return(
        <div>
          <Header/>
          {activeTab ==="library" && <AddResearch/>}
        </div>
    )
}
export default Home;
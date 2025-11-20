import { FiPlus } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const Articles=()=>{
    return(
        <>
        <section>
        <div>

            <div className=" flex justify-between mb-3">
                <h4 className="font-medium text-xl">Mövzular</h4>
                <a className="text-blue-500">Hamısına bax</a>
            </div>
            <div className="topics  flex gap-4">
                <div className="topic-item flex-1">
                    <a>
                        <img src="history.svg"></img>
                    </a>
                </div>
                   <div className="topic-item flex-1">
                    <a>
                        <img src="physics.svg"></img>
                    </a>
                </div>
                 <div className="topic-item flex-1">
                    <a>
                        <img src="math.svg"></img>
                    </a>
                </div>
                 <div className="topic-item flex-1">
                    <a>
                        <img src="coding.svg"></img>
                    </a>
                </div>
                
            </div>
            <div className="article-filter mt-5">
                <div className="filtered-items flex gap-3">
                    <span className="filter-item active">Hamısı</span>
                    <span className="filter-item ">Trenddə</span>
                    <span className="filter-item ">Ən yenilər</span>
                </div>
            </div>
            <div className="articles mt-5">
                <div className="article-item mb-5">
                    <div className="article-content flex justify-between flex-col gap-4">
                    <div className="article-header flex justify-between items-center">
                        <div className="article-author flex items-center gap-2">
                            <img src="avatar.png"/>
                            <span>Aysel Məmmədov</span>
                            <span>•</span>
                            <span>10 saat əvvəl</span>
                        </div>
                        <div className="category">
                            <span className="bg-blue-800 rounded-md px-5 py-2">Riyaziyyat</span>
                        </div>
                    </div>
                    <div className="article-title">
                        <p className="text-white">3-cü Kurs Tələbəsindən Törəmələri Həqiqətən Anlamaq Üçün Addım-Addım Təlimat</p>
                    </div>
                </div>
            </div>   
                            <div className="article-item mb-5">
                    <div className="article-content flex justify-between flex-col gap-4">
                    <div className="article-header flex justify-between items-center">
                        <div className="article-author flex items-center gap-2">
                            <img src="avatar.png"/>
                            <span>Aysel Məmmədov</span>
                            <span>•</span>
                            <span>10 saat əvvəl</span>
                        </div>
                        <div className="category">
                            <span className="bg-blue-800 rounded-md px-5 py-2">Riyaziyyat</span>
                        </div>
                    </div>
                    <div className="article-title">
                        <p className="text-white">3-cü Kurs Tələbəsindən Törəmələri Həqiqətən Anlamaq Üçün Addım-Addım Təlimat</p>
                    </div>
                </div>
            </div>          
                    </div>
            <div className="add-article flex justify-center">
            <NavLink className="bg-blue-800 text-white flex gap-3 items-center rounded-full px-3 py-2" to={"/addarticle"}>Məqalə əlavə et <FiPlus/></NavLink>
            </div>
        </div>
        </section>
                    </>
    )
}
export default Articles;
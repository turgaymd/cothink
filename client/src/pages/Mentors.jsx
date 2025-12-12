import { useState, useEffect, useContext } from "react";
import Search from "../utils/Search";
import axios from "axios";
import { ApiContext } from "../ApiContext";

const Mentors = () => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  console.log(selectedCategory)
  const [displayedCategories, setDisplayedCategories] = useState([])
  const [visibleCategories, setVisibleCategories] = useState(2)
  const [query, setQuery] = useState("")
  const [mentors, setMentors] = useState([])

  const { apiUrl } = useContext(ApiContext)

  useEffect(() => {
    axios.get(`${apiUrl}/server/mentors/mentors.php`).then(res => {
      setMentors(res.data)
      console.log(res.data)
    })

    axios.get(`${apiUrl}/server/categories/categoryRead.php`).then(res => {
      setCategories(res.data)
      setDisplayedCategories(res.data.data.slice(0, 4))
    })
  }, [])

  const handleMore = () => {
    setVisibleCategories(prev => {
      const newCount = prev + 4
      setDisplayedCategories(categories.slice(0, newCount))
      return newCount;
    })
  }

  const filteredMentors = mentors.filter((item) => {
    const searchedQuery = item?.mentor_name.toLowerCase().includes(query.toLowerCase())
    const matchedCategories = !selectedCategory || item?.category_id === selectedCategory
    return searchedQuery && matchedCategories
  }
  )
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <div className="md:col-span-10">
      <section>
        <h2 className="font-semibold text-center text-xl pb-5">Xoş gəlmisiniz, {user?.name}</h2>
        <Search query={query} setQuery={setQuery} />
        <div className="mentor-banner mt-3">
          <div className="relative flex w-[75.98vw] md:flex-row items-center justify-between">
            <div className="">
              <h2 className="text-3xl font-medium pb-3">Öyrənmə Yolunuza Uyğun Mentorlar</h2>
              <p className="font-medium text-xl">Sizə ən uyğun mentor profillərini kəşf edin.</p>
            </div>
            <div className="flex md:justify-end justify-center">
              <img src="/images/Mask group.svg" className="w-32 h-30 rounded-2xl md:w-40 md:h-40 shadow-2xs scale-120 " />
            </div>
          </div>
        </div>
        <div className="filter mb-7">
          <div className=" flex justify-between mb-3">
            <h4 className="font-bold text-xl">Kategoriyalar</h4>
            {/* <button className="text-blue-500" onClick={handleMore}>Hamısına bax</button> */}

            {
              visibleCategories < categories.length && (
                <button className="text-blue-500" onClick={handleMore}>Hamısına bax</button>
              )
            }
          </div>
          <div className="course-filter mt-4 mb-5">

            <div className="filtered-items flex gap-3 flex-col md:flex-row">
              {/* <span className="active rounded-md">Hamısı</span>                                           */}
              {
                displayedCategories.map((item, index) => (

                  <button className="rounded-md " key={index} onClick={() => setSelectedCategory(item?.category_id)}>{item?.category}</button>
                ))
              }
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <h4 className="font-bold text-xl">Ən yaxşı mentorlar</h4>
          <button className="text-blue-500" >Hamısına bax</button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 pt-4">
          {filteredMentors.length === 0 ?
            <p className="font-bold col-span-2 text-center text-2xl">Mentor tapılmadı</p> :
            (filteredMentors.map((item, index) => (
              <div className="mentor-item shadow-xl rounded-xl bg-white" key={index}>
                <a href={`/mentors/mentor/${item?.mentor_id}`} className="block">
                  <div className="mentor-title gap-5 flex">
                    <img src={item?.profile_img || "/images/admin.png"}
                      className=" rounded-full aspect-square  h-24 w-24 object-cover"
                      alt="mentor"
                    />
                    <div className="flex flex-col w-full">
                      <h4 className="font-bold text-lg">{item?.mentor_name}</h4>
                      <p>{item?.category} </p>
                      <div className="flex justify-between gap-5 items-center pt-4">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <img src="/images/users.svg" className="w-5 h-5" />
                            <span>{item?.students} tələbə</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <img src="/images/comment.svg" className="w-5 h-5" />
                            <span>{item?.comments} 0</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <span>{item?.rating}</span>
                          <img src="/images/stars.svg" />
                        </div>

                      </div>
                    </div>

                  </div>
                </a>

              </div>

            )))}
        </div>
      </section>
    </div>
  )
}
export default Mentors;
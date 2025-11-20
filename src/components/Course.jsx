import Header from "./Header";
import Search from "./Search";

const Course = () => {
  return (
    <>
      <section>
       <Search/>
                    <div className="course-filter mt-5 mb-5">
                    <div className="filter-items flex gap-3">
                    <span className="active rounded-full">Fizika</span>
                    <span className="rounded-full">Riyaziyyat</span>
                </div>
            </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="course-item shadow-lg rounded-2xl">
            <article>
            <a>
              <img src="nuclear_reaction.jpg"></img>
            </a>
            </article>
            <div className="course-category mt-3 text-blue-400">Fizika</div>
            <div className="course-title mb-3 mt-3">
              <h4 className="font-bold text-2xl">
                Nüvə Reaksiyaları və Əsas Prinsiplər
              </h4>
            </div>
            <p>
              <span className="font-medium skills">
                Əldə Edəcəyin Bacarıqlar:
              </span>
              Nüvənin parçalanması, birləşməsi və çevrilməsi proseslərinin necə
              baş verdiyini elmi şəkildə anlaya biləcəksən.
            </p>
            <div className="flex justify-between pb-3 mt-3">
              <div className="flex avatar">
                <img src="avatar.png" />
              </div>
              <div className="flex items-center gap-3 ">
                <img src="star.svg" /> <span>4.8</span>
                <img src="users.svg" /> <span>3.2</span>
              </div>
            </div>
          </div>    
                    <div className="course-item shadow-lg rounded-2xl">
                        <article>
            <a>
              <img src="nuclear_reaction.jpg"></img>
            </a>
            </article>
            <div className="course-category mt-3 text-blue-400">Fizika</div>
            <div className="course-title mb-3 mt-3">
              <h4 className="font-bold text-2xl">
                Nüvə Reaksiyaları və Əsas Prinsiplər
              </h4>
            </div>
            <p>
              <span className="font-medium skills text-black">
                Əldə Edəcəyin Bacarıqlar:
              </span>
              Nüvənin parçalanması, birləşməsi və çevrilməsi proseslərinin necə
              baş verdiyini elmi şəkildə anlaya biləcəksən.
            </p>
            <div className="flex justify-between pb-3 mt-3">
              <div className="flex avatar gap-3">
                <img src="avatar.png" />
                <div>
                  <h4>Aydan A</h4>
                  <p>20 Jan 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3 ">
                <img src="star.svg" /> <span>4.8</span>
                <img src="users.svg" /> <span>3.2</span>
              </div>
            </div>
          </div>      
        </div>
      </section>
    </>
  );
};
export default Course;

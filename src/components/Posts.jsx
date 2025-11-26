import { BsThreeDots } from "react-icons/bs";
const Posts=()=>{
  const posts=[
        {
          author:"Aydan A",
          author_img:"aydan.png",
          position:"UI/UX Designer",
          img:"/post.jpg",
          date:"3 ay əvvəl",
          title:"Bugünkü Öyrənmə Nailiyyətim",
          description:"Bu gün Maxwell Tənlikləri mövzusunu öyrəndim və nəhayət elektromaqnetizmi başa düşməyə başladım.Açığı, əvvəllər bu mövzu mənə çox abstrakt gəlirdi və elektrik sahəsi...daha çox",
          likes:52,
          comments:26,
          saved:36

        },
          {
          author:"Aydan A",
          author_img:"/aydan.png",
          position:"UI/UX Designer",
          img:"post.jpg",
          date:"3 ay əvvəl",
          title:"Bugünkü Öyrənmə Nailiyyətim",
          description:"Bu gün Maxwell Tənlikləri mövzusunu öyrəndim və nəhayət elektromaqnetizmi başa düşməyə başladım.Açığı, əvvəllər bu mövzu mənə çox abstrakt gəlirdi və elektrik sahəsi...daha çox",
          likes:52,
          comments:26,
          saved:36
        },
     
    ]

    return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center mx-auto">
    {posts.map((item, index)=>(
        <div className="post-item bg-white shadow-white-700 shadow-xl rounded-2xl space-y-4" key={index}>
    <div className="flex justify-between items-center">
        <div className="flex gap-4">
        <img src="/həcər.jpg" className="rounded-full w-24 h-24"/>
        <div>
            <h4 className="font-bold text-xl">{item.author}</h4>
            <p className="text-gray-500">{item.position}</p>
            <p className="text-gray-500">{item.date}</p></div>
              </div>
<BsThreeDots/>
    </div>
                <h4 className="font-bold text-2xl">{item.title}</h4>
                <p className="text-gray-500">{item.description}</p>
           <img src="/post.jpg" className="w-full h-60 rounded-md"/>
            <div className="post-reactions flex gap-5">
            <div className="like-count flex items-center gap-2"><img src="/like.svg"></img>{item.likes}</div>
            <div className="comment-count flex items-center gap-2" ><img src="/comment.svg"></img>{item.comments}</div>
            <div className="saved-count flex items-center gap-2"><img src="/save.svg"></img>{item.saved}</div>
            <div className="share flex items-center gap-2"><img src="/share.svg"></img>Paylaş</div>
        </div>
            </div>
    ))}
        </div>
    )
}
export default Posts;
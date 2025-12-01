import { useRef,useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Select from "react-select"
const AddPost=({setActiveTab})=>{
    const [postTitle, setPostTitle]=useState("")
    const [postDesc,setPostDesc]=useState("")
    const [postImg,setPostImg]=useState("")
    const [postCategory,setPostCategory]=useState("")
    const [postTags, setPostTags]=useState("")
    const [error, setError]=useState("")

    const fileInputRef=useRef(null);

    const handleUpload=()=>{
          fileInputRef.current.click()
    }
    const handlePost=async(e)=>{
        e.preventDefault()
          if (!postTitle || !postCategory){
      setError("Bütün xanaları doldurun");
      return;
    }
        const newArticle={postTitle, postDesc, postImg, postCategory, postTags}
        try{
      const res= await axios.post("http://localhost/cothinke/server/posts/postPost.php", {newArticle},
          { headers:{ "Content-Type":"multipart/form-data"}});
         if(res.data.success){
            toast.success("Post uğurla əlavə olundu")
         }
    }
    catch(err){
        console.log(err.message)
    }
    }
    const options=[
        {value:"Riyaziyyat", label:"Riyaziyyat"},
        {value:"Fizika", label:"Fizika"},
        {value:"Tarix", label:"Tarix"}
      
    ]
    const handleSelect=(selectedCategory)=>{
        setPostCategory(selectedCategory.value)
    }
    return (
        <div className="research-form">
            <h2 className="text-center font-bold text-3xl pb-5">Post əlavə et</h2>
            <form className="mt-5" onSubmit={handlePost}>
                  {error && <p className="text-center text-red-600 bg-red-50 rounded-md p-2 font-bold text-lg mb-3">{error}</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                       <div>
                <label className="block title font-semibold pb-2" htmlFor="title" >Post əlavə et</label>
                <textarea className="w-full form-input border border-gray-300 px-3 py-1.5 outline-none rounded-lg dark:bg-gray-700 dark:text-white dark:border-none" cols={5}  rows={3}   placeholder="Post başlığı əlavə edin" onChange={(e)=>setPostTitle(e.target.value)}/>
               </div>
               <div>
 <label htmlFor="description" className="block title font-semibold pb-2" >Qısa İzah / Post Haqqında</label>
<textarea type="text" className="w-full form-input border border-gray-300 px-3 py-1.5 outline-none rounded-lg" cols={5}  rows={3}  placeholder="Post haqqında 1–2 cümləlik açıqlama" onChange={(e)=>setPostDesc(e.target.value)}/>
</div>
                </div>
                    <div className="mb-4">
 <label htmlFor="category" className="block title font-semibold pb-2">Kateqoriya</label>
<Select options={options} onChange={handleSelect} />

</div>

<div className="mb-4">
     <label htmlFor="title" className="block title font-semibold pb-2">Şəkillər</label>
     <div className="flex justify-center items-center flex-col gap-3 border border-gray-300 p-5 rounded-2xl">
    <img src="image_icon.png"/>
<input  ref={fileInputRef} type="file" placeholder="Şəkilləri buraya sürükləyin və ya" className="sr-only" accept="image/*" onChange={(e)=>setPostImg(e.target.files[0])}/>
<p className="text-gray-500">Şəkilləri buraya sürükləyin və ya</p>
    <button className="find-btn text-white bg-blue-800 rounded-md px-3 py-2 " onClick={handleUpload}>Axtar</button>
</div>
</div>
<div>
     <label htmlFor="title" className="block title font-semibold pb-2" onChange={(e)=>setPostTags(e.target.value)}>Etiketlər</label>
<input type="text" className="w-full form-input border border-gray-300 px-3 py-2 outline-none rounded-lg" placeholder="Mövzunu ifadə edən açar sözlər əlavə edin"/>
</div>
<div className="submit-form mt-5 gap-3 flex flex-col md:flex-row justify-center items-center" >
    <button className="border w-64 border-blue-800 text-blue-800 px-7 py-4" onClick={()=>setActiveTab("nothing")}>Ləğv et</button>
    <button type="submit" className="w-64 text-white bg-blue-800 px-7 py-4">Yadda Saxla</button>
</div>
            </form>
        </div>
    )
}
export default AddPost;
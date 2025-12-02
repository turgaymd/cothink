import { Link} from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Select from "react-select";
import { IoMdClose } from "react-icons/io";
const AddArticle=()=>{
    const [articleTitle, setArticleTitle]=useState("")
    const [articleDesc,setArticleDesc]=useState("")
    const [articleContent,setArticleContent]=useState("")
    const [articleImg,setArticleImg]=useState("")
    const [categoryId, setCategoryId] = useState("");
    const [articleTags, setArticleTags]=useState([])
    const [categories, setCategories]=useState([])
    const [error, setError]=useState("")
    const [input, setInput]=useState("")
    const fileInputRef=useRef(null);


      useEffect(() => {
    axios.get("http://localhost/cothink1/cothink/server/categories/categoryRead.php")
      .then((res) => {
        if (res.data.status === "success") {
          setCategories(res.data.data);
        }
      })
      .catch(() => toast.error("Category yüklənmədi"));
  }, []);

    const handleUpload=()=>{
          fileInputRef.current.click()
    }
    const handleArticle=async (e)=>{
        e.preventDefault()
        if (!articleTitle || !categoryId){
      setError("Bütün xanaları doldurun");
      return;
    }
        const newArticle={
            article_title:articleTitle, 
            description:articleDesc,
             articleContent, 
             article_img:articleImg, 
             category_id:categoryId,
            tags:articleTags}
        try{
      const res= await axios.post("http://localhost/cothinke/server/articles/articleArticle.php", {newArticle},
           { headers:{ "Content-Type":"application/json" }});
         if(res.data.success){
            toast.success("Məqalə uğurla əlavə olundu");
            setArticleTitle("");
            setArticleDesc("");
            setArticleImg("");
            setArticleTags("");
            setCategoryId("")
             setError("");
         }
    }
    catch(err){
        console.log(err.message)
    }
    }
    const handleSelect=(selectedCategory)=>{
        setCategoryId(selectedCategory.value)
    }
    const handleTags=(e)=>{
        if(e.key==="Enter" || e.key===","){
           e.preventDefault()
           const newTag=input.trim()
           if(newTag && !articleTags.includes(newTag)){
            setArticleTags([...articleTags, newTag])
            setInput("")
           }
        }
    }
    const handleRemove=(removedTag)=>{
       setArticleTags(articleTags.filter(tag=>tag!==removedTag))
    }
    return (
        <div className="research-form">
            <h2 className="text-center font-bold text-3xl pb-5">Məqalə əlavə et</h2>
            <form className="mt-5" onSubmit={handleArticle}>
                 {error && <p className="text-center text-red-600 bg-red-50 rounded-md p-2 font-bold text-lg mb-3">{error}</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                       <div>
                <label className="block title font-semibold text-gray-900 pb-2" htmlFor="title" >Məqalə başlığı</label>
                <textarea className="w-full form-input border border-gray-300 px-3 py-1.5 outline-none rounded-lg dark:bg-gray-700 dark:text-white dark:border-none" cols={5}  rows={3}   placeholder="Məqalə başlığı əlavə edin" onChange={(e)=>setArticleTitle(e.target.value)}/>
               </div>
               <div>
 <label htmlFor="description" className="block title font-semibold text-gray-900 pb-2" >Qısa izah /Məqalə haqqında</label>
<textarea type="text" className="w-full form-input border border-gray-300 px-3 py-1.5 outline-none rounded-lg" onChange={(e)=>setArticleDesc(e.target.value)} cols={5}  rows={3}  placeholder="Məqalənizin mövzusu, məqsədi və kimlər üçün faydalı olduğunu 2–3 cümlə ilə yazın"/>
</div>
                </div>
                    <div className="mb-4">
 <label htmlFor="category" className="block title font-semibold pb-2">Kateqoriya</label>
<Select options={categories.map(item=>({
value:item.category_id,
label:item.category
}))} onChange={handleSelect} placeholder="Kategoriya seçin"/>
</div>
<div className="mb-4 mt-4">
 <label htmlFor="title" className="block title font-semibold text-gray-900 pb-2" >Məqalə Məzmunu</label>
<textarea type="text" className="w-full form-input border border-gray-300 px-3 py-2 outline-none rounded-lg" cols={5}  rows={3} placeholder="Məqalənizin əsas hissəsini burada yazın – izahlar, formul və nümunələr əlavə edə bilərsiniz" onChange={(e)=>setArticleContent(e.target.value)}/>
</div>
<div className="mb-4">
     <label htmlFor="title" className="block title font-semibold text-gray-900 pb-2">Şəkillər</label>
     <div className="flex justify-center items-center flex-col gap-3 border border-gray-300 p-5 rounded-2xl">
    <img src="image_icon.png"/>
<input  ref={fileInputRef} type="file" placeholder="Şəkilləri buraya sürükləyin və ya" className="sr-only" accept="image/*" onChange={(e)=>setArticleImg(e.target.files[0].value || '')}/>
<p className="text-gray-500">Şəkilləri buraya sürükləyin və ya</p>
    <button className="find-btn text-white bg-blue-800 px-3 py-2 rounded-md" onClick={handleUpload}>Axtar</button>
</div>
</div>
<div>
    <div className="flex flex-wrap gap-2">
     <label htmlFor="title" className="block title font-semibold text-gray-900 pb-2" >Etiketlər</label>
<input type="text" className="w-full form-input border border-gray-300 px-3 py-2 outline-none rounded-lg" placeholder="Mövzunu ifadə edən açar sözlər əlavə edin" value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={handleTags}/>
    {articleTags.map((tag)=>(
        <div key={tag}className="flex  justify-between  items-center bg-blue-600 text-white rounded-md px-5 py-1">
            {tag}
           <button onClick={()=>handleRemove(tag)}><IoMdClose fontSize={20}/></button>
        </div>
    ))}
</div>
</div>
<div className="submit-form mt-5 gap-3 flex flex-col md:flex-row justify-center items-center">
    <Link className="border border-blue-800 text-blue-800 px-7 py-4" to={"/library"}>Ləğv et</Link>
    <button type="submit" className="text-white bg-blue-800 px-7 py-4">Yadda Saxla</button>
    
</div>


            </form>
        </div>
    )
}
export default AddArticle;
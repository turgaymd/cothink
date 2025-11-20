import { NavLink } from "react-router-dom";
import { useRef } from "react";
const AddArticle=()=>{
    const fileInputRef=useRef(null);

    const handleUpload=()=>{
          fileInputRef.current.click()
    }
    const handleArticle=(e)=>{
        e.preventDefault()
    }
    return (
        <div className="research-form">
            <h2 className="text-center font-bold text-3xl pb-5">Məqalə əlavə et</h2>
            <form className="mt-5" onSubmit={handleArticle}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                       <div>
                <label className="block title font-medium text-gray-900 pb-2" htmlFor="title">Məqalə başlığı</label>
                <textarea className="w-full form-input border border-gray-300 px-3 py-1.5 outline-none rounded-lg dark:bg-gray-700 dark:text-white dark:border-none" cols={5}  rows={3}   placeholder="Məqalə başlığı əlavə edin"/>
               </div>
               <div>
 <label htmlFor="description" className="block title font-medium text-gray-900 pb-2">Qısa izah /Məqalə haqqında</label>
<textarea type="text" className="w-full form-input border border-gray-300 px-3 py-1.5 outline-none rounded-lg" cols={5}  rows={3}  placeholder="Məqalənizin mövzusu, məqsədi və kimlər üçün faydalı olduğunu 2–3 cümlə ilə yazın"/>
</div>
                </div>
                    <div className="mb-4">
 <label htmlFor="description" className="block title font-medium text-gray-900 pb-2">Kateqoriya</label>
<input type="text" className="w-full form-input border border-gray-300 px-3 py-2 outline-none rounded-lg" placeholder="Riyaziyyat"/>
</div>
<div className="mb-4 mt-4">
 <label htmlFor="title" className="block title font-medium text-gray-900 pb-2">Məqalə Məzmunu</label>
<textarea type="text" className="w-full form-input border border-gray-300 px-3 py-2 outline-none rounded-lg" cols={5}  rows={3} placeholder="Məqalənizin əsas hissəsini burada yazın – izahlar, formul və nümunələr əlavə edə bilərsiniz"/>
</div>
<div className="mb-4">
     <label htmlFor="title" className="block title font-medium text-gray-900 pb-2">Şəkillər</label>
     <div className="flex justify-center items-center flex-col gap-3 border border-gray-300 p-5 rounded-2xl">
    <img src="image_icon.png"/>
<input  ref={fileInputRef} type="file" placeholder="Şəkilləri buraya sürükləyin və ya" className="sr-only"/>
<p className="text-gray-500">Şəkilləri buraya sürükləyin və ya</p>
    <button className="find-btn text-white bg-blue-800 px-3 py-2" onClick={handleUpload}>Axtar</button>
</div>
</div>
<div>
     <label htmlFor="title" className="block title font-medium text-gray-900 pb-2">Etiketlər</label>
<input type="text" className="w-full form-input border border-gray-300 px-3 py-2 outline-none rounded-lg" placeholder="Mövzunu ifadə edən açar sözlər əlavə edin"/>
</div>
<div className="submit-form mt-5 gap-3 flex justify-center">
    <NavLink className="border border-blue-800 text-blue-800 px-7 py-4" to={"/library"}>Ləğv et</NavLink>
    <button type="submit" className="text-white bg-blue-800 px-7 py-4">Yadda Saxla</button>
    
</div>


            </form>
        </div>
    )
}
export default AddArticle;
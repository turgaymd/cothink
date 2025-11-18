const AddResearch=()=>{
    return (
        <div className="research-form">
            <h2 className="text-center font-bold text-3xl pb-5">Məqalə əlavə et</h2>
            <form className="mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                       <div>
                <label className="title font-medium text-gray-900" htmlFor="title">Məqalə başlığı</label>
                <textarea className="w-full form-input border border-gray-300 px-3 py-1.5 outline-none rounded-lg dark:bg-gray-700 dark:text-white dark:border-none" cols={5}  rows={3}   placeholder="Məqalə başlığı əlavə edin"/>
               </div>
               <div>
 <label htmlFor="description" className="title font-medium text-gray-900 pb-4">Qısa izah /Məqalə haqqında</label>
<textarea type="text" className="w-full form-input border border-gray-300 px-3 py-1.5 outline-none rounded-lg" cols={5}  rows={3}  placeholder="Məqalənizin mövzusu, məqsədi və kimlər üçün faydalı olduğunu 2–3 cümlə ilə yazın"/>
</div>
                </div>
                    <div className="mb-4">
 <label htmlFor="description" className="title font-medium text-gray-900">Kateqoriya</label>
<input type="text" className="w-full form-input border border-gray-300 px-3 py-2 outline-none rounded-lg" placeholder="Riyaziyyat"/>
</div>
<div className="mb-4 mt-4">
 <label htmlFor="title" className="title font-medium text-gray-900">Məqalə Məzmunu</label>
<textarea type="text" className="w-full form-input border border-gray-300 px-3 py-2 outline-none rounded-lg" cols={5}  rows={3} placeholder="Məqalənizin əsas hissəsini burada yazın – izahlar, formul və nümunələr əlavə edə bilərsiniz"/>
</div>
<div className="mb-4">
     <label htmlFor="title" className="title font-medium text-gray-900">Şəkillər</label>
     <div className="flex justify-center items-center flex-col gap-3 border border-gray-300 p-5 rounded-2xl">
    <img src="image_icon.png"/>
<input type="file" placeholder="Şəkilləri buraya sürükləyin və ya" className="sr-only"/>
<p className="text-gray-500">Şəkilləri buraya sürükləyin və ya</p>
    <button type="submit" className="find-btn text-white bg-blue-800 px-3 py-2">Axtar</button>
</div>
</div>
<div>
     <label htmlFor="title" className="title font-medium text-gray-900">Etiketlər</label>
<input type="text" className="w-full form-input border border-gray-300 px-3 py-2 outline-none rounded-lg" placeholder="Mövzunu ifadə edən açar sözlər əlavə edin"/>
</div>
<div className="submit-form mt-5 gap-3 flex justify-center">
    <button type="submit" className="border border-blue-800 text-blue-800">Ləğv et</button>
    <button type="submit" className="text-white bg-blue-800 px-5 py-5">Yadda Saxla</button>
    
</div>


            </form>
        </div>
    )
}
export default AddResearch;
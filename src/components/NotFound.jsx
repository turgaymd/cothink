const NotFound=()=>{
    return (
     
        <div className="flex flex-col gap-4 items-center justify-center">
            <img src="cable.png" className="pt-3 animate-fadeIn"/>
        <h4 className="font-bold text-2xl pt-5">Səhifə tapılmadı</h4>
        <p className="text-gray-500 text-xl max-w-xl text-center mb-4">Axtardığınız səhifə mövcud deyil və ya başqa yerə köçürülüb. Gəlin sizi doğru istiqamətə qaytaraq.</p>
        <button className="w-1/3 bg-blue-800 px-3 py-2 text-gray-200 rounded-full">Ana səhifəyə qayıt</button>
        </div>

    )
}
export default NotFound;
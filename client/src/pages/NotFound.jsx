const NotFound=()=>{
    return (
     
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
            <img src="404.svg"/>
            <img src="cable.png" className="pt-3 animate-fadeIn"/>
        <h4 className="font-bold text-2xl pt-5">Səhifə tapılmadı</h4>
        <p className="text-gray-500 text-xl max-w-xl text-center mb-4">Axtardığınız səhifə mövcud deyil və ya başqa yerə köçürülüb. Gəlin sizi doğru istiqamətə qaytaraq.</p>
        <div>
                    <a className="w-full bg-blue-800 px-10 py-3 text-gray-200 rounded-full " href="/home">Ana səhifəyə qayıt</a>
        </div>

        </div>

    )
}
export default NotFound;
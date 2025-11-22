const Loading=()=>{
    return(
        <div className="flex justify-center flex-col items-center">
            <img src="loading.png" className="w-80 h-80 object-cover"/>
            <h2 className="font-bold text-2xl pt-4 pb-4">Yüklənir…</h2>
            <p className="font-medium text-xl "> Zəhmət olmasa gözləyin məlumatlar sizin üçün toplanır. </p>
        </div>

    )
}
export default Loading;
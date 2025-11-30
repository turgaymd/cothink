import { useNavigate } from "react-router-dom"

const Book=()=>{
    const navigate=useNavigate()
    return (
        <section>
        <div className="flex justify-center items-center gap-4 flex-col mb-5">
<h2 className="font-bold text-center text-2xl">Konvensiya</h2>
<img src="/book_1.png" className="w-24 h-24 text-center"/>
<p className="text-xl">Mathematics_and_Its_Applications_7th_Edition</p>
<h4 className="font-bold text-xl">Rosen Discrete</h4>
   <div className="post-reactions flex justify-end gap-5">
            <div className="like-count flex items-center gap-2"><img src="/like.svg"></img>52</div>
            <div className="saved-count flex items-center gap-2"><img src="/save.svg"></img>36</div>
            <div className="share flex items-center gap-2"><img src="/share.svg"></img>Paylaş</div>
 </div>
 <button className="bg-blue-800 text-white rounded-md px-4 py-2" onClick={()=>navigate('/library/books/:id/read')}>Oxumağa davam edin</button>
  </div>
<div>
<p className="text-center font-bold">Kitab haqqında </p>
<p className="pt-4">
    Kenneth H. Rosen-in “Discrete Mathematics and Its Applications” adlı kitabı informatika və  riyaziyyat sahəsində ən çox istifadə olunan dərs vəsaitlərindən biridir. Kitabın 7-ci nəşri diskret riyaziyyatın əsas anlayışlarını aydın və geniş formada izah edir. Xüsusilə kompüter elmləri, mühəndislik və əlaqəli ixtisaslarda təhsil alan tələbələr üçün nəzərdə tutulub.
Kitabda məntiq, çoxluqlar, funksiyalar, alqoritmlər, ədəd nəzəriyyəsi, kombinatorika və qraf nəzəriyyəsi kimi mövzular əhatə olunur. Həmçinin, ehtimal nəzəriyyəsi, əlaqələr, Bul algebrası və rekursiv münasibətlərlə modelləşdirmə də kitabın əsas hissələrindəndir.
Əsas üstünlüklərindən biri nəzəri biliklərlə praktiki tətbiqlərin balanslaşdırılmasıdır. Çoxlu nümunələr və müxtəlif çətinlik dərəcəsində tapşırıqlar tələbələrin mövzunu daha yaxşı mənimsəməsinə kömək edir. Dünyanın bir çox universitetində bu kitab diskret riyaziyyat dərslərində əsas dərs vəsaiti kimi istifadə olunur.
</p>
</div>
</section>
         )
}
export default Book;
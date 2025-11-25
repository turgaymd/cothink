
function Discussion(){

    return(
        <>
        <section>
<h2 className="text-center font-medium text-2xl">Diskussiya</h2>
<div className="discussion">
    <div className="discussion-item">
        <div className="post-header flex justify-between items-center">
            <div className="flex post-img items-center">
  <img className="rounded avatar" src="lalə.jpg"></img>
           
           <div className="pl-3">
           <h4 className="font-semibold">Lalə Qasımova</h4>
            <p className="text-gray-400">Tələbə – Komputer Elmləri</p>
            </div>
                </div>
               <button className="bg-blue-800 text-white rounded-full flex" >İzlə <img src="add.svg"/></button>
                    </div>
            <div className="post-title mt-4">
<p>Bu şəkildə Stack və Queue-un necə işlədiyi göstərilib. Mən tam olaraq başa düşmək istəyirəm: bu iki strukturda elementlərin əlavə olunması və silinməsi hansı qayda ilə baş verir və aralarındakı əsas fərq nədir? </p>
        </div>
        <div className="post-image pt-5">
<img  src="discuss_.png" className="rounded-md"/>
        </div>
        <div className="post-reactions flex justify-end gap-5">
            <div className="like-count flex items-center gap-2"><img src="like.svg"></img>52</div>
            <div className="comment-count flex items-center gap-2" ><img src="comment.svg"></img>26</div>
            <div className="saved-count flex items-center gap-2"><img src="save.svg"></img>36</div>
            <div className="share flex items-center gap-2"><img src="share.svg"></img>Paylaş</div>
        </div>
    </div>

</div>
<div className="comments">
    <h4 className="mb-5 mt-5 font-bold">Rəylər</h4>
    <div className="comment-item">
          <div className="comment-header flex items-center">
            <img  className="rounded-md avatar" src="həcər.jpg"></img>
            <div className="pl-4">
           <h4 className="font-semibold">Həcər Quliyeva</h4>
            <p className="text-gray-500">Tələbə – Kompüter Mühəndisliyi</p>
            <p className="mt-3 text-black">Stack son daxil olanı birinci çıxarır, Queue isə birinci daxil olanı birinci.</p>
            </div>
                    </div>
            <div className="flex justify-end gap-5 comment-reactions">
            <div className="like-count flex items-center gap-2"><img src="like.svg"></img>52</div>
            <div className="comment-count flex items-center gap-2" ><img src="comment.svg"></img>26</div>
        </div>
    </div>
</div>
            
        </section>
      </>

    )
}
export default Discussion
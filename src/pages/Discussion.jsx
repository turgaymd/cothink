
function Discussion(){

    return(
        <>
<h2 className="text-center font-medium text-2xl">Diskussiya</h2>
<div className="discussion">
    <div className="discussion-item">
        <div className="post-header flex justify-between items-center">
            <div className="flex post-img items-center">
  <img className="rounded avatar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAACUCAMAAAAanWP/AAAAQlBMVEX6+vqPj4+Li4v///+ioqLx8fGIiIiFhYXs7Ozh4eH39/eurq6YmJifn5+8vLzFxcXZ2dm0tLTT09N/f3/Nzc2oqKjrpnagAAAECElEQVR4nO2c23asIAxAhchFBLz//68emEs77bQqVCGuw37odLUvWyZgJMGqKhQKhUKhUCgUCoX/DriTWyMGZ81kc0Oy6lrXAMD6zi611oRoXbe269VlrgCgGQyhnFJyg7pfdW2bS1wAQG/o0/wT94ca/wVA1ZDpu/qTScvcfuuAHMRv8h5hGeIvAEbD1+wJ4XWP1h8seYv59znQIfUHuzH0d3+O0x+GPfY+gCxG/11jf/fvcru+M2+G/Wf8EHTzt9metS/+2G4AoAPsXfgsqIYfutW71TtiROQPLNDe+Ss8/tCG2hOKZ/WERgfrEy2x+IMNmreP4cdy8wVZx+gvLLf4HRgj7B1I7l1qf7rwCpbUgcXEjoueFkf0yBh54tee3OYe6IPvWXd4gyL450h9gWPuxs1cp49j7rZx66Z76sptfmOJ1R9ym9+IWzeL/jFcPPb3bpB8B8nKE/qg+KE/5jb3XPyuC01k8BAUOU8lwzZJnmB5XonM95HM3AoC9gdfwZGxxW00EFrjCH3HEPOojmajB8aI0dcols0bEJ720BaNfczSz9FEfuU3OQP9BZrIv8HCoodqldv4C4GJj8Azbx/YAH8xY7Ov1P60H8lzyheALXvrugOiysoHINtd8SMGnG0ZoPb4C1uhtHeoTmwsoBThrP3EJZ9r/pQaNBWtH4HK6vdOsKe87vC3g0lr+A9rEKfG4h76O1A1c0vFlyvgggyjRD/0d6BSch60mCbhcD+1c79OI+cDJZt+HPtGqgrtWrkGXLiJuVAo4ARAsUPIcTgBKjnatj6A1vbJ78fArKGCHgEX1HRpn798YhxZkPslF02ZzcG49VgSfAEJK0XQx5aD1kg1/sDMwWPvSVcr6k6wd/5zGnt5xuD7ckuS4Y+u4276p5m9se1HW6QpNarY/p0t0mx9qnNC39eL0uifY1/09+lfO3him7+2SNQcdt7Kk6ReF9v8tUWiFpPY5q9N/SRJj0v2z9FPk/JDc459qsM47Jy5y4dElfZzcrZU53ihP8M+XYNP5GGVdeiSRt4fsDzenpB0hzBVTO/dOrROt9FzwtKftEUG6oMXH5G0tQ3kkXuEvrsqbUPwsdsNKbcIH/7zgeFDMxz9jjmk+wtZuky6Y8af0kw9MvMR2+SU53ppgEt+/vwFiIy9zMCWvy1ANG9bHsD4hyoRpSb3EQRgVvO4syvUYOjKg6Yz4XOYCtPhaK7yJV4zBU1iMS2jRDD0T5S0fNo5jcVELKbufQ8AyE7fQnolYvz/TMdwdij5VxHatjbav8eP85fCOfezW5u6Rf5yQvclKNmMnbVDuyyL71lwH+1g7Tw2srpCZ9ijf40xyaTDfajqmk1tV3QuFAqFQqFQKBQKhSP4B/JIMfA4aLOsAAAAAElFTkSuQmCC"></img>
           <div className="pl-3">
           <h4 className="font-semibold">Lalə Qasımova</h4>
            <p>Tələbə – Komputer Elmlər</p>
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
<div className="comments mt-5">
    <h4 className="mb-5 mt-5 font-bold">Rəylər</h4>
    <div className="comment-item">
          <div className="comment-header flex items-center">
            <img  className="rounded-md avatar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAACUCAMAAAAanWP/AAAAQlBMVEX6+vqPj4+Li4v///+ioqLx8fGIiIiFhYXs7Ozh4eH39/eurq6YmJifn5+8vLzFxcXZ2dm0tLTT09N/f3/Nzc2oqKjrpnagAAAECElEQVR4nO2c23asIAxAhchFBLz//68emEs77bQqVCGuw37odLUvWyZgJMGqKhQKhUKhUCgUCoX/DriTWyMGZ81kc0Oy6lrXAMD6zi611oRoXbe269VlrgCgGQyhnFJyg7pfdW2bS1wAQG/o0/wT94ca/wVA1ZDpu/qTScvcfuuAHMRv8h5hGeIvAEbD1+wJ4XWP1h8seYv59znQIfUHuzH0d3+O0x+GPfY+gCxG/11jf/fvcru+M2+G/Wf8EHTzt9metS/+2G4AoAPsXfgsqIYfutW71TtiROQPLNDe+Ss8/tCG2hOKZ/WERgfrEy2x+IMNmreP4cdy8wVZx+gvLLf4HRgj7B1I7l1qf7rwCpbUgcXEjoueFkf0yBh54tee3OYe6IPvWXd4gyL450h9gWPuxs1cp49j7rZx66Z76sptfmOJ1R9ym9+IWzeL/jFcPPb3bpB8B8nKE/qg+KE/5jb3XPyuC01k8BAUOU8lwzZJnmB5XonM95HM3AoC9gdfwZGxxW00EFrjCH3HEPOojmajB8aI0dcols0bEJ720BaNfczSz9FEfuU3OQP9BZrIv8HCoodqldv4C4GJj8Azbx/YAH8xY7Ov1P60H8lzyheALXvrugOiysoHINtd8SMGnG0ZoPb4C1uhtHeoTmwsoBThrP3EJZ9r/pQaNBWtH4HK6vdOsKe87vC3g0lr+A9rEKfG4h76O1A1c0vFlyvgggyjRD/0d6BSch60mCbhcD+1c79OI+cDJZt+HPtGqgrtWrkGXLiJuVAo4ARAsUPIcTgBKjnatj6A1vbJ78fArKGCHgEX1HRpn798YhxZkPslF02ZzcG49VgSfAEJK0XQx5aD1kg1/sDMwWPvSVcr6k6wd/5zGnt5xuD7ckuS4Y+u4276p5m9se1HW6QpNarY/p0t0mx9qnNC39eL0uifY1/09+lfO3him7+2SNQcdt7Kk6ReF9v8tUWiFpPY5q9N/SRJj0v2z9FPk/JDc459qsM47Jy5y4dElfZzcrZU53ihP8M+XYNP5GGVdeiSRt4fsDzenpB0hzBVTO/dOrROt9FzwtKftEUG6oMXH5G0tQ3kkXuEvrsqbUPwsdsNKbcIH/7zgeFDMxz9jjmk+wtZuky6Y8af0kw9MvMR2+SU53ppgEt+/vwFiIy9zMCWvy1ANG9bHsD4hyoRpSb3EQRgVvO4syvUYOjKg6Yz4XOYCtPhaK7yJV4zBU1iMS2jRDD0T5S0fNo5jcVELKbufQ8AyE7fQnolYvz/TMdwdij5VxHatjbav8eP85fCOfezW5u6Rf5yQvclKNmMnbVDuyyL71lwH+1g7Tw2srpCZ9ijf40xyaTDfajqmk1tV3QuFAqFQqFQKBQKhSP4B/JIMfA4aLOsAAAAAElFTkSuQmCC"></img>
            <div className="pl-4">
           <h4 className="font-semibold">Həcər Quliyeva</h4>
            <p className="text-gray-500">Tələbə – Kompüter Mühəndisliyi</p>
            <p className="mt-3">Stack son daxil olanı birinci çıxarır, Queue isə birinci daxil olanı birinci.</p>
            </div>
                    </div>
            <div className="flex justify-end gap-5 comment-reactions">
            <div className="like-count flex items-center gap-2"><img src="like.svg"></img>52</div>
            <div className="comment-count flex items-center gap-2" ><img src="comment.svg"></img>26</div>
        </div>
    </div>
</div>
      </>

    )
}
export default Discussion
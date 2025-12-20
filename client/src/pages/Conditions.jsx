import { Link } from "react-router-dom";

const Privacy=()=>{
    return(
        <section>
        <div>
            <div className="flex justify-between items-center mb-5">
                <div>
                    <img src="/images/logo.jpg" className="md:flex hidden"/>
                    <img src="/images/logo.svg" className="flex md:hidden"/>
                </div>
                <div>
                       <Link
          to="/register"
          className="text-blue-800 rounded-3xl border border-blue-800  px-6 py-2 hover:opacity-90 transition whitespace-nowrap"
        >
          Qeydiyyat
        </Link>
                </div>
            </div>
          <h2 className="text-blue-800 font-semibold text-center text-2xl mb-7">Qaydalar və Şərtlər</h2>
    <h2 className="text-black  font-bold text-center text-lg mb-7">Son yenilənmə tarixi: 2025</h2>
          <p>Bu Qaydalar və Şərtlər (bundan sonra – “Şərtlər”, “Razılaşma”) CoThink rəqəmsal təhsil platformasının (bundan sonra – “CoThink”, “Platforma”, “Biz”, “Bizim”) istifadəsini tənzimləyən hüquqi sənəddir və Platformadan istifadə edən bütün fiziki və hüquqi şəxslər üçün məcburidir.
Platformaya daxil olmaqla, qeydiyyatdan keçməklə, hesab yaratmaqla və ya Platformada təqdim olunan istənilən xidmət və funksiyadan istifadə etməklə Siz (“İstifadəçi”, “Siz”, “Sizin”) bu Şərtləri tam şəkildə oxuduğunuzu, başa düşdüyünüzü, hüquqi nəticələrini dərk etdiyinizi və heç bir qeyd-şərt qoymadan qəbul etdiyinizi təsdiq etmiş olursunuz.
<br></br>Əgər bu Şərtlərin hər hansı bir müddəası ilə razı deyilsinizsə, Platformadan istifadənizi dərhal dayandırmalı və xidmətlərdən faydalanmamalısınız.
<br></br>Bu Razılaşma CoThink platformasında təqdim olunan bütün xidmətlərə, funksiyalara və məhsullara, o cümlədən, lakin bunlarla məhdudlaşmamaq şərti ilə aşağıdakılara şamil edilir:</p>
<ul className="list-disc pl-5">
<li>sual-cavab və müzakirə mexanizmləri;</li>
<li>mentorluq proqramları, video dərslər və izahlı materiallar;</li>
<li>resurs kitabxanası (PDF, məqalə, konspekt və digər tədris materialları);</li>
<li>fərdi və qrup mesajlaşma imkanları;</li>
<li>süni intellekt (AI) əsaslı tövsiyə, filtrasiya və analiz sistemləri;</li>
<li>premium, abunəlik əsaslı və digər ödənişli xidmətlər;</li>
<li>Platformaya sonradan əlavə edilə biləcək bütün digər funksiyalar.</li>
</ul>
        </div>
        <div className="mt-12 mb-12">
            <h4 className="font-bold text-blue-800">1. Təriflər və Anlayışlar</h4>
            <ul className="">
                <li>1.1. Platforma – CoThink adı altında fəaliyyət göstərən veb-sayt, mobil tətbiq və əlaqəli rəqəmsal xidmətlər</li>
                 <li>1.2. İstifadəçi – Platformadan qeydiyyatlı və ya qeydiyyatsız şəkildə istifadə edən hər bir şəxs.</li>
                  <li>1.3. Mentor – CoThink tərəfindən təsdiqlənmiş və Platformada tədris, izah və istiqamətləndirmə funksiyasını yerinə yetirən şəxs.</li>
                   <li>1.4. Məzmun – Platformada yerləşdirilən və ya paylaşılan bütün mətn, video, audio, qrafik materiallar, fayllar, cavablar və şərhlər.</li>
                  
            </ul>
        </div>
        <div className="mt-12 mb-12">
            <h4 className="font-bold text-blue-800">2. Ümumi Hüquqi Müddəalar</h4>
            <ul className="">
                <li>2.1. CoThink təhsil və maarifləndirmə məqsədli rəqəmsal platformadır və kommersiya fəaliyyəti yalnız təqdim edilən xidmətlərin davamlılığının təmin edilməsi məqsədi daşıyır.</li>
                 <li>2.2. Platformada təqdim edilən məlumatlar rəsmi təhsil proqramlarını, dövlət tərəfindən təsdiq edilmiş dərslikləri, elmi tədqiqatları və ya akademik ekspertiza rəyini əvəz etmir.</li>
                  <li>2.3. CoThink heç bir halda İstifadəçiyə akademik uğur, imtahan nəticəsi, sertifikat əldə edilməsi və ya karyera yüksəlişi ilə bağlı zəmanət vermir.</li>
                   <li>2.4. Platformadan istifadə üçün minimum yaş həddi 14 yaşdır və ya müvafiq yerli qanunvericiliklə müəyyən edilmiş minimum yaş.</li>
            </ul>
        </div>
        <div className="mt-12 mb-12">
            <h4 className="font-bold text-blue-800">3. İstifadəçi Hesabı, Qeydiyyat və Təhlükəsizlik</h4>
            <ul className="">
                <li>3.1. Platformanın bəzi və ya bütün funksiyalarından istifadə etmək üçün İstifadəçi hesabının yaradılması tələb oluna bilər.</li>
                 <li>3.2. Qeydiyyat zamanı təqdim edilən məlumatların düzgünlüyü, aktuallığı və tamlığı İstifadəçinin məsuliyyətindədir.</li>
                  <li>3.3. İstifadəçi öz hesab məlumatlarının məxfiliyini qorumağa borcludur və hesabdan istifadə nəticəsində yaranan bütün fəaliyyətlərə görə məsuliyyət daşıyır.</li>
                   <li>3.4. CoThink hesabın təhlükəsizliyinin pozulması, icazəsiz giriş və ya üçüncü şəxslərin fəaliyyəti nəticəsində yaranan hər hansı zərərə görə məsuliyyət daşımır.</li>
            </ul>
        </div>
        <div className="mt-12 mb-12">
            <h4 className="font-bold text-blue-800">4. İstifadəçi Davranışı və Qadağalar</h4>
            <ul className="">
                <li>4.1. İstifadəçi Platformadan istifadə edərkən qüvvədə olan qanunvericiliyə, etik normalara və bu Şərtlərə əməl etməlidir.</li>
                  <li>4.2. Aşağıdakı hərəkətlər qəti qadağandır:</li>
                  <ul className="list-disc pl-5">
                    <li>yalan, yanlış və ya aldadıcı məlumatların paylaşılması;</li>
                     <li>nifrət nitqi, təhqir, hədə-qorxu və diskriminasiya;</li>
                     <li>müəllif hüquqlarının pozulması və plagiat;</li>
                     <li>spam, icazəsiz reklam və kommersiya fəaliyyəti;</li>
                     <li>platformanın texniki işinə müdaxilə;</li>
                     <li>digər istifadəçilərin hüquqlarının pozulması.</li>
</ul>
            </ul>
        </div>
        <div className="mt-12 mb-12">
            <h4 className="font-bold text-blue-800">5. İstifadəçi Məzmunu və Lisenziyalaşdırma</h4>
            <ul className="">
                <li>5.1. İstifadəçi Platformada paylaşdığı və ya yüklədiyi bütün məzmunun (mətn, cavab, şərh, video, audio, şəkil, fayl, link və digər materiallar daxil olmaqla) hüquqi sahibi olduğunu və ya həmin məzmunu paylaşmaq üçün lazımi hüquq və icazələrə malik olduğunu bəyan və zəmanət verir.</li>
                  <li>5.2. İstifadəçi paylaşdığı məzmunun qüvvədə olan qanunvericiliyi, üçüncü şəxslərin müəlliflik, əlaqəli və digər mülki hüquqlarını, habelə etik normaları pozmadığını təsdiq edir. Bu tələbin pozulması nəticəsində yaranan bütün iddia, zərər və məsuliyyətlərə görə məsuliyyət tam şəkildə İstifadəçinin üzərində qalır.</li>
                   <li>5.3. İstifadəçi Platformada məzmun paylaşmaqla CoThink-ə həmin məzmunu dünya üzrə, müddətsiz, ödənişsiz, geri götürülməz və qeyri-eksklüziv əsasda aşağıdakı məqsədlərlə istifadə etmək üçün lisenziya verir:</li>
            <li>5.4. CoThink məzmunun dəyişdirilməsi, silinməsi və ya məhdudlaşdırılması ilə bağlı qərarları istənilən vaxt, əvvəlcədən xəbərdarlıq etmədən qəbul edə bilər və bu qərarlara görə İstifadəçi qarşısında heç bir məsuliyyət daşımır.</li>
            <li>5.5. CoThink Platformada yerləşdirilən məzmunun düzgünlüyünə, tamlığına və aktuallığına zəmanət vermir və həmin məzmunun istifadəsi nəticəsində yarana biləcək hər hansı birbaşa və ya dolayı zərərə görə məsuliyyət daşımır.</li>
            <li>5.6. İstifadəçi tərəfindən paylaşılan məzmunun Platformadan silinməsi CoThink-ə verilmiş lisenziyanın əvvəlki dövr üçün qüvvəsini aradan qaldırmır.</li>
            </ul>
        </div>
        <div className="mt-12 mb-12">
            <h4 className="font-bold text-blue-800">6. Mentorlarla Bağlı Xüsusi Müddəalar</h4>
            <ul className="">
                <li>6.1. Mentor statusu yalnız CoThink tərəfindən aparılan daxili qiymətləndirmə, yoxlama və təsdiq prosedurundan sonra verilir. CoThink mentor statusunun verilməsi, dayandırılması və ya ləğv edilməsi ilə bağlı istənilən qərarı təkbaşına qəbul etmək hüququnu özündə saxlayır.</li>
                 <li>6.2. Mentorlar Platformada təqdim etdikləri bütün video dərslərin, izahların, tövsiyələrin, resursların və digər məzmunun akademik, etik və hüquqi baxımdan düzgün, aktual və etibarlı olmasına görə tam məsuliyyət daşıyırlar.</li>
                  <li>6.3. Mentorlar öz bilik, təcrübə, təhsil və peşə fəaliyyəti barədə yanlış, aldadıcı və ya təsdiqlənməmiş məlumat təqdim etdikdə, CoThink mentor statusunu dərhal ləğv edə və hesabı xəbərdarlıq etmədən silə bilər.</li>
                   <li>6.4. Mentorlar tərəfindən yüklənmiş və ya paylaşılan bütün məzmun qeyri-eksklüziv əsasda CoThink tərəfindən Platformanın tanıdılması, inkişafı, təkmilləşdirilməsi və marketinq məqsədləri üçün istifadə oluna bilər.</li>
                  <li>6.5. Mentor və İstifadəçi arasında Platformadan kənar qurulan hər hansı hüquqi və ya maliyyə münasibətləri CoThink-in məsuliyyət dairəsinə daxil deyil.</li>
            </ul>
        </div>
        <div className="mt-12 mb-12">
            <h4 className="font-bold text-blue-800">7. Ödənişlər, Abunəliklər və Geri Qaytarma Şərtləri</h4>
            <ul className="">
                <li>7.1. CoThink Platformasında təqdim edilən bəzi funksiyalar, xidmətlər və məzmun yalnız ödənişli və ya abunəlik əsaslı paketlər çərçivəsində əlçatan ola bilər.</li>
                 <li>7.2. Bütün ödənişlər Platformada göstərilən şərtlərə, tariflərə və qiymətlərə uyğun olaraq həyata keçirilir və İstifadəçi ödəniş etməzdən əvvəl müvafiq məlumatlarla tanış olmaq öhdəliyi daşıyır.</li>
                  <li>7.3. Qanunvericilikdə açıq şəkildə nəzərdə tutulmuş hallar istisna olmaqla, həyata keçirilmiş ödənişlər geri qaytarılmır və dəyişdirilmir.</li>
                   <li>7.4. Abunəliklər avtomatik yenilənə bilər. İstifadəçi istənilən vaxt şəxsi hesab parametrləri vasitəsilə avtomatik yenilənməni deaktiv edə bilər.</li>
           <li>7.5. CoThink qiymətləri, paket tərkibini və ödəniş şərtlərini əvvəlcədən xəbərdarlıq etməklə dəyişdirmək hüququnu özündə saxlayır.</li>
            </ul>
        </div>
           <div className="mt-12 mb-12">
            <h4 className="font-bold text-blue-800">8. Süni İntellekt (AI) Sistemləri və Risklərin Qəbul Edilməsi</h4>
            <ul className="">
                <li>8.1. Platformada istifadə edilən süni intellekt əsaslı sistemlər yalnız köməkçi və dəstək xarakteri daşıyır və rəsmi akademik mənbə hesab edilmir.</li>
                 <li>8.2. AI tərəfindən təqdim edilən cavablar, tövsiyələr və analizlər səhv, natamam və ya kontekstdən kənar ola bilər. İstifadəçi bu nəticələrdən istifadə zamanı bütün riskləri özü qəbul edir.</li>
                  <li>8.3. CoThink süni intellekt sistemlərinin verdiyi nəticələrə əsasən qəbul edilən qərarlara görə heç bir hüquqi və ya maliyyə məsuliyyəti daşımır.</li>

            </ul>
        </div>
           <div className="mt-12 mb-12">
            <h4 className="font-bold text-blue-800">9. Məxfilik, Şəxsi Məlumatların Toplanması və Qorunması</h4>
            <ul className="">
                <li>9.1. CoThink İstifadəçilərin şəxsi məlumatlarının qorunmasına ciddi yanaşır və məlumatların emalını qüvvədə olan qanunvericiliyə uyğun şəkildə həyata keçirir.</li>
                 <li>9.2. Şəxsi məlumatların toplanması, saxlanılması, işlənməsi və qorunması ayrıca təsdiq edilmiş "Məxfilik Siyasəti" ilə tənzimlənir.</li>
                  <li>9.3. İstifadəçi istənilən vaxt şəxsi hesabının silinməsini tələb edə bilər. Qanunvericilikdə tələb olunan hallar istisna olmaqla, şəxsi məlumatlar silinəcəkdir.</li>
            </ul>
        </div>
           <div className="mt-12 mb-12">
            <h4 className="font-bold text-blue-800">10. Xidmətlərin Dayandırılması, Məhdudlaşdırılması və Ləğvi</h4>
            <ul className="">



               <li>                10.1. CoThink istənilən vaxt texniki, hüquqi və ya təşkilati səbəblərlə Platformanın fəaliyyətini müvəqqəti və ya daimi olaraq dayandıra, məhdudlaşdıra və ya dəyişdirə bilər.</li>
                   <li>10.2. İstifadəçi bu Şərtləri pozduqda, CoThink hesabı müvəqqəti dayandırmaq, məhdudlaşdırmaq və ya tamamilə silmək hüququna malikdir.</li>
                   <li>10.3. Hesabın ləğvi istifadəçinin bu Şərtlər çərçivəsindəki öhdəliklərini aradan qaldırmır.</li>
              
            </ul>
        </div>
           <div className="mt-12 mb-12">
            <h4 className="font-bold text-blue-800">11. Məsuliyyətin Məhdudlaşdırılması və İmtina</h4>
            <ul className="">
                <li>11.1. CoThink Platformadan istifadənin fasiləsiz, səhvsiz və təhlükəsiz olacağına dair heç bir zəmanət vermir.</li>
                <li>11.2. CoThink Platformadan istifadə nəticəsində yarana biləcək birbaşa, dolayı, təsadüfi və ya ardıcıl zərərlərə görə məsuliyyət daşımır.</li>
            <li>11.3. Platformada yerləşdirilən məzmun İstifadəçinin şəxsi qərarları üçün əsas hesab edilə bilməz.</li>
            </ul>
        </div>
           <div className="mt-12 mb-12">
            <h4 className="font-bold text-blue-800">12. Qaydaların və Şərtlərin Dəyişdirilməsi</h4>
            <ul className="">
                <li>12.1. CoThink bu Şərtləri istənilən vaxt birtərəfli qaydada dəyişdirmək, yeniləmək və ya genişləndirmək hüququna malikdir.</li>
                <li>12.2. Yenilənmiş Şərtlər Platformada dərc edildiyi tarixdən etibarən qüvvəyə minir.</li>
                <li>12.3. Platformadan istifadənin davam etdirilməsi dəyişikliklərin qəbul edilməsi kimi qiymətləndirilir.</li>
              
            </ul>
        </div>
           <div className="mt-12 mb-12">
            <h4 className="font-bold text-blue-800">13. Tətbiq Olunan Hüquq və Mübahisələrin Həlli</h4>
            <ul className="">
            
                   <li>13.1. Bu Razılaşma Azərbaycan Respublikasının qanunvericiliyinə uyğun olaraq tənzimlənir və şərh olunur.</li>
                     <li>13.2. Tərəflər arasında yaranan mübahisələr ilkin olaraq danışıqlar yolu ilə həll edilməyə çalışılacaqdır.</li>
                       <li>13.3. Razılıq əldə olunmadığı halda mübahisələr Azərbaycan Respublikasının aidiyyəti məhkəmələrində həll edilir.</li>
            </ul>
        </div>
           <div className="mt-12 mb-12">
            <h4 className="font-bold text-blue-800">14. Əlaqə Məlumatları</h4>
            <ul className="">
                <li>Bu Qaydalar və Şərtlərlə bağlı sual, müraciət və şikayətlər üçün bizimlə əlaqə saxlaya bilərsiniz:</li>
                 <li>📧 E-poçt: <a className="underline underline-offset-1">support@cothink.az</a></li>
                  <li> 🌐 Vebsayt: <a className="underline underline-offset-1">www.cothink.az</a></li>
                   
            </ul>
        </div>
        </section>
    )
}
export default Privacy;
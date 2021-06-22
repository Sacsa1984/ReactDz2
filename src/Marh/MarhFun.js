import React from "react";
import { Link}from "react-router-dom";

export function Opisan()
{return(
    <div>
        Город основан в 1775 году и расположен на месте слияния рек Ингулец и Саксагань. Седьмой по численности населения город Украины[5], 
        центр Криворожской агломерации. Один из самых длинных городов Европы — линейное расстояние от крайней северной точки до южной 66,1 км по
         прямой[6]. На официальном сайте исполкома Криворожского городского совета указанная длина города — 126 км[7].
Кривой Рог — важный экономический и научный центр Украины, крупный транспортный узел, центр разработки Криворожского железорудного бассейна.
    
<Link to="/vneResurs" className="links">
   <h2>Внешние ресурсы  </h2>
   </Link>
    </div>
);
}

export function Dostopri()
{
return(
    <div>
        <div>Главной достопримечятильностью города явлается 95 кв</div>
        
         <img src="Kryvyi_Rih.jpg"></img>
    
         <Link to="/vneResurs" className="links">
   <h2>Внешние ресурсы  </h2>
   </Link>
    </div>
);

}

export function Galer()
{
    const galer=['Krivoy.jpg','Krivoy_Rog3.jpg','Kryvyi_Rih1.jpg',"Станція_Кривий_Ріг2.jpg"]
    return galer.map((galer)=><img  src={galer} width="200" height="222"></img> ) ;

}

export function VneResurs()
    {
return(
    
        <future>
            
      <br/>
      <a href="https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B8%D0%B2%D0%BE%D0%B9_%D0%A0%D0%BE%D0%B3">«Вся информация»</a>
      <br/>
      <a href="https://kr.gov.ua/">" Веб портал Криворізької міської ради"</a>    
      <br/>
      <a href="https://www.facebook.com/groups/kbpie">"Криворожское бюро путешествий и экскурсий"</a>
      
    
    </future>
);
    }



export function MyMen()
{
    return(<div>
    
    <Link to="/opisan" className="links">
   <h2 >Описание </h2>
   </Link>

   <Link to="/dostopri" className="links">
   <h2>Главная достопримечятельность </h2>
   
   </Link>

   <Link to="/galer" className="links">
   <h2> Галерея</h2>
   </Link>
   
   </div>
   );
   
}

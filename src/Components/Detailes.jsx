import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {SHOW_BODY} from '../Actions/index'
import '../Styles/Detailes.css'
export default function Detailes() {
    //name:"",flag:"",nativeName:"",population:"",region:"",subRegion:"",capital:"",borderCountry:[],topLevelDomain:"",currencies:"",languages:[]
    const visablity = useSelector(state=>state.Visablity )
    const data = useSelector(state=>state.Data )
    console.log(data);
    console.log(data.currencies);
    console.log(data.borderCountry);
    const dispatch = useDispatch();
  return <div id={visablity.DetailesVisablity} className="DetailesContainer">
        <div className="backBtn" onClick={()=>dispatch(SHOW_BODY())}>
            <img src="https://img.icons8.com/ios-glyphs/15/000000/arrow-pointing-left--v2.png"/>
            <a href="#" >Back</a>
        </div>
      <div className='DetailsInnerContainer'>
      <img src={data.flag} alt="flag" />
      <div className='countryDescrition'>
      <h1>{data.name}</h1>
      <div className='colums'>
      <div>
      <p>Native Name:<span>{data.nativeName}</span></p>
      <p>Population:<span>{data.population}</span></p>
      <p>Region:<span>{data.region}</span></p>
      <p>Sub Region:<span>{data.subRegion}</span></p>
      <p>Capital:<span>{data.capital}</span></p>
      </div>
      <div>
      <p>Top Level Domain:<span>{data.topLevelDomain}</span></p>
      <p>Currencies:{data.currencies.map((item,index)=><span key={index}>{item.name}</span>)}</p>
      <p>Languages:{data.languages.map((item,index)=><span key={index}>{item.name}</span>)}</p>
      </div>
      </div>
      <p>Borders:<div className='bordersContainer'>{
      data.borderCountry.map((item,index)=><div key={index}>{item}</div>)
      }</div></p>
      </div>
      </div>
      </div>;
}

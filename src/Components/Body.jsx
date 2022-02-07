import React from "react";
import '../Styles/Body.css'
import loading from '../loading.gif';
import { connect } from "react-redux";
import { SEND_DATA, SHOW_DETAILES } from "../Actions";
class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    countries: null,
    filterCountries:null,
    url :"https://restcountries.com/v2/all",
    item: ""
  };

  async componentDidMount() {
    const url =this.state.url;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ countries: data.filter(i => i.name!="Israel"), loading: false});
    this.setState({filterCountries:this.state.countries })
    console.log(this.state);
  }

  render() {
    if (this.state.loading) {
      return <div className="loading"><img src={loading} alt="" /></div>;
    }

    if (!this.state.filterCountries) {
      return <div>didn't get a countries</div>;
    }
    const addItem = (event1) => {
      this.setState({
          item:event1.target.value
    })}
    const handleKeypress = (e) => {
    if (e.charCode === 13) {
      console.log("clicked");
      this.setState({filterCountries:this.state.countries.filter(i => i.name==this.state.item)});
    }
  }; 
    return (
      <div id={this.props.Visablity.BodyVisablity} className='BodyContainer'>
    <div className='bodyHeader'>
      <div className='searchContainer'>
      <img onClick={()=>this.setState({filterCountries:this.state.countries.filter(i => i.name==this.state.item)})}src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/15/000000/external-search-ui-dreamstale-lineal-dreamstale.png"/>
        <input type="text" placeholder='search' onChange={addItem} onKeyPress={handleKeypress}/>
      </div>
    <div className="dropdown">
      <button className="dropbtn">Filter By Region</button>
      <div className="dropdown-content">
        <a href="#" onClick={()=>this.setState({filterCountries:this.state.countries.filter(i => i.region=="Africa"),loading:false})}>Africa</a>
        <a href="#" onClick={()=>this.setState({filterCountries:this.state.countries.filter(i => i.region=="Americas"),loading:false})}>America</a>
        <a href="#" onClick={()=>this.setState({filterCountries:this.state.countries.filter(i => i.region=="Asia"),loading:false})}>Asia</a>
        <a href="#" onClick={()=>this.setState({filterCountries:this.state.countries.filter(i => i.region=="Europe"),loading:false})}>Europe</a>
        <a href="#" onClick={()=>this.setState({filterCountries:this.state.countries.filter(i => i.region=="Oceania"),loading:false})}>Oceania</a>
      </div>
  </div>
  </div>
  <div className='cardsContainer'>
    {this.state.filterCountries.map((i,index)=><div key={index} onClick={()=>{this.props.SHOW_DETAILES();
      if(i.borders !=undefined){
      this.props.SEND_DATA({name:i.name,flag:i.flag,nativeName:i.nativeName,population:i.population,region:i.region,subRegion:i.subregion,capital:i.capital,borderCountry:i.borders,topLevelDomain:i.topLevelDomain,currencies:i.currencies,languages:i.languages});
      }else{
        this.props.SEND_DATA({name:i.name,flag:i.flag,nativeName:i.nativeName,population:i.population,region:i.region,subRegion:i.subregion,capital:i.capital,borderCountry:["There is no Borders"],topLevelDomain:i.topLevelDomain,currencies:i.currencies,languages:i.languages})
      }}} className="card">
        <img src={i.flag} alt="h" />
        <div className="cardDescription">
        <h2>{i.name}</h2>
        <p>population:<span>{i.population}</span></p>
        <p>region:<span>{i.region}</span></p>
        <p>Capital:<span>{i.capital}</span></p>
        </div>
      </div> 
    )}
  </div>
    </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { Visablity: state.Visablity };
};
const matchDispatchToProps = (dispatch)=>{
  return{
    SHOW_DETAILES: data =>{ dispatch(SHOW_DETAILES())},
    SEND_DATA:data=> {dispatch(SEND_DATA(data))}
  }
}
export default connect(mapStateToProps,matchDispatchToProps)(FetchRandomUser);
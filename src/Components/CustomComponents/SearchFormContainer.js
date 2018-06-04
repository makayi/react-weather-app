import  React,{Component} from 'react'
import SearchButton from '../CustomComponents/SearchButton'
import SearchInput from '../CustomComponents/SearchInput'

class SearchFormContainer  extends Component{
  constructor(props){
    super(props);
    this.state={
      searchTerm:''
    }
  }

 componentDidMount(){
  this.getMoviesFromApiAsync();
 }

  getMoviesFromApiAsync() {
  return fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=68bceb4fa74247f891b72a68a008b413')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      return responseJson.weather;
    })
    .catch((error) => {
      console.error(error);
    });
}
  handleEventFormInputEvents=({target:{value}},inputName)=>{
    switch (inputName) {
      case 'button':

        break;
     case 'input':
       this.setState({
         searchTerm:value
       });

        
       break;
      default:
        break;
    }
  }
  render(){
    return(
      
        <form className="form-inline">
        <SearchInput
         placeholder="Search"
         content={this.state.searchTerm}
         controlFunc={e=>this.handleEventFormInputEvents(e,'input')}
         styleCSS="form-control mr-sm-2"
    />
  
   <SearchButton
   styleCss="btn btn-outline-success my-2 my-sm-0 " 
   type="submit"
   title="Search"
   name="searchBtn"
   onClick={e=>this.handleEventFormInputEvents(e,'button')}/>
 </form>

    );
  }
}


export default SearchFormContainer;




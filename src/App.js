import React from 'react';
import IistItem from './components/ListItem'
import getCarlist from './utils/action'
import classnames from 'classnames';

require('./App.css')
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  componentWillMount(){

    getCarlist({
      callback:(res)=>{
        console.log(res)
        this.setState({carlist:res})
      }
    });
  }




  render(){
    console.log(this.state.carlist&&this.state.carlist)

    return (
      <div className="App" >
        <div className='app-container'>
          <div className='list-con'>
          <div className={classnames('list-container',{'list-animate':this.state.carlist&&this.state.carlist.length>8?true:false})}>

          {this.state.carlist&&this.state.carlist.map((item)=>{
              return <IistItem CarName={item.CarName} Status={item.Status} key={item.CarName}/>
            })
          }

          



          
          </div>
          </div>
          
        </div>
      </div>
    )
  }
}


export default App;

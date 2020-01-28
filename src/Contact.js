import React,{Component} from 'react'
import axios from 'axios'
import Users from './Users'
import App from './App';
import { Redirect } from 'react-router';
class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {isRes:"1000"}
    }

    componentDidMount(){
        console.log("URL hitted>>>>",this)
        let thisKey = this
        axios.get('/auth')
        .then(function(response){
            console.log("response>>>>>>>>>",response);
           if(response.data =="hello"){
            console.log("res is there>>>",thisKey)
            thisKey.setState({isRes: "2000"})
          //  this.props.history.push('/users')
            // return 
           }
           else{
            console.log("no reponse is there>>")
           }
          //  ReactDOM.render()
            //this.props.history.push('/')
        }) 
       

    }
    render(){
        console.log("tgis statte is>>",this.state)
        if(this.state.isRes == "2000"){
        return <Redirect to="/users"/>;
        }
        else{
           return <h1>this is from client side Contact</h1>
        }
       // userInput={this.state.userInput}
        
      // return <Users />
       // return <h1>this is from client side Contact</h1>
    }
}
export default Contact
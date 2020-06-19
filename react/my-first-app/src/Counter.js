import React, { Component } from 'react'

export default class Counter extends Component {
     constructor(){
         super();
         this.state={
             count:0
         }
     }
     change(){
         this.setState({
             message:"hi devi"
         }

         )
     }
     increase=()=>{
         this.setState({
             count:this.state.count+1
         })
     }
     decrease=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <h1 style={{textAlign:"center"}}>{this.state.count}</h1>
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>decrease</button>
                <button onClick={()=>this.change()}>Click</button>
            </div>
        )
    }
}

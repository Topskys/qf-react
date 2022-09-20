/*
 * @Author: Topskys
 * @Date: 2022-09-05 
 * 06-ref 
 */
import React, { Component } from 'react'

export default class App extends Component {
    a=100
    inputRef=React.createRef() // ref
  render() {
    return (
      <div>
        {/* < input ref = "input" / > */}
            <input ref = {this.inputRef} />
            <button onClick = {
                ()=>{
                    // console.log("input", this.refs.input.value) // input在严格模式下会被警告
                    console.log("inputRef",this.inputRef.current.value);
                //   this.handleClick1() 
                }
              } >
              Add </button>
      </div>
    )
  }

  handleClick1(){
      console.log("点击",this.a)
  }

}

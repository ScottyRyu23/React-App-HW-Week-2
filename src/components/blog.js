import React, { Component } from 'react';

export default class Blog extends  React.Component {
   
   constructor(props){
       super(props);

       this.state = {
           title: '',
           author: '',
           body:''
       }
   }
   
    


   
   
    render (){
        return (
            <div>
                <h1> Blog-o-sphere</h1>
                 <div>
                  <form onSubmit = {this.handleSubmit}>
                       <label htmlFor="">
                           Title:
                           <input value={this.state.title}  type="text" name="title"/>    
                       </label> 
                       <label htmlFor="">
                           Author:
                           <input type="text" name= "author"/>
                       </label>

                       <textarea name="body" id="" cols="30" rows="10">

                       </textarea>        
                        <input type="submit" value="submit"/>
                 </form>    
                </div>
            
            </div>
        );
    }
}
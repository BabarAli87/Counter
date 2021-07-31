import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { counters:[
        {id:1 , value:0},
        {id:2 , value:0},
        {id:3 , value:0},
        {id:4 , value:0},
    ] };
    incrementHandle=  counter=>{
        const counters =[...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index]={...counter};
        counters[index].value++;
        this.setState({counters})

    }
    resetHandler=()=>{
        const counters = this.state.counters.map(
            c =>{c.value=0;
                return c;
            });
            this.setState({counters})
    }
    deleteHandler= (counterId)=>{
       const counters = this.state.counters.filter(c=> c.id !== counterId) 
       this.setState({counters})
    }
    render() { 
       return (<div>
           <button onClick={this.resetHandler} className='btn btn-primary m-2' >Reset</button>
           {this.state.counters.map(counter=>
           <Counter 
           key={counter.id}
           onDelete={this.deleteHandler}
           onIncrement={this.incrementHandle}
           counter={counter}/>)}
       </div>)
    }
}
 
export default Counters;
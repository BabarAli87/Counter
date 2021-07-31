import React, { Component } from 'react';
class Counter extends Component {
   
    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}> {this.formateCount()}</span>
                <button
                onClick={()=>this.props.onIncrement(this.props.counter)}
                 className='btn btn-secondary m-2'>
                 increment</button>
                 <button onClick={()=> this.props.onDelete(this.props.counter.id)}
                  className='btn btn-danger'> Delete</button>
            </div>
        );
      
    }
    getBadgeClasses() {
        let classes = '';
        classes += this.props.counter.value === 0 ? 'badge bg-warning text-dark m-2' : 'badge bg-primary';
        return classes;
    }

    formateCount(){
        const { value} =this.props.counter;
        return value === 0 ? 'Zero' : value;
    };
}
 
export default Counter ;
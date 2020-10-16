import React from 'react';

export default class Liste extends React.Component{
    render(){
        return(
            <div className={`${this.props.validate === true ? "bg-success" : "bg-light"} mx-5 my-2 text-center d-flex justify-content-between p-2 ml-0`}>
                <li>{this.props.nom}</li>
                <div className="d-flex">
                    <button className="p-1 mx-2 bg-success" onClick={this.props.complete}><i className="fas fa-check"></i></button>
                    <button className="p-1 mx-2 bg-warning" onClick={this.props.edit}><i className="fas fa-edit"></i></button>
                    <button className="p-1 mx-2 bg-danger" onClick={this.props.delete}><i className="fas fa-trash-alt"></i></button>
                </div>
            </div>
        )
    }
}
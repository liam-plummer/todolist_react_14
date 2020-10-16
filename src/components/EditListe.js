import React from 'react';

export default class EditListe extends React.Component{
    render(){
        return(
            <div className="d-flex justify-content-between w-75">
                <input type="text" placeholder=" Edit Value" className="w-50" onChange={this.props.editVal} />
                <button className="bg-warning" onClick={this.props.save} value={this.props.val}><i class="fas fa-save"></i></button>
            </div>
        )   
    }
}
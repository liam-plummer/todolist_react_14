import React from 'react';
import Liste from './components/Liste'
import './sass/style.sass'
import EditListe from './components/EditListe'

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      valeur : "fef",
      tab : [],
      inputEdit : "",
    }
  }
  changeInput = (b) => {
    this.setState({
      valeur : b.target.value
    })
  }
  editVal = (x) => {
    this.setState({
      inputEdit : x.target.value
    })
  }
  ajouter = () => {
    let a = this.state
    let objet = {
      value : `${a.valeur}`,
      validate : false,
      edit : false,
      display: true
    } 
    a.tab.push(objet)
    a.valeur = ""
    this.setState(a)
  }
  complete = (i) => {
    let d = this.state
    if (d.tab[i].validate === false ) {
      d.tab[i].validate = true
    } else {
      d.tab[i].validate = false
    }
    this.setState(d)
  }
  edit = (i) => {
    let f = this.state
    f.tab[i].edit = true
    this.setState(f)
  }
  save = (i) => {
    let g = this.state 
    g.tab[i].value = g.inputEdit
    g.tab[i].edit = false
    this.setState(g)
  }
  delete = (i) => {
    let c = this.state
    c.tab.splice(i, 1)
    this.setState(c)
  }
  render(){
    return(
      <div className="my-3">
        <h1 className="text-center">To Do list</h1>
        <div className="d-flex justify-content-center">
          <input type="text" placeholder="To Do" value={this.state.valeur} onChange={b => this.changeInput(b)} className="input" />
          <button className="bg-primary" onClick={() => this.ajouter()}>Ajouter</button>
        </div>
        <div className="d-flex my-3 justify-content-center">
          <button className="p-2 mx-2 bg-primary">Toutes</button>
          <button className="p-2 mx-2 bg-success">Completes</button>
          <button className="p-2 mx-2 bg-warning">A faire</button>
        </div>
        <ul className="d-flex flex-column justify-content-center">
          {this.state.tab.map((e,i) => {
                if (this.state.tab[i].edit === true) {
                  return(
                    <EditListe save={() => this.save(i)} val={this.state.inputEdit} editVal={x => this.editVal(x)} />
                    )
                }
                else {
                  return(
                    <Liste key={i} nom={e.value} validate={this.state.tab[i].validate} delete={() => this.delete(i)} complete={() => this.complete(i)} ed={this.state.tab[i].edit} edit={() => this.edit(i)} /> 
                  )
                }
          })}
        </ul>
      </div>
    )
  }
}
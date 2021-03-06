import React, { Component } from 'react'
import Story from './components/story'
import UserInput from './components/user_input'
import Display from './components/display'
import Objection from './components/objection'
import Restart from './components/restart'
import Byline from './components/byline'

class App extends Component {
  constructor(){
    super()
    this.state = {
      story: {},
      storyLength: 0,
      step: 0,
      currentChapter: {chapter: '', placeholder: '', newVariable: ''},
      bride: null,
      groom: null,
      married: false,
      consumation: null,
      objection: false,
      endReached: false
    }
    this.advanceStory = this.advanceStory.bind(this)
    this.restartApp = this.restartApp.bind(this)
    this.handleBrideAndGroom = this.handleBrideAndGroom.bind(this)
  }

  componentDidMount(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", './story.json', true)
    xhr.onload = function(e){
      if (xhr.readyState === 4){
        if (xhr.status === 200){
          var story = JSON.parse(xhr.response).story
          this.setState({
            story: story,
            storyLength: story.length,
            currentChapter: story[0]
          })
        } else {
          console.error(xhr.statusText)
        }
      }
    }.bind(this)

    xhr.onerror = function(e){
      console.error(xhr.statusText)
    }
    xhr.send(null)
  }

  advanceStory(input){
    const nextStep = this.state.step + 1

    if (this.state.currentChapter.proceedWithMatrimony){
      this.performHolyMatrimony(input)
    }

    if (this.state.consumation){

      this.setState({
        married: true
      })

      if (nextStep === this.state.storyLength - 1){
        this.setState({
          endReached: true
        })
      }
    }

    if (!this.state.objection){
      this.setState({
        step: nextStep,
        currentChapter: this.state.story[nextStep]
      })
    }
  }


  handleBrideAndGroom(input){
    if (this.state.currentChapter.newVariable){
      var newVariable = this.state.currentChapter.newVariable

      if (newVariable === "bride"){
        this.setState({
          bride: input
        })
      }

      if (newVariable === "groom"){
        this.setState({
          groom: input
        })
      }      
    }
  }

  performHolyMatrimony(input){
    if (!input.toString().toLowerCase().includes('object')){
      this.setState({
        consumation: this.state.bride + this.state.groom
      })
    } else {
      this.setState({
        objection: true
      })
    }
  }

  restartApp(){
    this.setState({
      step: 0,
      currentChapter: this.state.story[0],
      bride: null,
      groom: null,
      married: false,
      consumation: null,
      currentDisplay: '',
      objection: false,
      endReached: false,
    })
  }

  render() {
    const currentChapter = this.state.currentChapter
    return (
      <div id="app-container">
        <h1>Number Marriage</h1>
        <div className="App">
          {this.state.objection ? <Objection objection={this.state.objection} stopWedding={this.stopWedding} /> : null}
          <Story currentChapter={currentChapter} bride={this.state.bride} groom={this.state.groom} consumation={this.state.consumation}>
            <UserInput advanceStory={this.advanceStory} handleBrideAndGroom={this.handleBrideAndGroom} placeholder={currentChapter.placeholder} />
            {this.state.endReached ? <Restart restartApp={this.restartApp} /> : null}
          </Story>
          {!this.state.objection ? <Display married={this.state.married} consumation={this.state.consumation} bride={this.state.bride} groom={this.state.groom} heartColor={this.state.heartColor} /> : null }
          <Byline />
        </div>
      </div>
    )
  }
}

export default App;

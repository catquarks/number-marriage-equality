import React, { Component } from 'react'
import './App.css'
import Story from './components/story'
import UserInput from './components/user_input'
import Display from './components/display'
import Objection from './components/objection'
import Restart from './components/restart'
import Byline from './components/byline'

class App extends Component {
  constructor(){
    super()
    this.state={
      story: {},
      storyLength: 0,
      step: 0,
      currentChapter: [{chapter: '', placeholder: '', newVariable: ''}],
      bride: null,
      groom: null,
      married: false,
      consumation: null,
      currentDisplay: '',
      objection: false,
      endReached: false
    }
    this.advanceStep = this.advanceStep.bind(this)
    this.advanceChapter = this.advanceChapter.bind(this)
    this.restartApp = this.restartApp.bind(this)
  }

  componentDidMount(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", './story.json', true)
    xhr.onload = function(e){
      if (xhr.readyState === 4){
        if (xhr.status === 200){
          var story = JSON.parse(xhr.response).story
          var storyLength = story.length
          this.setState({
            story: story,
            storyLength: storyLength,
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

  advanceStep(e, input){
    e.preventDefault()
    e.stopPropagation()

    this.handleInputAndDisplay(input)

    if (this.state.currentChapter.proceedWithMatrimony === true){
      this.performHolyMatrimony(input)
    }

    if (this.state.consumation){
      this.setState({
        endReached: true
      })
    }

    var nextStep = this.state.step + 1
    this.setState({step: nextStep})
    this.advanceChapter(nextStep)
  }

  handleInputAndDisplay(input){
    if (this.state.currentChapter.newVariable){
      var newVariable = this.state.currentChapter.newVariable
      var newState = {}

      // if input is a number, make it a number
      if (!isNaN(input)){
        input = parseFloat(input)
      }

      newState[newVariable] = input

      // if bride, show bride
      if (newVariable === "bride"){
        this.setState({
          currentDisplay: input
        })
      }

      // if both partners present, show both
      if (newVariable === "groom"){
        this.setState({
          currentDisplay: this.state.bride + " + " + input
        })
      }      

      // change bride & groom states
      this.setState(newState)
    }

    // if married, show the sum
    if (this.state.married){
      this.setState({
        currentDisplay: this.state.consumation
      })
    }
  }

  advanceChapter(nextStep){
    var nextChapter = this.state.story[nextStep]
    this.setState({
      currentChapter: nextChapter
    })
  }

  performHolyMatrimony(input){
    if (!input.toLowerCase().includes('object') || input.toLowerCase().includes('objection') ){
      this.setState({
        married: true,
        consumation: this.state.bride + this.state.groom
      })
    } else {
      this.setState({
        objection: true
      })
    }
  }

  interpolateString(string){
    var regEx = /(\[\w+\])/
    var array = string.split(regEx)
    var stateCopy = this.state

    var interpolatedText = array.map(word => {
      if (!regEx.exec(word)){
        return word
      } else {
        return stateCopy[word.slice(1, -1)]
      }
    }).join("")

    return interpolatedText
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
      endReached: false
    })
  }

  render() {
    const currentChapter = this.state.currentChapter
    if (currentChapter.interpolate === true){
      currentChapter.chapter = this.interpolateString(currentChapter.chapter)
    }

    return (
      <div className="App">
        <Objection objection={this.state.objection} />
        <h1>Number Marriage</h1>
        <Story chapter={currentChapter.chapter} />
        <br /><br />
        <UserInput advanceStep={this.advanceStep} placeholder={currentChapter.placeholder} />
        <Restart endReached={this.state.endReached} restartApp={this.restartApp} />
        <Display characters={this.state.currentDisplay} />
        <Byline />
      </div>
    )
  }
}

export default App;

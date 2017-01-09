import React, { Component } from 'react'
import './App.css'
import Story from './components/story'
import UserInput from './components/user_input'
import Display from './components/display'

class App extends Component {
  constructor(){
    super()
    this.state={
      story: {},
      step: 0,
      currentChapter: [{chapter: '', placeholder: '', newVariable: []}],
      bride: null,
      groom: null,
      consumation: false,
      currentDisplay: '',
      moopy: "moopy!!"
    }
    this.advanceStep = this.advanceStep.bind(this)
    this.advanceChapter = this.advanceChapter.bind(this)
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
          console.err(xhr.statusText)
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
    if (this.state.bride && this.state.groom){
      this.setState({
        consumation: true
      })
    }
    if (input && this.state.consumation === false){
      this.handleCharacters(input)
    }

    if (this.state.currentChapter.proceedWithMatrimony === true){
      this.performHolyMatrimony()
    }

    var nextStep = this.state.step + 1
    // if it's already the last chapter
    // then don't advance the chapter
    if (nextStep !== this.state.storyLength){
      this.setState({
        step: nextStep
      })
    }

    this.advanceChapter(nextStep)
  }

  handleCharacters(input){
    if (this.state.currentChapter.newVariable){
      var newVariable = this.state.currentChapter.newVariable
      var newState = {}

      newState[newVariable] = input
      newState["currentDisplay"] = this.state.currentDisplay + input
      this.setState(newState)
    }
  }

  advanceChapter(nextStep){
    var nextChapter = this.state.story[nextStep]
    this.setState({
      currentChapter: nextChapter
    })
  }

  performHolyMatrimony(input){
    if (input !== "I OBJECT!"){
      this.setState({
        newVariable: this.state.bride + this.state.groom
      })
    }
  }

  interpolateString(string){
    var regEx = /(\[\w+\])/
    var array = string.split(regEx)
    var characters = array.filter(item => {
      if (regEx.exec(item)){
        return item
      }
      return null
    })
    // problem: the following should iterate over the array
    // so that duplicates have unique indices
    var indices = characters.map(item => {
      return array.indexOf(item)
    })
    debugger
    indices.forEach(index => {
      array[index] = this.state[array[index].slice(1, -1)]
    })
    return array.join("")
  }

  render() {
    var currentChapter = this.state.currentChapter
    if (currentChapter.interpolate === true){
      currentChapter.chapter = this.interpolateString(currentChapter.chapter)
    }
    return (
      <div className="App">
        <h1>Number Marriage</h1>
        <Story chapter={currentChapter.chapter} />
        <br /><br />
        <UserInput advanceStep={this.advanceStep} placeholder={currentChapter.placeholder} />
        <Display characters={this.state.currentDisplay} />
      </div>
    )
  }
}

export default App;

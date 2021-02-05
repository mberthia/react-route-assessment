import react, { Component } from "react";
import Jeopardy from "../jeopardy/Jeopardy";
import JeopardyService from "../../jeopardyService";
import axios from "axios";

function Display(props) {
  return (
    <div>
      <p>Title: {this.state.data.category.title}</p>
      <p>Question: {this.state.data.question}</p>
      <p>Points: {this.state.data.value}</p>

      <p>Score: {this.state.score}</p>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="">Answer</label>
          <input
            type="text"
            name="userAnswer"
            value={this.state.formData.userAnswer}
            onChange={this.handleChange}
          ></input>
        </div>
        <button onClick={this.checkAnswer}>Submit Answer</button>
      </form>

      <p>
        <button onClick={this.reset}>Reset Score</button>
      </p>
    </div>
  );
}

export default Display;

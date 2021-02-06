import react, { Component } from "react";
import Jeopardy from "../jeopardy/Jeopardy";
import JeopardyService from "../../jeopardyService";
import axios from "axios";

function Display(props) {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Question: {props.question}</p>
      <p>Points: {props.value}</p>

      <p>Score: {props.score}</p>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label htmlFor="">Answer</label>
          <input
            type="text"
            name="userAnswer"
            value={props.userAnswer}
            onChange={props.handleChange}
          ></input>
        </div>
        <button onClick={props.checkAnswer}>Submit Answer</button>
      </form>

      <p>
        <button onClick={props.reset}>Reset Score</button>
      </p>
    </div>
  );
}

export default Display;

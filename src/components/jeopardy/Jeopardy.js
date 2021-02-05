import react, { Component } from "react";
import JeopardyService from "../../jeopardyService";
import jeopardyDisplay from "../jeopardydisplay/jeopardydisplay";
import Display from "../jeopardydisplay/jeopardydisplay";

class Jeopardy extends Component {
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      submitted: false,
      data: {},
      score: 0,
      formData: {
        userAnswer: "",
      },
    };
  }

  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  componentDidMount() {
    this.getNewQuestion();
  }

  reset = (event) => {
    this.state.score = 0;
    this.setState({
      score: 0,
    });
  };

  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({ formData });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ submitted: true });
  };

  checkAnswer = (event) => {
    if (
      this.state.formData.userAnswer.toLowerCase() ===
      this.state.data.answer.toLowerCase()
    ) {
      this.setState((state, props) => ({
        score: state.score + state.data.value,
      }));
    } else {
      this.setState((state, props) => ({
        score: state.score - state.data.value,
      }));
    }
    this.setState((state, props) => ({
      formData: {
        userAnswer: "",
      },
    }));

    this.getNewQuestion();
  };

  render() {
    console.log(this.state.data);
    console.log(this.state.data.category);

    if (this.state.data.category) {
      return (
        // <Display />
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

    return <div></div>;
  }
}

export default Jeopardy;

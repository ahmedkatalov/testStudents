import { useState } from "react";
import PropTypes from "prop-types";

export const QuestionHandler = ({ data, title }) => {
  const [questions, setQuestions] = useState([]);

  const handleQuestion = (item, answered) => {
    setQuestions((prev) => {
      const updated = prev.filter((q) => q.question !== item.question);
      updated.push({ question: item.question, answered });
      return updated;
    });
  };

  const handleFilter = () => {
    const unanswered = questions
      .filter((q) => !q.answered)
      .map((q) => q.question);

    alert("Неотвеченные вопросы:\n" + unanswered.join("\n"));
  };

  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        {data.map((item) => {
          const questionStatus = questions.find(
            (q) => q.question === item.question
          );
          const backgroundColor = questionStatus
            ? questionStatus.answered
              ? "green"
              : "red"
            : "gray";

          return (
            <div key={item.question}>
              <h2>{item.title}</h2>
              <div
                style={{
                  backgroundColor,
                  width: "1200px",
                  height: "auto",
                  borderRadius: "10px",
                  padding: "5px",
                  marginBottom: "10px",
                }}
              >
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
                <button onClick={() => handleQuestion(item, true)}>
                  Ответил
                </button>
                <button onClick={() => handleQuestion(item, false)}>
                  Не ответил
                </button>
              </div>
            </div>
          );
        })}
        <button
          onClick={handleFilter}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Фильтр
        </button>
      </div>
    </div>
  );
};


QuestionHandler.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

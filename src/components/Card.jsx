import "./Card.css";

function Card({ title, children }) {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{children}</p>
      <a>Go here</a>
    </div>
  );
}

export default Card;

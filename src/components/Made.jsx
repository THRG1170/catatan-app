import "./Made.css";

function Made() {
  return (
    <div className="made">
      <h1>About</h1>
      <p>
        this app was made by these programming languange or framework cekidot{" "}
        <br />
        <small>Contributors: THRG1170 & ARIEL HUTOMO</small>
      </p>
      <div className="madewith">
        <a href="https://vitejs.dev/">
          <i className="fa-brands fa-vine"></i> Vite
        </a>
        <a href="https://react.dev/">
          <i className="fa-brands fa-react"></i> React
        </a>
        <a href="https://www.w3schools.com/html/">
          <i className="fa-brands fa-html5"></i> Html
        </a>
        <a href="https://www.w3schools.com/css/">
          <i className="fa-brands fa-css3-alt"></i> Css
        </a>
        <a href=" https://www.w3schools.com/js/">
          <i className="fa-brands fa-js"></i> Javascript
        </a>
        <a href="https://phantom-marca.unidadeditorial.es/08082c32c06506f9b7543cf5baaf0366/resize/990/f/webp/assets/multimedia/imagenes/2023/09/25/16956327142482.jpg">
          <i className="fa-solid fa-heart"></i> Love
        </a>
      </div>
    </div>
  );
}

export default Made;

import './App.css';
import jesi from "./img/team/1.jpg";
import rochi from "./img/team/2.jpg";
import cris from "./img/team/3.jpg";
import ibm from "./img/logos/ibm.svg";


function loadWatsonAssistantChat() {
  window.watsonAssistantChatOptions = {
    integrationID: "7de74f70-6bf3-40bf-90a9-d2b6f73531b5", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "5f315828-90e0-4a72-a079-7510afe29988", // The ID of your service instance.
    onLoad: function (instance) { instance.render(); }
  };
  setTimeout(function () {
    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });
}

function App() {
  return (
    <div className="App">
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Friends Chatbot</title>

        <link rel="icon" type="image/x-icon" href="../assets/favicon.ico" />

        <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossOrigin="anonymous"></script>

        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />

        <link href="css/styles.css" rel="stylesheet" />
      </div>

      <script onLoad={loadWatsonAssistantChat()}></script>

      <body id="page-top">
        {/* 
        <nav className="navbar navbar-expand-lg navbar-light sticky-top" style="background-color: #fff;" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="..." /></a>

          </div>
        </nav> */}

        <header className="masthead">
          <div className="container">
            <div className="masthead-subheading .text-light">Welcome to the best Friends chatbot!</div>

          </div>
        </header>

        <section className="page-section bg-light" id="team">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src={cris} alt="..." />
                  <h4>Cristian Basanta</h4>
                  <p className="text-muted">Developer</p>
                  {/* <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a> */}

                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src={rochi} alt="..." />
                  <h4>Rocio Ferreiro Rico</h4>
                  <p className="text-muted">Developer</p>
                  {/* <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a> */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src={jesi} alt="..." />
                  <h4>Jesica Lichtensztein</h4>
                  <p className="text-muted">Developer</p>
                  {/* <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a> */}
                </div>
              </div>
            </div>

          </div>
        </section>

        <div className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3 col-sm-6 my-3">
                <a href="https://www.ibm.com"><img className="img-fluid img-brand d-block mx-auto" src={ibm} alt="..." /></a>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <a href="https://www.ibm.com"><img className=" img-fluid img-brand d-block mx-auto" src={ibm} alt="..." /></a>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <a href="https://www.ibm.com"><img className=" img-fluid img-brand d-block mx-auto" src={ibm} alt="..." /></a>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <a href="https://www.ibm.com"><img className=" img-fluid img-brand d-block mx-auto" src={ibm} alt="..." /></a>
              </div>
            </div>
          </div >
        </div >


        <footer className="footer py-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 text-lg-start">Copyright &copy; Friends Chatbot 2021</div>
              {/* <div className="col-lg-4 my-3 my-lg-0">
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
              </div> */}
              <div className="col-lg-4 text-lg-end">
                <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
              </div>
            </div>
          </div>
        </footer>





        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>

        <script src="js/scripts.js"></script>




        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
      </body >
    </div >
  );
}



export default App;

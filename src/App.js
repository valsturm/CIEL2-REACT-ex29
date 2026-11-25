import './App.css';

var login;
var mdp;

var identifiants = {
  login: null,
  mdp: null
};

function connexion() {
  login = document.getElementById("identifiantInscription").value;
  mdp = document.getElementById("motdepasseInscription").value;

  identifiants.login = document.getElementById("identifiantInscription").value;
  identifiants.mdp = document.getElementById("motdepasseInscription").value;
};

function afficher() {
  console.log("Identifiant : " + login);
  console.log("Mot de passe : " + mdp);
  console.log();
  console.log("Identifiant (objet) : " + identifiants.login);
  console.log("Mot de passe (objet) : " + mdp);
};

function App() {
  return (
    <div className="App">
      <h1>Formulaire de connexion</h1>
      <input type='text' placeholder='Identifiant' id='identifiantInscription' onInput={connexion}></input><br></br>
      <input type='password' placeholder='Mot de passe' id='motdepasseInscription' onInput={connexion}></input><br></br>
      <button>Se connecter</button><br></br>
      <button onClick={afficher}>Afficher les variables</button>
    </div>
  );
}

export default App;

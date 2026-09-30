import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Formulaire de connexion</h1>
      <input type='text' placeholder='Identifiant' id='identifiantInscription'></input><br></br>
      <input type='password' placeholder='Mot de passe' id='motdepasseInscription'></input><br></br>
      <button>Se connecter</button>
    </div>
  );
}

export default App;

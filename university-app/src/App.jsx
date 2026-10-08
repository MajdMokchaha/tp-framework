import './App.css'
 const etudiant = {
  nom:"Mokchaha",
  prenom:"Majd",
  mail:"majd.maraoja@gmail.com",
  telephone:"+216 28290482",
  Filiere:"Génie Logiciel et Systèmes d'Information",
  groupe:"GLSI2",
  ville:"Mahdia"
 }
function App() {
  return (
    <div>
      <br></br>
      <img src="public\pl.jpg" width="120px" height="150px"></img>
      <br></br>
      <h1>Fichier étudiant</h1>
      <br></br>
      <p><strong>Nom & Prénom :</strong> {etudiant.nom} {etudiant.prenom}</p>
      <p><strong>Email :</strong> {etudiant.mail} </p>
      <p><strong>Téléphone :</strong> {etudiant.telephone} </p>
      <p><strong>Filière :</strong> {etudiant.Filiere} </p>
      <p><strong>Année d'étude :</strong></p>
      <p><strong>Groupe :</strong> {etudiant.groupe} </p>
      <p><strong>Ville :</strong> {etudiant.ville} </p>
      <br></br>
      <a href="mailto:majd.maraoja@gmail.com">Contacter</a>
    </div>
  )
}

export default App

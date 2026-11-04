import './App.css';
import StudentCard from "./components/StudentCard.jsx";
import StudentImage1 from "./../public/pl.jpg" ;
import StudentImage2 from "./../public/ron.jpg" ;
import StudentImage3 from "./../public/ney.jpg" ;



 const etudiants = [
  {
  nom:"Mokchaha",
  prenom:"Majd",
  mail:"majd.maraoja@gmail.com",
  telephone:"+216 28290482",
  Filiere:"Génie Logiciel et Systèmes d'Information",
  groupe:"GLSI2",
  ville:"Mahdia",
  studentImage: StudentImage1
 },

{
  nom:"Pablo",
  prenom:"Ronaldinho",
  mail:"ron.maraoja@gmail.com",
  telephone:"+216 28450482",
  Filiere:"Génie Logiciel et Systèmes d'Information",
  groupe:"GLSI2",
  ville:"Mahdia",
  studentImage: StudentImage2
 },

{
  nom:"Puto",
  prenom:"Neymarinho",
  mail:"ney.maraoja@gmail.com",
  telephone:"+216 22455682",
  Filiere:"Génie Logiciel et Systèmes d'Information",
  groupe:"GLSI2",
  ville:"Mahdia",
  studentImage: StudentImage3
 },
]
function App() {
  return (
    <div className="container">
      {etudiants.map((etudiant) => (
        <StudentCard
          prenom={etudiant.prenom}
          nom={etudiant.nom}
          key={etudiant.mail}
          telephone={etudiant.telephone}
          groupe={etudiant.groupe}
          ville={etudiant.ville}
          studentImage={etudiant.studentImage}
          mail={etudiant.mail}
          Filiere={etudiant.Filiere}
        />
        ))}
    </div>
  )
}

export default App

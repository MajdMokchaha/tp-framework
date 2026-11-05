import { useState } from "react";
import "./App.css";
import StudentCard from "./components/StudentCard.jsx";

function App() {

  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      nom: "Mokchaha",
      prenom: "Majd",
      mail: "majd.maraoja@gmail.com",
      telephone: "+216 28290482",
      Filiere: "GLSI",
      groupe: "GLSI2",
      ville: "Mahdia",
      studentImage: "/pl.jpg"
    },
    {
      id: 2,
      nom: "Pablo",
      prenom: "Ronaldinho",
      mail: "ron.maraoja@gmail.com",
      telephone: "+216 28450482",
      Filiere: "GLSI",
      groupe: "GLSI2",
      ville: "Mahdia",
      studentImage: "/ron.jpg"
    },
    {
      id: 3,
      nom: "Puto",
      prenom: "Neymarinho",
      mail: "ney.maraoja@gmail.com",
      telephone: "+216 22455682",
      Filiere: "GLSI",
      groupe: "GLSI2",
      ville: "Mahdia",
      studentImage: "/ney.jpg"
    }
  ]);

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [Filiere, setFiliere] = useState("");
  const [groupe, setGroupe] = useState("");
  const [ville, setVille] = useState("");
  const [studentImage, setStudentImage] = useState("");

  const [idModifier, setIdModifier] = useState(null);

  const [filtre, setFiltre] = useState("Toutes");

  function ajouterEtudiant(e) {
    e.preventDefault();

    const nouvelEtudiant = {
      id: idModifier !== null ? idModifier : Date.now(),
      nom: nom,
      prenom: prenom,
      mail: mail,
      telephone: telephone,
      Filiere: Filiere,
      groupe: groupe,
      ville: ville,
      studentImage: studentImage
    };

    if (idModifier !== null) {

      const nouvelleListe = etudiants.map(function(etudiant) {
        if (etudiant.id === idModifier) {
          return nouvelEtudiant;
        }
        return etudiant;
      });

      setEtudiants(nouvelleListe);
      setIdModifier(null);

    } else {
      setEtudiants([...etudiants, nouvelEtudiant]);
    }
    setNom("");
    setPrenom("");
    setMail("");
    setTelephone("");
    setFiliere("");
    setGroupe("");
    setVille("");
    setStudentImage("");
  }
  function supprimerEtudiant(id) {
    const nouvelleListe = etudiants.filter(function(etudiant) {
      return etudiant.id !== id;
    });

    setEtudiants(nouvelleListe);
  }
  function modifierEtudiant(etudiant) {
    setNom(etudiant.nom);
    setPrenom(etudiant.prenom);
    setMail(etudiant.mail);
    setTelephone(etudiant.telephone);
    setFiliere(etudiant.Filiere);
    setGroupe(etudiant.groupe);
    setVille(etudiant.ville);
    setStudentImage(etudiant.studentImage);

    setIdModifier(etudiant.id);
  }
  function annulerModification() {
    setIdModifier(null);
    setNom("");
    setPrenom("");
    setMail("");
    setTelephone("");
    setFiliere("");
    setGroupe("");
    setVille("");
    setStudentImage("");
  }
  const etudiantsFiltres = etudiants.filter(function(etudiant) {

    if (filtre === "Toutes") {
      return true;
    }

    return etudiant.Filiere === filtre;
  });

  return (
    <div className="app">

      <h1>Gestion des étudiants</h1>

      {}
      <div className="formulaire">

        <h2>
          {idModifier !== null ? "Modifier étudiant" : "Ajouter étudiant"}
        </h2>

        <form onSubmit={ajouterEtudiant}>

          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Téléphone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Filière"
            value={Filiere}
            onChange={(e) => setFiliere(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Groupe"
            value={groupe}
            onChange={(e) => setGroupe(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Ville"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Image (ex: /pl.jpg)"
            value={studentImage}
            onChange={(e) => setStudentImage(e.target.value)}
          />

          <button type="submit">
            {idModifier !== null ? "Modifier" : "Ajouter"}
          </button>

          {idModifier !== null && (
            <button type="button" onClick={annulerModification}>
              Annuler
            </button>
          )}

        </form>

      </div>

      {}
      <div className="filtre">

        <h2>Filtrer par filière</h2>

        <select
          value={filtre}
          onChange={(e) => setFiltre(e.target.value)}
        >
          <option value="Toutes">Toutes les filières</option>
          <option value="GLSI">GLSI</option>
        </select>

      </div>

      {}
      <h2 className="titre-liste">Liste des étudiants</h2>

      <div className="container">

        {etudiantsFiltres.map(function(etudiant) {

          return (
            <StudentCard
              key={etudiant.id}
              etudiant={etudiant}
              supprimerEtudiant={supprimerEtudiant}
              modifierEtudiant={modifierEtudiant}
            />
          );

        })}

      </div>

    </div>
  );
}

export default App;
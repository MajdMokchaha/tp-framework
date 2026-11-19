import { useState } from "react";

function StudentCard(props) {
  const [afficher, setAfficher] = useState(false);
  function afficherCoordonnees() {
    setAfficher(!afficher);
  }

  return (
    <div className="card">

      <img
        src={props.etudiant.studentImage || "/pl.jpg"}
        alt="image étudiant"
        width="124"
        height="124"
      />

      <h3>
        {props.etudiant.nom} {props.etudiant.prenom}
      </h3>

      <p>
        <strong>Filière :</strong> {props.etudiant.Filiere}
      </p>

      <p>
        <strong>Groupe :</strong> {props.etudiant.groupe}
      </p>

      <p>
        <strong>Ville :</strong> {props.etudiant.ville}
      </p>

      {}
      <button onClick={afficherCoordonnees}>
        {afficher ? "Cacher" : "Afficher"} les coordonnées
      </button>

      {}
      {afficher && (
        <div>
          <p>
            <strong>Email :</strong> {props.etudiant.mail}
          </p>

          <p>
            <strong>Téléphone :</strong> {props.etudiant.telephone}
          </p>
        </div>
      )}

      {}
      <div className="boutons">

        <button
          className="modifier"
          onClick={() => props.modifierEtudiant(props.etudiant)}
        >
          Modifier
        </button>

        <button
          className="supprimer"
          onClick={() => props.supprimerEtudiant(props.etudiant.id)}
        >
          Supprimer
        </button>

      </div>

    </div>
  );
}

export default StudentCard;
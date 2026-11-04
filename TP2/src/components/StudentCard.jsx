function StudentCard(props) {
  return (
    <div className='card'>
        <img src={props.studentImage} alt="image d'etudiant" height="124px" width="124px" />
        <p><strong>Nom & Prénom :</strong> {props.nom} {props.prenom}</p>
        <p><strong>Email :</strong> {props.mail} </p>
        <p><strong>Téléphone :</strong> {props.telephone} </p>
        <p><strong>Filière :</strong> {props.Filiere} </p>
        <p><strong>Année d'étude :</strong></p>
        <p><strong>Groupe :</strong> {props.groupe} </p>
        <p><strong>Ville :</strong> {props.ville} </p>
    </div>
  )
}

export default StudentCard;

import React from 'react';
import { useState } from 'react'

function StudentForm (){
    const [nom, setNom] = useState("");
    const [Prenom, setPrenom] = useState("");
    const [mail, setMail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [filiere, setFiliere] = useState("");
    const [groupe, setGroup] = useState("");
    const [ville, setVille] = useState("");
    const [image, setImage] = useState("");
    function handleubmit(e) {
            e.preventDefault();
            const nouvelEtudiant ={
                nom: nom ,
                Prenom: Prenom ,
                mail : mail ,
                telephone:  telephone ,
                filiere: filiere , 
                groupe: groupe ,
                ville: ville ,
                image: image 
            } ;
            console.log("Nouvel Etudiant Ajouté" , nouvelEtudiant )
        }

    return(
        <form onSubmit={handlesubmit}>
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" value={nom} onChange={(e) => setNom (e.target.value)} placeholder="Saisir votre nom" required/> <br /><br />
            <label htmlfor="Prenom">Prenom</label>
            <input type="text" id="nom" value={Prenom} onChange={(e) => setPrenom (e.target.value)} placeholder="Saisir votre Prenom" required/><br /><br />
            <label htmlfor="mail">Mail</label>
            <input type="text" id="mail" value={mail} onChange={(e) => setMail (e.target.value)} placeholder="Saisir votre mail" required/><br /><br />
            <label htmlfor="nom">Telephone</label>
            <input type="text" id="telephone" value={telephone} onChange={(e) => setTelephone (e.target.value)} placeholder="Saisir votre telephone" required/><br /><br />
            <label htmlfor="nom">Filiere</label>
            <select id="filiere" value={filiere} onChange={(e) => setFiliere (e.target.value)}>
            <option value="Choisir une filiere"></option>
            <option value="LCS">LCS</option>
            <option value="LBC">LBC</option>
            <option value="LCE">LCE</option>
            </select><br /><br />
            <label htmlfor="nom">Groupe</label>
            <input type="text" id="groupe" value={groupe} onChange={(e) => setGroup (e.target.value)} placeholder="Saisir votre group" required/><br /><br />
            <label htmlfor="nom">Ville</label>
            <input type="text" id="ville" value={ville} onChange={(e) => setVille (e.target.value)} placeholder="Saisir votre ville" required/><br /><br />
            <label htmlfor="image">Image</label>
            <input type="file" id="image" onChange={(e) => {const fichier = e.target.files[0] ;
                if (fichier) {
                    setImage(URL.createObjectURL(fichier));
                }
             }} accept="image/*"/><br /><br /><br /><br />
            <button type="submit">Ajouter</button>
            <button type="reset">Réinitialisation</button>
        </form>
        

    )
}
export default StudentForm;
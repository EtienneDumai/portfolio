export interface Project {
    id: number;
    nom: string;
    description: string;
    date_debut: Date;
    date_fin?: Date;
    status: "En cours" | "Terminé"
    type: "Scolaire" | "Professionel" | "Personnel";
    stack?: string[];
    roles: string[];
    lienGithub?: string;
    lienDemo?: string;
}

export interface Skills {
    nom: string;
    icon: string;
    niveau: number;
    category: string;
}

export interface APropos {
    nom: string;
    prenom: string;
    date_naissance: Date;
    bio: string;
    lienGithub: string;
    lienLinkedin: string;
}

export interface Entreprise {
    idEntreprise: number;
    nom: string;
    lieu: string;
    pays: string;
    domaine: string;
    role: string;
}

export interface Formation {
    idFormation: number;
    date_debut: Date;
    date_fin: Date;
    nom: string;
    lieu: string;
    pays: string;
}

export const Projects: Project[] = [
    {
        id: 1,
        nom: "APE Jules Ferry",
        description: "Lors d'un projet sur la 3ème année de BUT Informatique, l'APE Jules Ferry de l'école primaire portant le même nom nous a demandé de créer une application permettant la communication et la répartition des parents d'élèves sur l'organisation des différents événements organisés par l'APE.",
        date_debut: new Date("2025-09-01"),
        status: "En cours",
        type: "Scolaire",
        stack: ["Angular","TypeScript", "Laravel", "PHP","PostgreSQL", "Docker", "Jasmine", "PHPUnit",]
        roles: ["Analyste", "Concepteur", "Développeur", "Scrum master"]
    },
    {
        id: 2,
        nom: "Bibliothèque de jeu vidéo",
        description: "Lors de la fin du cours sur le framework Angular il nous été demandé de faire une application web pour gérer des jeux vidéos.",
        date_debut: new Date("2025-03-25"),
        date_fin: new Date("2025-04-05"),
        status: "Terminé",
        type: "Scolaire",
        stack: ["Angular", "Angular Material", "JSON Server"],
        roles: ["Développeur"],
        lienGithub: "https://github.com/EtienneDumai/ProjetR4.D.12"
    },
    {
        id: 3,
        nom: "Représentation d'algorithme de plus cours chemin",
        description: "Lors de la première année pour un projet de fin de semestre il nous été demandé de coder des algorithmes de plus court chemin en prenant comme données les rues de la ville de Bayonne et de faire une représentation graphique pour les visualiser.",
        date_debut: new Date("2024-04-08"),
        date_fin: new Date("2024-05-29"),
        status: "Terminé",
        type: "Scolaire",
        stack:["Python"],
        roles: ["Développeur"],
        lienGithub : "https://github.com/EtienneDumai/S2.02",
    },

];

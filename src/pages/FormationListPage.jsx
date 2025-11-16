import React from "react";

export default function FormationListPage() {
  const formations = [
    // --- Vos anciennes formations ---
    {
      title: "Inclusion Financière & Groupes d’Épargne",
      description:
        "Comprendre les mécanismes des VSLA, gérer des groupes d’épargne, renforcer l’autonomisation financière et créer des stratégies d’inclusion adaptées.",
      level: "Débutant à Avancé",
      duration: "2 à 6 semaines",
      badge: "Finance",
      price: null,
    },
    {
      title: "Entrepreneuriat & Gestion des Micro-Entreprises",
      description:
        "Formation pratique pour lancer, structurer et développer une activité génératrice de revenus, avec outils de gestion, marketing et plan d’affaires.",
      level: "Tous niveaux",
      duration: "4 semaines",
      badge: "Business",
      price: null,
    },
    {
      title: "Développement Durable & Gestion de Projets",
      description:
        "Techniques modernes pour concevoir, planifier et suivre les projets à impact, intégrant le changement climatique, la résilience et la durabilité.",
      level: "Intermédiaire",
      duration: "3 à 8 semaines",
      badge: "Développement",
      price: null,
    },
    {
      title: "Agriculture Durable & Productivité Rurale",
      description:
        "Approches endogènes et innovations agricoles pour améliorer la production, renforcer la résilience climatique et optimiser les pratiques paysannes.",
      level: "Tous niveaux",
      duration: "3 semaines",
      badge: "Agriculture",
      price: null,
    },
    {
      title: "Leadership Personnel & Développement de Carrière",
      description:
        "Coaching et formation pour renforcer la confiance, améliorer la prise de décision, gérer son temps et développer des compétences professionnelles clés.",
      level: "Débutant",
      duration: "1 à 4 semaines",
      badge: "Leadership",
      price: null,
    },
    {
      title: "Communication & Méthodologie d’Enseignement (Peace Corps Method)",
      description:
        "Méthode unique développée pour enseigner efficacement le français ou toute autre langue en 30 heures d’apprentissage structuré.",
      level: "Formateurs / Éducateurs",
      duration: "2 semaines",
      badge: "Éducation",
      price: null,
    },

    // --- NOUVELLES FORMATIONS AJOUTÉES ---
    {
      title: "Project Management for Impact",
      description:
        "Maîtrisez la conception de projets à fort impact.",
      price: "$49",
      level: "Tous niveaux",
      duration: "3 semaines",
      badge: "Projet",
    },
    {
      title: "Monitoring & Evaluation",
      description:
        "Élaborez des cadres de suivi-évaluation performants.",
      price: "$59",
      level: "Intermédiaire",
      duration: "4 semaines",
      badge: "Suivi",
    },
    {
      title: "Fundraising & Proposal Writing",
      description:
        "Réussissez vos levées de fonds et rédigez des propositions gagnantes.",
      price: "$69",
      level: "Intermédiaire à Avancé",
      duration: "4 semaines",
      badge: "Financement",
    },
    {
      title: "Développement financier et inclusion financière",
      description:
        "Explorer les mécanismes du développement financier et l’accès équitable aux services financiers pour stimuler la croissance économique et réduire les inégalités.",
      price: "$79",
      level: "Tous niveaux",
      duration: "6 semaines",
      badge: "Finance",
    },
    {
      title: "Gestion du financement des organisations",
      description:
        "Analyser les stratégies, outils et processus de gestion du financement des organisations afin d’assurer leur viabilité, leur croissance et leur impact.",
      price: "$79",
      level: "Intermédiaire",
      duration: "5 semaines",
      badge: "Gestion",
    },
    {
      title: "Environnement et développement durable",
      description:
        "Analyser les interactions entre les activités humaines et l’environnement pour promouvoir un développement durable équilibré.",
      price: "$100",
      level: "Tous niveaux",
      duration: "8 semaines",
      badge: "Environnement",
    },
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen py-16 px-6">
      
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold">Nos Formations</h1>
        <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
          Découvrez les programmes de formation proposés par Selah Expertise International,
          conçus pour renforcer les compétences, soutenir l’autonomisation et accompagner
          les acteurs du développement.
        </p>
      </header>

      {/* Formation List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {formations.map((formation, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition"
          >
            <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
              {formation.badge}
            </span>

            <h2 className="text-xl font-semibold mt-4 mb-2">{formation.title}</h2>

            <p className="text-gray-600 mb-4">{formation.description}</p>

            <div className="flex justify-between text-sm text-gray-500 mb-4">
              <span>📘 Niveau : {formation.level}</span>
              <span>⏳ Durée : {formation.duration}</span>
            </div>

            {formation.price && (
              <p className="text-lg font-semibold text-blue-700 mb-6">
                Prix : {formation.price}
              </p>
            )}

            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Voir le détail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

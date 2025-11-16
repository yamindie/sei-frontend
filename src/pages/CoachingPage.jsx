import React from "react";

export default function CoachingListPage() {
  const coachings = [
    {
      title: "Coaching : Mindset & Puissance Mentale",
      description:
        "Développez une force mentale exceptionnelle grâce à des techniques avancées de concentration, visualisation, affirmation, autosuggestion et maîtrise émotionnelle. Programme inspiré du texte « Les pouvoirs mentaux à l’œuvre » pour transformer vos pensées en énergie créatrice.",
      price: "$49",
      duration: "3 semaines",
      badge: "Mindset"
    },
    {
      title: "Coaching : Leadership Transformationnel",
      description:
        "Renforcez votre charisme, votre influence et votre capacité à mobiliser les autres. Ce coaching vous aide à maîtriser la prise de décision, la communication stratégique et la gestion des dynamiques humaines.",
      price: "$59",
      duration: "4 semaines",
      badge: "Leadership"
    },
    {
      title: "Coaching : Gestion du Stress & Intelligence Émotionnelle",
      description:
        "Apprenez à canaliser vos émotions, réduire le stress et augmenter votre clarté mentale. Techniques basées sur la respiration consciente, la restructuration cognitive et la maîtrise des déclencheurs émotionnels.",
      price: "$39",
      duration: "2 semaines",
      badge: "Bien-être"
    },
    {
      title: "Coaching : Productivité & Organisation Personnelle",
      description:
        "Optimisez votre efficacité avec des méthodes de planification, gestion du temps, définition de priorités et routines de haute performance. Résultats visibles dès la première semaine.",
      price: "$45",
      duration: "2 à 4 semaines",
      badge: "Productivité"
    },
    {
      title: "Coaching : Orientation professionnelle & Carrière",
      description:
        "Identifiez votre vocation, construisez un plan de carrière clair et renforcez votre employabilité. Inclut CV optimisé, stratégie de candidature, et préparation aux entretiens.",
      price: "$79",
      duration: "4 semaines",
      badge: "Carrière"
    },
    {
    title: "Coaching pour Entrepreneurs : Lancer & Développer Son Business",
    description:
      "Un accompagnement complet pour transformer une idée en entreprise rentable : étude de marché, business model, gestion financière, stratégie marketing, structuration juridique et pilotage de la croissance.",
    price: "$89",
    duration: "4 à 6 semaines",
    badge: "Entrepreneuriat"
    },
    {
      title: "Coaching pour Étudiants : Orientation, Méthodologie & Réussite",
      description:
        "Aidez-vous à clarifier votre orientation, améliorer votre méthode de travail, gérer votre stress scolaire et maximiser vos chances de réussite académique et professionnelle.",
      price: "$39",
      duration: "2 à 4 semaines",
      badge: "Étudiants"
    },
    {
      title: "Coaching Spirituel & Développement Intérieur",
      description:
        "Un programme profond basé sur l’introspection, la connexion intérieure, la guérison émotionnelle, la méditation et l’harmonisation de la vision de vie. Visez la paix intérieure et la croissance spirituelle.",
      price: "$69",
      duration: "3 semaines",
      badge: "Spiritualité"
    },
    {
      title: "Coaching : Réussite Financière & Abondance",
      description:
        "Reprogrammez votre rapport à l’argent, développez des stratégies de revenus, apprenez la gestion financière personnelle, la discipline budgétaire et construisez un plan d’indépendance financière.",
      price: "$79",
      duration: "3 à 5 semaines",
      badge: "Finance"
    }
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen py-16 px-6">
      
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold">Nos Programmes de Coaching</h1>
        <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
          Explorez nos séances de coaching personnalisées conçues pour développer votre potentiel,
          renforcer votre mindset et vous accompagner dans votre transformation personnelle
          et professionnelle.
        </p>
      </header>

      {/* Coaching Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {coachings.map((coach, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition"
          >
            <span className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full">
              {coach.badge}
            </span>

            <h2 className="text-xl font-semibold mt-4 mb-2">{coach.title}</h2>

            <p className="text-gray-600 mb-4">{coach.description}</p>

            <div className="flex justify-between text-sm text-gray-500 mb-6">
              <span>💰 Prix : {coach.price}</span>
              <span>⏳ Durée : {coach.duration}</span>
            </div>

            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">
              Réserver une session
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

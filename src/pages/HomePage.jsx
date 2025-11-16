import CardFormation from "../components/CardFormation";

export default function HomePage() {
  const featuredCourses = [
    {
      id: 1,
      title: "Project Management for Impact",
      excerpt: "Maîtrisez la conception de projets à fort impact.",
      price: 49,
      image: "/images/pm.jpg",
    },
    {
      id: 2,
      title: "Monitoring & Evaluation",
      excerpt: "Élaborez des cadres de suivi-évaluation performants.",
      price: 59,
      image: "/images/me-course.jpg",
    },
    {
      id: 3,
      title: "Fundraising & Proposal Writing",
      excerpt: "Réussissez vos levées de fonds et rédigez des propositions gagnantes.",
      price: 69,
      image: "/images/fundraising.jpg",
    },
    {
      id: 4,
      title: "Développement financier et inclusion financière",
      excerpt: "Explorer les mécanismes du développement financier et l’accès équitable aux services financiers pour stimuler la croissance économique et réduire les inégalités.",
      price: 79,
      image: "/images/financial-inclusion.jpg",
    },
    {
      id: 5,
      title: "Gestion du financement des organisations",
      excerpt:
        "Analyser les outils et stratégies pour assurer la viabilité financière, la croissance et l’impact durable des organisations.",
      price: 79,
      image: "/images/financial-inclusion.jpg",
    },
    {
      id: 6,
      title: "Environnement et développement durable",
      excerpt:
        "Promouvoir un développement durable conciliant croissance, équité sociale et préservation des ressources naturelles.",
      price: 100,
      image: "/images/environment.jpg",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-10">

      {/* HERO SECTION */}
      <div className="bg-white rounded-2xl shadow-lg p-12 mb-16 text-center">
        <h1 className="text-4xl font-bold text-selahBlue mb-4">
          Révélez votre potentiel
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Formations, accompagnement et coaching pour acteurs du développement durable.
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <a
            href="/formations"
            className="border border-selahBlue text-selahBlue px-6 py-3 rounded-lg font-semibold hover:bg-selahBlue hover:text-white transition"
          >
            Explorer les formations
          </a>
          <a
            href="/coaching"
            className="border border-selahBlue text-selahBlue px-6 py-3 rounded-lg font-semibold hover:bg-selahBlue hover:text-white transition"
          >
            Accéder au coaching
          </a>
        </div>
      </div>

      {/* MISSION - VISION - VALEURS */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-selahBlue mb-8 text-center">
          Qui sommes-nous ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-selahBlue mb-3">Mission</h3>
            <p className="text-gray-600">
              Appuyer les organisations à explorer et optimiser leurs opportunités
              pour des solutions holistiques et durables.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-selahBlue mb-3">Vision</h3>
            <p className="text-gray-600">
              Optimiser les ressources pour garantir le succès durable des organisations.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-selahBlue mb-3">Valeurs</h3>
            <p className="text-gray-600">
              Innovation – Efficience – Performance
            </p>
          </div>
        </div>
      </div>

      {/* FEATURED COURSES */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-selahBlue mb-6">
          Formations en vedette
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CardFormation key={course.id} item={course} />
          ))}
        </div>
      </div>

      {/* DOMAINES D’INTERVENTION */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-selahBlue mb-8">
          Domaines d’intervention
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-selahBlue mb-3">
              Développement des affaires & Partenariats
            </h3>
            <p className="text-gray-600">
              Recherche de financement, mobilisation de ressources, plaidoyer,
              relations bailleurs et stratégie de partenariat.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-selahBlue mb-3">
              Gestion de projets & Subventions
            </h3>
            <p className="text-gray-600">
              Gestion de programmes, rédaction de propositions, rapports,
              conformité bailleurs, performance et pilotage stratégique.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-selahBlue mb-3">
              Environnement & Développement durable
            </h3>
            <p className="text-gray-600">
              Études d’impact environnemental, gestion des risques,
              changement climatique et SIG.
            </p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE SELAH */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-selahBlue mb-6">
          Pourquoi choisir Selah Expertise International?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-selahBlue mb-3">
              Approche endogène
            </h3>
            <p className="text-gray-600">
              Un savoir basé sur les réalités locales pour des solutions réellement durables.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-selahBlue mb-3">
              Expertise reconnue
            </h3>
            <p className="text-gray-600">
              Une équipe qualifiée avec une expérience du nexus
              <strong> développement – humanitaire</strong>.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-selahBlue mb-3">
              Accompagnement sur mesure
            </h3>
            <p className="text-gray-600">
              Solutions adaptées, gestion efficace des ressources, performance durable.
            </p>
          </div>

        </div>
      </div>

      {/* FOOTER CONTACT */}
      <div className="mt-20 text-center text-gray-600">
        <p>📞 +226 02 72 32 32</p>
        <p>N° RCCM : BF FDG 2021 C 0059</p>
        <p>IFU : 00166221A</p>
      </div>

    </section>
  );
}

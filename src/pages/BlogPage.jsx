export default function BlogPage() {
  const posts = [
    {
      title: "Comment concevoir un projet à fort impact ?",
      excerpt:
        "Les éléments clés pour transformer une idée en projet structuré, durable et finançable.",
      category: "Gestion de projets",
      image: "/images/blog1.jpg",
    },
    {
      title: "Les 7 erreurs courantes dans les levées de fonds des ONG",
      excerpt:
        "Analyse des pièges à éviter lors des stratégies de mobilisation de ressources.",
      category: "Financement",
      image: "/images/blog2.jpg",
    },
    {
      title:
        "Inclusion financière : pourquoi les VSLA transforment les communautés rurales ?",
      excerpt:
        "Les groupes d’épargne comme moteur de résilience économique.",
      category: "Inclusion financière",
      image: "/images/blog3.jpg",
    },
    {
      title:
        "Leadership transformationnel : un levier puissant pour les organisations africaines",
      excerpt:
        "Comment la posture du leader influence la performance collective.",
      category: "Leadership",
      image: "/images/blog4.jpg",
    },
    {
      title:
        "Changement climatique : stratégies d’adaptation pour le monde rural",
      excerpt:
        "Solutions localement adaptées basées sur le savoir endogène.",
      category: "Environnement",
      image: "/images/blog5.jpg",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      {/* HERO */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-selahBlue">
          Le Blog de Selah Expertise International
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Analyses, conseils et ressources pour booster vos projets et
          renforcer vos compétences en développement durable.
        </p>
      </div>

      {/* BLOG LIST */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <img src={post.image} alt="" className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-selahBlue text-sm font-semibold">
                {post.category}
              </span>

              <h3 className="text-xl font-semibold mt-2">{post.title}</h3>
              <p className="text-gray-600 mt-3">{post.excerpt}</p>

              <button className="mt-4 text-selahBlue font-semibold hover:underline">
                Lire l’article →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center bg-white shadow-md rounded-2xl p-12">
        <h2 className="text-2xl font-bold text-selahBlue mb-4">
          Restez informé
        </h2>
        <p className="text-gray-600 mb-6">
          Recevez nos analyses, ressources et outils directement dans votre mail.
        </p>

        <button className="px-6 py-3 bg-selahBlue text-white rounded-lg hover:bg-selahGold hover:text-black transition">
          S’abonner à la newsletter
        </button>
      </div>
    </section>
  );
}

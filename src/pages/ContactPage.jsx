export default function ContactPage() {
  return (
    <section className="container mx-auto px-6 py-16">

      {/* PAGE HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-selahBlue">Contactez-nous</h1>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Une question ? Un besoin d’accompagnement, de formation ou de partenariat ?
          L’équipe de Selah Expertise International est à votre disposition.
        </p>
      </div>

      {/* CONTACT INFO */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">

        <div className="p-6 bg-white shadow-md rounded-xl text-center">
          <h3 className="text-xl font-semibold text-selahBlue mb-2">Téléphone</h3>
          <p className="text-gray-600">+226 02 72 32 32 / 75 28 56 25</p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-xl text-center">
          <h3 className="text-xl font-semibold text-selahBlue mb-2">Email</h3>
          <p className="text-gray-600">selahexpertiseinternationale@gmail.com</p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-xl text-center">
          <h3 className="text-xl font-semibold text-selahBlue mb-2">Adresse</h3>
          <p className="text-gray-600">
            Secteur 1, Fada N’Gourma, Burkina Faso
          </p>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-selahBlue mb-6 text-center">
          Envoyer un message
        </h2>

        <form className="grid grid-cols-1 gap-6">
          <input
            type="text"
            placeholder="Nom complet"
            className="border p-3 rounded-lg w-full"
          />

          <input
            type="email"
            placeholder="Adresse email"
            className="border p-3 rounded-lg w-full"
          />

          <input
            type="text"
            placeholder="Téléphone (optionnel)"
            className="border p-3 rounded-lg w-full"
          />

          <input
            type="text"
            placeholder="Objet de la demande"
            className="border p-3 rounded-lg w-full"
          />

          <textarea
            placeholder="Votre message"
            rows="5"
            className="border p-3 rounded-lg w-full"
          ></textarea>

          <button
            type="submit"
            className="bg-selahBlue text-white py-3 rounded-lg font-semibold hover:bg-selahGold hover:text-black transition"
          >
            Envoyer la demande
          </button>
        </form>
      </div>

      {/* FOOTER CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-600">
          Vous préférez être rappelé(e) ? Laissez-nous vos coordonnées et
          nous vous recontactons dans les plus brefs délais.
        </p>
      </div>
    </section>
  );
}

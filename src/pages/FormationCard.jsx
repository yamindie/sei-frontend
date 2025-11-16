import { Link } from "react-router-dom";

export default function FormationCard({ item }) {
  return (
    <div className="shadow rounded-lg p-4 border hover:shadow-xl transition">
      <h3 className="font-bold text-xl text-primary">{item.title}</h3>
      <p>{item.excerpt}</p>
      <p className="text-yellow-600 font-bold mt-2">{item.price} €</p>

      <Link
        to={`/formations/${item.id}`}
        className="mt-3 inline-block text-primary font-semibold hover:text-yellow-500"
      >
        Voir plus →
      </Link>
    </div>
  );
}

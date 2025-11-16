// ==============================
// CoachingList.jsx
// ==============================

import { useEffect, useState } from "react";
import { getCoachings } from "../utils/api";
import CoachingCard from "./CoachingCard";

export default function CoachingList({ onSelect }) {
  const [coachings, setCoachings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCoachings();
  }, []);

  async function loadCoachings() {
    try {
      const data = await getCoachings();
      setCoachings(data);
    } catch (error) {
      console.error("Erreur chargement coachings:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <p className="text-center mt-5 text-gray-500">Chargement...</p>;

  if (coachings.length === 0)
    return <p className="text-center text-gray-500 mt-5">Aucun coaching disponible.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
      {coachings.map((c) => (
        <CoachingCard key={c.id} item={c} onSelect={onSelect} />
      ))}
    </div>
  );
}

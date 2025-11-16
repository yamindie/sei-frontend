// ==============================
// CoachingDetails.jsx
// ==============================

import { useEffect, useState } from "react";
import { getCoaching, bookCoaching } from "../utils/api";

export default function CoachingDetails({ coachingId, onBack }) {
  const [coaching, setCoaching] = useState(null);
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(false);

  useEffect(() => {
    loadDetails();
  }, [coachingId]);

  async function loadDetails() {
    try {
      const data = await getCoaching(coachingId);
      setCoaching(data);
    } catch (error) {
      console.error("Erreur chargement coaching:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleBooking() {
    setBooking(true);
    try {
      await bookCoaching(coaching.id, new Date().toISOString());
      alert("Votre réservation est confirmée !");
    } catch (error) {
      alert("Impossible de réserver la session.");
    } finally {
      setBooking(false);
    }
  }

  if (loading) return <p className="mt-5 text-gray-500 text-center">Chargement...</p>;

  if (!coaching) return <p className="mt-5 text-gray-500 text-center">Coaching introuvable.</p>;

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 border border-gray-100">
      <button
        onClick={onBack}
        className="mb-4 text-primary hover:underline"
      >
        ← Retour
      </button>

      <h2 className="text-3xl font-bold text-primary mb-4">
        {coaching.theme}
      </h2>

      <p className="text-gray-700 mb-3">
        Coach ID : <span className="font-semibold">{coaching.coach_id}</span>
      </p>

      <p className="text-gray-700 mb-3">
        Date de session :
        <span className="font-semibold text-secondary ml-1">
          {new Date(coaching.session_date).toLocaleString()}
        </span>
      </p>

      {coaching.notes && (
        <div className="bg-gray-50 p-4 rounded-lg border mt-4">
          <h4 className="font-bold text-primary mb-2">Notes :</h4>
          <p className="text-gray-700">{coaching.notes}</p>
        </div>
      )}

      <div className="mt-6">
        <button
          onClick={handleBooking}
          disabled={booking}
          className="px-5 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition w-full md:w-auto"
        >
          {booking ? "Réservation..." : "Réserver cette session"}
        </button>
      </div>
    </div>
  );
}

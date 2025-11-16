import React from 'react';
import { Link } from 'react-router-dom';
export default function CardFormation({item}){
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <img src={item?.image || '/src/assets/images/formation.jpg'} alt={item?.title || 'formation'} className="w-full h-40 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary">{item?.title || 'Formation title'}</h3>
        <p className="text-sm mt-2">{item?.excerpt || 'Brief description...'}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-accent font-bold">{item?.price ? `$${item.price}` : 'Free'}</div>
          <Link to={`/formations/${item?.id || 1}`} className="btn-primary">Voir le détail</Link>
        </div>
      </div>
    </div>
  );
}

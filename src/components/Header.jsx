import { Link } from 'react-router-dom';
export default function Header(){
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-3">
          <img src="logo.jpg" alt="Selah Expertise International"/>
          <div className="text-accent font-bold text-xl">Selah Expertise International
            
            <div className="text-sm">La sagesse qui gouverne</div>
          </div> 
          
        </div>
        <nav className="space-x-4">
          <Link to='/' className="hover:text-accent">Home</Link>
          <Link to='/formations' className="hover:text-accent">Formations</Link>
          <Link to='/coaching' className="hover:text-accent">Coaching</Link>
          <Link to='/blog' className="hover:text-accent">Blog</Link>
          <Link to='/contact' className="hover:text-accent">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

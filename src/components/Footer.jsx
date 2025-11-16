export default function Footer(){
  return (
    <footer className="bg-gray-100 text-gray-700 mt-8">
      <div className="container mx-auto px-4 py-6 flex justify-between">
        <div>© {new Date().getFullYear()} Selah Expertise International
        <li><a href="#">Qui sommes nous </a></li>
        </div>
        <div> 
                <li><a href="#">Bibliothèque</a></li>
                <li><a href="#">Articles </a></li>
                <li><a href="#">Inov Hub </a></li>
                
        </div>
        <div className="space-x-4">
          <a href="#">Mentions légales</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>
          
        </div>
      </div>
    </footer>
  );
}

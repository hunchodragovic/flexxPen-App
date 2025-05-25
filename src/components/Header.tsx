
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">FP</span>
          </div>
          <span className="text-blue-900 font-semibold text-lg">FlexPen®</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-blue-700 font-medium">FlexPen® Guide</span>
          <Link to="/">
            <Button variant="outline" size="sm" className="bg-white/90 hover:bg-white">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

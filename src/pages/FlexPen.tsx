
import Header from '@/components/Header';
import FlexPenModel from '@/components/FlexPenModel';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FlexPen = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-300/30" />
      
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20">
        <div className="max-w-6xl mx-auto w-full">
          {/* Back button */}
          <div className="mb-8 flex justify-start">
            <Link to="/">
              <Button variant="outline" className="bg-white/90 hover:bg-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          {/* 3D Model Container */}
          <div className="w-full h-[600px] bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
            <FlexPenModel />
          </div>
          
          {/* Instructions */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-lg">
              Interactive FlexPen® 3D Model
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Click and drag to rotate • Scroll to zoom • Right-click and drag to pan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexPen;

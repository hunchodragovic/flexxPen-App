
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Leaf, Recycle, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Conservation = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-green-50 via-green-100 to-green-800">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-green-900/60" />
      
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <div className="mb-8 flex justify-start">
            <Link to="/">
              <Button variant="outline" className="bg-white/90 hover:bg-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          {/* Main heading */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-4">
              <Leaf className="inline-block w-16 h-16 mr-4 text-green-700" />
              Conservation
            </h1>
            <p className="text-xl text-green-700 font-medium">
              Environmental responsibility and sustainable practices
            </p>
          </div>
          
          {/* Content cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <Recycle className="w-12 h-12 text-green-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-green-900 mb-4">Recycling Programs</h3>
              <p className="text-green-700">
                Learn about our comprehensive recycling initiatives and how you can participate 
                in reducing environmental impact through proper disposal methods.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <Globe className="w-12 h-12 text-green-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-green-900 mb-4">Global Impact</h3>
              <p className="text-green-700">
                Discover how our conservation efforts contribute to global sustainability 
                goals and environmental protection worldwide.
              </p>
            </div>
          </div>
          
          {/* Additional information */}
          <div className="mt-16 text-green-600">
            <p className="text-lg font-medium">
              Together, we can make a difference for our planet's future
            </p>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default Conservation;

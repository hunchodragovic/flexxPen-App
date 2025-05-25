
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Syringe, Clock, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductUsage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-purple-50 via-purple-100 to-purple-800">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-purple-900/60" />
      
      <Header />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-start">
            <Link to="/">
              <Button variant="outline" className="bg-white/90 hover:bg-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-purple-900 mb-4">
              <Syringe className="inline-block w-16 h-16 mr-4 text-purple-700" />
              Product Usage
            </h1>
            <p className="text-xl text-purple-700 font-medium">
              Learn how to properly use your FlexPen® device
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <Syringe className="w-12 h-12 text-purple-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Step-by-Step Guide</h3>
              <p className="text-purple-700">
                Detailed instructions on how to prepare and administer your medication safely.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <Clock className="w-12 h-12 text-purple-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Timing & Dosage</h3>
              <p className="text-purple-700">
                Important information about when and how much medication to take.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <AlertTriangle className="w-12 h-12 text-purple-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Safety Tips</h3>
              <p className="text-purple-700">
                Essential safety guidelines and precautions for proper usage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductUsage;

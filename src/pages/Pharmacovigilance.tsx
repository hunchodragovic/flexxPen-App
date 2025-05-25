
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, FileText, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pharmacovigilance = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-red-50 via-red-100 to-red-800">
      <div className="absolute inset-0 bg-gradient-to-br from-red-200/30 to-red-900/60" />
      
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
            <h1 className="text-5xl md:text-6xl font-bold text-red-900 mb-4">
              <Shield className="inline-block w-16 h-16 mr-4 text-red-700" />
              Pharmacovigilance
            </h1>
            <p className="text-xl text-red-700 font-medium">
              Safety monitoring and adverse event reporting
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <Shield className="w-12 h-12 text-red-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-red-900 mb-4">Safety Monitoring</h3>
              <p className="text-red-700">
                Continuous monitoring of drug safety and effectiveness to ensure patient welfare.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <FileText className="w-12 h-12 text-red-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-red-900 mb-4">Report Adverse Events</h3>
              <p className="text-red-700">
                Learn how to report side effects and adverse reactions properly.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <Phone className="w-12 h-12 text-red-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-red-900 mb-4">Contact Support</h3>
              <p className="text-red-700">
                24/7 support for urgent safety concerns and medical questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pharmacovigilance;

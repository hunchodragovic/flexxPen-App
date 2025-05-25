
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Brain, Trophy, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Quiz = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-800">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/30 to-yellow-900/60" />
      
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
            <h1 className="text-5xl md:text-6xl font-bold text-yellow-900 mb-4">
              <Brain className="inline-block w-16 h-16 mr-4 text-yellow-700" />
              Knowledge Quiz
            </h1>
            <p className="text-xl text-yellow-700 font-medium">
              Test your understanding of FlexPen® usage and safety
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <Brain className="w-12 h-12 text-yellow-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">Knowledge Test</h3>
              <p className="text-yellow-700">
                Interactive quiz to assess your understanding of proper device usage.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <Trophy className="w-12 h-12 text-yellow-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">Achievements</h3>
              <p className="text-yellow-700">
                Earn certificates and track your progress through different topics.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <Clock className="w-12 h-12 text-yellow-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">Quick Assessment</h3>
              <p className="text-yellow-700">
                Short quizzes available for quick knowledge validation.
              </p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-12 py-4 text-lg rounded-full shadow-lg"
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

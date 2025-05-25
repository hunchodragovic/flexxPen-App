
import Header from '@/components/Header';
import NavigationButtons from '@/components/NavigationButtons';
import TreeIllustration from '@/components/TreeIllustration';
import Cityscape from '@/components/Cityscape';
import FamilySilhouette from '@/components/FamilySilhouette';
import Birds from '@/components/Birds';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-blue-50 via-blue-100 to-blue-800">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-blue-900/60" />
      
      {/* Header */}
      <Header />
      
      {/* Decorative elements */}
      <Birds />
      <Cityscape />
      <FamilySilhouette />
      <TreeIllustration />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
              Welcome to <span className="text-blue-700">FlexPen<sup className="text-2xl">®</sup></span> Guide
            </h1>
            <p className="text-xl text-blue-700 font-medium">
              Your comprehensive medical device guidance platform
            </p>
          </div>
          
          {/* Navigation buttons */}
          <NavigationButtons />
          
          {/* Additional information */}
          <div className="mt-16 text-blue-600">
            <p className="text-lg font-medium">
              Explore our comprehensive resources for medical device usage, conservation, and safety
            </p>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default Index;

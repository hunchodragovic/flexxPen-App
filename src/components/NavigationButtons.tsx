
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NavigationButtons = () => {
  const navigate = useNavigate();
  
  const buttons = [
    { label: 'Conservation', variant: 'outline' as const, path: '/conservation' },
    { label: 'FlexPen®', variant: 'default' as const, path: '/flexpen' },
    { label: 'Product Usage', variant: 'outline' as const, path: '/product-usage' },
    { label: 'Pharmacovigilance', variant: 'outline' as const, path: '/pharmacovigilance' },
    { label: 'Quiz', variant: 'outline' as const, path: '/quiz' },
  ];

  const handleButtonClick = (path: string | null) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant={button.variant}
          size="lg"
          className={`${
            button.variant === 'default' 
              ? 'bg-blue-700 hover:bg-blue-800 text-white' 
              : 'bg-white/90 hover:bg-white hover:scale-105 border-blue-200 text-blue-700'
          } transition-all duration-200 font-medium px-8 py-3 rounded-full shadow-md hover:shadow-lg`}
          onClick={() => handleButtonClick(button.path)}
        >
          {button.label}
        </Button>
      ))}
    </div>
  );
};

export default NavigationButtons;

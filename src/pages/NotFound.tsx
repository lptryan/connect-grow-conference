import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-8xl md:text-9xl font-display font-bold gradient-text-blue mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="btn-hero inline-flex items-center gap-2">
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;

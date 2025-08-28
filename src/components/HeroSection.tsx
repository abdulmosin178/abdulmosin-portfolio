import { Linkedin, Github, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImg from '../assets/profile2.jpeg'; // <-- your image

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in">
              Hi There,
            </h1>
            <h2
              className="text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in"
              style={{ animationDelay: '200ms' }}
            >
              I'm Abdul Mosin
            </h2>
            <p
              className="text-xl text-muted-foreground mb-2 animate-fade-in"
              style={{ animationDelay: '400ms' }}
            >
              <span className="text-primary font-semibold hover:scale-110 inline-block transition-transform duration-300">
                Software Developer
              </span>
            </p>

            {/* Social Links */}
            <div
              className="flex justify-center lg:justify-start space-x-4 mt-8 animate-fade-in"
              style={{ animationDelay: '600ms' }}
            >
              <a
                href="https://www.linkedin.com/in/abdul-mosin-545774333"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:scale-125 hover:rotate-12 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>

              <a
                href="https://github.com/abdulmosin178"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:scale-125 hover:rotate-12 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>

              <a
                href="https://leetcode.com/u/Abdul_Mosin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:scale-125 hover:rotate-12 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  <Code className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className="flex justify-center lg:justify-end animate-fade-in"
            style={{ animationDelay: '800ms' }}
          >
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 hover:border-primary/50 hover:scale-110 hover:rotate-3 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30">
              <img
                src={profileImg}
                alt="Abdul Mosin"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

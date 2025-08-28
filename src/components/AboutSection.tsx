import { MapPin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import profileImg from '../assets/passport_profile1.jpeg'; 

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-80 h-96 rounded-lg overflow-hidden">
              <img
                src={profileImg}
                alt="Abdul Mosin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-bold text-foreground mb-2">
              I'm Abdul Mosin
            </h3>
            <p className="text-xl text-primary mb-6">Software Developer</p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Hello! I’m Abdul Mosin, a passionate full-stack developer specializing in Java Spring Boot and React. I have hands-on experience with Node.js, Android development, REST APIs, and database integration, which enables me to design and build scalable applications across web and mobile platforms. I enjoy solving complex problems, creating seamless user experiences, and continuously learning new technologies to enhance my craft.
            </p>

            <Card className="p-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-foreground">abdulmosin178@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground">TamilNadu, India - 622103</span>
                </div>
              </div>
            </Card>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
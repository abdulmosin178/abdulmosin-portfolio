import { Card } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import jmcImg from '../assets/jmc.jpg';
import hhrcImg from '../assets/hhrc.webp';
import telcImg from '../assets/telc.webp';

const EducationSection = () => {
  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Jamal Mohamed College, Trichy',
      year: '2023-2025',
      image: jmcImg,
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'HH The Rajahs College, Pudukkottai',
      year: '2019-2022',
      image: hhrcImg,
    },
    {
      degree: 'Leaving School',
      institution: 'TELC Higher Secondary School',
      year: '2017-2019',
      image: telcImg,
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:scale-105 transition-transform duration-300 bg-education-card border-border/50"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={edu.image} // ✅ use the right imported image
                  alt={edu.institution}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <GraduationCap className="h-5 w-5 text-primary mr-2" />
                  <span className="text-primary font-semibold">{edu.year}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {edu.degree}
                </h3>
                <p className="text-muted-foreground">{edu.institution}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

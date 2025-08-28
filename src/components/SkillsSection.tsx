import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', icon: '🌐' },
    { name: 'React Js', icon: '⚛️' },
    { name: 'Javascript', icon: '📜' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Tailwind CSS', icon: '💨' },
    { name: 'Express', icon: '🚀' },
    { name: 'Node Js', icon: '🟢' },
    { name: 'Java', icon: '☕' },
    { name: 'Spring Boot', icon: '🍃' }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Abilities
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:scale-110 hover:rotate-2 transition-all duration-500 bg-skill-card border-border/50 animate-fade-in hover:shadow-lg hover:shadow-primary/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 transition-transform duration-300 hover:scale-125 hover:rotate-12">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
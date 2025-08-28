import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Future Track',
      description: 'A  future track ed-tech solution website with React and Node.js',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/abdulmosin178/future_track',
      demo: 'https://future-track.vercel.app/'
    },
    {
      title: 'Blood Donor Management System',
      description: 'A collaborative donor management tool with real-time blood donor and receiver updates',
      tech: ['Javascript', 'Laravel', 'Express', 'MySQL'],
      github: 'https://github.com/abdulmosin178/blood_donor_management_system_by-_mosin',
      demo: 'https://github.com/abdulmosin178/blood_donor_management_system_by-_mosin'
    },
    {
      title: 'Bug Tracking System',
      description: 'A java based bug tracking Web Application',
      tech: ['Java', 'API Integration', 'Springboot'],
      github: 'https://github.com/abdulmosin178/Bug_Tracking-',
      demo: 'https://github.com/abdulmosin178/Bug_Tracking-'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '200ms' }}>
            Some of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:scale-105 hover:-rotate-1 transition-all duration-500 bg-card border-border/50 animate-fade-in hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-md hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="hover:scale-110 transition-transform duration-200"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="hover:scale-110 transition-transform duration-200"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
'use client'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// Education data - replace with your actual education details
const education = [
  {
    id: '1',
    institution: 'University of Computer Science',
    degree: 'Bachelor of Science in Computer Science',
    duration: '2020 - 2024',
    location: 'New York, NY',
    gpa: '3.8/4.0',
    description: 'Specialized in Software Engineering and Data Structures. Completed coursework in algorithms, database systems, and web development.',
    achievements: [
      'Dean\'s List - 6 semesters',
      'Computer Science Excellence Award',
      'Senior Capstone Project - Best Innovation'
    ],
    courses: ['Data Structures', 'Algorithms', 'Database Systems', 'Web Development', 'Software Engineering', 'Machine Learning'],
    featured: true,
  },
  {
    id: '2',
    institution: 'Tech Academy Bootcamp',
    degree: 'Full Stack Web Development Certificate',
    duration: '2023',
    location: 'Online',
    gpa: null,
    description: 'Intensive 6-month program focused on modern web development technologies and industry best practices.',
    achievements: [
      'Top 5% of cohort',
      'Outstanding Project Award',
      'Peer Mentor Recognition'
    ],
    courses: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'],
    featured: true,
  },
  {
    id: '3',
    institution: 'Online Learning Platform',
    degree: 'Advanced JavaScript & React Specialization',
    duration: '2022',
    location: 'Online',
    gpa: null,
    description: 'Comprehensive certification program covering advanced JavaScript concepts and React ecosystem.',
    achievements: [
      'Perfect Score - Final Assessment',
      'Community Contributor Badge'
    ],
    courses: ['Advanced JavaScript', 'React Hooks', 'Redux', 'Testing', 'Performance Optimization'],
    featured: false,
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground mb-4">
              <GraduationCap className="h-4 w-4" />
              Academic Journey
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Education & Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic background and continuous learning journey in technology and computer science.
            </p>
          </div>

          {/* Education Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {education.map((edu) => (
              <Card 
                key={edu.id} 
                className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border-border/50 hover:border-primary/20 ${
                  edu.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="font-medium text-foreground/80 mt-1">
                        {edu.institution}
                      </CardDescription>
                    </div>
                    <GraduationCap className="h-6 w-6 text-primary/60 group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
                  </div>
                  
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {edu.location}
                    </div>
                    {edu.gpa && (
                      <div className="flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        GPA: {edu.gpa}
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3 group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {edu.description}
                  </p>
                  
                  {/* Key Courses */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Courses</h4>
                    <div className="flex flex-wrap gap-1">
                      {edu.courses.slice(0, 4).map((course) => (
                        <Badge 
                          key={course} 
                          variant="secondary" 
                          className="text-xs bg-secondary/50 hover:bg-secondary transition-colors duration-200"
                        >
                          {course}
                        </Badge>
                      ))}
                      {edu.courses.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{edu.courses.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  {edu.achievements.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Achievements</h4>
                      <ul className="space-y-1">
                        {edu.achievements.slice(0, 2).map((achievement, index) => (
                          <li key={index} className="text-xs text-muted-foreground flex items-start gap-1">
                            <Award className="h-3 w-3 text-primary/60 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                        {edu.achievements.length > 2 && (
                          <li className="text-xs text-muted-foreground/70">
                            +{edu.achievements.length - 2} more achievements
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </CardContent>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
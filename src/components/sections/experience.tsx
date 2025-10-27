import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import type { Experience as ExperienceType } from '@/types'

// Sample experience data - replace with your actual experience
const experiences: ExperienceType[] = [
  {
    id: '1',
    company: 'Tech Company Inc.',
    position: 'Senior Full Stack Developer',
    period: '2022 - Present',
    description:
      'Leading development of multiple high-traffic web applications. Mentoring junior developers and conducting code reviews.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: '2',
    company: 'Startup XYZ',
    position: 'Full Stack Developer',
    period: '2020 - 2022',
    description:
      'Built and maintained customer-facing web applications. Implemented CI/CD pipelines and automated testing.',
    technologies: ['React', 'Express', 'MongoDB', 'Docker', 'GitHub Actions'],
  },
  {
    id: '3',
    company: 'Digital Agency',
    position: 'Frontend Developer',
    period: '2019 - 2020',
    description:
      'Developed responsive websites and web applications for various clients. Collaborated with designers and backend developers.',
    technologies: ['React', 'JavaScript', 'Sass', 'REST APIs'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="bg-muted/50 py-24 sm:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Work Experience
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              My professional journey
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={experience.id}>
                <Card>
                  <CardHeader>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <CardTitle>{experience.position}</CardTitle>
                        <CardDescription className="mt-1 text-base">
                          {experience.company}
                        </CardDescription>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {experience.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                {index < experiences.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

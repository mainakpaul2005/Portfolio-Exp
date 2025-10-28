'use client'

import * as React from 'react'
import dynamic from 'next/dynamic'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'

// Dynamic import for PixelTransition to avoid SSR issues
const PixelTransition = dynamic(() => import('@/components/PixelTransition'), {
  ssr: false
})

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.')
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_name: 'Portfolio Owner', // You can customize this
        },
        publicKey
      )

      if (result.status !== 200) {
        throw new Error('Failed to send email. Please try again.')
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      })
      reset()
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        {/* Layout: PixelTransition image (left) + Contact Card (right) */}
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image transition area - left side on large screens */}
          <div className="hidden lg:flex lg:items-center lg:justify-center p-6">
            <div className="w-full max-w-sm mx-auto">
              <PixelTransition
                firstContent={
                  <img 
                    src="/profile1.jpg" 
                    alt="Profile" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="400" height="500" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="hsl(var(--muted))"/>
                          <circle cx="200" cy="150" r="60" fill="hsl(var(--muted-foreground))" opacity="0.3"/>
                          <rect x="150" y="250" width="100" height="150" rx="20" fill="hsl(var(--muted-foreground))" opacity="0.3"/>
                          <text x="50%" y="450" text-anchor="middle" dy=".3em" fill="hsl(var(--muted-foreground))" font-family="Arial, sans-serif" font-size="14">
                            Profile Image
                          </text>
                        </svg>
                      `)}`;
                    }}
                  />
                }
                secondContent={
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    background: 'hsl(var(--background))',
                    color: 'hsl(var(--foreground))',
                    padding: '2rem'
                  }}>
                    <div style={{
                      fontSize: '2.5rem',
                      fontWeight: '700',
                      textAlign: 'center',
                      fontFamily: 'inherit',
                      letterSpacing: '-0.02em',
                      lineHeight: '1.2',
                      border: '3px solid hsl(var(--foreground))',
                      padding: '1.5rem 2rem',
                      borderRadius: '0.5rem'
                    }}>
                      Let&apos;s Work<br />Together!
                    </div>
                  </div>
                }
                gridSize={20}
                pixelColor="currentColor"
                animationStepDuration={0.5}
                style={{ width: '100%', height: 'auto' }}
                aspectRatio="500px"
              />
            </div>
          </div>

          {/* Contact Form Card - right aligned on large screens */}
          <div className="w-full max-w-xl lg:justify-self-end lg:pr-8">
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  I&apos;ll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    {...register('name')}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...register('email')}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    {...register('subject')}
                    disabled={isSubmitting}
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={5}
                    {...register('message')}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Status */}
                {submitStatus.type && (
                  <div
                    className={`rounded-md p-4 ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        : 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                    }`}
                  >
                    <p className="text-sm">{submitStatus.message}</p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

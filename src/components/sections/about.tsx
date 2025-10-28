"use client"
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect, useState, useRef } from 'react'
import { siteConfig } from '@/lib/constants'
import Stack from '@/components/Stack'
import { techStackIcons } from '@/lib/techStackIcons'

// Dynamic import for LogoLoop to avoid SSR issues
const LogoLoop = dynamic(() => import('@/components/LogoLoop'), {
  ssr: false
})

const skills = [
	{ name: 'React', category: 'frontend' },
	{ name: 'Next.js', category: 'frontend' },
	{ name: 'TypeScript', category: 'frontend' },
	{ name: 'JavaScript', category: 'frontend' },
	{ name: 'HTML', category: 'frontend' },
	{ name: 'CSS', category: 'frontend' },
	{ name: 'Tailwind CSS', category: 'frontend' },
	{ name: 'shadcn/ui', category: 'frontend' },
	{ name: 'Node.js', category: 'backend' },
	{ name: 'Express.js', category: 'backend' },
	{ name: 'MySQL', category: 'backend' },
	{ name: 'Firebase', category: 'backend' },
	{ name: 'Firestore', category: 'backend' },
	{ name: 'Git', category: 'tools' },
	{ name: 'GitHub', category: 'tools' },
	{ name: 'Vercel', category: 'tools' },
	{ name: 'Firebase Deploy', category: 'tools' },
	{ name: 'Email.js', category: 'tools' },
	{ name: 'Figma (UI Design)', category: 'tools' },
	{ name: 'Gemini API', category: 'tools' },
	{ name: 'ChatGPT (Integration)', category: 'tools' },
]

function GithubContributionsGrid() {
	type Day = { date: string; count: number; level: number }
	const [days, setDays] = useState<Day[]>([])
	const [raw, setRaw] = useState<any>(null)
	const [loading, setLoading] = useState(true)
	const year = new Date().getFullYear()
	const githubUsername = (siteConfig.links.github?.split('/').filter(Boolean).pop()) || 'mainakpaul2005'

	// Initialize scroll ref and current month calculation at the top
	const scrollRef = useRef<HTMLDivElement>(null)
	const currentDate = new Date()
	const currentMonth = currentDate.getMonth() // 0-11

	useEffect(() => {
		// Only fetch on client side
		if (typeof window === 'undefined') return;
		
		fetch(`https://github-contributions-api.jogruber.de/v4/${githubUsername}`)
			.then((res) => res.json())
			.then((json) => {
				setRaw(json)
				if (Array.isArray(json.contributions)) {
					setDays(json.contributions)
				} else {
					setDays([])
				}
				setLoading(false)
			})
			.catch(() => setLoading(false))
	}, [githubUsername])

	// Auto-scroll effect - separate from data fetching
	useEffect(() => {
		if (!loading && days.length > 0 && scrollRef.current) {
			// Calculate weeks and find current month position
			let padded: (Day | null)[] = []
			if (days.length) {
				const firstWeekday = new Date(days[0].date).getDay()
				padded = Array(firstWeekday).fill(null).concat(days)
				const remainder = padded.length % 7
				if (remainder !== 0) padded = padded.concat(Array(7 - remainder).fill(null))
			}
			const weeks: (Day | null)[][] = []
			for (let i = 0; i < padded.length; i += 7) {
				weeks.push(padded.slice(i, i + 7))
			}

			const currentWeekIndex = weeks.findIndex(week => {
				const weekDate = week.find(d => d)?.date
				if (!weekDate) return false
				const weekMonth = new Date(weekDate).getMonth()
				return weekMonth === currentMonth
			})

			if (currentWeekIndex >= 0) {
				const weekWidth = 20 // approximate width of each week (16px + gap)
				const scrollPosition = Math.max(0, (currentWeekIndex - 8) * weekWidth)
				scrollRef.current.scrollLeft = scrollPosition
			}
		}
	}, [loading, days, currentMonth])

	if (loading) {
		return <div className="mt-8 text-center text-muted-foreground">Loading GitHub contributions...</div>
	}
	if (!days.length) {
		return <div className="mt-8 text-center text-muted-foreground">No contributions data found.<pre className="mt-4 text-xs text-left whitespace-pre-wrap">{JSON.stringify(raw, null, 2)}</pre></div>
	}

	// Align to weeks starting on Sunday: pad start and end so all weeks have 7 days
	let padded: (Day | null)[] = []
	if (days.length) {
		const firstWeekday = new Date(days[0].date).getDay() // 0=Sun .. 6=Sat
		padded = Array(firstWeekday).fill(null).concat(days)
		const remainder = padded.length % 7
		if (remainder !== 0) padded = padded.concat(Array(7 - remainder).fill(null))
	}
	const weeks: (Day | null)[][] = []
	for (let i = 0; i < padded.length; i += 7) {
		weeks.push(padded.slice(i, i + 7))
	}

		// Monochrome color scale for levels (fits dark theme)
		// Theme-aware level colors (monochrome, readable): low -> muted, high -> foreground
		const levelClasses = [
			'bg-muted/30',      // level 0 (no activity)
			'bg-foreground/20', // level 1
			'bg-foreground/40', // level 2
			'bg-foreground/60', // level 3
			'bg-foreground/80', // level 4 (max)
		]

		// Compute month labels aligned with week columns
		const monthLabels: string[] = []
		let lastMonth = ''
		for (let w = 0; w < weeks.length; w++) {
			const candidate = weeks[w].find((d) => d && new Date(d.date).getDate() <= 7)
			if (!candidate) { monthLabels.push(''); continue }
			const m = new Date(candidate.date).toLocaleString('en-US', { month: 'short' })
			if (m !== lastMonth) { monthLabels.push(m); lastMonth = m } else { monthLabels.push('') }
		}

		const weekdayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

		return (
			<div className="flex justify-center mt-8">
				<Card className="group relative flex flex-col overflow-hidden border-2 border-foreground/10 bg-card/20 backdrop-blur-2xl transition-all duration-300 hover:border-foreground/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 w-full max-w-4xl">
					{/* Gradient overlay on hover */}
					<div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-foreground/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none z-10" />
					
					{/* Corner accent */}
					<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
					
					<CardHeader className="relative z-20 pb-4">
						<div className="flex items-center justify-between">
							<CardTitle className="text-xl group-hover:text-foreground transition-colors duration-300">GitHub Contributions</CardTitle>
							<a
								href={`https://github.com/users/${githubUsername}/contributions?from=${year}-01-01&to=${year}-12-31`}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center rounded-lg border-2 border-foreground/20 bg-background/80 backdrop-blur-sm px-3 py-1 text-xs font-semibold transition-all duration-200 hover:border-foreground hover:bg-foreground hover:text-background"
							>
								View on GitHub
							</a>
						</div>
						<CardDescription className="group-hover:text-muted-foreground/80 transition-colors duration-300">
							Total contributions in {year}: {raw?.total?.[String(year)] ?? 0}
						</CardDescription>
					</CardHeader>
					
					<CardContent className="flex-1 relative z-20 space-y-4">
						{/* Legend */}
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2 text-[10px] text-muted-foreground select-none">
								<span>Less</span>
								<div className="flex items-center gap-1">
									{levelClasses.map((cls, i) => (
										<div key={i} className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[2px] border border-border ${cls}`} />
									))}
								</div>
								<span>More</span>
							</div>
							<div className="text-xs text-muted-foreground">
								Focused on {new Date().toLocaleString('en-US', { month: 'long' })} • Scroll to explore
							</div>
						</div>

						{/* Contributions Grid */}
						<div className="flex justify-center">
							<div ref={scrollRef} className="overflow-x-auto scroll-smooth scrollbar-hide max-w-full">
								<div className="inline-block">
									{/* Month labels along the top */}
									<div className="mb-1 flex gap-1 text-[10px] leading-none text-muted-foreground select-none">
										{/* Weekday header space */}
										<div className="w-16 sm:w-20"></div>
										{monthLabels.map((label, i) => (
											<div key={i} className="w-3.5 sm:w-4 text-center">{label}</div>
										))}
									</div>
									<div className="flex">
										{/* Weekday labels on the left */}
										<div className="mr-2 flex flex-col gap-1 text-[10px] leading-none text-muted-foreground select-none w-14 sm:w-18">
											{Array.from({ length: 7 }, (_, i) => (
												<div key={i} className="h-3.5 sm:h-4 flex items-center justify-end pr-1">
													{weekdayLabels[i]}
												</div>
											))}
										</div>
										{/* Grid: rows = days, columns = weeks */}
										<div className="flex flex-col gap-1" role="grid" aria-label={`GitHub contributions for ${githubUsername} in ${year}`}>
											{Array.from({ length: 7 }, (_, dayIdx) => (
												<div key={dayIdx} className="flex gap-1" role="row">
													{weeks.map((week, weekIdx) => (
														week[dayIdx] ? (
															<div
																key={weekIdx}
																title={`${week[dayIdx]!.count} contributions on ${week[dayIdx]!.date}`}
																className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[2px] border border-border ${levelClasses[Math.max(0, Math.min(4, week[dayIdx]!.level))]} hover:ring-1 hover:ring-foreground/30 transition-shadow`}
																aria-label={`${week[dayIdx]!.count} contributions on ${week[dayIdx]!.date}`}
																tabIndex={0}
																role="gridcell"
															/>
														) : <div key={weekIdx} className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[2px] border border-transparent" role="gridcell" aria-hidden="true" />
													))}
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
					
					{/* Bottom shine effect */}
					<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
				</Card>
			</div>
		)
}

export function About() {
	return (
		<section id="about" className="py-24 sm:py-32">
			<div className="container px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-6xl">
					{/* Section Header */}
					<div className="mb-16 text-center">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							About Me
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Get to know more about who I am and what I do
						</p>
					</div>

					<div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
						{/* Profile Images Stack - Left */}
						<div className="flex flex-col items-center justify-start -mt-8 gap-16">
							<Stack
								cardsData={[
									{ id: 1, img: '/profile1.jpg' },
									{ id: 2, img: '/profile2.jpeg' },
									{ id: 3, img: '/profile3.jpeg' },
									{ id: 4, img: '/profile4.jpeg' }
								]}
								cardDimensions={{ width: 400, height: 500 }}
								randomRotation={true}
								sensitivity={150}
								sendToBackOnClick={true}
							/>
							
							{/* LogoLoop below Stack */}
							<div className="w-full mt-8 overflow-hidden">
								<LogoLoop
									logos={techStackIcons.map(icon => ({
										src: icon.src,
										alt: icon.alt
									}))}
									speed={50}
									direction="left"
									width="100%"
									logoHeight={85}
									gap={55}
									pauseOnHover={true}
									fadeOut={true}
									fadeOutColor="hsl(var(--background))"
									scaleOnHover={true}
								/>
							</div>
						</div>

						{/* About Content - Right */}
						<div className="relative flex flex-col justify-center">
							<div className="space-y-6 text-muted-foreground">
								<p className="text-lg">
									I am a B.Tech. student in Information Technology and a dedicated Web Developer, specializing in building efficient and powerful Applications. My core objective is to deliver robust, full-cycle IT solutions that seamlessly handle complex requirements. My parallel passion for photography instills a vital focus on user experience and attention to detail in all my technical work.I apply my expertise to solve real-world problems through clean code and strategic development.
								</p>
								<p className="text-lg">
									When I&apos;m not coding, you can find me exploring new technologies, taking up new photography lessons, or sharing my knowledge
									through technical writing and mentoring.
								</p>
							</div>

							{/* Skills */}
							<div className="mt-8">
								<h3 className="mb-6 text-xl font-semibold">Skills & Technologies</h3>
								<div className="space-y-6">
									{/* Frontend Skills */}
									<div>
										<h4 className="mb-3 text-lg font-medium text-primary">Frontend Development</h4>
										<div className="flex flex-wrap gap-2">
											{skills.filter(skill => skill.category === 'frontend').map((skill) => (
												<Badge
													key={skill.name}
													variant="secondary"
													className="px-3 py-1 text-sm bg-muted/60 text-foreground hover:bg-muted/80 dark:bg-muted/40 dark:hover:bg-muted/60 border border-white/20 dark:border-white/10"
												>
													{skill.name}
												</Badge>
											))}
										</div>
									</div>

									{/* Backend Skills */}
									<div>
										<h4 className="mb-3 text-lg font-medium text-primary">Backend Development</h4>
										<div className="flex flex-wrap gap-2">
											{skills.filter(skill => skill.category === 'backend').map((skill) => (
												<Badge
													key={skill.name}
													variant="secondary"
													className="px-3 py-1 text-sm bg-muted/60 text-foreground hover:bg-muted/80 dark:bg-muted/40 dark:hover:bg-muted/60 border border-white/20 dark:border-white/10"
												>
													{skill.name}
												</Badge>
											))}
										</div>
									</div>

									{/* Tools & Others */}
									<div>
										<h4 className="mb-3 text-lg font-medium text-primary">Tools & Others</h4>
										<div className="flex flex-wrap gap-2">
											{skills.filter(skill => skill.category === 'tools').map((skill) => (
												<Badge
													key={skill.name}
													variant="secondary"
													className="px-3 py-1 text-sm bg-muted/60 text-foreground hover:bg-muted/80 dark:bg-muted/40 dark:hover:bg-muted/60 border border-white/20 dark:border-white/10"
												>
													{skill.name}
												</Badge>
											))}
										</div>
									</div>
								</div>
							</div>

							{/* Stats */}
							<div className="mt-8 grid grid-cols-3 gap-4">
								<div className="rounded-lg border bg-card p-4 text-center">
									<div className="text-2xl font-bold text-primary">1.5+</div>
									<div className="text-sm text-muted-foreground">Years Exp.</div>
								</div>
								<div className="rounded-lg border bg-card p-4 text-center">
									<div className="text-2xl font-bold text-primary">4+</div>
									<div className="text-sm text-muted-foreground">Projects</div>
								</div>
								<div className="rounded-lg border bg-card p-4 text-center">
									<div className="text-2xl font-bold text-primary">3+</div>
									<div className="text-sm text-muted-foreground">Clients</div>
								</div>
							</div>
							<GithubContributionsGrid />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

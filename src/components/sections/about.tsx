"use client"
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { useEffect, useState } from 'react'
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
	}, [])

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
			<div className="mt-8">
				<div className="mb-2 flex items-center justify-between">
					<h3 className="text-xl font-semibold">GitHub Contributions</h3>
					<a
						href={`https://github.com/users/${githubUsername}/contributions?from=${year}-01-01&to=${year}-12-31`}
						target="_blank"
						rel="noreferrer"
						className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
					>
						View on GitHub
					</a>
				</div>
				<div className="mb-3 text-muted-foreground text-sm">
					Total contributions in {year}: {raw?.total?.[String(year)] ?? 0}
				</div>
				<div className="overflow-x-auto">
					<div className="inline-block">
						{/* Month labels along the top */}
						<div className="ml-8 mb-1 flex gap-1 text-[10px] leading-none text-muted-foreground select-none">
							{monthLabels.map((label, i) => (
								<div key={i} className="w-3.5 sm:w-4 text-center">{label}</div>
							))}
						</div>
						<div className="flex">
							{/* Weekday labels on the left (show Mon, Wed, Fri) */}
							<div className="mr-2 hidden sm:flex flex-col gap-1 text-[10px] leading-none text-muted-foreground select-none">
								{Array.from({ length: 7 }, (_, i) => (
									<div key={i} className="h-3.5 sm:h-4 flex items-center">
										{(i === 1 || i === 3 || i === 5) ? weekdayLabels[i] : ''}
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
						{/* Legend */}
						<div className="mt-2 flex items-center gap-2 text-[10px] text-muted-foreground select-none">
							<span>Less</span>
							<div className="flex items-center gap-1">
								{levelClasses.map((cls, i) => (
									<div key={i} className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[2px] border border-border ${cls}`} />
								))}
							</div>
							<span>More</span>
						</div>
					</div>
				</div>
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
								<h3 className="mb-4 text-xl font-semibold">Skills & Technologies</h3>
								<div className="flex flex-wrap gap-2">
									{skills.map((skill) => (
										<Badge
											key={skill.name}
											variant="secondary"
											className="px-3 py-1 text-sm"
										>
											{skill.name}
										</Badge>
									))}
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

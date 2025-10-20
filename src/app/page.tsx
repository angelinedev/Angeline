
import data from '@/lib/portfolio-data.json'
import { Hero } from '@/components/portfolio/hero'
import { Projects } from '@/components/portfolio/projects'
import { Skills } from '@/components/portfolio/skills'
import { Experience } from '@/components/portfolio/experience'
import { Certifications } from '@/components/portfolio/certifications'
import { RecentPosts } from '@/components/portfolio/recent-posts'
import { Footer } from '@/components/portfolio/footer'
import { Header } from '@/components/portfolio/header'

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          name={data.personal.name}
        />
        <Projects projects={data.projects} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience_timeline} />
        <Certifications certifications={data.certifications} />
        <RecentPosts posts={data.posts} />
      </main>
      <Footer name={data.personal.name} email={data.personal.email} linkedin_url={data.personal.linkedin_url}/>
    </div>
  )
}

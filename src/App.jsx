import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProjectCard from './components/ProjectCard'
import { FaReact, FaGitAlt, FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiTailwindcss, SiFirebase, SiJavascript, SiCplusplus } from 'react-icons/si'

function App() {
  // Project data
  const projects = [
    {
      id: 1,
      image: "https://images2.imgbox.com/e8/1a/BxW5mkB8_o.png",
      title: "neas web-shop",
      description: "a web-shop commisioned by NEAS, a norway based company which provides services such as tv, internet and phone. the project was built using React, Tailwind CSS and JavaScript.",
      projectUrl: "https://neas-sigma.web.app",
      sourceUrl: "https://github.com/dawc17/neas-nettbutikk",
      target: "_blank",
      technologies: ["react", "tailwind", "firebase", "javascript"]
    },
    {
      id: 2,
      image: "https://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Retro-Block-Question-icon.png",
      title: "???",
      description: "coming soon...",
      projectUrl: "#projects",
      sourceUrl: "#projects",
      target: "",
      technologies: []
    }
  ];

  // Tech stack data
  const techStack = [
    { name: 'react', icon: <FaReact size={30} /> },
    { name: 'git', icon: <FaGitAlt size={30} /> },
    { name: 'tailwind', icon: <SiTailwindcss size={30} /> },
    { name: 'firebase', icon: <SiFirebase size={30} /> },
    { name: 'javascript', icon: <SiJavascript size={30} /> },
    { name: 'python', icon: <FaPython size={30} /> },
    { name: 'c++', icon: <SiCplusplus size={30} /> },
    { name: 'html', icon: <FaHtml5 size={30} /> },
    { name: 'css', icon: <FaCss3Alt size={30} /> },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-16 flex flex-col items-center justify-center bg-base-100">
        <h1 className="text-4xl md:text-5xl font-bold">dawid czaplicki</h1>
        <p className="text-2xl m-8 max-w-xl text-center">i am primarily a frontend developer, but i try to learn new things and expand my knowledge every day.</p>
        
        {/* Tech Stack Icons */}
        <div className="grid grid-cols-3 md:grid-cols-9 gap-6 mt-4">
          {techStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-primary transition-all hover:scale-125 hover:text-primary-focus">
                {tech.icon}
              </div>
              <span className="text-sm mt-1">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-24 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {projects.map(project => (
              <ProjectCard 
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                projectUrl={project.projectUrl}
                sourceUrl={project.sourceUrl}
                target={project.target}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">about me</h2>
              <p className="mb-4">i am a 17 year old student from poland (located in norway). i've always been interested in technology and programming, and i've been programming for about 3 years now.</p>
              <p className="mb-4">frontend development is kinda what i've been doing for the past year, but i'm always looking to expand my knowledge and try out new things.</p>
              <p className="mb-4">i've also done a bit of graphics programming in c++, data analysis in python and game development in unity.</p>
            </div>
            <div className="md:w-1/2">
              <div className="mask mask-squircle mx-auto">
                <img src="https://picsum.photos/500/500" alt="Profile" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">get in touch</h2>
          <div className="max-w-md mx-auto">
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">name</span>
              </label>
              <input type="text" placeholder="your name" className="input input-bordered w-full" />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">email</span>
              </label>
              <input type="email" placeholder="your email" className="input input-bordered w-full" />
            </div>
            <div className="form-control mb-4">
              <textarea className="textarea textarea-bordered h-32" placeholder="your message"></textarea>
            </div>
            <button className="btn btn-primary w-full mt-4">send message</button>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}

export default App

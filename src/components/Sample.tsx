import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";

const Sample = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 opacity-20 "
        style={{
          backgroundImage: `
            radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0, transparent 50%),
            radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0, transparent 50%),
            radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0, transparent 50%),
            radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0, transparent 50%),
            radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0, transparent 50%),
            radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0, transparent 50%),
            radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0, transparent 50%)
          `,
        }}
      />

      {/* Dotted Overlay */}
      <div
        className="absolute inset-0 opacity-50 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 2px )",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative">
        {/* Header Section */}
        <header className="pt-20 pb-10 px-4 md:px-8 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-violet-500 ring-offset-4 ring-offset-black transform hover:scale-110 transition-transform duration-300">
              <Image
                src="/abinnewphoto.JPG"
                alt="Abin Antony"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 to-purple-500 text-transparent bg-clip-text mb-4">
              Abin Antony
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 flex items-center justify-center gap-2">
              <svg
                className="w-6 h-6 text-green-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="  gap-6 mb-10 pt-2 grid grid-cols-1 md:grid-cols-5 px-5">
            {/* <div className=""> */}
            <a
              href="https://github.com/AbinAntony8888"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-center items-center gap-2 text-blue-400 border-2 border-violet-600 px-4  bg-white/5 hover:bg-white/10 transition-colors duration-300 transform hover:scale-105 "
            >
              <FaGithub color="black"/>
              GitHub
            </a>
            {/* </div> */}
            <a
              href="https://www.linkedin.com/in/abin-antony-a3b90a292/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-center items-center gap-2 text-blue-400 border-2 border-violet-600  px-4  bg-white/5 hover:bg-white/10 transition-colors duration-300 transform hover:scale-105 "
            >
                <FaLinkedin color="blue"/>
              LinkedIn
            </a>
            <a
              href="https://stackoverflow.com/users/20703743/abin-antony"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-center items-center gap-2 text-blue-400 border-2 border-orange-400  px-4  bg-white/5 hover:bg-white/10 transition-colors duration-300 transform hover:scale-110 "
            >
             <FaStackOverflow color="orange"/>
              Stack Overflow
            </a>
            <a
              href="discord://discordapp.com/users/abinantony8888#8137"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-center items-center gap-2 text-blue-400 border-2 border-violet-600  px-4  bg-white/5 hover:bg-white/10 transition-colors duration-300 transform hover:scale-105 "
            >
            <FaDiscord color="violet"/>
              Discord
            </a>
            <a
              href="https://myaccount.google.com/?gar=WzEyMF0&hl=en&utm_source=OGB&utm_medium=act"
              className="flex flex-row justify-center items-center gap-2 text-blue-400 border-2 border-violet-600  px-4  bg-white/5 hover:bg-white/10 transition-colors duration-300 transform hover:scale-105 "
            >
                <FaEnvelope color="blue"/>
              Email
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-4 md:px-8 max-w-6xl mx-auto pb-20">
          {/* About Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500"></span>
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Background
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Hi, I'm Abin Antony, a passionate full-stack developer with
                  expertise in modern web technologies. I specialize in building
                  dynamic, responsive, and user-friendly applications.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Expertise
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  With a strong foundation in both front-end and back-end
                  technologies, I thrive on creating seamless digital
                  experiences that make a difference.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500"></span>
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "HTML",
                "CSS",
                "React",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "Node.js",
                "GitHub",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
                >
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500"></span>
              Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              
                <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors duration-300" >
                  <div className="aspect-video bg-gray-800 flex justify-center items-center">
                    <a href="https://github.com/AbinAntony8888/chatappBackendnode">https://github.com/AbinAntony8888/chatappBackendnode</a>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">
                      Project
                    </h3>
                    <p className="text-gray-300 mb-4">
                      A brief description of the project and its key features.
                    </p>
                    <div className="flex gap-2">
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                        React
                      </span>
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                        Node.js
                      </span>
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                        Next.js
                      </span>
                      
                     <a href="https://github.com/AbinAntony8888/chatappBackendnode" className="ml-10 text-xs flex flex-row gap-2 bg-blue-500 text-blue-100 px-2 py-1 rounded">
                      <FaGithub color="black"/>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors duration-300" >
                  <div className="aspect-video bg-gray-800 flex justify-center items-center">
                    <a href="https://github.com/AbinAntony8888/chatappBackendnode">https://github.com/AbinAntony8888/chatappBackendnode</a>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">
                      Project
                    </h3>
                    <p className="text-gray-300 mb-4">
                      A brief description of the project and its key features.
                    </p>
                    <div className="flex gap-2">
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                        React
                      </span>
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                        Node.js
                      </span>
                      
                     <a href="https://github.com/AbinAntony8888/chatappBackendnode" className="ml-10 text-xs flex flex-row gap-2 bg-blue-500 text-blue-100 px-2 py-1 rounded">
                      <FaGithub color="black"/>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
                
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Sample;
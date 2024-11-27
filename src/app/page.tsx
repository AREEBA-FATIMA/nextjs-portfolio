import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center py-[17px] px-5 lg:px-40 h-full lg:overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
        {/* Left Section */}
        <div className="col-span-1 flex flex-col items-center max-w-full mx-auto w-full">
          {/* Profile Summary Box */}
          <div className="bg-purple-900 p-2 rounded-lg text-center w-full">
            <div className="flex flex-col items-center">
              <p className="text-6xl lg:text-4xl font-extrabold mt-2 mb-2" id="stylish">Areeba Fatima</p>
              <Image
                src="/images/me-2.png"
                alt="Areeba Fatima"
                width={130}
                height={130}
                className="rounded-lg w-[240px] h-[200px] lg:h-[100px] lg:w-[130px]"
              />
              <p className="mt-2 text-base lg:text-xs">
                Passionate about creating and designing websites with engaging interfaces.
              </p>
              <button className="bg-black text-white hover:bg-white hover:text-black rounded-full px-4 py-2 mt-2 text-xs lg:text-base">
                Download CV
              </button>
            </div>
          </div>

          {/* Skills Section */}
          <Link href="/skills">
            <div className="bg-purple-900 py-4 px-6 rounded-lg text-center w-full mt-4">
              <p className="text-lg font-bold text-left mb-2">Skills</p>
              <div className="bg-purple-100 rounded-lg pr-4 py-[0.2px]">
                <div className="flex flex-col items-center mt-4 space-y-2">
                  {/* Upper Line for Skill Icons */}
                  <div className="flex justify-center space-x-2 lg:space-x-4">
                    {[ 
                      { src: "/images/s-1.png", alt: "HTML5" }, 
                      { src: "/images/s-2.png", alt: "CSS3" }, 
                      { src: "/images/s-3.png", alt: "JavaScript" },
                      { src: "/images/s-4.png", alt: "TypeScript" }, 
                      { src: "/images/s-5.png", alt: "Next.js" }
                    ].map((skill, index) => (
                      <div key={index} className="relative group">
                        <Image
                          src={skill.src}
                          alt={skill.alt}
                          width={20}
                          height={20}
                          className="mx-1 lg:mx-2"
                          id="skills"
                        />
                        <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs rounded-md px-2 py-1 transition-opacity duration-300">
                          {skill.alt}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Lower Line for Skill Icons */}
                  <div className="flex justify-center space-x-2 lg:space-x-4">
                    {[ 
                      { src: "/images/s-6.png", alt: "Tailwind CSS" }, 
                      { src: "/images/s-7.png", alt: "Figma" }, 
                      { src: "/images/s-8.png", alt: "VS Code" },
                      { src: "/images/s-9.png", alt: "Bootstrap" }, 
                      { src: "/images/s-10.png", alt: "Canva" }
                    ].map((skill, index) => (
                      <div key={index + 5} className="relative group">
                        <Image
                          src={skill.src}
                          alt={skill.alt}
                          width={20}
                          height={20}
                          className="mx-1 lg:mx-2"
                          id="skills"
                        />
                        <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs rounded-md px-2 py-1 transition-opacity duration-300">
                          {skill.alt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-base lg:text-xs">
                Visit the projects section to see the work done with these web technologies.
              </p>
            </div>
          </Link>
        </div>

        {/* Center Section */}
        <div className="col-span-1 lg:col-span-2 flex flex-col items-center justify-center h-full w-full">
          <div className="relative h-full">
            {/* Main Profile Image */}
            <Image
              src="/images/me-1.jpg"
              alt="Areeba Fatima"
              width={550}
              height={550}
              className="rounded-lg object-cover h-[550px]"
            />
            <div className="absolute lg:w-[350px] w-[250px] bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-500 bg-opacity-30 backdrop-blur-md rounded-3xl px-4 py-6 border-2 border-black">
              <p className="text-5xl lg:text-6xl font-extrabold" id="stylish">Areeba Fatima</p>
              <div className="flex justify-center space-x-4 mt-4">
                <Link href="/projects">
                  <button className="bg-red-500 hover:bg-purple-800 text-white rounded-full px-5 py-2 text-xs lg:text-lg">
                    Projects
                  </button>
                </Link>
                <Link href="/services">
                  <button className="bg-black hover:bg-gray-700 text-white rounded-full px-5 py-2 text-xs lg:text-lg">
                    Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Merged Boxes) */}
        <div className="col-span-1 flex flex-col space-y-8 w-full items-center">
          <div className="bg-purple-900 p-4 rounded-lg text-center w-full">
            <p className="text-base lg:text-base font-semibold">
              Areeba Fatima - Web Designer &amp; Developer
            </p>
            <p className="mt-2 text-sm">
              Karachi-based web designer and developer, passionate about creating user-friendly websites through personal projects.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://linkedin.com" className="text-white text-lg lg:text-2xl">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com" className="text-white text-lg lg:text-2xl">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://behance.net" className="text-white text-lg lg:text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <Image
              src="/images/me-3.png"
              alt="Areeba Fatima"
              width={200}
              height={150}
              className="rounded-lg mt-4 w-full"
            />
            <p className="mt-2 text-sm lg:text-base">
              I prefer email communication over social networks. Feel free to email me, and I'll respond as soon as I can.
            </p>
            <Link href="/contact">
              <button className="bg-black hover:bg-white hover:text-black text-white rounded-full px-4 py-2 mt-4 text-sm lg:mb-0">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

const StoryDetails = async ({ params }) => {
  const { id } = await params;

  const stories = [
    {
      id: 1,
      name: "Ayesha Rahman",
      designation: "Frontend Developer",
      experience: "3 Years",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      company: "TechNova Solutions",
      stories:
        "I started my journey as a self-taught developer. After months of practice and building projects, I landed my first frontend developer job. Consistency and daily coding helped me grow my career."
    },
    {
      id: 2,
      name: "Rakib Hasan",
      designation: "Backend Developer",
      experience: "5 Years",
      skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "JWT"],
      company: "CodeSphere Ltd.",
      stories:
        "Learning backend development taught me how applications work behind the scenes. Building REST APIs and scalable systems has been the most rewarding part of my career."
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      designation: "Full Stack Developer",
      experience: "4 Years",
      skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],
      company: "InnovateX",
      stories:
        "Transitioning from frontend to full-stack development opened many opportunities. I enjoy building complete web applications from UI to database."
    },
    {
      id: 4,
      name: "Mahmud Hossain",
      designation: "Software Engineer",
      experience: "6 Years",
      skills: ["Java", "Spring Boot", "MySQL", "Docker", "AWS"],
      company: "BrainTech",
      stories:
        "I began as a Java developer and gradually moved into cloud technologies. Continuous learning has been the key to staying relevant in the software industry."
    },
    {
      id: 5,
      name: "Sadia Islam",
      designation: "Mobile App Developer",
      experience: "3 Years",
      skills: ["Flutter", "Dart", "Firebase", "REST API"],
      company: "AppNest",
      stories:
        "Building cross-platform mobile apps with Flutter has allowed me to create products that reach both Android and iOS users with a single codebase."
    },
    {
      id: 6,
      name: "Tanvir Ahmed",
      designation: "DevOps Engineer",
      experience: "7 Years",
      skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "Linux"],
      company: "CloudCore",
      stories:
        "Automating deployments and managing cloud infrastructure has improved software delivery. DevOps is all about collaboration and efficiency."
    },
    {
      id: 7,
      name: "Fahim Karim",
      designation: "AI Engineer",
      experience: "2 Years",
      skills: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Machine Learning"],
      company: "Vision AI",
      stories:
        "My interest in artificial intelligence began during university. Today I build computer vision and machine learning applications for real-world problems."
    },
    {
      id: 8,
      name: "Mehedi Hasan",
      designation: "MERN Stack Developer",
      experience: "4 Years",
      skills: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
      company: "DigitalCraft",
      stories:
        "I enjoy creating scalable MERN applications. Every project teaches me something new, from authentication to performance optimization."
    }
  ];

  const singleStory = stories.find(
    (story) => story.id === Number(id)
  );

  if (!singleStory) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-950">
        <h1 className="text-4xl font-bold text-red-500">
          Story Not Found!
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black py-12 px-5">

      <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">

        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-10 text-center text-white">

          <div className="w-28 h-28 rounded-full bg-white text-cyan-700 flex items-center justify-center text-5xl font-bold mx-auto">
            {singleStory.name.charAt(0)}
          </div>

          <h1 className="text-4xl font-bold mt-5">
            {singleStory.name}
          </h1>

          <p className="text-xl text-cyan-100 mt-2">
            {singleStory.designation}
          </p>

        </div>

        {/* Content */}
        <div className="p-10">

          <div className="grid md:grid-cols-2 gap-6 mb-8">

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-gray-400 text-sm">
                Company
              </h3>

              <p className="text-white text-2xl font-semibold mt-2">
                {singleStory.company}
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-gray-400 text-sm">
                Experience
              </h3>

              <p className="text-white text-2xl font-semibold mt-2">
                {singleStory.experience}
              </p>
            </div>

          </div>

          <h2 className="text-2xl text-white font-bold mb-5">
            Technical Skills
          </h2>

          <div className="flex flex-wrap gap-3 mb-10">
            {singleStory.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-cyan-600 text-white px-4 py-2 rounded-full font-medium hover:bg-cyan-500 duration-300"
              >
                {skill}
              </span>
            ))}
          </div>

          <h2 className="text-2xl text-white font-bold mb-5">
            Developer Journey
          </h2>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <p className="text-gray-300 leading-9 text-lg">
              {singleStory.stories}
            </p>
          </div>

          <div className="mt-10 flex gap-4">

            <Link href="/stories">
              <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-xl font-semibold duration-300 cursor-pointer">
                ← Back
              </button>
            </Link>

            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold duration-300 cursor-pointer">
              Share Story
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default StoryDetails;
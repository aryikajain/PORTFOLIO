import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="font-sans scroll-smooth">

      {/* ------------------ NAVBAR ------------------ */}
      <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-lg shadow-sm z-50 px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight">PORTFOLIO</div>
        <div className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-gray-600">About</a>
          <a href="#skills" className="hover:text-gray-600">Skills</a>
          <a href="#projects" className="hover:text-gray-600">Projects</a>
          <a href="#experience" className="hover:text-gray-600">Experience</a>
        </div>
      </nav>

      {/* ------------------ ABOUT SECTION ------------------ */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-[#f5f2ec] px-6 pt-20"
      >
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div className="w-full rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/photo1.jpg"
              alt="Profile"
              className="w-full h-[480px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* TEXT */}
          <div>
            <h1 className="text-6xl font-bold tracking-tight leading-none">
              Hi, I'm <span className="text-gray-700">Aryika Jain</span>
            </h1>

            <p className="mt-6 text-lg opacity-90 leading-relaxed">
              I’m a 4th-year AI/ML student who loves exploring data, building machine learning models, and creating intelligent applications. Curious, detail-oriented, and always learning — I aim to grow into a strong ML engineer who builds meaningful tech.
            </p>

            <div className="mt-6 space-y-1 text-sm">
              <p><strong>Email:</strong> <a href="mailto:aryikajain1@gmail.com" className="underline">aryikajain1@gmail.com</a></p>
              {/* <p><strong>Phone:</strong> 941-391-2688</p> */}
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aryika-jain" target="_blank" className="underline">linkedin.com/in/aryika-jain</a></p>
              <p><strong>GitHub:</strong> <a href="https://github.com/aryikajain" target="_blank" className="underline">github.com/aryikajain</a></p>
              <p><strong>Medium:</strong> <a href="https://medium.com/@aricajain05" target="_blank" className="underline">medium.com/@aryikajain</a></p>
            </div>

            <a
              href="#skills"
              className="mt-8 inline-block px-6 py-3 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition"
            >
              Explore my work ↓
            </a>
          </div>
        </div>
      </section>

      {/* ------------------ SKILLS SECTION ------------------ */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center bg-white px-8 py-20"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* TECHNICAL SKILLS */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Technical Skills</h2>

            <SkillGroup title="Programming" items={["Python", "SQL", "C", "Java"]} />
            <SkillGroup title="Libraries" items={[
              "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "Keras", "OpenCV",
              "NLTK", "SpaCy"
            ]}/>
            <SkillGroup title="Visualization" items={[
              "Matplotlib", "Seaborn", "Plotly"
            ]}/>
            <SkillGroup title="Web Tools" items={[
              "Streamlit", "Flask", "HTML", "CSS", "JavaScript"
            ]}/>
            <SkillGroup title="Concepts" items={[
              "Machine Learning", "Deep Learning", "NLP",
              "Data Preprocessing", "Model Deployment",
              "EDA", "Statistical Analysis"
            ]}/>
            <SkillGroup title="Tools" items={[
              "Google Colab", "Jupyter Notebook", "Git", "Kaggle", "VS Code"
            ]}/>
          </div>

          {/* EDUCATION */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Education</h2>

            <div className="space-y-6 text-lg opacity-90">
              <div>
                <h3 className="font-semibold text-xl">
                  B.Tech — Computer Science & Artificial Intelligence
                </h3>
                <p className="text-sm mt-1">Banasthali Vidyapith (2022–2026) · Rajasthan, India</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold mb-6">Certification</h2>
                <p className="mt-2">
                  Deloitte Data Analytics Virtual Internship (Forage) — Completed data cleaning,
                  visualization & business analytics tasks.
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold mb-6">Extracurricular</h2>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Event Coordinator — Therav Poetry Club (2023–24)</li>
                  <li>Data Science Blogger on Medium</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------ PROJECTS SECTION ------------------ */}
      <section
        id="projects"
        className="min-h-screen bg-[#fafafa] px-8 py-24 flex items-center justify-center"
      >
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

          
            
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                      <ProjectCard
                        title="Customer Segmentation Dashboard"
                        img="https://source.unsplash.com/random/300x200?cluster"
                        link="https://github.com/aryikajain/customer-segmentation-dashboard"
                        description="Performed K-Means & Hierarchical clustering. Built interactive dashboard using Plotly + Django."
                      />

                      <ProjectCard
                        title="Flight Price Prediction App"
                        img="https://source.unsplash.com/random/300x200?airplane"
                        link="https://github.com/aryikajain/flight-price-prediction"
                        description="Used Random Forest & XGBoost for ML regression. Built & deployed real-time Streamlit app."
                      />

           </div>
        </div>
      </section>
      

      {/* ------------------ EXPERIENCE SECTION ------------------ */}
      <section
        id="experience"
        className="min-h-screen bg-white px-8 py-24 flex items-center justify-center"
      >
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>

          <div className="space-y-10 text-lg opacity-90">

            <div>
              <h3 className="font-semibold text-xl">AI Research Intern — IIT Hyderabad</h3>
              <p className="text-sm mt-1">May 2025 – Jul 2025 · Hyderabad, India</p>
              <p className="mt-2">
                Worked on Emotion AI & Domain Adaptation under Prof. Abhishek Kumar.
                Applied transfer learning using PyTorch and analyzed emotion datasets like
                JAFFE & ArtPhoto with unsupervised domain adaptation.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

/// Skill Group Component
function SkillGroup({ title, items }) {
  return (
    <div className="mb-6">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-1 bg-black text-white text-xs rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
// Project Card Component
function ProjectCard({ title, img, description, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
        <img src={img} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm opacity-80 mt-2">{description}</p>
        </div>
      </div>
    </a>
  );
}



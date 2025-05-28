import { FaGraduationCap, FaSchool, FaMedal } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const educationData = [
  {
    period: "2022 - 2025",
    degree: "B.Sc in",
    major: "Computer Science and Engineering",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    achievements:[],
    // ["CGPA: 4/4"],
    icon: <FaGraduationCap size={24} />
  },
  {
    period: "2018 - 2020",
    degree: "Higher Secondary Certificate",
    major: "Science",
    institution: "Nawabganj City College",
    location: "Chapai Nawabganj, Bangladesh",
    // achievements: ["GPA: 5.00/5.00", "Merit Scholarship"],
    achievements: [],
    icon: <FaSchool size={24} />
  },

];

const Study = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-950 to-indigo-800 py-16">
      <div className="mx-auto container px-4 md:px-8">
        <div
          className="text-center mb-12"
        >
          <h1 className="gradienttexts text-3xl md:text-6xl font-bold mb-4">
            Education
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            My academic journey has equipped me with the knowledge and skills needed to excel in the field of computer science.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div

              className="relative mb-12"
            >
              {/* Timeline connector */}
              {index < educationData.length - 1 && (
                <div className="absolute left-7 top-16 bottom-0 w-0.5 bg-purple-500/50 h-full"></div>
              )}

              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  {edu.icon}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="bg-gradient-to-r from-indigo-900/80 to-indigo-800/80 rounded-lg p-6 shadow-lg hover:shadow-xl hover:shadow-indigo-600/30 transition-all duration-300 border border-indigo-700/30 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div>
                        <div className="text-purple-400 text-lg font-bold mb-1">{edu.period}</div>
                        <div className="text-gray-300 mb-1">{edu.degree}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">{edu.major}</h3>
                        <div className="flex items-center text-gray-300 mb-4">
                          <span>{edu.institution}</span>
                          <span className="mx-2">•</span>
                          <span className="flex items-center">
                            <MdLocationOn className="inline mr-1" />
                            {edu.location}
                          </span>
                        </div>
                      </div>

                      {edu?.achievements && edu?.achievements.length > 0 && (
                        <div className="bg-indigo-950/50 rounded-lg p-3 min-w-[180px]">
                          <div className="flex items-center mb-2">
                            <FaMedal className="text-yellow-400 mr-2" />
                            <span className="text-gray-200 font-semibold">Achievements</span>
                          </div>
                          <ul className="list-disc list-inside text-gray-300 text-sm">
                            {edu?.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Study;

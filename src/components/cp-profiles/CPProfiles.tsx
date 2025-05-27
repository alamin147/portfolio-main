import { useEffect, useState } from 'react';
import './cp-profiles.css';

const CPProfiles = () => {
  //  profiles data
//   const profiles: CPProfile[] = [
//     {
//       name: 'Codeforces',
//       username: 'alamin_dev',
//       link: 'https://codeforces.com/profile/alamin_dev',
//       logo: 'https://cdn.iconscout.com/icon/free/png-256/free-codeforces-3628695-3029920.png',
//       color: '#1da1f2',
//       rating: '1756',
//       rank: 'Expert',
//       solved: '678 problems solved',
//       ratingColor: '#3E5EEE',
//       isLoading: false
//     },
//     {
//       name: 'LeetCode',
//       username: 'alamin_dev',
//       link: 'https://leetcode.com/alamin_dev/',
//       logo: 'https://leetcode.com/static/images/LeetCode_logo_rvs.png',
//       color: '#ffa116',
//       rating: '1850',
//       rank: 'Knight',
//       solved: '320 problems solved',
//       ratingColor: '#ffa116',
//       isLoading: false
//     },
//     {
//       name: 'CodeChef',
//       username: 'alamin_dev',
//       link: 'https://www.codechef.com/users/alamin_dev',
//       logo: 'https://cdn.codechef.com/sites/all/themes/abessive/cc-logo.svg',
//       color: '#5b4638',
//       rating: '1781',
//       rank: '4 star',
//       solved: '245 problems solved',
//       ratingColor: '#5cb85c',
//       isLoading: false
//     },
//     {
//       name: 'HackerRank',
//       username: 'alamin_dev',
//       link: 'https://www.hackerrank.com/alamin_dev',
//       logo: 'https://hrcdn.net/community-frontend/assets/brand/logo-new-white-green-a5cb16e0ae.svg',
//       color: '#2ec866',
//       rank: '5 star in C++',
//       solved: '150+ problems solved',
//       ratingColor: '#2ec866',
//       isLoading: false
//     }
//   ];


type CPProfile = {

  platform?:string,
  username?:string,
  rating?:string,
  solved?:string,
  highestRating?:string,
  rank?:string,
  logo?:string,
  link?:string,
color?:string,
}|null
  const [profiles, setProfiles] = useState<(CPProfile)[]>([]);
    useEffect(() => {
      fetch(`https://admin-server-portfolio.vercel.app/cpProfiles`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => setProfiles(result));
    }, []);

  return (
    <div style={{ background: "linear-gradient(135deg, #0f0326, #2a015e)" }} className="relative overflow-hidden py-20">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <h4 className="text-indigo-400 text-xl font-medium mb-4 tracking-wide">COMPETITIVE CODING</h4>
          <h1 className="gradienttexts text-4xl md:text-5xl font-bold mb-6">
            CP Profiles
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check out my competitive programming profiles across various platforms where I solve algorithmic challenges and participate in coding contests.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {profiles?.map((profile, index) => (
            <a
              key={index}
              href={profile?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cp-profile-card transform transition duration-300 hover:-translate-y-2"
            >
              <div className="bg-slate-900 rounded-xl overflow-hidden border border-indigo-900/30 h-full shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-indigo-900/20">
                <div className="h-2" style={{ backgroundColor: profile?.color }}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-white p-2 flex items-center justify-center mr-4 shadow-md">
                      <img
                        src={profile?.logo}
                        alt={profile?.platform}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{profile?.platform}</h3>
                      <p className="text-indigo-400">@{profile?.username}</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {profile?.rating && (
                      <p className="text-gray-300 flex items-center">
                        <span className="text-gray-400 w-16">Rating:</span>
                        <span className="font-medium" >
                          {profile?.rating}

                            {profile?.highestRating&&<span
                                className="inline-block ml-2 px-2 py-1 rounded-full">
                                    ( max: {profile?.highestRating} )
                                </span>}
                        </span>
                      </p>
                    )}

                    {profile?.rank && (
                      <p className="text-gray-300 flex items-center">
                        <span className="text-gray-400 w-16">Rank:</span>
                        <span className="font-medium" >
                          {profile?.rank}
                        </span>
                      </p>
                    )}
                    {profile?.solved && (
                      <p className="text-gray-300 flex items-center">
                        <span className="text-gray-400 w-16">Solved:</span>
                        <span className="font-medium text-indigo-300">
                          {profile.solved}
                        </span>
                      </p>
                    )}


                  </div>

                  <div className="mt-6">
                    <span className="profile-btn inline-flex items-center bg-gradient-to-r from-indigo-900/70 to-indigo-700/70 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:from-indigo-800 hover:to-indigo-600 hover:text-white">
                      View Profile
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CPProfiles;

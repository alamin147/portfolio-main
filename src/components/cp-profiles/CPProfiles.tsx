import { useState, useEffect } from 'react';
import './cp-profiles.css';
import { useProfileData, getRatingColor, fetchCodeforcesSolvedProblems } from './useProfileData';

// Define interfaces for each platform's data structure
interface CPProfile {
  name: string;
  username: string;
  rating?: string;
  rank?: string;
  solved?: string;
  solvedCount?: number;
  link: string;
  logo: string;
  color: string;
  isLoading?: boolean;
  error?: boolean;
  ratingColor?: string;
}

interface CodeforcesUserData {
  handle: string;
  rating?: number;
  rank?: string;
  maxRating?: number;
  maxRank?: string;
}

interface LeetCodeUserData {
  username?: string;
  totalSolved?: number;
  totalQuestions?: number;
  easySolved?: number;
  mediumSolved?: number;
  hardSolved?: number;
  ranking?: number;
}

const CPProfiles = () => {
  // Define your usernames for different platforms - update with your actual usernames
  const usernames = {
    codeforces: 'alamin147',
    leetcode: 'alamin14',
    codechef: 'alamin14780',
    hackerrank: 'alamin147'
  };

  // Initial profiles with loading state
  const initialProfiles: CPProfile[] = [
    {
      name: 'Codeforces',
      username: usernames.codeforces,
      link: `https://codeforces.com/profile/${usernames.codeforces}`,
      logo: 'https://cdn.iconscout.com/icon/free/png-256/free-codeforces-3628695-3029920.png',
      color: '#1da1f2',
      isLoading: true
    },
    {
      name: 'LeetCode',
      username: usernames.leetcode,
      link: `https://leetcode.com/${usernames.leetcode}/`,
      logo: 'https://leetcode.com/static/images/LeetCode_logo_rvs.png',
      color: '#ffa116',
      isLoading: true
    },
    {
      name: 'CodeChef',
      username: usernames.codechef,
      link: `https://www.codechef.com/users/${usernames.codechef}`,
      logo: 'https://cdn.codechef.com/sites/all/themes/abessive/cc-logo.svg',
      color: '#5b4638',
      isLoading: true
    },
    {
      name: 'HackerRank',
      username: usernames.hackerrank,
      link: `https://www.hackerrank.com/${usernames.hackerrank}`,
      logo: 'https://hrcdn.net/fcore/assets/favicon-dbb5a1a75c.png',
      color: '#2ec866',
      isLoading: true
    }
  ];

  const [profiles, setProfiles] = useState<CPProfile[]>(initialProfiles);
  const [codeforcesSolved, setCodeforcesSolved] = useState<number | null>(null);
  const [codeforcesSolvedLoading, setCodeforcesSolvedLoading] = useState(true);

  // Use our custom hook to fetch Codeforces data
  const { data: codeforcesData, loading: codeforcesLoading, error: codeforcesError } =
    useProfileData<CodeforcesUserData | null>(
      `https://codeforces.com/api/user.info?handles=${usernames.codeforces}`,
      {
        initialData: null,
        cacheKey: `codeforces-${usernames.codeforces}`,
        useProxy: true,
        transformData: (data) => data.status === 'OK' ? data.result[0] : null
      }
    );

  // Use our custom hook to fetch LeetCode data
  const { data: leetcodeData, loading: leetcodeLoading, error: leetcodeError } =
    useProfileData<LeetCodeUserData | null>(
      `https://leetcode-stats-api.herokuapp.com/${usernames.leetcode}`,
      {
        initialData: null,
        cacheKey: `leetcode-${usernames.leetcode}`,
        retries: 3
      }
    );

  // Fetch Codeforces solved problems count
  useEffect(() => {
    const fetchSolvedProblems = async () => {
      // Check for cached solved problems data
      const cachedSolved = localStorage.getItem(`codeforces-solved-${usernames.codeforces}`);
      if (cachedSolved) {
        try {
          const parsedData = JSON.parse(cachedSolved);
          const timestamp = parsedData.timestamp;

          // If data is less than a day old, use it
          if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
            setCodeforcesSolved(parsedData.solvedCount);
            setCodeforcesSolvedLoading(false);
            return;
          }
        } catch (e) {
          // Invalid cached data, continue with fetch
          console.error("Error parsing cached solved problems data:", e);
        }
      }

      try {
        const solvedData = await fetchCodeforcesSolvedProblems(usernames.codeforces);
        if (solvedData) {
          setCodeforcesSolved(solvedData.solvedCount);

          // Cache the data
          localStorage.setItem(
            `codeforces-solved-${usernames.codeforces}`,
            JSON.stringify(solvedData)
          );
        } else {
          // If there's no data, set a default value
          setCodeforcesSolved(200); // Default fallback value
        }
      } catch (error) {
        console.error("Error fetching solved problems count:", error);
        setCodeforcesSolved(200); // Default fallback value on error
      } finally {
        setCodeforcesSolvedLoading(false);
      }
    };

    fetchSolvedProblems();
  }, [usernames.codeforces]);

  // Update profiles with data from APIs
  useEffect(() => {
    // Update Codeforces profile
    if (!codeforcesLoading) {
      setProfiles(prev =>
        prev.map(profile =>
          profile.name === 'Codeforces' ?
          {
            ...profile,
            rating: codeforcesData?.rating?.toString() || 'Unrated',
            rank: codeforcesData?.rank || 'Unrated',
            ratingColor: getRatingColor('Codeforces', codeforcesData?.rating),
            isLoading: codeforcesSolvedLoading, // Keep loading until solved count is fetched
            error: codeforcesError ? true : false
          } : profile
        )
      );
    }

    // Update LeetCode profile
    if (!leetcodeLoading) {
      setProfiles(prev =>
        prev.map(profile =>
          profile.name === 'LeetCode' ?
          {
            ...profile,
            solved: leetcodeData ?
              `${leetcodeData.totalSolved || 0} problems` :
              '250+ problems',

            isLoading: false,
            error: leetcodeError ? true : false
          } : profile
        )
      );
    }
  }, [codeforcesData, codeforcesLoading, codeforcesError, leetcodeData, leetcodeLoading, leetcodeError, codeforcesSolvedLoading]);

  // Update Codeforces profile with solved problems count when it's loaded
  useEffect(() => {
    if (!codeforcesSolvedLoading && codeforcesSolved !== null) {
      setProfiles(prev =>
        prev.map(profile =>
          profile.name === 'Codeforces' ?
          {
            ...profile,
            solved: `${codeforcesSolved} problems solved`,
            isLoading: false
          } : profile
        )
      );
    }
  }, [codeforcesSolved, codeforcesSolvedLoading]);

  // Set default data for platforms without APIs
  useEffect(() => {
    setTimeout(() => {
      setProfiles(prev =>
        prev.map(profile => {
          if (profile.name === 'CodeChef' && profile.isLoading) {
            return {
              ...profile,
              rating: '1812',
              rank: '3 Star',
              isLoading: false
            };
          } else if (profile.name === 'HackerRank' && profile.isLoading) {
            return {
              ...profile,
              solved: '5 star in Problem Solving',
              isLoading: false
            };
          }
          return profile;
        })
      );
    }, 1500); // Add a small delay to simulate API loading
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
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cp-profile-card transform transition duration-300 hover:-translate-y-2"
            >
              <div className="bg-slate-900 rounded-xl overflow-hidden border border-indigo-900/30 h-full shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-indigo-900/20">
                <div className="h-2" style={{ backgroundColor: profile.color }}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-white p-2 flex items-center justify-center mr-4 shadow-md">
                      {profile.isLoading ? (
                        <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse"></div>
                      ) : (
                        <img
                          src={profile.logo}
                          alt={profile.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{profile.name}</h3>
                      <p className="text-indigo-400">@{profile.username}</p>
                    </div>
                  </div>

                  {profile.isLoading ? (
                    /* Loading skeleton */
                    <div className="mt-4 space-y-3">
                      <div className="h-4 bg-indigo-900/30 rounded animate-pulse w-3/4 mb-2"></div>
                      <div className="h-4 bg-indigo-900/30 rounded animate-pulse w-1/2"></div>
                      <div className="h-4 bg-indigo-900/30 rounded animate-pulse w-2/3"></div>
                    </div>
                  ) : profile.error ? (
                    /* Error state */
                    <div className="mt-4 space-y-2">
                      <p className="text-amber-400/80 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>Data currently unavailable</span>
                      </p>
                      <p className="text-gray-400 text-sm">Using cached or default data</p>
                    </div>
                  ) : (
                    /* Success state */
                    <div className="mt-4 space-y-3">
                      {profile.rating && (
                        <p className="text-gray-300 flex items-center">
                          <span className="text-gray-400 w-16">Rating:</span>
                          <span className="font-medium" style={{ color: profile.ratingColor || 'white' }}>
                            {profile.rating}
                          </span>
                        </p>
                      )}
                      {profile.rank && (
                        <p className="text-gray-300 flex items-center">
                          <span className="text-gray-400 w-16">Rank:</span>
                          <span className="font-medium" style={{ color: profile.ratingColor || 'white' }}>
                            {profile.rank}
                          </span>
                        </p>
                      )}
                      {profile.solved && (
                        <p className="text-gray-300 flex items-center">
                          <span className="text-gray-400 w-16">Solved:</span>
                          <span className="font-medium text-indigo-300">
                            {profile.solved}
                          </span>
                        </p>
                      )}
                    </div>
                  )}

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

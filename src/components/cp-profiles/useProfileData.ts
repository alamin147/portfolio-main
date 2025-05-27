import { useState, useEffect } from 'react';
import axios from 'axios';

// Custom hook for handling API requests with retry logic and caching
export function useProfileData<T>(
  url: string,
  options: {
    initialData?: T;
    transformData?: (data: any) => T;
    cacheKey?: string;
    retries?: number;
    useProxy?: boolean;
  }
) {
  const [data, setData] = useState<T | undefined>(options.initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Check for cached data
    if (options.cacheKey) {
      const cachedData = localStorage.getItem(options.cacheKey);
      if (cachedData) {
        try {
          const parsedData = JSON.parse(cachedData);
          const timestamp = parsedData.timestamp;

          // If data is less than a day old, use it
          if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
            setData(parsedData.data);
            setLoading(false);
            return;
          }
        } catch (e) {
          // Invalid cached data, continue with fetch
          console.error("Error parsing cached data:", e);
        }
      }
    }

    let retryCount = 0;
    const maxRetries = options.retries || 2;

    const fetchData = async () => {
      try {
        // Add CORS proxy if needed
        const apiUrl = options.useProxy
          ? `https://corsproxy.io/?${encodeURIComponent(url)}`
          : url;

        const response = await axios.get(apiUrl);

        // Transform data if a transformer function is provided
        const processedData = options.transformData
          ? options.transformData(response.data)
          : response.data;

        setData(processedData);

        // Cache the data if a cache key is provided
        if (options.cacheKey) {
          localStorage.setItem(
            options.cacheKey,
            JSON.stringify({
              data: processedData,
              timestamp: Date.now()
            })
          );
        }

        setLoading(false);
      } catch (err) {
        if (retryCount < maxRetries) {
          retryCount++;
          // Exponential backoff
          const delay = 1000 * Math.pow(2, retryCount);
          console.log(`Retrying fetch (${retryCount}/${maxRetries}) after ${delay}ms`);
          setTimeout(fetchData, delay);
        } else {
          setError(err as Error);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Function to handle rating colors for platforms like Codeforces
export const getRatingColor = (platform: string, rating?: number | string) => {
  if (!rating) return '#FFFFFF';

  const numericRating = typeof rating === 'string' ? parseInt(rating) : rating;

  if (platform === 'Codeforces') {
    if (numericRating < 1200) return '#CCCCCC'; // Gray (Newbie)
    if (numericRating < 1400) return '#7EB244'; // Green (Pupil)
    if (numericRating < 1600) return '#39BCCF'; // Cyan (Specialist)
    if (numericRating < 1900) return '#3E5EEE'; // Blue (Expert)
    if (numericRating < 2100) return '#B14BE8'; // Violet (Candidate Master)
    if (numericRating < 2400) return '#FFC300'; // Yellow (Master)
    if (numericRating < 2600) return '#FF9100'; // Orange (International Master)
    if (numericRating < 3000) return '#FF0000'; // Red (Grandmaster)
    return '#8A0000'; // Legendary Grandmaster
  }

  if (platform === 'CodeChef') {
    if (numericRating < 1400) return '#666666'; // 1 Star
    if (numericRating < 1600) return '#1E7D22'; // 2 Star
    if (numericRating < 1800) return '#3366CC'; // 3 Star
    if (numericRating < 2000) return '#684273'; // 4 Star
    if (numericRating < 2200) return '#FFBF00'; // 5 Star
    if (numericRating < 2500) return '#FF7F00'; // 6 Star
    return '#D0011B'; // 7 Star
  }

  return '#FFFFFF'; // Default
};

// Function to fetch solved problem count from Codeforces
export async function fetchCodeforcesSolvedProblems(username: string) {
  try {
    // We need to use a CORS proxy for Codeforces API
    const apiUrl = `https://corsproxy.io/?${encodeURIComponent(`https://codeforces.com/api/user.status?handle=${username}&from=1&count=1000`)}`;
    const response = await axios.get(apiUrl);

    if (response.data.status === 'OK') {
      // Filter successful submissions
      const submissions = response.data.result;

      // Create a Set to track unique problem IDs that were solved successfully
      const uniqueSolvedProblems = new Set();

      submissions.forEach((submission: any) => {
        // Only count problems with "OK" verdict (accepted solutions)
        if (submission.verdict === 'OK') {
          const problemId = `${submission.problem.contestId}-${submission.problem.index}`;
          uniqueSolvedProblems.add(problemId);
        }
      });

      // Return the number of unique solved problems
      return {
        solvedCount: uniqueSolvedProblems.size,
        timestamp: Date.now()
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching Codeforces solved problems:", error);
    return null;
  }
}

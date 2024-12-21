import { useEffect, useState } from 'react';
import { fetchGraphQLData } from './fetchQuery.ts';
import { NOTICES_QUERY } from './queries.ts';
import { hexToString } from 'viem';

const useLatestNotice = (shouldFetchNotice) => {
  const [latestNoticePayload, setLatestNoticePayload] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      if (!shouldFetchNotice) return;

      try {
        setLoading(true);
        const data = await fetchGraphQLData(NOTICES_QUERY);
        const latestNotice = data.notices.edges.slice(-1)[0];
        console.log(data);

        if (latestNotice) {
          setLatestNoticePayload(JSON.parse(hexToString(latestNotice.node.payload.slice(2))));
        } else {
          setLatestNoticePayload(null);
        }
      } catch (err) {
        setError('Error fetching notices.');
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, [shouldFetchNotice]);

  return { latestNoticePayload, loading, error };
};

export default useLatestNotice;

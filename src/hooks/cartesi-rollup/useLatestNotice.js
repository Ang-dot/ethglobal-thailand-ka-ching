import { useEffect, useState } from 'react';
import { fetchGraphQLData } from './fetchQuery.ts';
import { NOTICES_QUERY } from './queries.ts';
import { hexToString } from 'viem';

const useLatestNotice = () => {
  const [latestNoticePayload, setLatestNoticePayload] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {

      try {
        setLoading(true);
        const data = await fetchGraphQLData(NOTICES_QUERY);
        console.log(data.notices.edges);
        const latestNotice = data.notices.edges.slice(-2, -1)[0];
        const validJSONString = ('{' + hexToString(latestNotice.node.payload.slice(2))).replace(/'/g, '"').replace(/array\(\[\[/g, '[').replace(/\]\]\)/g, ']');

        if (latestNotice) {
          setLatestNoticePayload(JSON.parse(validJSONString));
        } else {
          setLatestNoticePayload(null);
        }
      } catch (err) {
        setError('Error fetching notices.');
      } finally {
        setLoading(false);
      }
    };

    fetchNotices()
  }, []);

  return { latestNoticePayload, loading, error };
};

export default useLatestNotice;

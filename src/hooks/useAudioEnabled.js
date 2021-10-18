import { useMemo } from 'react';
import queryString from 'query-string';

const useAudioEnabled = () => {
  const audioEnabled = useMemo(() => {
    const { audio } = queryString.parse(window.location.search);

    return audio === 'true';
  }, []);

  return audioEnabled;
};

export default useAudioEnabled;

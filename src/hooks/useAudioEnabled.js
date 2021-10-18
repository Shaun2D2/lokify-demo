import { useMemo } from 'react';
import queryString from 'query-string';

const useAudioEnabled = () => {
    const audioEnabled = useMemo(() => {
        const { audio } = queryString.parse(location.search);

        return audio === 'true';
    }, []);

    return audioEnabled
}

export default useAudioEnabled;
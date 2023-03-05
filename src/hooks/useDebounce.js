import { useState, useEffect } from 'react';

export default function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        const hander = setTimeout(() => setDebounce(value), delay);

        return () => {
            clearTimeout(hander);
        };
    }, [value, delay]);

    return debounce;
}

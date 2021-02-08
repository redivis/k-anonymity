import { useRef, useEffect, useState, useCallback } from 'react';

export default function useTimeout(callback, delay) {
	const [isCleared, setIsCleared] = useState(true);
	const [timeoutId, setTimeoutId] = useState(0);

	const callbackRef = useRef(callback);

	const set = useCallback(() => {
		setIsCleared(false);
	}, []);

	const clear = useCallback(() => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		setIsCleared(true);
	}, [timeoutId]);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		if (!isCleared) {
			setTimeoutId(setTimeout(() => callbackRef.current(), delay));
		}
		return clear;
	}, [delay, isCleared]);

	return [set, clear];
}

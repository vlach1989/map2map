import {useState, useEffect, useRef, useCallback} from 'react';

export function useGeolocation({
	autoStart = true,
	options = {enableHighAccuracy: true, timeout: 10000, maximumAge: 0},
} = {}) {
	const [location, setLocation] = useState({latitude: null, longitude: null});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const watchIdRef = useRef(null);

	const updateLocation = useCallback(position => {
		setLocation({
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
		});
		setError(null);
		setLoading(false);
	}, []);

	const handleError = useCallback(err => {
		setError(err.message);
		setLoading(false);
	}, []);

	const getCurrentLocation = useCallback(() => {
		if (!navigator.geolocation) {
			setError('Geolocation is not supported by your browser.');
			return;
		}
		setLoading(true);
		navigator.geolocation.getCurrentPosition(
			updateLocation,
			handleError,
			options,
		);
	}, [updateLocation, handleError, options]);

	const startTracking = useCallback(() => {
		if (!navigator.geolocation) {
			setError('Geolocation is not supported by your browser.');
			return;
		}
		if (watchIdRef.current === null) {
			watchIdRef.current = navigator.geolocation.watchPosition(
				updateLocation,
				handleError,
				options,
			);
			setLoading(true);
		}
	}, [updateLocation, handleError, options]);

	const stopTracking = useCallback(() => {
		if (watchIdRef.current !== null) {
			navigator.geolocation.clearWatch(watchIdRef.current);
			watchIdRef.current = null;
			setLoading(false);
		}
	}, []);

	// Auto-start tracking on mount if enabled
	useEffect(() => {
		if (autoStart) {
			startTracking();
		}
		return () => stopTracking();
	}, [autoStart, startTracking, stopTracking]);

	return {
		location,
		error,
		loading,
		getCurrentLocation,
		startTracking,
		stopTracking,
	};
}

import { useState, useEffect } from 'react';

export const useCurrentCity = () => {
  const [currentCity, setCurrentCity] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getCurrentPosition = (options = {}) =>
      new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });

    const getLocation = async () => {
      try {
        const position = await getCurrentPosition({ enableHighAccuracy: true }) as GeolocationPosition;
        const { latitude, longitude } = position.coords;

        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=17&addressdetails=10&lat=${latitude}&lon=${longitude}`,
        );

        if (!response.ok) {
          throw new Error('Erro na resposta da API');
        }

        const data = await response.json();
        setCurrentCity(data.address.city || 'Cidade não encontrada');
      } catch (err) {
        console.error('Erro ao obter a localização:', err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    if (navigator.geolocation) {
      getLocation();
    } else {
      console.error('Geolocalização não é suportada neste navegador.');
      setError(new Error('Geolocalização não suportada'));
      setLoading(false);
    }
  }, []);

  return { currentCity, loading, error };
};

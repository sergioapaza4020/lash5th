'use client';

import { useEffect, useState } from 'react';

export const useToday = (): Date | null => {
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    setToday(new Date());
  }, []);

  return today;
};

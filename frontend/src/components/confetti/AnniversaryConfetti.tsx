'use client';

import Confetti from 'react-confetti';
import { isSameDay } from '@/utils/date.utils';
import { useWindowSize } from 'react-use';
import { useToday } from '@/src/hooks/useToday';

interface Props {
  anniversaryDate: Date;
}

export const AnniversaryConfetti = ({ anniversaryDate }: Props) => {
  const today = useToday();
  const size = useWindowSize();

  if (!today || !size) return null;

  const shouldCelebrate = isSameDay(today, anniversaryDate);

  if (!shouldCelebrate) return null;

  return (
    <Confetti
      width={size.width}
      height={size.height}
      numberOfPieces={400}
      gravity={0.25}
      recycle={false}
    />
  );
};

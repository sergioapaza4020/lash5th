import { getAnniversaryDate } from "../../utils/date.utils";
import { AnniversaryConfetti } from "../components/confetti/AnniversaryConfetti";
import { CountdownTimer } from "../components/countdown/CountdownTimer";
import { LetterEnvelope } from "../components/letter/LetterEnvelope";

export default function Home() {
  const today = new Date();
  const anniversaryDate = getAnniversaryDate(
    2025,
    today.getMonth()
  );

  return (
    <main style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 40,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <AnniversaryConfetti anniversaryDate={anniversaryDate} />
      <CountdownTimer targetDate={anniversaryDate} />
      <LetterEnvelope />
    </main>
  );
}
import { CountdownTimer } from "@/components/CountdownTimer";
import { Box } from "@mui/material";

export default function Home() {
  const eventDate = '2025-12-31T00:00:00'

  return (
    <Box>
      <CountdownTimer targetDate={eventDate} />
    </Box>
  );
}

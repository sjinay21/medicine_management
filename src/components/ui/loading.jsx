import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
   <Stack spacing={1} sx={{ width: "100%", height: "100%" }}>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="rectangular" width={"100%"} height={60} />
      <Skeleton variant="rounded" width={"100%"} height={60} />
    </Stack>
  );
}

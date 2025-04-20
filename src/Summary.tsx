import { Box, Stack } from '@mui/material';
type SummaryProps = {
    summary: { userA: string; userB: string; price: number };
};

const Summary: React.FC<SummaryProps> = ({ summary }) => {
    return (
        <Stack
            direction={'row'}
            justifyContent={'center'}
            alignItems={'flex-end'}
        >
            <Box sx={{ fontSize: 20 }}>{summary.userA}</Box>が
            <Box sx={{ fontSize: 20 }}>{summary.userB}</Box>に
            <Box sx={{ fontSize: 20 }}>{summary.price}円</Box>支払い
        </Stack>
    );
};

export default Summary;

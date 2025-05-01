import { Box, Stack } from '@mui/material';
type SummaryProps = {
    summary: { from: string; to: string; price: number };
};

const Summary: React.FC<SummaryProps> = ({ summary }) => {
    return (
        <Stack
            direction={'row'}
            justifyContent={'center'}
            alignItems={'flex-end'}
        >
            <Box sx={{ fontSize: 20 }}>{summary.from}</Box>が
            <Box sx={{ fontSize: 20 }}>{summary.to}</Box>に
            <Box sx={{ fontSize: 20 }}>{summary.price}円</Box>支払い
        </Stack>
    );
};

export default Summary;

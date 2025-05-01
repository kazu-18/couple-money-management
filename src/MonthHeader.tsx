import { Stack, Box } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

type MonthHeaderProps = {
    month: string;
};

const MonthHeader: React.FC<MonthHeaderProps> = ({ month }) => {
    return (
        <Stack
            direction="row"
            sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#4dabf5',
            }}
        >
            <ArrowLeftIcon sx={{ fontSize: 80, color: 'white' }} />
            <Box sx={{ color: 'white', fontSize: 40 }}>{month}月</Box>
            <ArrowRightIcon sx={{ fontSize: 80, color: 'white' }} />
        </Stack>
    );
};

export default MonthHeader;

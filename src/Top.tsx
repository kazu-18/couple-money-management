import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Top = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ backgroundColor: '#dff3fa', padding: '5px' }}>
            <h1>同棲お金管理</h1>
            <Button
                onClick={() => navigate('/register-name')}
                variant="contained"
                sx={{ margin: '10px' }}
            >
                はじめる
            </Button>
        </Box>
    );
};

export default Top;

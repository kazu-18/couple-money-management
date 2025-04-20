import { Box, Button, Stack, TextField } from '@mui/material';

const RegisterName = () => {
    return (
        <Box>
            <Box sx={{ margin: 2 }}>おふたりの名前を入力してください</Box>
            <Stack direction="row" spacing={2}>
                <Box>ひとりめ</Box>
                <TextField variant="outlined" label="名前" />
            </Stack>
            <Stack direction="row" spacing={2}>
                <Box>ふたりめ</Box>
                <TextField variant="outlined" label="名前" />
            </Stack>
            <Button variant="contained" sx={{ margin: '10px' }}>
                つぎへ
            </Button>
        </Box>
    );
};

export default RegisterName;

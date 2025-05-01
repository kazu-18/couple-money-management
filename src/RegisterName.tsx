import { Box, Button, Stack, TextField } from '@mui/material';
import { getDatabase, ref, set } from 'firebase/database';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// firebase realtime databaseに名前を登録する関数
const registerNameToDB = async (uuid: string, name1: string, name2: string) => {
    const db = getDatabase();
    const reference = ref(db, `${uuid}/users`);
    await set(reference, {
        user1: name1,
        user2: name2,
    });
    console.log('Name registered to DB:', { name1, name2 });
};

const RegisterName = () => {
    const navigate = useNavigate();
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');

    const onClickNext = async () => {
        const uuid = crypto.randomUUID();
        registerNameToDB(uuid, name1, name2);
        navigate(`/${uuid}`);
    };

    return (
        <Box>
            <Box sx={{ margin: 2 }}>おふたりの名前を入力してください</Box>
            <Stack direction="row" spacing={2}>
                <Box>ひとりめ</Box>
                <TextField
                    variant="outlined"
                    label="名前"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                />
            </Stack>
            <Stack direction="row" spacing={2}>
                <Box>ふたりめ</Box>
                <TextField
                    variant="outlined"
                    label="名前"
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                />
            </Stack>
            <Button
                variant="contained"
                sx={{ margin: '10px' }}
                onClick={() => {
                    onClickNext();
                }}
            >
                つぎへ
            </Button>
        </Box>
    );
};

export default RegisterName;

import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@mui/material';
import { getDatabase, onValue, push, ref, set } from 'firebase/database';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RegisterPayment = () => {
    const { id } = useParams<{ id: string }>();
    const [date, setDate] = useState(
        // 現在の日付を取得し、YYYY-MM-DD形式に変換
        new Date()
            .toLocaleString('ja-JP', {
                timeZone: 'Asia/Tokyo',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            })
            .replace(/\//g, '-')
    );
    const [person, setPerson] = useState('');
    const [purpose, setPurpose] = useState('');
    const [price, setPrice] = useState('');
    const [isRegular, setIsRegular] = useState(false);

    const [users, setUsers] = useState('');

    useEffect(() => {
        const db = getDatabase();
        const reference = ref(db, `${id}/users`);
        onValue(reference, (snapshot) => {
            const data = snapshot.val();
            setUsers(data);
        });
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 登録処理をここに追加
        const db = getDatabase();
        const reference = ref(db, `${id}/payments`);
        const newRef = push(reference);
        const newPayment = {
            date,
            person,
            purpose,
            price: Number(price),
            isRegular,
        };
        set(newRef, newPayment);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: 1,
                backgroundColor: '#dff3fa',
            }}
        >
            <Box sx={{ pb: 1 }}>支出登録</Box>
            <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
                <TextField
                    type="date"
                    variant="outlined"
                    size="small"
                    sx={{ pr: 1 }}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                に
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
                <FormControl size="small" sx={{ pr: 1 }}>
                    <InputLabel>だれ</InputLabel>
                    <Select
                        value={person}
                        onChange={(e) => setPerson(e.target.value)}
                    >
                        {Object.entries(users).map((user) => (
                            <MenuItem key={user[0]} value={user[0]}>
                                {user[1]}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                が
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
                <TextField
                    label="なに"
                    variant="outlined"
                    size="small"
                    sx={{ pr: 1 }}
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                />
                を買って
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
                <TextField
                    label="いくら"
                    variant="outlined"
                    size="small"
                    sx={{ pr: 1 }}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                円払った
            </Box>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isRegular}
                        onChange={(e) => setIsRegular(e.target.checked)}
                    />
                }
                label="毎月の支出として登録する"
                sx={{ pb: 1 }}
            />
            <Button type="submit" variant="contained" color="primary">
                登録する
            </Button>
        </Box>
    );
};

export default RegisterPayment;

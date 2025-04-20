import { Box } from '@mui/material';
import { Stack } from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import React from 'react';

type PayRowProps = {
    pay: { day: string; who: string; for: string; price: number };
};

const PayRow: React.FC<PayRowProps> = ({ pay }) => {
    return (
        <Box sx={{ margin: '5px' }}>
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '5px',
                    borderBottom: '1px solid black',
                }}
            >
                <Box>
                    <Box sx={{ textAlign: 'left' }}>{pay.for}</Box>
                    <Box sx={{ textAlign: 'left' }}>
                        {pay.day}に{pay.who}が支払い
                    </Box>
                </Box>
                <Stack direction="row" spacing={1}>
                    <Box sx={{ textAlign: 'right' }}>￥{pay.price}</Box>
                    <Box onClick={() => alert('Edit')}>
                        <EditRoundedIcon />
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
};

export default PayRow;

import React from 'react';
import PayTable from './PayTable';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Summary from './Summary';
import { useNavigate } from 'react-router-dom';

type MonthContainerProps = {
    summary: { from: string; to: string; price: number };
    regularPay: {
        date: string;
        person: string;
        purpose: string;
        price: number;
    }[];
    oneTimePay: {
        date: string;
        person: string;
        purpose: string;
        price: number;
    }[];
};

const MonthContainer: React.FC<MonthContainerProps> = ({
    summary,
    regularPay,
    oneTimePay,
}) => {
    const navigate = useNavigate();
    return (
        <Box sx={{ backgroundColor: '#dff3fa', padding: '5px' }}>
            <Summary summary={summary} />
            <Button
                variant="outlined"
                sx={{ margin: '10px' }}
                onClick={() => navigate(`register-payment`)}
            >
                建て替え記録を追加
            </Button>
            <PayTable title="定期支出" payTable={regularPay} />
            <PayTable title="その他の支出" payTable={oneTimePay} />
        </Box>
    );
};

export default MonthContainer;

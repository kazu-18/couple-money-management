import React from 'react';
import PayTable from './PayTable';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Summary from './Summary';

type MonthContainerProps = {
    summary: { userA: string; userB: string; price: number };
    regularPay: { day: string; who: string; for: string; price: number }[];
    oneTimePay: { day: string; who: string; for: string; price: number }[];
};

const MonthContainer: React.FC<MonthContainerProps> = ({
    summary,
    regularPay,
    oneTimePay,
}) => {
    return (
        <Box sx={{ backgroundColor: '#dff3fa', padding: '5px' }}>
            <Summary summary={summary} />
            <Button variant="outlined" sx={{ margin: '10px' }}>
                建て替え記録を追加
            </Button>
            <PayTable title="定期支出" payTable={regularPay} />
            <PayTable title="その他の支出" payTable={oneTimePay} />
        </Box>
    );
};

export default MonthContainer;

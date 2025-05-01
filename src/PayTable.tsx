import { Box } from '@mui/material';
import PayRow from './PayRow';

type PayTableProps = {
    title: string;
    payTable: {
        date: string;
        person: string;
        purpose: string;
        price: number;
    }[];
};

const PayTable: React.FC<PayTableProps> = ({ title, payTable }) => {
    return (
        <>
            <Box sx={{ width: '100%', borderBottom: '1px solid #4dabf5' }}>
                {title}
            </Box>
            <Box
                sx={{
                    backgroundColor: 'white',
                    margin: '5px',
                    padding: '1px',
                }}
            >
                {payTable.map((pay) => {
                    return (
                        <PayRow
                            pay={pay}
                            key={
                                pay.date + pay.person + pay.purpose + pay.price
                            }
                        />
                    );
                })}
            </Box>
        </>
    );
};

export default PayTable;

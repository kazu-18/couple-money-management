import Container from '@mui/material/Container';
import MonthHeader from './MonthHeader';
import MonthContainer from './MonthContainer';

const Month = () => {
    const data = {
        month: 12,
        summary: { userA: 'かず', userB: 'かの', price: 100000 },
        regularPay: [
            { day: '2025-12-01', who: 'kano', for: '家賃', price: 70000 },
            { day: '2025-12-01', who: 'kano', for: '電気代', price: 7000 },
        ],
        oneTimePay: [
            { day: '2025-12-01', who: 'kano', for: '食費', price: 3000 },
            { day: '2025-12-01', who: 'kano', for: '家具', price: 35000 },
            { day: '2025-12-01', who: 'kano', for: '食費', price: 3000 },
            { day: '2025-12-01', who: 'kano', for: '家具', price: 35000 },
            { day: '2025-12-01', who: 'kano', for: '食費', price: 3000 },
            { day: '2025-12-01', who: 'kano', for: '家具', price: 35000 },
        ],
    };

    return (
        <Container
            disableGutters
            maxWidth="lg"
            sx={{ backgroundColor: 'black' }}
        >
            <MonthHeader month={data.month} />
            <MonthContainer
                summary={data.summary}
                regularPay={data.regularPay}
                oneTimePay={data.oneTimePay}
            />
        </Container>
    );
};

export default Month;

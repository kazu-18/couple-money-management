import Container from '@mui/material/Container';
import MonthHeader from './MonthHeader';
import MonthContainer from './MonthContainer';
import { useParams } from 'react-router-dom';
import {
    endAt,
    getDatabase,
    onValue,
    orderByChild,
    query,
    ref,
    startAt,
} from 'firebase/database';
import { useEffect, useState } from 'react';
import { getFirstDay, getLastDay } from './TimeUtil';

const Month = () => {
    const { id, year, month } = useParams();
    const [regularPayments, setRegularPayments] = useState<any[]>([]);
    const [irregularPayments, setIrregularPayments] = useState<any[]>([]);
    const [summary, setSummary] = useState<any>({});

    useEffect(() => {
        const db = getDatabase();
        const reference = ref(db, `${id}/payments`);
        const q = query(
            reference,
            orderByChild('date'),
            startAt(getFirstDay(year!, month!)),
            endAt(getLastDay(year!, month!))
        );
        onValue(q, (snapshot) => {
            const regularPayments: any = [];
            const irregularPayments: any = [];
            let sumOfUser1 = 0;
            let sumOfUser2 = 0;

            snapshot.forEach((childSnapshot) => {
                const data = childSnapshot.val();
                // 定期支出と不定期支出に分類
                if (data.isRegular) {
                    regularPayments.push(data);
                } else {
                    irregularPayments.push(data);
                }
                // それぞれのユーザーの支出を合計
                if (data.person == 'user1') {
                    sumOfUser1 += data.price;
                } else if (data.person == 'user2') {
                    sumOfUser2 += data.price;
                }
            });

            setRegularPayments(regularPayments);
            setIrregularPayments(irregularPayments);

            const diff = sumOfUser2 - sumOfUser1;
            const from = diff > 0 ? 'user1' : 'user2';
            const to = diff > 0 ? 'user2' : 'user1';
            setSummary({ from, to, price: Math.abs(diff) });
        });
    }, []);

    return (
        <Container
            disableGutters
            maxWidth="lg"
            sx={{ backgroundColor: 'black' }}
        >
            <MonthHeader month={month!} />
            <MonthContainer
                summary={summary}
                regularPay={regularPayments}
                oneTimePay={irregularPayments}
            />
        </Container>
    );
};

export default Month;

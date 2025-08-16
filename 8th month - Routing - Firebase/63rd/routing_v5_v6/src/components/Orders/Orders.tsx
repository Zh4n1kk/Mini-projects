import React, { useEffect, useState } from 'react';
import { axiosOrder } from '../../axios/axiosOrder';
import type { TFirebaseData } from "../../types/TFirebaseData";
import { TOrder } from '../../types/TOrder';

const Orders = () => {
    const [orders, setOrders] = useState<TOrder[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosOrder.get('/orders.json');
            const fetchedOrders = Object.keys(response.data).map(id => {
                return { ...response.data[id], id };
            });
            setOrders(fetchedOrders);
        };
        setLoading(true);
        fetchData().finally(() => setLoading(false));
    }, []);

    return (
        <div>
            Orders will be here
        </div>
    );
}

export default Orders;
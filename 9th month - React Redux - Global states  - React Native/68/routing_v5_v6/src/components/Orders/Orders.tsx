import { axiosOrder } from '../../axios/axiosOrder';
import type { TFirebaseData } from "../../types/TFirebaseData";
import { TOrder } from '../../types/TOrder';
import OrderItem from '../OrderItem/OrderItem';
import { useLoaderData } from 'react-router';

export const fetchOrders = async () => {
    const response = await axiosOrder.get('orders.json');
    const data: TFirebaseData<TOrder> = response.data
    const fetchedOrders: TOrder[] = Object.keys(data).map(id => {
        return { ...data[id], id };
    });
    return fetchedOrders
}
const Orders = () => {
    const orders: TOrder[] = useLoaderData()
    return (
        <>
        {orders.map(order => {
            return (
                <OrderItem key={order.id}
                    ingredients={order?.ingredients || {}}
                    price={order.price || 0}
                />
            )
        })}
    </>
    );
}

export default Orders;
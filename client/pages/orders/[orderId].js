import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import useRequest from '../../hooks/use-request';
import  Router  from 'next/router';

const OrderShow = ({ order, currentUser }) => {
  const [timeleft,setTimeLeft] = useState(0);

  const { doRequest, errors } = useRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id,
    },
    onSuccess: (payment) => Router.push('/orders'),
  });

  useEffect(() => {
    const findTimeLeft = () => {

      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft/1000))
    };

    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    }
  }, [order]);

  if (timeleft < 0) {
    return <div>Order Expires</div>
  }
  
  return (
    <div>
      {timeleft} seconds until order expires
      <StripeCheckout 
        token = {({ id }) => doRequest({ token: id})}
        stripeKey = "pk_test_51IknBXCepcv5bOXkJaMWAI5S17xTltWbivntig45AfvfR25bExMMRAO9nNCPqN58YaR9xsGuCsfmHQeSH5K9zTF400PF03MxYs"
        amount = {order.ticket.price * 100}
        email = {currentUser.email}
      />
      {errors}
    </div>
  )
};

OrderShow.getInitialProps = async (context, client) => {
  const {orderId} = context.query;
  const {data} = await client.get(`/api/orders/${orderId}`);

  return { order: data };
}

export default OrderShow;
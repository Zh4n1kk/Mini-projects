'use client';

import { Button, Form, InputNumber } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useState } from 'react';

const InputConstructorBetweenAll = () => {
  const [peoples, setPeopleList] = useState(0);
  const [cost, setCost] = useState(0);
  const [tip, setTip] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [pricePerPeep, setPricePerPeep] = useState(0);
  const [overallCost, setOverallCost] = useState(0);

  const calc = () => {
    if (peoples === 0) {
      setPricePerPeep(0);
      setOverallCost(0);
      return;
    }

    const baseCost = cost + delivery;
    const withTip = baseCost + (baseCost / 100) * tip;
    const costPerPeep = Math.ceil(withTip / peoples);
    setPricePerPeep(costPerPeep);
    setOverallCost(withTip);
  };

  return (
    <>
      <Form layout="horizontal" labelCol={{ span: 2 }}>
        <FormItem label="Человек">
          <InputNumber
            value={peoples}
            onChange={(value) => setPeopleList(value || 0)}
          />
          чел.
        </FormItem>
        <FormItem label="Сумма заказа">
          <InputNumber value={cost} onChange={(value) => setCost(value || 0)} />
          тенге
        </FormItem>
        <FormItem label="Процент чаевых">
          <InputNumber value={tip} onChange={(value) => setTip(value || 0)} />%
        </FormItem>
        <FormItem label="Доставка">
          <InputNumber
            value={delivery}
            onChange={(value) => setDelivery(value || 0)}
          />
          тенге
        </FormItem>
        <Button onClick={calc}>Расчитать</Button>
      </Form>
      <p className="text-black">Общая сумма {overallCost}</p>
      <p className="text-black">Кол-во человек {peoples}</p>
      <p className="text-black">Каждый должен заплатить {pricePerPeep}</p>
    </>
  );
};

export default InputConstructorBetweenAll;

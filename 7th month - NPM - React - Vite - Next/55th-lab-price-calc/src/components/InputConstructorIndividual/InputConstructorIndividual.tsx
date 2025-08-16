'use client';
import { Button, Form, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useState } from 'react';
type Results = {
  name: string;
  original: number;
  withTip: number;
  total: number;
};

const InputConstructorIndividual = () => {
  const [peoples, setPeopleList] = useState([{ name: '', price: 0 }]);
  const [overallCost, setOverallCost] = useState(0);
  const [tip, setTip] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [results, setResults] = useState<Results[]>([]);

  const renderP = () => {
    const baseCost = peoples.reduce((sum, val) => sum + val.price, 0);
    setOverallCost(baseCost);

    const deliveryPerPeep = Math.ceil(delivery / peoples.length);
    const newResults = peoples.map((p) => {
      const tipAmount = p.price * (tip / 100);
      const withTip = Math.ceil(p.price + tipAmount);
      const total = withTip + deliveryPerPeep;

      return {
        name: p.name,
        original: p.price,
        withTip,
        total,
      };
    });
    setResults(newResults);
  };

  return (
    <>
      <Form layout="horizontal" labelCol={{ span: 2 }}>
        {peoples.map((el, index) => (
          <FormItem key={index}>
            <Input
              style={{ width: `200px` }}
              placeholder="Имя"
              onChange={(e) => {
                const newList = [...peoples];
                newList[index].name = e.target.value;
                setPeopleList(newList);
              }}
              value={el.name}
            />

            <Input
              style={{ width: `100px` }}
              placeholder="Сумма"
              value={el.price}
              onChange={(e) => {
                const newList = [...peoples];
                newList[index].price = Number(e.target.value);
                setPeopleList(newList);
              }}
            />

            <Button
              onClick={() => {
                setPeopleList(peoples.filter((person, i) => i !== index));
              }}
            >
              -
            </Button>
          </FormItem>
        ))}

        <FormItem>
          <p style={{width: '150px',}}>Чаевые:</p> 
          <Input
            style={{ width: `200px` }}
            placeholder="Чаевые"
            value={tip}
            onChange={(e) => setTip(Number(e.target.value))}
          />
        </FormItem>
        <FormItem>
          <p style={{width: '150px',}}>Доставка:</p> 
          <Input
            style={{ width: `200px` }}
            placeholder="Доставка"
            value={delivery}
            onChange={(e) => setDelivery(Number(e.target.value))}
          />
        </FormItem>
        <div style={{ display: 'inline-block' }}>
          <Button onClick={renderP}>Расчитать</Button>

          <Button
            onClick={() => {
              setPeopleList([...peoples, { name: '', price: 0 }]);
            }}
          >
            +
          </Button>
        </div>
      </Form>
      <p className="text-black">Общая сумма {overallCost}</p>
      {results.map((p, index) => {
        return (
          <p className="text-black" key={index}>
            {p.name}: {p.total} тенге (с чаем {p.withTip})
          </p>
        );
      })}
    </>
  );
};

export default InputConstructorIndividual;

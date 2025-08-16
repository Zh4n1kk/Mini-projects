'use client';
import InputConstructorBetweenAll from '@/components/InputConstructorBetweenAll/InputConstructorBetweenAll';
import InputConstructorIndividual from '@/components/InputConstructorIndividual/InputConstructorIndividual';
import { Form, Radio } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useState } from 'react';

export default function Home() {
  const [value, setValue] = useState(0);

  const renderInputs = () => {
    if (value === 1) {
      return <InputConstructorBetweenAll />;
    }
    if (value === 2) {
      return <InputConstructorIndividual />;
    }
  };

  return (
    <div className={`text-white`}>
      <Form style={{ paddingBottom: '30px' }}>
        <FormItem label="Сумма заказа считается: " layout="vertical">
          <Radio.Group
            onChange={(e) => {
              setValue(e.target.value);
            }}
            options={[
              { value: 1, label: 'Поровну между всеми участниками' },
              { value: 2, label: 'Индивидуально для каждого' },
            ]}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          />
        </FormItem>
      </Form>
      {renderInputs()}
    </div>
  );
}

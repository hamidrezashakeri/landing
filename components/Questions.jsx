import Accordian from '@/shared/Accordian';
import { useState } from 'react';

const Questions = () => {
 const [show, setShow] = useState(false);
  return (
    <div className="questions p-12 xl:mx-80">
      <h3 className="text-primary text-2xl">سوالات متداول</h3>
      
      <Accordian
        question="نحوه سرمایه گذاری در صندوق جدید کاردان چگونه است؟"
        answer="شما میتوانید از طریق وبسایت صندوق کاردان (kardan.ir) یا سامانه"
        show={show}
        setShow={setShow}
      />
    </div>
  );
};

export default Questions;

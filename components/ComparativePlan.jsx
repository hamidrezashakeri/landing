import Adventage from "@/shared/Adventage";

const ComparativePlan = () => {
  return (
    <div className="bg-primary text-white flex flex-col items-center p-12">
      <h3>طرح مقایسه ای بین صندوق های درامد ثابت جدید کاردان</h3>
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:gap-0">
        <button className="border-2 border-white bg-white text-primary border-l-0 px-16 py-2 w-96 rounded-full md:rounded-none md:rounded-tr-full md:rounded-br-full">
          صندوق جدید کاردان
        </button>
        <button className="border-2 border-white px-16 py-2 w-96 rounded-full md:rounded-none md:rounded-tl-full md:rounded-bl-full">
          سپرده بانکی
        </button>
      </div>
      <div className="proprties flex flex-col md:flex-row items-center gap-20 mt-20">
        <Adventage icon="/icon4.png" text="بازدهی سالانه" subText="22%" />
        <Adventage icon="/icon3.png" text="پرداخت ماهانه سود" subText="دارد" />
        <Adventage icon="/icon2.png" text="روش محاسبه سود" subText="ماه شمار" />
        <Adventage icon="/icon1.png" text="جریمه شکست" subText="دارد" />
        <Adventage icon="/icon.png" text="شرط کف مبلغ" subText="ندارد" />
      </div>
    </div>
  );
};

export default ComparativePlan;

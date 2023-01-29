import Step from "@/shared/Step";

const StartInvesting = ()=>{
    return(
        <div className="p-12 xl:mx-80 relative">
            <div className="flex flex-col 2xl:flex-row gap-12">
                <h3 className="text-primary text-center xl:whitespace-nowrap">* سود انتظاری بر مبنای تجربه تامین سرمایه کاردان در مدیریت صندوق های با درامد ثابت</h3>
                <button className="bg-primary text-white py-2 px-8 rounded-md w-96 mx-auto whitespace-nowrap">شروع سرمایه گذاری</button>
            </div>
            <div className="mt-24">
                <h3 className="text-3xl text-primary text-center xl:text-right">مراحل سرمایه گذاری در صندوق جدید کاردان</h3>
                <div className="steps flex justify-between items-center flex-col xl:flex-row gap-12">
                   <Step title="مرحله اول" subTitle="ثبت نام در سامانه سجام و احراز هویت" />
                   <Step title="مرحله دوم" subTitle="ثبت نام در سایت صندوق جدید کاردان" />
                   <Step title="مرحله سوم" subTitle="دریافت شناسه کاربری و کلمه عبور" />
                   <Step title="مرحله چهارم" subTitle="ورود به سامانه آنلاین صندوق و شروع سرمایه گذاری" />
                   
                </div>
            </div>
            <div className="mt-24">
                <h3 className="text-2xl text-secondary">چگونه در صندوق جدید کاردان سرمایه گذاری کنم؟</h3>
                <p className="mt-8 text-primary text-justify">شما می توانید از طریق وبسایت  صندوق (www.kardabfoud.ir) یا سامانه سرمایه گذاری کاردان (invest.kardan.ir) در صندوق ثبت نام کرده و واحدهای جدید صندوق را خریداری کنید. برای ثبت نام ورود کدملی و شماره تلفن همراه کافی است.</p>
                <button className="bg-primary text-white py-2 px-8 rounded-md mt-8 absolute left-8">شروع سرمایه گذاری</button>
            </div>
            <div className="mt-48">
                <h3 className="text-3xl text-primary">ویدئو معرفی ویژگی های صندوق های کاردان</h3>
                <iframe src="" frameborder="1" className="border-2 border-gray-300 w-full h-auto xl:h-96 mt-8"></iframe>
            </div>
        </div>
    )
}

export default StartInvesting;
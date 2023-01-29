const Counseling = ()=>{
    return(
        <div className="p-12 xl:mx-80 text-sm text-gray-400 bg-white flex flex-col 2xl:flex-row items-center gap-4 whitespace-nowrap">
            <p className="border-r-2 border-primary pr-2 whitespace-normal 2xl:whitespace-nowrap">
                 شماره تلفن تان را وارد کنید تا برای ارائه مشاوره و اطلاعات بیشتر با شما تماس بگیریم
            </p>
            <p className="bg-gray-100 p-2 flex gap-4">
                <span>شماره تماس</span>
                <span>0912345678</span>
            </p>
            <button className="bg-primary text-white py-2 px-8 rounded-md">درخواست مشاوره</button>
        </div>
    )
}

export default Counseling;
const Step = ({title, subTitle})=>{
    return(
        <div className="flex flex-col items-center justify-center">
        <img src="/icon5.png" alt="icon" className="h-28" />
        <h3 className="text-center w-full text-primary">{title}</h3>
        <p className="text-center w-full text-secondary">{subTitle}</p>
    </div>
    )
}

export default Step;
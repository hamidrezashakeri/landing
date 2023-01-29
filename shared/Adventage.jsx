const { CheckIcon } = require("@heroicons/react/24/outline")

const Adventage = ({icon, text, subText})=>{
    return(
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={icon} alt="" className="object-fit" />
          <p>{text}</p>
          <p className="flex gap-5">
            {subText}
            <CheckIcon className="text-green-700 w-6 h-6" />
          </p>
        </div>
    )
}

export default Adventage;
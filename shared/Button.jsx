const Button = ({ title }) => {
  return (
    <button className="bg-white w-full text-primary px-8 py-4 rounded-lg shadow-lg whitespace-nowrap">
      {title}
    </button>
  );
};

export default Button;

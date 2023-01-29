const Card = ({ title }) => {
  return (
    <div className="card p-8 bg-white flex items-end justify-center h-48 rounded-lg w-full shadow-lg">
      <p className="text-center text-primary">
        {title}
      </p>
    </div>
  );
};

export default Card;

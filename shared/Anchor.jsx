const Anchor = ({ title, attr = '' }) => {
  return (
    <a
      href="#"
      className={`${attr} transition-colors duration-300 hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 block w-full mb-4`}
    >
      {title}
    </a>
  );
};

export default Anchor;

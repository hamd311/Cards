const Inputgroup = (props) => {
  return (
    <div className="my-2">
      <div>
        <label
          htmlFor={props.id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {props.label}
        </label>
      </div>
      <input
        className="bg-inherit border border-[#494949] text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  italic text-black"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        id={props.id}
        type={props.type}
      />
    </div>
  );
};

export default Inputgroup;

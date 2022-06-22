const Page = ({ text = "", onChange }) => {
  return (
    <div className="h-full bg-white border-2 border-base-300 w-full">
      <textarea
        className="outline-none py-5 px-10 w-full h-full"
        value={text}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
};

export default Page;

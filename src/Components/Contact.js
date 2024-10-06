const Contact = () => {
  return (
    <div>
      <div className=" text-center my-5">
        <h1 className="text-3xl font-bold">Contact us</h1>
        <p>This is contact us page from Namaste React</p>
        <form>
          <label>Name: </label>
          <input
            type="text"
            className="border border-black my-10 p-2 rounded-lg"
            placeholder="enter the name"
          />
          <span className="mx-5">
            <label>Contact No: </label>
            <input
              type="text"
              className="border border-black  p-2 rounded-lg"
              placeholder="enter the number"
            />
          </span>
          <div>
            <button className="border border-black py-2 px-5 rounded-lg bg-gray-300">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;

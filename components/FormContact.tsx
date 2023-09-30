const FormContact = () => {
  return (
    <section className="w-full space-y-5 my-3">
      <h1 className="text-center text-xl sm:text-2xl font-bold">FormContact</h1>
      <form className="w-full sm:w-96 mx-auto p-3 space-y-5">
        <input
          type="text"
          placeholder="Fullname"
          className="w-full p-3 border focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border focus:outline-none"
        />
        <textarea
          rows={5}
          className="w-full border p-3 focus:outline-none"
          placeholder="Message"
        ></textarea>
        <button className="p-3 bg-slate-900 text-white hover:bg-slate-700">
          Submit
        </button>
      </form>
    </section>
  );
};

export default FormContact;

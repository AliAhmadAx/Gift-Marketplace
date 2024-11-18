const Modal = ({ description, setShowMore }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-0 p-0">
        <div className="relative w-auto my-6 mx-auto max-w-full flex items-center justify-center ">
          <div
            className={
              "border-0 mt-12 rounded-lg shadow-lg relative flex flex-col w-11/12 sm:w-[500px] bg-white outline-none focus:outline-none"
            }
          >
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Product Description</h3>
              <button
                onClick={() => setShowMore(false)}
                className="p-1 ml-auto bg-dark border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              >
                <span className="text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="relative p-6 flex flex-col text-left ">
              <div>
                <p>{description}</p>
              </div>
            </div>
            {/*footer*/}

            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                onClick={() => setShowMore(false)}
                style={{ background: "black" }}
                className="btn text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;

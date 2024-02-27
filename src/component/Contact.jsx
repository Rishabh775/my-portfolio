export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-[#111132] to-[#0c0c1d]" id="CONTACT">
      <div className=" w-5/6 mx-auto sm:py-20 p-5 font-sans">
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight primary-color">
            Contact Me
          </h2>
        </div>
        <div className="w-full md:w-4/6  mx-auto">
          <div className="mt-6 bg-[#161616] rounded-xl">
            <div className="p-10">
              <form
                action="https://getform.io/f/kazRmOaJ"
                target="black"
                method="POST"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <div className="mt-2.5 ">
                      <input
                        type="text "
                        name="name "
                        id=""
                        placeholder="Your Name"
                        className="bg-[#161616] w-full px-4 py-5 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600 "
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-2.5 ">
                      <input
                        type="email "
                        name="email "
                        id=""
                        placeholder="Your Email"
                        className="bg-[#161616] w-full px-4 py-5 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600 "
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="mt-2.5 ">
                      <textarea
                        name=" Message "
                        id=""
                        placeholder="Your Message"
                        className="bg-[#161616] w-full px-4 py-5 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600 "
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 ">
                    <button
                      type="submit"
                      className="text-xl bg-gradient-to-br from-orange-400 to-pink-600 w-full p-4  mt-2 font-semibold text-white  rounded-md"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

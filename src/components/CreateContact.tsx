import React from "react";

export const CreateContact = () => {
  return (
    <div className="w-full md:w-2/4 lg:w-1/4 px-5 my-5">
      <div className="sticky top-4 z-10">
        <h2 className="font-semibold text-xl">Create Contact</h2>
        <form action="" className="flex flex-col">
          <label className="mt-3 cursor-pointer text-sm">
            First Name
            <input
              type="text"
              className="w-full border-slate-300 border rounded-md px-2 py-2 mt-1 text-md"
            />
          </label>
          <label className="mt-3 cursor-pointer text-sm">
            Last Name
            <input
              type="text"
              className="w-full border-slate-300 border rounded-md px-2 py-2 mt-1 text-md"
            />
          </label>
          <label className="mt-3 cursor-pointer text-sm">
            Email
            <input
              type="email"
              className="w-full border-slate-300 border rounded-md px-2 py-2 mt-1 text-md"
            />
          </label>
          <button className="bg-white border border-2 border-slate-400 rounded-md px-2 py-2 mt-5 text-slate-600 font-medium transition-all hover:bg-slate-300">
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
};

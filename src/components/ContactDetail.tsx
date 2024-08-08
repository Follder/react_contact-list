import React from "react";
import avatar from '../assets/img/avatar.svg';

export const ContactDetail = () => {
  return (
    <div className="flex p-8 gap-x-5 flex-col relative w-full md:w-3/4 lg:w-2/4 mt-5 mx-auto">
      <div className="flex gap-x-5">
        <div className="flex-initial w-16">
          <img src={avatar} alt="image" className="aspect-square" />
        </div>
        <div className="flex-auto w-64">
          <div className="text-xl font-semibold">First Name Last Name</div>
          <div className="text-lg font-medium">email@email.com</div>
        </div>
        <div className="absolute right-5 top-5 cursor-pointer">
          <span className="material-icons">highlight_off</span>
        </div>
      </div>
      <div className="font-medium mt-5">Tags:</div>
      <div className="flex gap-x-2 gap-y-1 flex-wrap mt-1">
        <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">
          Tag1
        </div>
        <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">
          Tag1
        </div>
        <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">
          Tag1
        </div>
        <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">
          Tag1
        </div>
        <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">
          Tag1
        </div>
        <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">
          Tag1
        </div>
        <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">
          Tag1
        </div>
        <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">
          Tag1
        </div>
        <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">
          Tag1
        </div>
        <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">
          Tag1
        </div>
        <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">
          Tag1
        </div>
        <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">
          Tag1
        </div>
      </div>
      <form action="" className="flex flex-col mt-5">
        <input type="text" className="mt-3 border border-slate-300 rounded-md py-2 px-2 text-md" placeholder="Add new Tag" />
        <button className="mt-3 bg-white border border-2 border-slate-400 rounded-md px-2 py-2 mt-5 text-slate-600 font-medium transition-all hover:bg-slate-300">Add tags</button>
      </form>
    </div>
  );
};

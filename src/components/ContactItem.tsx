import React from 'react';
import avatar from '../assets/img/avatar.svg';

export const ContactItem = () => {
  return (
    <div className="relative flex bg-slate-100 rounded-lg p-8 gap-x-5 mt-5">
      <div className="flex-initial"><img src={avatar} alt="image" className=' aspect-square' /></div>
      <div className="flex-auto w-64">
        <div className="text-xl font-semibold">First Name Last Name</div>
        <div className="text-lg font-medium">email@email.com</div>
        <div className="flex gap-x-2 gap-y-1 flex-wrap mt-3">
          <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">Tag1</div>
          <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">Tag1</div>
          <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">Tag1</div>
          <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">Tag1</div>
          <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">Tag1</div>
          <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">Tag1</div>
          <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">Tag1</div>
          <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">Tag1</div>
          <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">Tag1</div>
          <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">Tag1</div>
          <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">Tag1</div>
          <div className="px-3 py-1 bg-slate-300 text-slate-800  font-semibold text-sm rounded-md">Tag1</div>
        </div>
      </div>
      <div className="absolute right-5 top-5 cursor-pointer">
        <span className="material-icons">highlight_off</span>
      </div>
    </div>
  )
}
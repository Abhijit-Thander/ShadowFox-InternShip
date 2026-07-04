import React from "react";

const TreatmentCard = ({ treatment }) => {
  const { title, img, short, duration } = treatment;

  return (
    <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden cursor-pointer hover:border-[#3B82C4] hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 flex flex-col">
      <div className="h-48 overflow-hidden bg-[#EBF3FC]">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-[#1A2744] group-hover:text-[#3B82C4] transition-colors">
          {title}
        </h3>

        <p className="text-slate-400 text-sm mt-2 line-clamp-2">{short}</p>

        <div className="mt-auto pt-4 flex justify-between items-center">
          <span className="text-xs bg-slate-50 px-3 py-1 rounded-full">
            ⏱ {duration}
          </span>

          <span className="text-[#3B82C4] text-sm">Learn More →</span>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;

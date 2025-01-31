"use client";

import PacificDropdownSelector from "@/components/ui/PacificDropdownSelector";
import { useState } from "react";

// Demo lists for the dropdowns
const showList = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Live", value: "live" },
  { id: 3, name: "Expired", value: "expired" },
];




function CustomerFilter() {
  const [show, setShow] = useState<string>("all"); // Default to "all"


  return (
    <div className="my-[30px] flex h-[60px] w-full items-center justify-between rounded-[12px] bg-white p-[8px]">
      {/* Dropdown for "Show" */}
      <div className="flex gap-x-[28px]">
        <div className="flex h-full w-fit items-center gap-x-[9px]">
          <span className="text-[16px] font-medium leading-[19.2px] text-[#444444]">
            Show
          </span>
          <PacificDropdownSelector
            list={showList}
            selectedValue={show}
            onValueChange={setShow}
          />
        </div>
        {/* Dropdown for "Categories" */}
        <button className="bg-primary px-[14px]  rounded-[8px] text-sm text-normal text-[#fff]" >
          Print
        </button>
        
      </div>
      <div>
        <button className="rounded-lg bg-primary px-[20px] py-[9px] text-[#F5F5F5]">
          Bulk Delete
        </button>
      </div>
    </div>
  );
}

export default CustomerFilter;

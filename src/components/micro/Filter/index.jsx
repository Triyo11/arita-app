"use client";

import { Faders } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";

const Filter = () => {
  const [titleFilter, setTitleFilter] = useState("");
  // const [startDateFilter, setStartDateFilter] = useState("");
  // const [endDateFilter, setEndDateFilter] = useState("");

  const handleOpenModalFilter = () => {
    const modal = document.getElementById("filter_modal");
    modal.showModal();
  };

  const handleGoToFilterPage = () => {
    window.location.href = `/filter/${titleFilter}`;
  }

  return (
    <div className="flex items-center text-md lg:text-lg">
      <button onClick={handleOpenModalFilter}>
        <Faders size={32} weight="bold" />
      </button>

      <dialog id="filter_modal" className="modal modal-bottom sm:modal-middle">
        <form
          onSubmit={handleGoToFilterPage}
          method="dialog"
          className="w-full sm:w-1/2 bg-primary rounded-badge max-h-max flex flex-col gap-4 md:p-8 p-4"
        >
          <h2 className="text-center font-bold">Filter by</h2>
          <label className="input input-bordered flex items-center gap-2">
            Title
            <input
              type="text"
              className="grow text-primary-content"
              placeholder="title"
              onChange={(e) => setTitleFilter(e.target.value)}
              value={titleFilter}
            />
          </label>
          {/* <div className="flex flex-col sm:flex-row gap-4 w-full">
            <label className="input input-bordered flex items-center gap-2">
              Start Date
              <input
                type="date"
                className="grow"
                onChange={(e) => setStartDateFilter(e.target.value)}
                value={startDateFilter}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              End Date
              <input
                type="date"
                className="grow"
                onChange={(e) => setEndDateFilter(e.target.value)}
                value={endDateFilter}
              />
            </label>
          </div> */}
          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className="bg-primary-content text-primary py-2 px-4 rounded-badge"
            >
              Filter
            </button>
            <button className="bg-transparent text-primary-content py-2 px-4 rounded-badge">
              Close
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Filter;

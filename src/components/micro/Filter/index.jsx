"use client";

import { Faders, XCircle } from "@phosphor-icons/react/dist/ssr";
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
  };

  const handleCloseFilterModal = () => {
    const modal = document.getElementById("filter_modal");
    modal.closeModal();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGoToFilterPage();
    }
  };

  return (
    <div className="flex items-center text-md lg:text-lg">
      <button onClick={handleOpenModalFilter}>
        <Faders size={32} weight="bold" />
      </button>

      <dialog id="filter_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-full sm:w-1/2 bg-primary rounded-badge max-h-max flex flex-col gap-4 md:p-8 p-4">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <XCircle size={32} weight="bold" />
            </button>
          </form>
          <h2 className="text-center font-bold">Filter by</h2>
          <label className="input input-bordered flex items-center gap-2">
            Title
            <input
              type="text"
              className="grow text-primary-content"
              placeholder="title"
              onChange={(e) => setTitleFilter(e.target.value)}
              value={titleFilter}
              onKeyDown={handleKeyPress}
            />
          </label>
          <div className="flex justify-end">
            <button
              onClick={handleGoToFilterPage}
              className="bg-primary-content text-primary py-2 px-4 rounded-badge disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={titleFilter === ""}
            >
              Filter
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Filter;

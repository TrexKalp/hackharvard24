const CalendarBox = () => {
  return (
    <>
      <div className="w-full max-w-full rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <table className="w-full">
          <thead>
            <tr className="grid grid-cols-7 rounded-t-[10px] bg-primary text-white">
              <th className="flex h-15 items-center justify-center rounded-tl-[10px] p-1 text-body-xs font-medium sm:text-base xl:p-5">
                <span className="hidden lg:block"> Sunday </span>
                <span className="block lg:hidden"> Sun </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-body-xs font-medium sm:text-base xl:p-5">
                <span className="hidden lg:block"> Monday </span>
                <span className="block lg:hidden"> Mon </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-body-xs font-medium sm:text-base xl:p-5">
                <span className="hidden lg:block"> Tuesday </span>
                <span className="block lg:hidden"> Tue </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-body-xs font-medium sm:text-base xl:p-5">
                <span className="hidden lg:block"> Wednesday </span>
                <span className="block lg:hidden"> Wed </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-body-xs font-medium sm:text-base xl:p-5">
                <span className="hidden lg:block"> Thursday </span>
                <span className="block lg:hidden"> Thur </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-body-xs font-medium sm:text-base xl:p-5">
                <span className="hidden lg:block"> Friday </span>
                <span className="block lg:hidden"> Fri </span>
              </th>
              <th className="flex h-15 items-center justify-center rounded-tr-[10px] p-1 text-body-xs font-medium sm:text-base xl:p-5">
                <span className="hidden lg:block"> Saturday </span>
                <span className="block lg:hidden"> Sat </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- Line 1 --> */}
            <tr className="grid grid-cols-7">
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">1</span>
                <div className="event invisible absolute left-2 z-99 mb-1 flex w-[100%] flex-col rounded-r-[5px] border-l-[3px] border-primary bg-gray-2 px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-dark-2 md:visible md:w-[90%] md:opacity-100">
                  <span className="event-name font-medium text-dark dark:text-white">
                    Critical #9A3AF1
                  </span>
                  <span className="time text-sm">October 1</span>
                  <span className="time text-sm">Endocarditis</span>
                  <div className="flex gap-2 items-center">
                    <span className="time text-sm">Prepare Search </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-info-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">2</span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">3</span>
                <div className="event invisible absolute left-2 z-99 mb-1 flex w-[100%] flex-col rounded-r-[5px] border-l-[3px] border-primary bg-gray-2 px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-dark-2 md:visible md:w-[180%] md:opacity-100">
                  <span className="event-name font-medium text-dark dark:text-white">
                    Critical #E2E8F0 Transfer
                  </span>
                  <span className="time text-sm">October 3-4</span>
                  <span className="time text-sm">Infected Wounds</span>
                  <div className="flex gap-2 items-center">
                    <span className="time text-sm">Prepare Search </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-info-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">4</span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">5</span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">6</span>
                <div className="event invisible absolute left-2 z-99 mb-1 flex w-[100%] flex-col rounded-r-[5px] border-l-[3px] border-primary bg-gray-2 px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-dark-2 md:visible md:w-[90%] md:opacity-100">
                  <span className="event-name font-medium text-dark dark:text-white">
                    Critical #J4141
                  </span>
                  <span className="time text-sm">October 6</span>
                  <span className="time text-sm">Osteomyelitis</span>
                  <div className="flex gap-2 items-center">
                    <span className="time text-sm">Prepare Search </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-info-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">7</span>
              </td>
            </tr>
            {/* <!-- Line 1 --> */}
            {/* <!-- Line 2 --> */}
            <tr className="grid grid-cols-7">
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">8</span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">9</span>
                <div className="event invisible absolute left-2 z-99 mb-1 flex w-[100%] flex-col rounded-r-[5px] border-l-[3px] border-primary bg-gray-2 px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-dark-2 md:visible md:w-[90%] md:opacity-100">
                  <span className="event-name font-medium text-dark dark:text-white">
                    Critical #FSD11
                  </span>
                  <span className="time text-sm">October 9</span>
                  <span className="time text-sm">Osteomyelitis</span>
                  <div className="flex gap-2 items-center">
                    <span className="time text-sm">Prepare Search </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-info-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  10
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  11
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  12
                </span>
                <div className="event invisible absolute left-2 z-99 mb-1 flex w-[100%] flex-col rounded-r-[5px] border-l-[3px] border-primary bg-gray-2 px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-dark-2 md:visible md:w-[90%] md:opacity-100">
                  <span className="event-name font-medium text-dark dark:text-white">
                    Critical #CJ512
                  </span>
                  <span className="time text-sm">October 12</span>
                  <span className="time text-sm">Pneumonia</span>
                  <div className="flex gap-2 items-center">
                    <span className="time text-sm">Prepare Search </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-info-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  13
                </span>
                <div className="event invisible absolute left-2 z-99 mb-1 flex w-[100%] flex-col rounded-r-[5px] border-l-[3px] border-primary bg-gray-2 px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-dark-2 md:visible md:w-[90%] md:opacity-100">
                  <span className="event-name font-medium text-dark dark:text-white">
                    Critical #1JA14K
                  </span>
                  <span className="time text-sm">October 13</span>
                  <span className="time text-sm">Septicemia</span>
                  <div className="flex gap-2 items-center">
                    <span className="time text-sm">Prepare Search </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-info-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  14
                </span>
              </td>
            </tr>
            {/* <!-- Line 2 --> */}
            {/* <!-- Line 3 --> */}
            <tr className="grid grid-cols-7">
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  15
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  16
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  17
                </span>
                <div className="event invisible absolute left-2 z-99 mb-1 flex w-[100%] flex-col rounded-r-[5px] border-l-[3px] border-primary bg-gray-2 px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-dark-2 md:visible md:w-[90%] md:opacity-100">
                  <span className="event-name font-medium text-dark dark:text-white">
                    Critical #5750F1
                  </span>
                  <span className="time text-sm">October 17</span>
                  <span className="time text-sm">Fasciitis</span>
                  <div className="flex gap-2 items-center">
                    <span className="time text-sm">Prepare Search </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-info-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  18
                </span>
                <div className="event invisible absolute left-2 z-99 mb-1 flex w-[100%] flex-col rounded-r-[5px] border-l-[3px] border-primary bg-gray-2 px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-dark-2 md:visible md:w-[90%] md:opacity-100">
                  <span className="event-name font-medium text-dark dark:text-white">
                    Critical #C8DD1
                  </span>
                  <span className="time text-sm">October 18</span>
                  <span className="time text-sm">Cholangitis</span>
                  <div className="flex gap-2 items-center">
                    <span className="time text-sm">Prepare Search </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-info-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  19
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  20
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  21
                </span>
              </td>
            </tr>
            {/* <!-- Line 3 --> */}
            {/* <!-- Line 4 --> */}
            <tr className="grid grid-cols-7">
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  22
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  23
                </span>
                <div className="event invisible absolute left-2 z-99 mb-1 flex w-[100%] flex-col rounded-r-[5px] border-l-[3px] border-primary bg-gray-2 px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-dark-2 md:visible md:w-[90%] md:opacity-100">
                  <span className="event-name font-medium text-dark dark:text-white">
                    Critical #C8DD1
                  </span>
                  <span className="time text-sm">October 23</span>
                  <span className="time text-sm">Abscess</span>
                  <div className="flex gap-2 items-center">
                    <span className="time text-sm">Prepare Search </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-info-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  24
                </span>
                <div className="event invisible absolute left-2 z-99 mb-1 flex w-[100%] flex-col rounded-r-[5px] border-l-[3px] border-primary bg-gray-2 px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-dark-2 md:visible md:w-[90%] md:opacity-100">
                  <span className="event-name font-medium text-dark dark:text-white">
                    Critical #1345F1
                  </span>
                  <span className="time text-sm">October 24</span>
                  <span className="time text-sm">Pancreatitis</span>
                  <div className="flex gap-2 items-center">
                    <span className="time text-sm">Prepare Search </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-info-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  25
                </span>
                <div className="event invisible absolute left-2 z-99 mb-1 flex w-[100%] flex-col rounded-r-[5px] border-l-[3px] border-primary bg-gray-2 px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-dark-2 md:visible md:w-[90%] md:opacity-100">
                  <span className="event-name font-medium text-dark dark:text-white">
                    Critical #GS141
                  </span>
                  <span className="time text-sm">October 25</span>
                  <span className="time text-sm">Liver Abscess</span>
                  <div className="flex gap-2 items-center">
                    <span className="time text-sm">Prepare Search </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-info-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  26
                </span>
                <div className="event invisible absolute left-2 z-99 mb-1 flex w-[100%] flex-col rounded-r-[5px] border-l-[3px] border-primary bg-gray-2 px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-dark-2 md:visible md:w-[90%] md:opacity-100">
                  <span className="event-name font-medium text-dark dark:text-white">
                    Critical #ADJ159
                  </span>
                  <span className="time text-sm">October 26</span>
                  <span className="time text-sm">Cystitis</span>
                  <div className="flex gap-2 items-center">
                    <span className="time text-sm">Prepare Search </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-info-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  27
                </span>
                <div className="event invisible absolute left-2 z-99 mb-1 flex w-[100%] flex-col rounded-r-[5px] border-l-[3px] border-primary bg-gray-2 px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-dark-2 md:visible md:w-[90%] md:opacity-100">
                  <span className="event-name font-medium text-dark dark:text-white">
                    Critical #SDF12
                  </span>
                  <span className="time text-sm">October 27</span>
                  <span className="time text-sm">Pyelonephritis</span>
                  <div className="flex gap-2 items-center">
                    <span className="time text-sm">Prepare Search </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-info-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  28
                </span>
              </td>
            </tr>
            {/* <!-- Line 4 --> */}
            {/* <!-- Line 5 --> */}
            <tr className="grid grid-cols-7">
              <td className="ease relative h-20 cursor-pointer rounded-bl-[10px] border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  29
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  30
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">
                  31
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">1</span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">2</span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">3</span>
              </td>
              <td className="ease relative h-20 cursor-pointer rounded-br-[10px] border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-dark dark:text-white">4</span>
              </td>
            </tr>
            {/* <!-- Line 5 --> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CalendarBox;

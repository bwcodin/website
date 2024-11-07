import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";

//xmas 2024 schedule

const XmasTable = () => {
  const isBreakPoint = useMediaQuery(768);
  return (
    <>
      {isBreakPoint ? (
        <>
          <table>
            <thead className="w-full">
              <tr className="bg-lighBlue">
                <th
                  colSpan={2}
                  className="text-left p-2 underline underline-offset-4"
                >
                  Website Design (UI/UX)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Age</td>
                <td className="p-2">12+</td>
              </tr>
              <tr className="bg-[#EEF0F6]">
                <td className="p-2">Course Period</td>
                <td className="p-2">
                  <div>
                    <p>Dec16, 18, 20, 23, 27, 30, <br/>Jan 3</p>
                    <p className="text-[#5C5C5C] font-dm-mono tracking-tight">
                      7 days
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p>10:00AM-1:00PM</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead className="w-full">
              <tr className="bg-lighBlue">
                <th
                  colSpan={2}
                  className="text-left p-2 underline underline-offset-4"
                >
                  Stanford AI Playground - A
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Age</td>
                <td className="p-2">12+</td>
              </tr>
              <tr className="bg-[#EEF0F6]">
                <td className="p-2">Course Period</td>
                <td className="p-2">
                  <div>
                    <p>Dec 16-20</p>
                    <p className="text-[#5C5C5C] font-dm-mono tracking-tight">
                      5 days
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p>1:00-4:00 PM</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead className="w-full">
              <tr className="bg-lighBlue">
                <th
                  colSpan={2}
                  className="text-left p-2 underline underline-offset-4"
                >
                  Stanford AI Playground - B
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Age</td>
                <td className="p-2">12+</td>
              </tr>
              <tr className="bg-[#EEF0F6]">
                <td className="p-2">Course Period</td>
                <td className="p-2">
                  <div>
                    <p>Dec 30 - Jan 4</p>
                    <p className="text-[#5C5C5C] font-dm-mono tracking-tight">
                      No class on Jan 1 <br/>
                      5 days
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p>1:00-4:00 PM</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead className="w-full">
              <tr className="bg-lighBlue">
                <th
                  colSpan={2}
                  className="text-left p-2 underline underline-offset-4"
                >
                  Silk Tea Capstone Project
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Age</td>
                <td className="p-2">12+</td>
              </tr>
              <tr className="bg-[#EEF0F6]">
                <td className="p-2">Course Period</td>
                <td className="p-2">
                  <div>
                    <p>early-Jan to late-March</p>
                    <p className="text-[#5C5C5C] font-dm-mono tracking-tight">
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p></p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <table className="border rounded-xl border-grey">
          <thead className="bg-lighBlue">
            <tr className="font-dm-sans text-2xl font-bold">
              <th className="px-4 py-7 text-left">Course Name</th>
              <th className="px-4 py-7 text-right">Age</th>
              <th className="px-4 py-7 text-right">Course Period</th>
              <th className="px-4 py-7 text-right">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-2xl font-dm-sans ">
              <td className="px-4 py-7">
                <p>Website Design (UI/UX)</p>
                <p className="text-[#5C5C5C] font-dm-mono text-xl tracking-tight">
                </p>
              </td>
              <td className="px-4 py-7 text-right">9-12</td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>Dec 16, 18, 20, 23, 27, 30 <br/> Jan 3</p>
                  <p className="text-[#5C5C5C] font-dm-mono text-xl tracking-tight">
                    7 days
                  </p>
                </div>
              </td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>10:00AM-1:00 PM</p>
                </div>
              </td>
            </tr>
            <tr className="text-2xl font-dm-sans bg-[#EEF0F6]">
              <td className="px-4 py-7">
                <p>Stanford AI Playground</p>
                <p className="text-[#5C5C5C] font-dm-mono text-xl tracking-tight">
                  Course A
                </p>
              </td>
              <td className="px-4 py-7 text-right">12+</td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>Dec 16-20</p>
                  <p className="text-[#5C5C5C] font-dm-mono text-xl tracking-tight">
                    5 days
                  </p>
                </div>
              </td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>1:00-4:00 PM</p>
                </div>
              </td>
            </tr>
            <tr className="text-2xl font-dm-sans ">
              <td className="px-4 py-7">
                <p>Stanford AI Playground</p>
                <p className="text-[#5C5C5C] font-dm-mono text-xl tracking-tight">
                  Course B
                </p>
              </td>
              <td className="px-4 py-7 text-right">12+</td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>Dec 30 - Jan 4</p>
                  <p className="text-[#5C5C5C] font-dm-mono text-xl tracking-tight">
                    No class on Jan 1 <br/>
                    5 days
                  </p>
                </div>
              </td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>1:00-4:00 PM</p>
                </div>
              </td>
            </tr>
            <tr className="text-2xl font-dm-sans ">
              <td className="px-4 py-7">
                <p>Silk Tea Capstone Project</p>
                <p className="text-[#5C5C5C] font-dm-mono text-xl tracking-tight">
                  Business, User Interface, <br/>Backend Structures
                </p>
              </td>
              <td className="px-4 py-7 text-right">12+</td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>early-Jan to late-March</p>
                  <p className="text-[#5C5C5C] font-dm-mono text-xl tracking-tight">
                  </p>
                </div>
              </td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p></p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default XmasTable;

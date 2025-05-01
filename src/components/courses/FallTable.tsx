import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";
//fall 2024 schedule

const FallTable = () => {
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
                  Intro to Coding I
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Age</td>
                <td className="p-2">11+</td>
              </tr>
              <tr className="bg-[#EEF0F6]">
                <td className="p-2">Course Period</td>
                <td className="p-2">
                  <div>
                    <p>Aug 26 - Sep 27</p>
                    <p className="text-[#5C5C5C] font-dm-mono text-l tracking-tight">
                      
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p>Tue: 5:00-6:30 PM</p>
                    <p>Sat: 1:30-3:00 PM</p>
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
                  Digital Dangers
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Age</td>
                <td className="p-2">10+</td>
              </tr>
              <tr className="bg-[#EEF0F6]">
                <td className="p-2">Course Period</td>
                <td className="p-2">
                  <div>
                    <p>Aug 20 - Sep 4</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p>Wed: 5:00-7:00 PM</p>
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
                  Digital Dangers
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Age</td>
                <td className="p-2">10+</td>
              </tr>
              <tr className="bg-[#EEF0F6]">
                <td className="p-2">Course Period</td>
                <td className="p-2">
                  <div>
                    <p>Aug 20 - Sep 4</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p>Fri: 4:30-6:30 PM</p>
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
                  AI Explorers
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Age</td>
                <td className="p-2">10+</td>
              </tr>
              <tr className="bg-[#EEF0F6]">
                <td className="p-2">Course Period</td>
                <td className="p-2">
                  <div>
                    <p>Aug 21 - Oct 2</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p>Thurs: 5:30-7:30 PM</p>
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
                  Columbia Capstone Project
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
                    <p>August - December</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p>Please contact us for more details</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <>
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
                <td className="px-4 py-7">Intro to Coding I</td>
                <td className="px-4 py-7 text-right">11+</td>
                <td className="px-4 py-7 text-right">
                  <div className="flex flex-col gap-y-3">
                    <p>Aug 26 - Sep 27</p>
                  </div>
                </td>
                <td className="px-4 py-7 text-right">
                  <div className="flex flex-col gap-y-3">
                    <p>Tue: 5:00-6:30 PM</p>
                    <p>Sat: 1:30-3:00 PM</p>
                  </div>
                </td>
              </tr>
              <tr className="text-2xl font-dm-sans bg-[#EEF0F6]">
                <td className="px-4 py-7">
                  <p>Digital Dangers</p>                  
                </td>
                <td className="px-4 py-7 text-right">10+</td>
                <td className="px-4 py-7 text-right">
                  <div className="flex flex-col gap-y-3">
                    <p>Aug 20 - Sep 4</p>
                  </div>
                </td>
                <td className="px-4 py-7 text-right">
                  <div className="flex flex-col gap-y-3">
                    <p>Wed: 5:00-7:00 PM</p>
                  </div>
                </td>
              </tr>
              <tr className="text-2xl font-dm-sans">
                <td className="px-4 py-7">
                  <p>Digital Dangers</p>                  
                </td>
                <td className="px-4 py-7 text-right">10+</td>
                <td className="px-4 py-7 text-right">
                  <div className="flex flex-col gap-y-3">
                    <p>Aug 20 - Sep 4</p>
                  </div>
                </td>
                <td className="px-4 py-7 text-right">
                  <div className="flex flex-col gap-y-3">
                    <p>Fri: 4:30-6:00 PM</p>
                  </div>
                </td>
              </tr>
              <tr className="text-2xl font-dm-sans bg-[#EEF0F6]">
                <td className="px-4 py-7">
                  <p>AI Explorers</p>
                </td>
                <td className="px-4 py-7 text-right">10+</td>
                <td className="px-4 py-7 text-right">
                  <div className="flex flex-col gap-y-3">
                    <p>Aug 21 - Oct 2</p>
                  </div>
                </td>
                <td className="px-4 py-7 text-right">
                  <div className="flex flex-col gap-y-3">
                    <p>Thurs: 5:30-7:30 PM</p>
                  </div>
                </td>
              </tr>
              <tr className="text-2xl font-dm-sans bg-[#EEF0F6]">
                <td className="px-4 py-7">
                  <p>Columbia Capstone Project</p>
                </td>
                <td className="px-4 py-7 text-right">12+</td>
                <td className="px-4 py-7 text-right">
                  <div className="flex flex-col gap-y-3">
                    <p>August - December</p>
                  </div>
                </td>
                <td className="px-4 py-7 text-right">
                  <div className="flex flex-col gap-y-3">
                    <p>Please contact us for more details.</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default FallTable;

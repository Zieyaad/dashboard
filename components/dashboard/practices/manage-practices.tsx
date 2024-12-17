"use client";

import { useState } from "react";
import Link from "next/link";
import { PracticesTable } from "./practices-table";
import { mockData } from "@/lib/mock-data";
import { ChevronRight } from "lucide-react";

export function ManagePractices() {
  const [practices, setPractices] = useState(
    mockData.practices.items.slice(0, 3),
  );
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editRow, setEditRow] = useState<any>(null);

  const handleEdit = (practice: any) => {
    setEditingId(practice.id);
    setEditRow(practice);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditRow(null);
  };

  const handleSave = () => {
    if (editRow) {
      setPractices(
        practices.map((practice) =>
          practice.id === editRow.id ? editRow : practice,
        ),
      );
      setEditingId(null);
      setEditRow(null);
    }
  };

  const handleDelete = (id: number) => {
    setPractices(practices.filter((practice) => practice.id !== id));
  };

  const handleInputChange = (field: string, value: string) => {
    if (editRow) {
      setEditRow({ ...editRow, [field]: value });
    }
  };

  return (
    <div
      className="animate-in bg-white rounded-2xl"
      style={{
        boxShadow:
          "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.2)",
      }}
    >
      <h2 className="text-[18px] leading-[28px] text-[#414141] font-bold m-0 p-6">
        {mockData.practices.title}
      </h2>
      {practices.length > 0 ? (
        <>
          <PracticesTable
            practices={practices}
            editingId={editingId}
            limit={3}
            editRow={editRow}
            onEdit={handleEdit}
            onSave={handleSave}
            onCancel={handleCancel}
            onDelete={handleDelete}
            onInputChange={handleInputChange}
          />
          <div className="flex justify-end p-4 pr-6 border-t border-[#9D9D9D] border-opacity-24 h-[60px]">
            <Link
              href="/dashboard/practices"
              className="text-[12px] leading-[20px] font-semibold text-[#5F97A0] hover:text-[#414141] flex items-center gap-2 transition duration-300 ease-in-out"
            >
              {mockData.practices.seeAll}
              <ChevronRight className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </>
      ) : (
        <div className="px-[24px] pb-[40px] text-[#747474] text-[14px] leading-[22px] font-semibold">
          Dude...
          <br /> You deleted too many. Refresh maybe?
        </div>
      )}
    </div>
  );
}

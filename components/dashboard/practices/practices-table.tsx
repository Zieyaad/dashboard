"use client";

import { PracticeRow } from "./practice-row";
import { PracticeCard } from "./practice-card";
import { mockData } from "@/lib/mock-data";

interface Practice {
  id: number;
  name: string;
  phone: string;
  email: string;
  dateCreated: string;
  status: string;
}

interface PracticesTableProps {
  practices: Practice[];
  limit: number | null;
  editingId: number | null;
  editRow: Practice | null;
  onEdit: (practice: Practice) => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: (id: number) => void;
  onInputChange: (field: string, value: string) => void;
}

export function PracticesTable({
  practices,
  limit,
  editingId,
  editRow,
  onEdit,
  onSave,
  onCancel,
  onDelete,
  onInputChange,
}: PracticesTableProps) {
  const limitedPractices = limit ? practices.slice(0, limit) : practices;

  return (
    <>
      <div className="lg:hidden space-y-4 mb-6">
        {limitedPractices.map((practice) => (
          <PracticeCard
            key={practice.id}
            practice={practice}
            editingId={editingId}
            editRow={editRow}
            onEdit={onEdit}
            onSave={onSave}
            onCancel={onCancel}
            onDelete={onDelete}
            onInputChange={onInputChange}
          />
        ))}
      </div>

      <div className="hidden lg:block overflow-x-auto px-2">
        <table className="w-full">
          <thead>
            <tr>
              {mockData.practices.tableHeadings.map((heading) => (
                <th
                  className="bg-[#F5F5F5] px-[16px] py-[17px] text-[#747474] text-[14px] leading-[22px] font-semibold text-left first:rounded-tl-[8px] first:rounded-bl-[8px] last:rounded-tr-[8px] last:rounded-br-[8px] last:text-right"
                  key={heading.title}
                >
                  {heading.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {limitedPractices.map((practice) => (
              <PracticeRow
                key={practice.id}
                practice={practice}
                editingId={editingId}
                editRow={editRow}
                onEdit={onEdit}
                onSave={onSave}
                onCancel={onCancel}
                onDelete={onDelete}
                onInputChange={onInputChange}
                index={0}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

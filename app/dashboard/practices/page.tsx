"use client";

import { useState } from "react";
import { PracticesTable } from "@/components/dashboard/practices/practices-table";
import { mockData } from "@/lib/mock-data";
import { Intro } from "@/components/dashboard/intro/intro";

export default function PracticesPage() {
  const [practices, setPractices] = useState(mockData.practices.items);
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
    <>
      <Intro
        title={mockData.practices.pageTitle}
        description={mockData.practices.description}
      />
      <div className="bg-white rounded-2xl pt-4">
        <PracticesTable
          practices={practices}
          editingId={editingId}
          limit={null}
          editRow={editRow}
          onEdit={handleEdit}
          onSave={handleSave}
          onCancel={handleCancel}
          onDelete={handleDelete}
          onInputChange={handleInputChange}
        />
      </div>
    </>
  );
}

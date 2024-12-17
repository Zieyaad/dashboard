"use client";

import { Switch } from "@mui/material";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { styled } from "@mui/material/styles";

interface Practice {
  id: number;
  name: string;
  phone: string;
  email: string;
  dateCreated: string;
  status: string;
}

interface PracticeCardProps {
  practice: Practice;
  editingId: number | null;
  editRow: Practice | null;
  onEdit: (practice: Practice) => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: (id: number) => void;
  onInputChange: (field: string, value: string) => void;
}

const CustomSwitch = styled(Switch)(() => ({
  ".MuiSwitch-root": {
    padding: "0 !important",
  },
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      color: "#67ADB9",
      "& + .MuiSwitch-track": {
        backgroundColor: "#67ADB9",
        opacity: 0.32,
      },
    },
  },
  "& .MuiSwitch-track": {
    backgroundColor: "#67ADB9",
    opacity: 0.32,
  },
}));

export function PracticeCard({
  practice,
  editingId,
  editRow,
  onEdit,
  onSave,
  onCancel,
  onDelete,
  onInputChange,
}: PracticeCardProps) {
  const isEditing = editingId === practice.id;

  return (
    <div
      className="bg-white p-4 rounded-lg mr-4 ml-4"
      style={{
        boxShadow:
          "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.2)",
      }}
    >
      <div className="flex gap-3 mb-4">
        <div className="flex-1">
          {isEditing ? (
            <Input
              value={editRow?.name}
              onChange={(e) => onInputChange("name", e.target.value)}
              className="text-[#414141] text-[14px] leading-[22px] font-normal mb-2"
            />
          ) : (
            <p className="text-[#414141] text-[14px] leading-[22px] font-normal">
              {practice.name}
            </p>
          )}
          {isEditing ? (
            <Input
              value={editRow?.email}
              onChange={(e) => onInputChange("email", e.target.value)}
              className="text-[#414141] text-[14px] leading-[22px] font-normal"
            />
          ) : (
            <p className="text-[#414141] text-[14px] leading-[22px] font-normal">
              {practice.email}
            </p>
          )}
        </div>

        <div className="flex flex-col items-end min-w-[65px]">
          <CustomSwitch
            checked={
              isEditing
                ? editRow?.status === "active"
                : practice.status === "active"
            }
            onChange={(e) => {
              if (isEditing && editRow) {
                onInputChange(
                  "status",
                  e.target.checked ? "active" : "disabled",
                );
              }
            }}
            size="medium"
            className="-mr-2.5"
          />
          <span className="text-[#414141] text-[14px] leading-[22px] font-normal">
            {isEditing
              ? editRow?.status === "active"
                ? "Active"
                : "Disabled"
              : practice.status === "active"
                ? "Active"
                : "Disabled"}
          </span>
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex gap-3">
          <span className="flex flex-1 min-w-[120px] text-[#747474] text-[14px] leading-[22px] font-semibold ">
            Tel No:
          </span>
          {isEditing ? (
            <Input
              value={editRow?.phone}
              onChange={(e) => onInputChange("phone", e.target.value)}
              className="text-[#414141] text-[14px] leading-[22px] font-normal"
            />
          ) : (
            <span className="text-[#414141] text-[14px] leading-[22px] font-normal">
              {practice.phone}
            </span>
          )}
        </div>
        <div className="flex gap-3">
          <span className="flex flex-1 min-w-[120px] text-[#747474] text-[14px] leading-[22px] font-semibold ">
            Date Created:
          </span>
          {isEditing ? (
            <Input
              value={editRow?.dateCreated}
              onChange={(e) => onInputChange("dateCreated", e.target.value)}
              className="text-[#414141] text-[14px] leading-[22px] font-normal"
            />
          ) : (
            <span className="text-[#414141] text-[14px] leading-[22px] font-normal">
              {practice.dateCreated}
            </span>
          )}
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        {isEditing ? (
          <>
            <button onClick={onSave} className="p-2 hover:bg-gray-100 rounded">
              <Image
                src="/assets/icons/icon-edit.svg"
                alt="edit icon"
                width="20"
                height="20"
              />
            </button>
            <button
              onClick={onCancel}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <Image
                src="/assets/icons/icon-trash.svg"
                alt="trash icon"
                width="20"
                height="20"
              />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => onEdit(practice)}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <Image
                src="/assets/icons/icon-edit.svg"
                alt="edit icon"
                width="20"
                height="20"
              />
            </button>
            <button
              onClick={() => onDelete(practice.id)}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <Image
                src="/assets/icons/icon-trash.svg"
                alt="trash icon"
                width="20"
                height="20"
              />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

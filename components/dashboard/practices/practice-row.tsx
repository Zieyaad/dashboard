"use client";

import { Switch } from "@mui/material";
import { Input } from "@/components/ui/input";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import clsx from "clsx";

interface Practice {
  id: number;
  name: string;
  phone: string;
  email: string;
  dateCreated: string;
  status: string;
}

interface PracticeRowProps {
  practice: Practice;
  editingId: number | null;
  editRow: Practice | null;
  onEdit: (practice: Practice) => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: (id: number) => void;
  onInputChange: (field: string, value: string) => void;
  index: number;
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

export function PracticeRow({
  practice,
  editingId,
  editRow,
  onEdit,
  onSave,
  onCancel,
  onDelete,
  onInputChange,
  index,
}: PracticeRowProps) {
  const isEditing = editingId === practice.id;
  const className =
    "px-[16px] py-[25px] text-[#414141] text-[14px] leading-[22px] font-normal text-left";

  return (
    <tr className={clsx(isEditing && "border-b")}>
      <td className={className}>
        {isEditing ? (
          <Input
            value={editRow?.name}
            onChange={(e) => onInputChange("name", e.target.value)}
            className="max-w-[200px]"
          />
        ) : (
          practice.name
        )}
      </td>
      <td className={className}>
        {isEditing ? (
          <Input
            value={editRow?.phone}
            onChange={(e) => onInputChange("phone", e.target.value)}
            className="max-w-[150px]"
          />
        ) : (
          practice.phone
        )}
      </td>
      <td className={className}>
        {isEditing ? (
          <Input
            value={editRow?.email}
            onChange={(e) => onInputChange("email", e.target.value)}
            className="max-w-[200px]"
          />
        ) : (
          practice.email
        )}
      </td>
      <td className={className}>
        {isEditing ? (
          <Input
            value={editRow?.dateCreated}
            onChange={(e) => onInputChange("dateCreated", e.target.value)}
            className="max-w-[150px]"
          />
        ) : (
          practice.dateCreated
        )}
      </td>
      <td className={className}>
        <div className="-ml-2">
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
          />
          <span className="my-2">
            {isEditing
              ? editRow?.status === "active"
                ? "Active"
                : "Disabled"
              : practice.status === "active"
                ? "Active"
                : "Disabled"}
          </span>
        </div>
      </td>
      <td className={className}>
        <div className="flex justify-end gap-2">
          {isEditing ? (
            <>
              <button onClick={onSave} className="cursor-pointer mr-[6px]">
                <Image
                  src="/assets/icons/icon-edit.svg"
                  alt="edit icon"
                  width="20"
                  height="20"
                />
              </button>
              <button onClick={onCancel} className="cursor-pointer">
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
                className="cursor-pointer mr-[6px]"
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
                className="cursor-pointer"
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
      </td>
    </tr>
  );
}

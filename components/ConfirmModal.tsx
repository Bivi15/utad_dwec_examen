"use client";

import { ConfirmModalProps } from "@/interfaces/modal";
import { TrashIcon } from "@heroicons/react/24/solid";
import Button from "./ui/Button"

export default function ConfirmModal({
    onConfirm,
    onCancel,
}: ConfirmModalProps) {
    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-xl shadow-xl">
                <h2 className="font-bold mb-4">
                    ¿Seguro que deseas eliminar?
                </h2>
                <div className="flex gap-4">
                    <Button onClick={onCancel} className="border px-4 py-2 rounded">
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={onConfirm}>
                        <TrashIcon className="w-5" /> Eliminar
                    </Button>
                </div>
            </div>
        </div>
    );
}
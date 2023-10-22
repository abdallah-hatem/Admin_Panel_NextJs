import { Modal } from "antd";
import React from "react";

export default function ModalComponent({ isOpen, onCancel, children }) {
  return <Modal footer={[]} open={isOpen} onCancel={onCancel} >{children}</Modal>;
}

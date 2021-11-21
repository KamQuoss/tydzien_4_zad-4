import React from "react";
import { useForm } from "react-hook-form";
import OperationNameField from "./OperationNameFiled";
import TransactionTypeField from "./TransactionTypeField";
import AmountField from "./AmountField";
import CategoryField from "./CategoryField";
import AddButton from "./AddButton";

const Form = () => {
  return (
    <form>
      <TransactionTypeField />
      <OperationNameField />
      <AmountField />
      <CategoryField />
      <AddButton />
    </form>
  );
};

export default Form;

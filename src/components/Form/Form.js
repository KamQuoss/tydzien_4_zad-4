import React from "react";
import { useForm } from "react-hook-form";
import OperationNameField from "./OperationNameFiled";
import TransactionTypeField from "./TransactionTypeField";
import AmountField from "./AmountField";
import CategoryField from "./CategoryField";
import AddButton from "./AddButton";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TransactionTypeField
        label="Rodzaj transakcji"
        {...register("transaction")}
      />
      <OperationNameField
        label="Nazwa operacji"
        {...register("operationName")}
      />
      <AmountField label="Kwota" {...register("amount")} />
      <CategoryField label="Kategoria" {...register("category")} />
      <AddButton />
    </form>
  );
};

export default Form;

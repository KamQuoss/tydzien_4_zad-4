import React from "react";
import { useForm } from "react-hook-form";
import { default as UUID } from "node-uuid";
import OperationNameField from "./OperationNameFiled";
import TransactionTypeField from "./TransactionTypeField";
import AmountField from "./AmountField";
import CategoryField from "./CategoryField";
import AddButton from "./AddButton";

const Form = ({ onItemAdd }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    reset();
    onItemAdd({ type: "add", value: { id: UUID.v4(), ...data } });
    // console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TransactionTypeField
        label="Rodzaj transakcji"
        {...register("transaction")}
      />
      {errors.transaction && <p>{errors.transaction.message}</p>}
      <OperationNameField
        label="Nazwa operacji"
        {...register("operationName", {
          required: true,
          minLength: { value: 3, message: "Za krótka nazwa" },
          maxLength: { value: 100, message: "Za długa nazwa" }
        })}
      />
      {errors.operationName && <p>{errors.operationName.message}</p>}

      <AmountField
        label="Kwota"
        {...register("amount", {
          required: true,
          min: { value: 0, message: "Wartość nie może być niższa niż zero" }
        })}
      />
      {errors.amount && <p>{errors.amount.message}</p>}
      <CategoryField label="Kategoria" {...register("category")} />
      <AddButton />
    </form>
  );
};

export default Form;

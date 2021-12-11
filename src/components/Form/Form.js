import React from "react";
import { useForm } from "react-hook-form";
import { default as UUID } from "node-uuid";

import { categoryOptions } from "../../utils/categoryOptions";
import {
  AddButton,
  AmountField,
  CategoryField,
  OperationNameField,
  TransactionTypeField
} from "./index";

const Form = ({ onItemAdd }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const add = (data) => {
    return { type: "add", value: { id: UUID.v4(), ...data } };
  };

  const onSubmit = (data) => {
    reset();
    onItemAdd(add(data));
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
      <CategoryField
        label="Kategoria"
        options={categoryOptions}
        {...register("category")}
      />
      <AddButton />
    </form>
  );
};

export default Form;

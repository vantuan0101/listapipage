import React from "react";
import clsx from "clsx";
import style from "./homeform.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInputs {
  message: string

}

const schema = yup
  .object({
    message: yup.string().required("Vui lòng nhập góp ý"),
  })
  .required();
const HomeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data : IFormInputs) => console.log(data);

  return (
    <div className={clsx(style.main)}>
      <div className={clsx(style.name)}>Góp ý cho chúng tôi</div>
      <form onSubmit={handleSubmit(onSubmit)} className={clsx(style.form)}>
        <input
          {...register("message")}
          type="text"
          placeholder="Mời bạn nhập góp ý..."
          className={clsx(style.input)}
        />
        <p className={clsx(style.error)}>{errors.message?.message}</p>

        <input type="submit" className={clsx(style.submit)} />
      </form>
    </div>
  );
};

export default HomeForm;

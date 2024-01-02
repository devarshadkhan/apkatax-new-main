"use client"
import { useForm } from 'react-hook-form';
import styles from "@/_styles/components/Form/Form.module.css"
import { useEffect } from 'react';
const Form = () => {
  const {
    register,
    setValue,
    getValues,
    trigger,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });

  const onSubmit = (data) => {
    // preventDefault()
    console.log(data)
  };
useEffect(() => {
console.log("FORM COMPONENT MOUNT");
}, [])

  return (
    <>
      <div className={styles.form_wrp}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h5>Register your company today</h5>

          <div className={styles.inputsec}>
            <input
              type="text"
              id="name"
              name="name"
              {...register('name', { required: true })}
              placeholder="Name*"
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className={styles.inputsec}>
            <input
              type="number"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Mobile Number*"
              {...register('mobileNumber', { required: true })}
            />
            {errors.mobileNumber && <span>This field is required</span>}
          </div>
          <div className={styles.inputsec}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email*"
              {...register('email', { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className={styles.inputsec}>
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Message*"
              {...register('message', { required: true })}
            />
            {errors.message && <span>This field is required</span>}
          </div>
          <div className="formBtn">
            <button type="submit">Submit Now</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;

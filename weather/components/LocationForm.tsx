import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button, FormWrapper, Input } from "../devlink";

const schema = yup
  .object({
    location: yup.string().required("Please enter a location."),
  })
  .required();

export const LocationForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      location: "",
    },
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(JSON.stringify(data)))}>
      <FormWrapper
        formBody={
          <>
            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <Input
                  isError={!!errors.location}
                  errorMessage={errors.location?.message}
                  inputProps={{
                    ...field,
                    placeholder: "Seattle, WA",
                    type: "text",
                    "aria-invalid": errors.location ? "true" : "false",
                  }}
                />
              )}
            />
            <Button />
          </>
        }
      ></FormWrapper>
    </form>
  );
};

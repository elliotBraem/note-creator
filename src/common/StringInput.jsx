// The below import defines which components come from formik
// import { Field, Form, Formik } from 'formik';

import {
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";

export default function StringInput({ label, value, setValue }) {
  return (
    <>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={label}
        />
      </FormControl>
    </>
  );
}

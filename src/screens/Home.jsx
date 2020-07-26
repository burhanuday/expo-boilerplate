import React from "react";
import { StyleSheet } from "react-native";
import { Surface, Subheading, Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter } from "@actions/counter";

import { Formik } from "formik";
import { Input } from "@components/formik";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("name is required").min(6, "name cannot be less than 6 characters"),
});

export default function App() {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <Surface style={styles.container}>
      <Surface style={styles.header}>
        <Subheading>{JSON.stringify(counter, null, 2)}</Subheading>

        <Button
          icon="camera"
          mode="contained"
          onPress={() => dispatch(incrementCounter(counter + 1))}
        >
          Press me
        </Button>
      </Surface>

      {/* Formik Form */}

      <Formik
        initialValues={{ name: "" }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 3000);
        }}
      >
        {({ values, errors, touched, setFieldValue, handleBlur, handleSubmit, isSubmitting }) => (
          <Surface onSubmit={handleSubmit}>
            <Input
              name="name"
              label="Name"
              errorMessage={errors}
              onChange={setFieldValue}
              onBlur={handleBlur}
              value={values}
              touched={touched}
              disabled={isSubmitting}
            />
            <Button
              loading={isSubmitting}
              disabled={isSubmitting}
              mode="contained"
              onPress={handleSubmit}
            >
              Press me
            </Button>
          </Surface>
        )}
      </Formik>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.15,
    alignItems: "center",
    justifyContent: "center",
  },
});

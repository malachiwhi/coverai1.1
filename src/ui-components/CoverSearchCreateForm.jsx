/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CoverSearch } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CoverSearchCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    FirstName: "",
    LastName: "",
    Experience: "",
    PrevPos: "",
    Why: "",
    Skills: "",
    CompNpos: "",
  };
  const [FirstName, setFirstName] = React.useState(initialValues.FirstName);
  const [LastName, setLastName] = React.useState(initialValues.LastName);
  const [Experience, setExperience] = React.useState(initialValues.Experience);
  const [PrevPos, setPrevPos] = React.useState(initialValues.PrevPos);
  const [Why, setWhy] = React.useState(initialValues.Why);
  const [Skills, setSkills] = React.useState(initialValues.Skills);
  const [CompNpos, setCompNpos] = React.useState(initialValues.CompNpos);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstName(initialValues.FirstName);
    setLastName(initialValues.LastName);
    setExperience(initialValues.Experience);
    setPrevPos(initialValues.PrevPos);
    setWhy(initialValues.Why);
    setSkills(initialValues.Skills);
    setCompNpos(initialValues.CompNpos);
    setErrors({});
  };
  const validations = {
    FirstName: [{ type: "Required" }],
    LastName: [{ type: "Required" }],
    Experience: [{ type: "Required" }],
    PrevPos: [],
    Why: [],
    Skills: [{ type: "Required" }],
    CompNpos: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          FirstName,
          LastName,
          Experience,
          PrevPos,
          Why,
          Skills,
          CompNpos,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new CoverSearch(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CoverSearchCreateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={FirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName: value,
              LastName,
              Experience,
              PrevPos,
              Why,
              Skills,
              CompNpos,
            };
            const result = onChange(modelFields);
            value = result?.FirstName ?? value;
          }
          if (errors.FirstName?.hasError) {
            runValidationTasks("FirstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("FirstName", FirstName)}
        errorMessage={errors.FirstName?.errorMessage}
        hasError={errors.FirstName?.hasError}
        {...getOverrideProps(overrides, "FirstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={LastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName: value,
              Experience,
              PrevPos,
              Why,
              Skills,
              CompNpos,
            };
            const result = onChange(modelFields);
            value = result?.LastName ?? value;
          }
          if (errors.LastName?.hasError) {
            runValidationTasks("LastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("LastName", LastName)}
        errorMessage={errors.LastName?.errorMessage}
        hasError={errors.LastName?.hasError}
        {...getOverrideProps(overrides, "LastName")}
      ></TextField>
      <TextField
        label="Experience"
        isRequired={true}
        isReadOnly={false}
        value={Experience}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Experience: value,
              PrevPos,
              Why,
              Skills,
              CompNpos,
            };
            const result = onChange(modelFields);
            value = result?.Experience ?? value;
          }
          if (errors.Experience?.hasError) {
            runValidationTasks("Experience", value);
          }
          setExperience(value);
        }}
        onBlur={() => runValidationTasks("Experience", Experience)}
        errorMessage={errors.Experience?.errorMessage}
        hasError={errors.Experience?.hasError}
        {...getOverrideProps(overrides, "Experience")}
      ></TextField>
      <TextField
        label="Prev pos"
        isRequired={false}
        isReadOnly={false}
        value={PrevPos}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Experience,
              PrevPos: value,
              Why,
              Skills,
              CompNpos,
            };
            const result = onChange(modelFields);
            value = result?.PrevPos ?? value;
          }
          if (errors.PrevPos?.hasError) {
            runValidationTasks("PrevPos", value);
          }
          setPrevPos(value);
        }}
        onBlur={() => runValidationTasks("PrevPos", PrevPos)}
        errorMessage={errors.PrevPos?.errorMessage}
        hasError={errors.PrevPos?.hasError}
        {...getOverrideProps(overrides, "PrevPos")}
      ></TextField>
      <TextField
        label="Why"
        isRequired={false}
        isReadOnly={false}
        value={Why}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Experience,
              PrevPos,
              Why: value,
              Skills,
              CompNpos,
            };
            const result = onChange(modelFields);
            value = result?.Why ?? value;
          }
          if (errors.Why?.hasError) {
            runValidationTasks("Why", value);
          }
          setWhy(value);
        }}
        onBlur={() => runValidationTasks("Why", Why)}
        errorMessage={errors.Why?.errorMessage}
        hasError={errors.Why?.hasError}
        {...getOverrideProps(overrides, "Why")}
      ></TextField>
      <TextField
        label="Skills"
        isRequired={true}
        isReadOnly={false}
        value={Skills}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Experience,
              PrevPos,
              Why,
              Skills: value,
              CompNpos,
            };
            const result = onChange(modelFields);
            value = result?.Skills ?? value;
          }
          if (errors.Skills?.hasError) {
            runValidationTasks("Skills", value);
          }
          setSkills(value);
        }}
        onBlur={() => runValidationTasks("Skills", Skills)}
        errorMessage={errors.Skills?.errorMessage}
        hasError={errors.Skills?.hasError}
        {...getOverrideProps(overrides, "Skills")}
      ></TextField>
      <TextField
        label="Comp npos"
        isRequired={true}
        isReadOnly={false}
        value={CompNpos}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Experience,
              PrevPos,
              Why,
              Skills,
              CompNpos: value,
            };
            const result = onChange(modelFields);
            value = result?.CompNpos ?? value;
          }
          if (errors.CompNpos?.hasError) {
            runValidationTasks("CompNpos", value);
          }
          setCompNpos(value);
        }}
        onBlur={() => runValidationTasks("CompNpos", CompNpos)}
        errorMessage={errors.CompNpos?.errorMessage}
        hasError={errors.CompNpos?.hasError}
        {...getOverrideProps(overrides, "CompNpos")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

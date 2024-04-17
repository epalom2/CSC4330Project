/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createProduct } from "../graphql/mutations";
const client = generateClient();
export default function ProductCreateForm(props) {
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
    partType: "",
    name: "",
    price: "",
    productPicturePath: "",
  };
  const [partType, setPartType] = React.useState(initialValues.partType);
  const [name, setName] = React.useState(initialValues.name);
  const [price, setPrice] = React.useState(initialValues.price);
  const [productPicturePath, setProductPicturePath] = React.useState(
    initialValues.productPicturePath
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPartType(initialValues.partType);
    setName(initialValues.name);
    setPrice(initialValues.price);
    setProductPicturePath(initialValues.productPicturePath);
    setErrors({});
  };
  const validations = {
    partType: [{ type: "Required" }],
    name: [{ type: "Required" }],
    price: [{ type: "Required" }],
    productPicturePath: [{ type: "URL" }],
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
          partType,
          name,
          price,
          productPicturePath,
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
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createProduct.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProductCreateForm")}
      {...rest}
    >
      <TextField
        label="Part type"
        isRequired={true}
        isReadOnly={false}
        value={partType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              partType: value,
              name,
              price,
              productPicturePath,
            };
            const result = onChange(modelFields);
            value = result?.partType ?? value;
          }
          if (errors.partType?.hasError) {
            runValidationTasks("partType", value);
          }
          setPartType(value);
        }}
        onBlur={() => runValidationTasks("partType", partType)}
        errorMessage={errors.partType?.errorMessage}
        hasError={errors.partType?.hasError}
        {...getOverrideProps(overrides, "partType")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              partType,
              name: value,
              price,
              productPicturePath,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        value={price}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              partType,
              name,
              price: value,
              productPicturePath,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Product picture path"
        isRequired={false}
        isReadOnly={false}
        value={productPicturePath}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              partType,
              name,
              price,
              productPicturePath: value,
            };
            const result = onChange(modelFields);
            value = result?.productPicturePath ?? value;
          }
          if (errors.productPicturePath?.hasError) {
            runValidationTasks("productPicturePath", value);
          }
          setProductPicturePath(value);
        }}
        onBlur={() =>
          runValidationTasks("productPicturePath", productPicturePath)
        }
        errorMessage={errors.productPicturePath?.errorMessage}
        hasError={errors.productPicturePath?.hasError}
        {...getOverrideProps(overrides, "productPicturePath")}
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
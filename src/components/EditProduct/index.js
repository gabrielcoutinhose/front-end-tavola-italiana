import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

import UploadICon from "../../assets/icons/upload-32.png";
import { ErrorMessage } from "../../components";
import api from "../../services/api";
import {
  Container,
  Label,
  Input,
  ReStyledButton,
  LabelUpload,
  ReactSelectStyled,
} from "./styles";

export function EditProduct() {
  const [fileName, setFileName] = useState("");
  const [categories, setCategories] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    name: Yup.string().required("Input product name!"),
    price: Yup.number()
      .typeError("Price must be a number")
      .required("Input a product price")
      .positive("Price must be positive")
      .moreThan(1, "Price must be greater than 1"),
    category: Yup.object()
      .shape({
        id: Yup.number().required(),
        name: Yup.string().required(),
      })
      .required("Select a category")
      .nullable(),
    file: Yup.mixed()
      .test("required", "Load a file", (value) => {
        return value && value.length > 0;
      })
      .test("fileSize", "Upload files up to 4MB", (value) => {
        return value && value[0] && value[0].size <= 4000000;
      })
      .test("type", "Load only JPEG, JPG, or PNG", (value) => {
        return (
          value &&
          value[0] &&
          (value[0].type === "image/jpeg" ||
            value[0].type === "image/jpg" ||
            value[0].type === "image/png")
        );
      }),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    async function loadData() {
      try {
        const { data: categoriesData } = await api.get("categories");
        setCategories(categoriesData);

        const { data: productData } = await api.get(`products/${id}`);
        setValue("name", productData.name);
        setValue("price", productData.price);
        setValue("category", {
          id: productData.category_id,
          name:
            categoriesData.find((cat) => cat.id === productData.category_id)
              ?.name || "",
        });
        setFileName(productData.url ? productData.url.split("/").pop() : "");
      } catch (error) {
        toast.error("Error loading product data: " + error.message);
        console.error("Error loading data:", error);
      }
    }
    loadData();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("category_id", data.category.id);
    if (data.file && data.file[0]) {
      formData.append("file", data.file[0]);
    }

    try {
      await api.put(`products/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Product updated successfully!");
      reset({
        name: "",
        price: "",
        category: null,
        file: null,
      });
      setFileName("");
      navigate("/products");
    } catch (error) {
      toast.error("Error updating product: " + error.message);
      console.error("Error updating product:", error);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Name</Label>
          <Input type="text" {...register("name")} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Price</Label>
          <Input type="number" step="0.01" {...register("price")} />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>
        <div>
          <LabelUpload>
            {fileName || (
              <>
                <img src={UploadICon} alt="upload-icon" /> Upload one image
              </>
            )}
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              {...register("file")}
              onChange={(event) => {
                setFileName(event.target.files[0]?.name || "");
              }}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>
        <div>
          <Controller
            name="category"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <ReactSelectStyled
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder="Select category"
                onChange={(selected) => field.onChange(selected)}
                value={field.value}
              />
            )}
          />
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>
        <ReStyledButton type="submit">Update product</ReStyledButton>
      </form>
    </Container>
  );
}

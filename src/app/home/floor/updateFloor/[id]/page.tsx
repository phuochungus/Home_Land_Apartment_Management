"use client";
import React, { ChangeEvent, useCallback, useState } from "react";
import styles from "../../addFloor/addFloor.module.scss";
import mainStyles from "../../../page.module.css";
import utilStyles from "@/styles/utils.module.scss";
import Form from "react-bootstrap/Form";
import clsx from "clsx";
import ButtonComponent from "@/components/buttonComponent/buttonComponent";
import Image from "next/image";
import ToastComponent from "@/components/ToastComponent/ToastComponent";
import { futuna } from "../../../../../../public/fonts/futura";
import axios from "axios";
import { Floor } from "@/models/floor";
import { Building } from "@/models/building";
import { useQuery } from "react-query";
import toastMessage from "@/utils/toast";
import { loadingFiler, removeLoadingFilter } from "@/libs/utils";
import { ToastContainer } from "react-toastify";
type FormValue = {
  name: string;
  building_id: string;
  maxApartment: string;
};
const UpdateBuilding = ({ params }: { params: { id: string } }) => {
  const [formValue, setFormValue] = useState({
    name: "",
    building_id: "",
    maxApartment: "",
  });
  const [errors, setErrors] = useState<any>();
  const [floor, setFloor] = useState<Floor>();
  const validation = () => {
    let err = {} as FormValue;

    if (formValue.name === "") {
      err.name = "Trường tên là bắt buộc!";
    }
    if (formValue.building_id === "") {
      err.building_id = "Trường địa chỉ là bắt buộc!";
    }
    if (formValue.maxApartment === "") {
      err.maxApartment = "Trường số tầng là bắt buộc!";
    }

    return err;
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newObj = { ...formValue, [e.target.name]: e.target.value };
    setFormValue(newObj);
  };

  const createHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const err = validation();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      const data = {
        name: formValue.name,
        building_id: formValue.building_id,
        max_apartment: formValue.maxApartment,
      };
      try {
        loadingFiler(document.body);
        await axios.patch(`/api/floor/${params.id}`, data);
        removeLoadingFilter(document.body!);
        toastMessage({ type: "success", title: "Update successfully!" });

      } catch (error) {
      removeLoadingFilter(document.body!);
        console.log(error);
        toastMessage({ type: "error", title: "Update faily!" });
      }
    }
  };
  //get detail building
  const retrieveBuilding = async () => {
    try {
      loadingFiler(document.body!);
      const res = await axios.get(`/api/floor/${params.id}`);
      removeLoadingFilter(document.body!);
      const buildingData = res.data as Floor;
      setFloor(buildingData);
   
      const newformValue: any = {
        name: buildingData.name,
        building_id: buildingData.building_id,
        maxApartment: buildingData.max_apartment,
      };
      setFormValue(newformValue);
      console.log(res.data);
      return res.data;
    } catch (error) {
      removeLoadingFilter(document.body!);
      console.log(error);
    }
  };
  const { isLoading, isError, data, refetch } = useQuery(
    "floor",
    retrieveBuilding,
    {
      staleTime: Infinity,
    }
  );
  return (
    <main className={mainStyles.main}>
      <div className={clsx(styles.wapper, futuna.className)}>
        <p className={clsx(utilStyles.headingXl, styles.title)}>
          Cập nhật thông tin tòa nhà
        </p>

        <Form className={clsx(styles.form, futuna.className)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className={styles.label}>Tên</Form.Label>
            <Form.Control
              size="lg"
              name="name"
              value={formValue.name}
              onChange={handleChange}
              type="text"
              placeholder="A01..."
            />
            {errors && errors.name && (
              <span className={styles.error}>{errors.name}</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className={styles.label}>Tòa</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              name="building_id"
              value={formValue.building_id}
              onChange={handleChange}
            />
            {errors && errors.building_id && (
              <span className={styles.error}>{errors.building_id}</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className={styles.label}>Số phòng</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              name="maxApartment"
              onChange={handleChange}
              value={formValue.maxApartment}
              placeholder=""
            />
            {errors && errors.maxApartment && (
              <span className={styles.error}>{errors.maxApartment}</span>
            )}
          </Form.Group>
          <ButtonComponent onClick={createHandle} className={styles.creatBtn}>
            Cập nhật
          </ButtonComponent>
        </Form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  );
};

export default UpdateBuilding;

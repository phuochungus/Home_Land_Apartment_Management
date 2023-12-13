"use client";
import { Service } from "@/models/service";
import styles from "./page.module.css";
import {
  Button,
  Carousel,
  Col,
  Container,
  Form,
  Image,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import Furniture from "../../../../components/apartmentDetail/furniture";
import { futuna } from "../../../../../public/fonts/futura";
import { ChangeEvent, useEffect, useState } from "react";
import { endpoint } from "@/constraints/endpoints";
import { useQuery } from "react-query";
import axios from "axios";
import Resident from "../../../../components/apartmentDetail/resident";
import ServicePackage from "../../../../components/servicePackage/servicePackage";
import ServicePackageModal from "./addServicePackage";
import { ToastContainer } from "react-toastify";
import toastMessage from "../../../../utils/toast";
import StarRatings from "react-star-ratings";
import ButtonComponent from "@/components/buttonComponent/buttonComponent";
import { loadingFiler, removeLoadingFilter } from "@/libs/utils";
import { Feedback } from "@/models/feedback";
import { Value } from "sass";
import ServicePackageLayout from "../../../../components/servicePackage/servicePackage";
import { UserProfile } from "../../../../libs/UserProfile";
import { Invoice } from "../../../../models/invoice";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  // let service:service= JSON.parse("{'id':'123', 'name':'M}");
  //console.log(service);
  type FormValue = {
    rating: string;
    comment: string;
  };
  const [t, i18n] = useTranslation();

  const [formValue, setFormValue] = useState({
    rating: "",
    comment: "",
  });
  const router = useRouter();

  const [feedbackData, setFeedbackData] = useState<Feedback[]>([]);
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get("/api/feedback");
        setFeedbackData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchFeedback();
  }, []);
  const [errors, setErrors] = useState<any>();
  const validation = () => {
    let err = {} as FormValue;

    if (formValue.rating === "") {
      err.rating = "Trường rating là bắt buộc!";
    }
    if (formValue.comment === "") {
      err.comment = "Trường cmt là bắt buộc!";
    }

    return err;
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newObj = { ...formValue, [e.target.name]: e.target.value };
    setFormValue(newObj);
  };

  const [feedback_id, setFeedbackId] = useState<string | null>(null);
  const createHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("createHandle called");
    console.log("formValue:", formValue);
    const err = validation();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      const form = new FormData();
      form.append("rating", formValue.rating);
      form.append("comment", formValue.comment);

      try {
        loadingFiler(document.body!);
        await axios.post(`/api/feedback/`, form);
        setFormValue({ rating: "", comment: "" });
        removeLoadingFilter(document.body!);
        toastMessage({ type: "success", title: "Create successfully!" });
      } catch (e) {
        console.log(e);
        removeLoadingFilter(document.body!);
        toastMessage({ type: "error", title: "Create faily!" });
      }
    }
  };
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    setFormValue((prevState) => ({
      ...prevState,
      rating: newRating.toString(),
    }));
  };
  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = async () => {
    await refetch();
    setShowModal(false);
  };

  const { isLoading, data, isError, refetch } = useQuery(
    "service",
    () =>
      axios.get("/api/service/" + params.id).then((res) => res.data as Service),
    {
      refetchOnWindowFocus: false,
    }
  );
  const [invoices, setInvoice] = useState<Invoice[]>([]);

  useQuery(
    "invoice",
    () =>
      axios.get("/api/invoice" + "?serviceId=" + params.id).then((res) => {
        setInvoice(res.data as Invoice[]);
      }),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (data != null) {
    return (
      <main className={styles.main} style={futuna.style}>
        <div>
          <Container className="p-lg-5">
            <Row>
              <Col>
                <h3>
                  <b>{data.name}</b>
                </h3>
                {/* <p className="">{data.address}</p> */}
              </Col>
              {UserProfile.getRole() == "admin" ? (
                <Col className="text-end">
                  <Button
                    variant="warning"
                    onClick={() => {
                      router.push(
                        "/home/services/update/" + params.id + "?auth=true"
                      );
                    }}
                  >
                    Edit
                  </Button>{" "}
                </Col>
              ) : (
                <></>
              )}
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Carousel>
                {data.imageURLs && data.imageURLs.length > 0 ? (
                  data.imageURLs.map((value, index) => (
                    <Carousel.Item key={index} style={{ height: "500px" }}>
                      <Image
                        loading="lazy"
                        className=" img-fluid h-100 w-100"
                        src={value}
                        alt="images"
                        rounded
                      ></Image>
                    </Carousel.Item>
                  ))
                ) : (
                  <Carousel.Item style={{ height: "500px" }}>
                    <Image
                      loading="lazy"
                      className=" img-fluid h-100 w-100"
                      src={
                        "https://imgs.search.brave.com/2ec7dbMPC48d2bieXN1dJNsWbdhSFZ3lmUSPNwScvCQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mdW55/bGlmZS5pbi93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wNC84/MF9DdXRlLUdpcmwt/UGljLVdXVy5GVU5Z/TElGRS5JTl8tMS0x/MDI0eDEwMjQuanBn"
                      }
                      alt="images"
                      rounded
                    ></Image>
                  </Carousel.Item>
                )}
              </Carousel>
            </Row>
            <Row>
              <h3 style={{ marginTop: "20px" }}>
                <b>Description</b>
              </h3>
              <p style={{ marginTop: "20px" }}>{data.description}</p>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col>
                <h3>
                  <b>Service Packages</b>
                </h3>
              </Col>
              <Col md="auto">
                {UserProfile.getRole() != "resident" ? (
                  <Button onClick={handleModalOpen}>Add</Button>
                ) : (
                  <></>
                )}

                <ServicePackageModal
                  show={showModal}
                  successMessage="Add service package successfully!"
                  serviceId={params.id}
                  handleClose={handleModalClose}
                />
              </Col>
            </Row>
            <Row
              style={{
                borderRadius: "20px",
                margin: "20px 0px",
                paddingTop: "20px ",
              }}
            >
              {data.servicePackages ? (
                data.servicePackages.map((value, index) => (
                  <>
                    {index % 2 == 0 ? <Row></Row> : <></>}
                    <Col>
                      {" "}
                      <ServicePackageLayout
                        servicePackage={value}
                        service={data}
                        handleSuccessModification={refetch}
                      ></ServicePackageLayout>
                    </Col>
                    {index == data.servicePackages.length - 1 &&
                    index % 2 == 0 ? (
                      <Col></Col>
                    ) : (
                      <></>
                    )}
                  </>
                ))
              ) : (
                <></>
              )}
            </Row>
            {UserProfile.getRole() == "resident" && invoices.length != 0 ? (
              <>
                {" "}
                <Row style={{ marginTop: "20px" }}>
                  <Col>
                    <h3>
                      <b>Purchase History</b>
                    </h3>
                  </Col>
                </Row>
                <Row
                  style={{
                    borderRadius: "20px",
                    margin: "20px 0px",
                    paddingTop: "20px ",
                  }}
                >
                  <Table responsive="sm">
                    <thead>
                      <tr style={{ width: "100%" }}>
                        <th>{t("ID")}</th>
                        <th>{t("Service Package Name")}</th>
                        <th>{t("price")}</th>
                        <th>{t("create_at")}</th>
                        <th>{t("expire_at")}</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoices ? (
                        invoices.map((value, index) => (
                          <tr key={index} style={{ cursor: "pointer" }}>
                            <td>{value.invoice_id}</td>
                            <td>{value.servicePackage.name}</td>
                            <td>{value.total} VND</td>

                            <td>
                              {format(
                                new Date(value.created_at),
                                "HH:mm:ss yyyy-MM-dd"
                              )}
                            </td>
                            <td>
                              {format(
                                new Date(value.expired_at),
                                "HH:mm:ss dd/MM/yyyy"
                              )}
                            </td>
                            <td style={{ width: 100 }}>
                              <div className="d-flex">
                                <Button
                                  onClick={() => {
                                    router.push(
                                      "/home/invoices/" +
                                        value.invoice_id +
                                        "?auth=true"
                                    );
                                  }}
                                  variant="warning"
                                >
                                  Chi tiet
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <></>
                      )}
                    </tbody>
                  </Table>
                </Row>
              </>
            ) : (
              <></>
            )}

            <Row style={{ marginTop: "20px" }}>
              <Col>
                <h3>
                  <b>Feedback</b>
                </h3>
              </Col>
            </Row>
            <Col md="auto">
              <ButtonComponent
                href="/home/feedback?auth=true"
                className={styles.creatBtn1}
              >
                Commnent
              </ButtonComponent>
            </Col>
            <Row
              style={{
                backgroundColor: "rgba(40, 100, 255, 0.1)",
                border: "1px black solid",
                borderRadius: "20px",
                margin: "20px 0px",
                paddingTop: "20px ",
              }}
            >
              <StarRatings
                rating={rating}
                starRatedColor="gold"
                changeRating={handleRatingChange}
                numberOfStars={5}
                starDimension="30px"
                starSpacing="5px"
              />
              {/* <textarea
                className="form-control"
                style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "20px", marginRight: "10px", width: "90%" }}
                placeholder="Comment"
                rows={5}
                name="comment"
                onChange={handleChange}
                value={formValue.comment} // use the comment state

              ></textarea> */}
              <Form.Group className="mb-3">
                <Form.Label className={styles.label}>Comment</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  name="comment"
                  onChange={handleChange}
                  value={formValue.comment}
                  placeholder=""
                />
                {errors && errors.comment && (
                  <span className={styles.error}>{errors.comment}</span>
                )}
              </Form.Group>
              <ButtonComponent
                onClick={createHandle}
                className={styles.creatBtn1}
              >
                Tạo
              </ButtonComponent>
            </Row>
          </Container>
          {feedbackData.map((feedback, index) => (
            <div key={index}>
              <p>Rating: {feedback.rating}</p>
              <p>Comment: {feedback.comment}</p>
            </div>
          ))}
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
  }

  if (isLoading)
    return (
      <main className={styles.main} style={futuna.style}>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            margin: "50px 0px",
            justifyContent: "center",
            alignContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Spinner></Spinner>
        </div>
      </main>
    );
  if (isError)
    return (
      <main className={styles.main} style={futuna.style}>
        <div
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignContent: "center",
            flexWrap: "wrap",
          }}
        >
          Co loi
        </div>
      </main>
    );
  return <div></div>;
}

import { NextRequest, NextResponse } from "next/server";
import { endpoint } from "../../../../constraints/endpoints";
import axios from "axios";

export async function DELETE(
  request: NextRequest,
  { params }: { params: any }
) {
  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: endpoint.contract + "/" + params.id,
    headers: {
      Authorization: "Bearer " + request.cookies.get("token")?.value,
    },
  };
  const response = await axios
    .request(config)
    .then((response) => {
      if (response.status == 200) {
        return NextResponse.json(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
      return NextResponse.json(error.response.data.message, {
        status: error.response.status,
        statusText: error.response.statusText,
      });
    });
  return response;
}
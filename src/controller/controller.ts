import { MessageStatus, StatusCode } from "../enum/Status";
import { Response } from "../interfaces/Response";
import * as model from "../model/model";
import { MessageError } from "../Types/MessageError";

const getCitiesBySurface = (): Response | MessageError => {
  const data = model.getCitiesBySurface(165321);

  if (!data) {
    return `${StatusCode.NOT_FOUND} - ${MessageStatus.NOT_FOUND}`;
  }

  return {
    code: StatusCode.OK,
    data,
  };
};

const getToursByCapital = (capital:string): Response | MessageError => {
  if (typeof capital !== "string") {
    return `${StatusCode.BAD_REQUEST} - ${MessageStatus.BAD_REQUEST}`;
  }

  const data = model.getToursByCapital("Salta,capital");

  if (!data) {
    return `${StatusCode.NOT_FOUND} - ${MessageStatus.NOT_FOUND}`;
  }

  return {
    code: StatusCode.OK,
    data,
  };
};

export { getCitiesBySurface,getToursByCapital };
import * as os from "os";
import * as _ from "lodash";
import { ObjectID } from "mongodb";

/**
 * healthCheckMemory
 * @description
 * 해당 인스턴스 서버의 메모리 체크
 * @returns {boolean}
 */
export const healthCheckMemory = (): boolean => {
  const totalmem = os.totalmem();
  const freemem = os.freemem();
  const memPercent = (freemem / totalmem) * 100;
  const memoryLimit = 90;

  return memPercent >= memoryLimit;
};

/**
 * toObjectId
 * @description
 * hash로 이루어진 objectId로 찾아야하나, find로 통해 나온 objectId는 string으로 변환되어있음.
 * @param {string | ObjectID} value
 * @returns
 */
export const toObjectId = (value: string | ObjectID): ObjectID => {
  return typeof value === "string" ? new ObjectID(value) : value;
};

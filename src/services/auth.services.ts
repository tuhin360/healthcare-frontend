import { authKey } from "@/constants/authkey";
import { setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  // console.log(accessToken);
  return setToLocalStorage(authKey, accessToken);
};

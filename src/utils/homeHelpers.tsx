import { toast } from "react-toastify";
import { baseURL } from "../services";

export interface IProteinData {
    proteins: Array<string>;
}

export const getProteinData = async (): Promise<IProteinData | null> => {
    try {
      const data = {
      };
    //   const token = getToken();
  
      const headers = {
        "Content-Type": "application/json",
      };
    //     Authorization: `Bearer ${token}`,
    //   };
  
      const response = await fetch(`${baseURL}get-all-proteins/`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      if (response.status === 200) {
        return result;
      } else {
        toast.error(result.error);
        return null;
      }
    } catch (error) {
      console.log("HospitalityHelpers|getPopularTradingHours|error", error);
      return null;
    }
  };
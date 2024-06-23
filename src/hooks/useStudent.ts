import { TStudent } from "../utils/type";
import { useDelay } from "../utils/useDelay";

export const useStudent = async (url: string | undefined, ms:number): Promise<Partial<TStudent>> => {
    try {
      useDelay(ms)
      if (!url) {
        throw new Error("URL is undefined");
      }
      const apiResponse = await fetch(url, {
        method: "GET",
      })
      const json = await apiResponse.json()
      const dataClue: Partial<TStudent> = json[Math.floor(Math.random() * json.length)]
      return dataClue
    } catch (err:unknown) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
      throw new Error("An error occurred");
    }
  }
import { request } from "near-social-bridge";

interface CreateThingResponse {
  error?: string;
  success?: boolean;
}

// UPDATE THIS TO MATCH YOUR TYPE
interface CreateThingPayload {
  title: string,
  description: string
}

const createThing = (payload: CreateThingPayload) => {
  return request<CreateThingResponse>("create-thing", payload);
};
export default createThing;

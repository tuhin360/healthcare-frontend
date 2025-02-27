"use server";

export const registerPatient = async (FormData: FormData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/create-patient`,
    {
      method: "POST",
      body: FormData,
      cache: "no-store",
    }
  );

  const patientInfo = await res.json();
  return patientInfo;
};

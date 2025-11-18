import { FormData } from "@/app/components/home-contact-us-section";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export async function contactUs(data: FormData): Promise<void> {
  await addDoc(collection(db, "contacts"), {
    name: data.name,
    email: data.email,
    message: data.message,
    service: data.service,
    createdAt: serverTimestamp(),
  });
}

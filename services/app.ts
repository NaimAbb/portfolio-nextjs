import { FormData } from "@/app/components/home-contact-us-section";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { showToast } from "nextjs-toast-notify";

export async function contactUs(data: FormData): Promise<void> {
  await addDoc(collection(db, "contacts"), {
    name: data.name,
    email: data.email,
    message: data.message,
    service: data.service,
    createdAt: serverTimestamp(),
  });
}

export function showSuccessToast(message: string, sound: boolean = true) {
  showToast.success(message, {
    duration: 5000,
    progress: true,
    position: "top-right",
    transition: "bounceIn",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>',
    sound,
  });
}

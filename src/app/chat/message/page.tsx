import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ChatCard from "@/components/Chat/ChatCard";
import ChatMessage from "@/components/ChatMessage/ChatMessage";

export const metadata: Metadata = {
    title: "Next.js Calender Page | NextAdmin - Next.js Dashboard Kit",
    description:
        "This is Next.js Calender page for NextAdmin  Tailwind CSS Admin Dashboard Kit",
    // other metadata
};

const MessagePage = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto max-w-7xl">
                <Breadcrumb pageName="Chat Message" />

                <ChatMessage />
            </div>
        </DefaultLayout>
    );
};

export default MessagePage;

import Link from "next/link";
import Image from "next/image";
import { Chat } from "@/types/chat";

const chatData: Chat[] = [
  {
    active: true,
    avatar: "/images/user/gray-icon.png",
    name: "217515329",
    text: "Given the patient's limited range of motion and persistent pain, I recommend we move forward with ...",
    time: "12 min",
    textCount: 3,
    dot: 3,
  },
  {
    active: true,
    avatar: "/images/user/blue-icon.png",
    name: "747193156",
    text: "For this fracture, I'd recommend conservative management with a cast; surgery seems unnecessary.",
    time: "2:54 PM",
    textCount: 0,
    dot: 1,
  },
  {
    active: null,
    avatar: "/images/user/red-icon.png",
    name: "098161758",
    text: "Their knee osteoarthritis is advancing rapidly; a total knee replacement might be the best option.",
    time: "10:12 AM",
    textCount: 0,
    dot: 3,
  },
  {
    active: true,
    seen: true,
    avatar: "/images/user/green-icon.png",
    name: "147591275",
    text: "The ACL tear looks pretty clean—arthroscopic surgery should give him a solid recovery window.",
    time: "Wed",
    textCount: 2,
    dot: 6,
  },
  {
    active: false,
    avatar: "/images/user/blue-icon.png",
    name: "981987351",
    text: "Or we could try hyaluronic acid injections first to see if it delays surgery for a bit longer.",
    time: "Tue",
    textCount: 0,
    dot: 3,
  },
];

const ChatCard = () => {
  return (
    <div className="col-span-12 rounded-[10px] bg-white py-6 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-4">
      <h4 className="mb-5.5 px-7.5 text-body-2xlg font-bold text-dark dark:text-white">
        Chats
      </h4>

      <div>
        {chatData.map((chat, key) => (
          <Link
            href="/"
            className="flex items-center gap-4.5 px-7.5 py-3 hover:bg-gray-1 dark:hover:bg-dark-2"
            key={key}
          >
            <div className="relative h-14 w-14 rounded-full">
              <Image
                width={56}
                height={56}
                src={chat.avatar}
                alt="User"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
              <span
                className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-dark-2 ${
                  chat.active === true
                    ? "bg-green"
                    : chat.active === false
                      ? `bg-red-light`
                      : "bg-orange-light"
                }`}
              ></span>
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-dark dark:text-white">
                  {chat.name}
                </h5>
                <p>
                  <span
                    className={`mb-px text-body-sm font-medium ${chat.seen ? "dark:text-dark-3" : "text-dark-3 dark:text-dark-6"}`}
                  >
                    {chat.text}
                  </span>
                  <span className="text-xs"> . {chat.time}</span>
                </p>
              </div>
              {chat.textCount !== 0 && (
                <div className="flex items-center justify-center rounded-full bg-primary px-2 py-0.5">
                  <span className="text-sm font-medium text-white">
                    {" "}
                    {chat.textCount}
                  </span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatCard;

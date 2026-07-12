import MessageBubble from "./MessageBubble";


interface Message {
  role:string;
  message:string;
}


interface Props {
  messages: Message[];
}


export default function ChatWindow({
  messages,
}: Props) {


  return (

    <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8">


      <h3 className="mb-8 text-xl font-semibold text-white">
        Career Copilot Chat
      </h3>


      <div className="space-y-5">


        {messages.map((item,index)=>(
          <MessageBubble
            key={index}
            role={item.role}
            message={item.message}
          />
        ))}


      </div>


      <div className="mt-8 rounded-xl border border-cyan-500/20 bg-slate-950 p-4 text-slate-400">

        Ask your AI career mentor anything...

      </div>


    </div>

  );
}
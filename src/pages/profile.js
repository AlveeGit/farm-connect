import "../components/Customization/UserStyle.module.css";
import Input from "src/components/Common/Input";

const inputInfo = [
  {
    id: 1,
    inputType: "input",
    type: "text",
    placeholder: "Name",
  },
  {
    id: 2,
    inputType: "input",
    type: "email",
    placeholder: "Email",
  },
  {
    id: 3,
    inputType: "input",
    type: "phone",
    placeholder: "Phone Number",
  },
];

const profile = () => {
  return (
    <div className="bg-gradient-to-b from-[#100D2A] to-[#24243E] h-screen ">
      outer
      <div className="bg-gradient-to-b from-[#1F1B45] to-[#2B2855] h-3/5 w-3/5 mx-auto mt-32 shadow-xl shadow-indigo-500/40">
        <h1 className="text-4xl text-white font-bold text-center p-5">
          Sign Up
        </h1>
        <div className="">
          {inputInfo.map((info) => (
            <div className=" flex flex-col w-full place-items-center ">
              <Input key={info.id} info={info} />
            </div>
          ))}
        </div>
        <button className="bg-black text-white p-2 rounded-lg ">Submit</button>
        <div className="login">
          <h1 className="text-4xl text-white font-bold text-center p-5">
            Log In
          </h1>
        </div>
        <button>Log in</button>
      </div>
    </div>
  );
};
export default profile;

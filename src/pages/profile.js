import styles from "../components/UserStyle.module.css";
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
      <div className="bg-gradient-to-b from-[#1F1B45] to-[#2B2855] h-3/5 w-4/5 mx-auto mt-32 shadow-xl shadow-indigo-500/40">
        <h1 className="text-4xl text-white font-bold text-center p-5">
          Sign Up
        </h1>

        <div className=" flex flex-col w-full place-items-center ">
          {inputInfo.map((info) => (
            <Input key={info.id} info={info} />
          ))}
        </div>

        <button className="bg-black text-white p-2 rounded-lg ">Submit</button>

        <div id="loginSection" className={styles.loginSec}>
          <p className="text-4xl text-white font-bold text-center p-5">
            Log In
          </p>
        </div>
      </div>
    </div>
  );
};
export default profile;

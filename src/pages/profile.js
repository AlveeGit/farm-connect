// import styles from "../components/UserStyle.module.css";
import styles from "../styles/UserStyle.module.css";
import Input from "src/components/Common/Input";
import { inputInfo } from "src/components/Data/InputField";

const profile = () => {
  return (
    <div className="bg-gradient-to-b from-[#100D2A] to-[#24243E] h-screen flex  items-center">
      <div className="  bg-gradient-to-b from-[#13087b] to-[#000000] h-[450px] w-[400px] mx-auto shadow-xl shadow-indigo-500/40 overflow-hidden border rounded-lg ">
        <input type="checkbox" id={styles.chk} />

        <div className="relative">
          <form>
            <label
              for={styles.chk}
              className="text-3xl text-white font-bold m-10 flex cursor-pointer justify-center"
            >
              Sign Up
            </label>

            <div className=" flex flex-col w-full place-items-center ">
              {inputInfo.slice(0, 3).map((info) => (
                <Input key={info.id} info={info} />
              ))}
            </div>

            <button className="bg-black text-white  rounded-lg ">
              Sign Up
            </button>
          </form>
        </div>

        <div id="loginSection" className={styles.loginSec}>
          <form>
            <label
              for={styles.chk}
              className="text-3xl text-black font-bold  p-5 flex cursor-pointer justify-center"
            >
              Log In
            </label>

            <div className=" flex flex-col w-full place-items-center ">
              {inputInfo.slice(0, 2).map((info) => (
                <Input key={info.id} info={info} />
              ))}
              <button className="bg-black text-white p-2 rounded-lg ">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default profile;

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
  {
    id: 4,
    inputType: "textarea",
    type: "text",
    placeholder: "Message",
  },
];

const contact = () => {
  return (
    <div className="container bg-gray-400 p-32">
      <div className="row">
        <h1 className="text-center text-5xl p-3 font">Contact us</h1>
      </div>
      <div className="row">
        <h4 className="text-center">We'd love to hear from you!</h4>
      </div>

      <div className="pb-5">
        {inputInfo.map((info) => (
          <div className=" flex flex-col w-full place-items-center ">
            <Input key={info.id} info={info} />
          </div>
        ))}
      </div>
      <button className="bg-black text-white p-2 rounded-lg ">Submit</button>
    </div>
  );
};
export default contact;

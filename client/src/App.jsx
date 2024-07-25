import { useForm } from "./hooks/useForm";

function App() {
  const { data, handleChange } = useForm({
    username: "",
    password: "",
  });

  return (
    <div className="bg-neutral-800 w-full h-screen">
      <form action="">
        <label htmlFor="" className="text-white">
          username
        </label>
        <input type="text" name="username" onChange={handleChange} />
        <label htmlFor="" className="text-white">
          password
        </label>
        <input type="text" name="password" onChange={handleChange} />
      </form>
      <button onClick={() => alert(`${data.username}, ${data.password}`)}>
        click me
      </button>
    </div>
  );
}

export default App;

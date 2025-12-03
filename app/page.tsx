import FormChat from "./components/forms/FormChat";
import Header from "./components/Header"
import Default from "./templates/Default";

export default function Home() {
  return (
    <Default>
      <div className="w-6xl h-full">
       <div className="w-md mx-auto">
        <p className="font-bold text-3xl text-center">Hello Guest!</p>
        <p className="font-extralight text-[13px] text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam iusto recusandae laborum animi nihil, sit non nostrum aliquid sequi nemo ex officiis optio alias quis earum dicta quae mollitia labore.</p>
       </div>
       <FormChat/>
      </div>
    </Default>
  );
}
